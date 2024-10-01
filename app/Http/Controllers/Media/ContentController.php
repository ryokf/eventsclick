<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Content;
use App\Models\Program;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index(Request $request, Content $content, User $user, Program $program)
    {
        $contents = $content->with('comments')->with('category')->find($request->query('id'));

        $userComments = [];
        foreach ($contents->comments as $id => $value) {
            $userComments[$id] = $user->find($value->user_id);
        }

        return Inertia::render('Media/Content/index', compact('contents', 'userComments'));
    }
}
