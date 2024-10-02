<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'comment' => 'required',
            'user_id' => 'required',
            'content_id' => 'required',
        ]);

        $comment = Content::find($request->content_id);
        $comment->comments()->create([
            'comment' => $request->comment,
            'user_id' => $request->user_id
        ]);

        return redirect('/media/program/content?id=' . $request->content_id);
    }
}
