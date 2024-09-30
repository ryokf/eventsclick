<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Content;
use App\Models\Program;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Program $program, Content $content)
    {
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

        return Inertia::render('Media/Dashboard/index', compact('programs', 'bgCover', 'headers'));
    }

    public function program(Request $request, Program $program)
    {
        $programs = $program->with('categories')->find($request->query('id'));

        return Inertia::render('Media/Dashboard/DetailProgram/index', compact('programs'));
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
        // dd($contents);

        $categoryTitle = $category->find($contents->category_id);
        // dd($categoryTitle);

        $programTitle = $program->find($categoryTitle->program_id)->title;

        return Inertia::render('Media/Dashboard/DetailContent/index', compact('contents', 'categoryTitle', 'programTitle'));
    }
}
