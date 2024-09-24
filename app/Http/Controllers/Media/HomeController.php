<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\Program;
use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Content $content, Program $program, Story $story)
    {
        $headers = $content->where('is_header', true)->get();
        $programs = $program->select('title')->get();
        $stories = $story->orderBy('created_at', 'desc')->take(8)->get();

        return Inertia::render('Media/Home', compact('headers', 'programs', 'stories'));
    }
}
