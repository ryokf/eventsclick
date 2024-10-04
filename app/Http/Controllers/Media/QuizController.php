<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\QuizOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());
        // Validasi input

        // Validate the incoming request
        $validatedData = $request->validate([
            'question' => 'required',
            'answers' => 'required', // At least 4 answers // Each answer is required
        ]);

        // Create the quiz question
        $quiz = Quiz::create([
            'question' => $validatedData['question'],
        ]);

        // Loop through the answers and store them
        foreach ($validatedData['answers'] as $answer) {
            QuizOption::create([
                'quiz_id' => $quiz->id,
                'is_true' => false,
                'answers' => $answer,
            ]);
        }

        return response()->json(['message' => 'Kuis berhasil dibuat'], 201);
    }
}
