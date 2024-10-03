<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StoryController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'url_video' => 'required',
        ]);

        \App\Models\Story::create([
            'title' => $request->title,
            'url_video' => $request->url_video,
        ]);

        return redirect('/media/dashboard');
    }
}
