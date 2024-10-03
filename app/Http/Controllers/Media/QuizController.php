<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'question' => 'required|string|max:50',
            'image' => 'nullable|string',
            'options' => 'required|array',
            'options.*.answers' => 'required|string|max:50',
            'options.*.is_true' => 'required|boolean',
        ]);

        // Memasukkan kuis ke dalam tabel 'quizes'
        $quizId = DB::table('quizes')->insertGetId([
            'question' => $validated['question'],
            'image' => $validated['image'],
        ]);

        // Memasukkan opsi-opsi kuis ke dalam tabel 'quiz_options'
        foreach ($validated['options'] as $option) {
            DB::table('quiz_options')->insert([
                'quiz_id' => $quizId,
                'answers' => $option['answers'],
                'is_true' => $option['is_true'],
            ]);
        }

        return response()->json(['message' => 'Kuis berhasil dibuat'], 201);
    }
}
