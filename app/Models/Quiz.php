<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = ['question', 'image'];

    public function options()
    {
        return $this->hasMany(QuizOption::class, 'quiz_id');
    }
}
