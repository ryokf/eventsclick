<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['program_id', 'title'];

    public function program()
    {
        return $this->belongsTo(Program::class);
    }

    public function contents()
    {
        return $this->hasMany(Content::class);
    }
}
