<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\CompanyProfile;
use App\Models\User;
use App\Models\UserOptionQuiz;
use App\Models\UserQuizOption;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@admin.admin',
            'email_verified_at' => now(),
            'is_admin' => true,
            'password' => Hash::make('admin123'), // password
        ]);

        User::create([
            'name' => 'Ryokf',
            'email' => 'ryo@gmail.com',
            'email_verified_at' => now(),
            'is_admin' => false,
            'password' => Hash::make('admin123'), // password
        ]);

        CompanyProfile::create([
            'about_us' => "",
            'policy' => "",
        ]);

        \App\Models\User::factory(10)->create();
        \App\Models\Program::factory(5)->create();
        \App\Models\Category::factory(50)->create();
        \App\Models\Content::factory(200)->create();
        \App\Models\Comment::factory(50)->create();
        \App\Models\Quiz::factory(40)->create();
        \App\Models\QuizOption::factory(120)->create();
        \App\Models\Story::factory(20)->create();
        UserQuizOption::factory(100)->create();
    }
}
