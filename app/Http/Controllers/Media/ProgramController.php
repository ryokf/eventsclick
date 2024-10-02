<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Content;
use App\Models\Program;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProgramController extends Controller
{
    public function index(Request $request, Program $program, Category $category, Content $content)
    {
        $programDetail = $program->find($request->query('id'));

        $categories = $category->where('program_id', $programDetail->id)->get();
        $headers = $categories->map(function ($category) use ($content) {
            return $content->with('comments')->where('is_header_program', true)->where('category_id', $category->id)->limit(2)->get();
        });
        $headers = collect($headers)->flatten();

        $categories = $category->with('contents')->where('program_id', $request->query('id'))->get();

        $latest = $categories->map(function ($category) use ($content) {
            return $content->where('category_id', $category->id)->orderByDesc('created_at')->get();
        });
        $latest = collect($latest)->flatten()->sortByDesc('created_at');

        return Inertia::render('Media/Program/index', compact('programDetail', 'categories', 'headers', 'latest'));
    }

    public function store(Request $request, Program $program){
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'visibility' => 'required',
        ]);

        $program->create([
            'title' => $request->title,
            'description' => $request->description,
            'visibility' => $request->visibility
        ]);

        return redirect('/media/dashboard');
    }
}
