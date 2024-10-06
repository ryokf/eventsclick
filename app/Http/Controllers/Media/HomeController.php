<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\Program;
use App\Models\Quiz;
use App\Models\Story;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Content $content, Program $program, Story $story, Quiz $quiz)
    {
        $headers = $content->where('is_header_home', true)->with('comments')->limit(9)->get();
        $programs = $program->with('contents')->orderBy('created_at', 'desc')->where('visibility', 'visible')->get();
        $stories = $story->orderBy('created_at', 'desc')->take(8)->get();
        $quizzes = $quiz->with('options')->orderBy('created_at', 'desc')->take(8)->get();

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

        return Inertia::render('Media/Home', compact('headers', 'programs', 'stories', 'quizzes', 'quizzesWithVoteCounts'));
    }

    
    public function search(Request $request, Content $content, Program $program, Story $story, Quiz $quiz)
    {
        $search = $request->query('search');
        $programs = $program->with('contents')->orderBy('created_at', 'desc')->where('visibility', 'visible')->where('title', 'LIKE', "%$search%")->get();
        $stories = $story->orderBy('created_at', 'desc')->where('title', 'LIKE', "%$search%")->get();
        $quizzes = $quiz->with('options')->orderBy('created_at', 'desc')->where('question', 'LIKE', "%$search%")->get();
        $contents = $content->where('title', 'LIKE', "%$search%")->get();

        return Inertia::render('Media/Search', compact('programs', 'stories', 'quizzes', 'contents'));
    }
}
