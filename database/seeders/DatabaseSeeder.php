<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Program::factory(5)->create();
        \App\Models\Category::factory(50)->create();
        \App\Models\Content::factory(200)->create();
        \App\Models\Comment::factory(50)->create();
        \App\Models\Quiz::factory(40)->create();
        \App\Models\QuizOption::factory(120)->create();
        \App\Models\Story::factory(20)->create();
    }
}
