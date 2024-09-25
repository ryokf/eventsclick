<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'cover', 'description', 'visibility'];

    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    public function contents()
    {
        return $this->hasManyThrough(Content::class, Category::class);
    }
}
