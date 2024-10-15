<?php

use App\Http\Controllers\Media\CategoryController;
use App\Http\Controllers\Media\CommentController;
use App\Http\Controllers\Media\CompanyProfileController;
use App\Http\Controllers\Media\ContentController;
use App\Http\Controllers\Media\DashboardController;
use App\Http\Controllers\Media\HomeController;
use App\Http\Controllers\Media\LikeContentController;
use App\Http\Controllers\Media\ProgramController;
use App\Http\Controllers\Media\QuizController;
use App\Http\Controllers\Media\StoryController;
use App\Http\Controllers\Media\UserQuizOptionController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;

Route::prefix('/media')->name('media.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/search', [HomeController::class, 'search'])->name('home.search');

    // Route::get('/program', [ProgramController::class, 'index'])->name('program');

    Route::controller(ProgramController::class)->group(function () {
        Route::get('/program', 'index')->name('program');
        Route::post('/program', 'store')->name('program.store');
        Route::put('/program/{id}', 'edit')->name('program.edit');
    });

    Route::controller(CategoryController::class)->group(function () {
        // Route::get('/program/category', 'index')->name('category');
        Route::post('/category', 'store')->name('category.store');
        Route::put('/category/{id}', 'edit')->name('category.edit');
        Route::delete('/category/{id}', 'destroy')->name('category.destroy');
    });

    Route::controller(ContentController::class)->group(function () {
        // Route::get('/program/category/content', 'index')->name('content');
        Route::post('/content', 'store')->name('content.store');
        Route::put('/content/{id}', 'edit')->name('content.edit');
        Route::delete('/content/{id}', 'destroy')->name('content.destroy');
        Route::put('/content/set-header', 'setHeader')->name('content.set-header');
    });

    Route::controller(CommentController::class)->group(function () {
        Route::post('/comment', 'store')->name('comment.store');
    });

    Route::controller(LikeContentController::class)->group(function () {
        Route::post('/like/content', 'store')->name('like.store.content');
        Route::delete('/like/content', 'destroy')->name('like.destroy.content');
    });

    Route::controller(CompanyProfileController::class)->group(function () {
        Route::get('/about-us', 'aboutUs')->name('about-us');
        Route::get('/policy', 'policy')->name('policy');

        Route::put('/policy', 'policyEdit')->name('policy');
        Route::put('/about-us', 'aboutUsEdit')->name('about-us.update');
    });

    Route::controller(StoryController::class)->group(function () {
        Route::get('/story', 'index')->name('story');
        Route::post('/story', 'store')->name('story.store');
        Route::put('/story/{id}', 'edit')->name('story.edit');
        Route::delete('/story/{id}', 'destroy')->name('story.destroy');
    });

    Route::controller(QuizController::class)->group(function () {
        Route::get('/quiz', 'index')->name('quiz');
        Route::post('/quiz', 'store')->name('quiz.store');
        Route::put('/quiz/{id}', 'edit')->name('quiz.edit');
        Route::delete('/quiz/{id}', 'destroy')->name('quiz.destroy');
    });

    Route::controller(UserQuizOptionController::class)->group(function () {

        Route::post('/quiz/option', 'store')->name('quiz.option.store');
    });

    Route::controller(StoryController::class)->group(function () {
        Route::get('/stories', 'index')->name('story.index');
    });

    Route::get('/program/content', [ContentController::class, 'index'])->name('content');

    Route::prefix('/dashboard')->name('dashboard')->group(function () {
        Route::get('', [DashboardController::class, 'index'])->name('');

        Route::get('/program', [DashboardController::class, 'program'])->name('.program');

        Route::get('/program/category', [DashboardController::class, 'category'])->name('.category');

        Route::get('/program/category/content', [DashboardController::class, 'content'])->name('.content');
    })->middleware('auth');

    // Route::get('/about-us', [CompanyProfileController::class, 'aboutUs'])->name('about-us');
    // Route::get('/policy', [CompanyProfileController::class, 'policy'])->name('about-us');

});
