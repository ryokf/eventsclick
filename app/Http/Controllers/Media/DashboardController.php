<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\CompanyProfile;
use App\Models\Content;
use App\Models\Program;
use App\Models\Quiz;
use App\Models\Story;
use App\Models\User;
use Faker\Provider\ar_EG\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function index(Program $program, Content $content, CompanyProfile $companyProfile, Story $story, Quiz $quiz)
    {
        if (auth()->user() == null) {
            return redirect('/');
        }

        if (auth()->user()->is_admin == 0) {
            return redirect('/media');
        }

        $programs = $program->select('title', 'id')->limit(8)->get();

        $bgCover = [];
        foreach ($programs as $key => $program) {
            $bgCover[$key] = DB::table('contents')
                ->join('categories', 'contents.category_id', '=', 'categories.id')
                ->where('categories.program_id', $program->id)
                ->select('contents.url_video')
                ->orderBy('contents.created_at', 'desc')
                ->first();
        }

        $headers = $content->where('is_header_home', true)->with('comments')->limit(9)->get();

        $companyProfiles = $companyProfile->first();

        $stories = $story->orderBy('created_at', 'desc')->get();

        $quizzes = $quiz->with('options')->orderBy('created_at', 'desc')->get();
        $quizzesWithVoteCounts = [];
        foreach ($quizzes as $quiz) {
            $voteCounts = DB::table('quiz_options')
                ->leftJoin('user_quiz_options', 'quiz_options.id', '=', 'user_quiz_options.quiz_option_id')
                ->where('quiz_options.quiz_id', $quiz->id)
                ->select('quiz_options.id', 'quiz_options.answers', DB::raw('COUNT(user_quiz_options.id) as votes'))
                ->groupBy('quiz_options.id', 'quiz_options.answers')
                ->get();

            $quizzesWithVoteCounts[] = [
                'quiz' => $quiz,
                'voteCounts' => $voteCounts,
            ];
        }
        $quizzes = $quizzesWithVoteCounts;

        $contents = $content->where('is_header_home', false)->orderBy('created_at', 'desc')->get();
        return Inertia::render('Media/Dashboard/index', compact('programs', 'bgCover', 'headers', 'companyProfiles', 'stories', 'quizzes', 'contents'));
    }

    public function program(Request $request, Program $program)
    {
        $programs = $program->with('categories')->find($request->query('id'));

        $headers = $program->where('id', $request->query('id'))->with('contents')->first();

        return Inertia::render('Media/Dashboard/DetailProgram/index', compact('programs', 'headers'));
    }

    public function category(Request $request, Program $program, Category $category)
    {
        $categories = $category->with('contents')->find($request->query('id'));
        $programTitle = $program->find($categories->program_id)->title;

        return Inertia::render('Media/Dashboard/DetailCategory/index', compact('categories', 'programTitle'));
    }

    public function content(Request $request, Program $program, Category $category, Content $content)
    {
        $contents = $content->find($request->query('id'));

        $categoryTitle = $category->find($contents->category_id);

        $programTitle = $program->find($categoryTitle->program_id)->title;

        return Inertia::render('Media/Dashboard/DetailContent/index', compact('contents', 'categoryTitle', 'programTitle'));
    }
}
