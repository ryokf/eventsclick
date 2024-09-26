<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\Program;
use App\Models\Quiz;
use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Content $content, Program $program, Story $story, Quiz $quiz)
    {
        $headers = $content->where('is_header', true)->with('comments')->limit(9)->get();
        $programs = $program->with('contents')->orderBy('created_at', 'desc')->where('visibility', 'visible')->get();
        $stories = $story->orderBy('created_at', 'desc')->take(8)->get();
        $quizzes = $quiz->with('options')->orderBy('created_at', 'desc')->take(8)->get();

        Inertia::share(
            'program',
            $program->select('title', 'visibility', 'id')->where('visibility', 'visible')->orWhere('visibility', 'archive')->get()
        );

        return Inertia::render('Media/Home', compact('headers', 'programs', 'stories', 'quizzes'));
    }
}
