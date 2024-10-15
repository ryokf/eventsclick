<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Story;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StoryController extends Controller
{
    public function index(Story $story)
    {
        $stories = Story::all();

        return Inertia::render('Media/Story/index', compact('stories'));
    }


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


    public function edit(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'url_video' => 'required',
        ]);

        $story = Story::find($id);
        $story->update([
            'title' => $request->title,
            'url_video' => $request->url_video,
        ]);

        return redirect('/media/dashboard');
    }


    public function destroy($id, Story $story)
    {
        $story = $story->find($id);
        $story->delete();
        return redirect('/media/dashboard');
    }
}
