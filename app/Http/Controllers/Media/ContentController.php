<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\LikeContent;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index(Request $request, Content $content, User $user, Program $program, LikeContent $likeContent)
    {
        $contents = $content->with('comments')->with('category')->find($request->query('id'));

        $userComments = [];
        foreach ($contents->comments as $id => $value) {
            $userComments[$id] = $user->find($value->user_id);
        }

        $likeCount = $likeContent->where('content_id', $contents->id)->count() ?? 0;

        $isLiked = $likeContent->where('user_id', auth()->user()->id)->where('content_id', $contents->id)->exists();

        return Inertia::render('Media/Content/index', compact('contents', 'userComments', 'likeCount', 'isLiked'));
    }

    public function store(Request $request, Content $content)
    {
        // dd($request->all()); 

        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'content' => 'required',
            'is_header_program' => 'required',
            'is_header_home' => 'required',
            'url_video' => 'required',
        ]);

        $content->create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'content' => $request->content,
            'is_header_program' => $request->is_header_program,
            'is_header_home' => $request->is_header_home,
            'url_video' => $request->url_video,
            'tags' => $request->tags
        ]);

        return redirect('/media/dashboard/program/category?id=' . $request->category_id);
    }

    public function edit(Request $request, $id)
    {
        // dd($request->all());

        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'content' => 'required',
            'is_header_program' => 'required',
            'is_header_home' => 'required',
            'url_video' => 'required',
        ]);

        $content = Content::find($id);
        $content->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'content' => $request->content,
            'is_header_program' => $request->is_header_program,
            'is_header_home' => $request->is_header_home,
            'url_video' => $request->url_video,
            'tags' => $request->tags
        ]); 

        return redirect('/media/dashboard/program/category?id=' . $request->category_id);
    }
}
