<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\UserQuizOption;
use Illuminate\Http\Request;

class UserQuizOptionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required',
            'quiz_option_id' => 'required',
        ]);

        // dd($request->all());

        UserQuizOption::create($request->all());
        return redirect()->route('media.home');
    }
}
