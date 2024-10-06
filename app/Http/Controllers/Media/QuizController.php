<?php

namespace App\Http\Controllers\Media;

use App\Http\Controllers\Controller;
use App\Models\Quiz;
use App\Models\QuizOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class QuizController extends Controller
{
    public function index(Quiz $quiz)
    {
        $quizzes = $quiz->with('options')->orderBy('created_at', 'desc')->take(8)->get();
        $quizzesWithVoteCounts = [];
        foreach ($quizzes as $quiz) {
            $voteCounts = DB::table('quiz_options')
                ->leftJoin('user_quiz_options', 'quiz_options.id', '=', 'user_quiz_options.quiz_option_id')
                ->where('quiz_options.quiz_id', $quiz->id)
                ->select('quiz_options.id', 'quiz_options.answers', DB::raw('COUNT(user_quiz_options.id) as votes'))
                ->groupBy('quiz_options.id', 'quiz_options.answers')
                ->get();

            $quizzesWithVoteCounts[] = [
                'quiz' => $quiz,
                'voteCounts' => $voteCounts,
            ];
        }

        $quizzes = $quizzesWithVoteCounts;
        return Inertia::render('Media/Quiz/index', compact('quizzes'));
    }

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

        return redirect()->back();
    }
}
