<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\LikeContent;
use Illuminate\Http\Request;

class LikeContentController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'content_id' => 'required|exists:contents,id',
        ]);

        LikeContent::create([
            'content_id' => $request->content_id,
            'user_id' => auth()->user()->id
        ]);

        return redirect()->back();
    }

    public function destroy(Request $request)
    {
        $request->validate([
            'content_id' => 'required|exists:contents,id',
        ]);

        LikeContent::where('content_id', $request->content_id)->where('user_id', auth()->user()->id)->delete();

        return redirect()->back();
    }
}
