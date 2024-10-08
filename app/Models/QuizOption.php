<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizOption extends Model
{
    use HasFactory;

    protected $fillable = ['quiz_id', 'answers', 'is_true'];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class, 'quiz_id');
    }
}
