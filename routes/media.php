<?php

use App\Http\Controllers\Media\CompanyProfileController;
use App\Http\Controllers\Media\ContentController;
use App\Http\Controllers\Media\DashboardController;
use App\Http\Controllers\Media\HomeController;
use App\Http\Controllers\Media\ProgramController;
use Illuminate\Support\Facades\Route;

Route::prefix('/media')->name('media.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    // Route::get('/program', [ProgramController::class, 'index'])->name('program');

    Route::controller(ProgramController::class)->group(function () {
        Route::get('/program', 'index')->name('program');
        Route::post('/program', 'store')->name('program.store');
    });

    Route::get('/program/content', [ContentController::class, 'index'])->name('content');

    Route::prefix('/dashboard')->name('dashboard')->group(function () {
        Route::get('', [DashboardController::class, 'index'])->name('');

        Route::get('/program', [DashboardController::class, 'program'])->name('.program');

        Route::get('/program/category', [DashboardController::class, 'category'])->name('.category');

        Route::get('/program/category/content', [DashboardController::class, 'content'])->name('.content');
    })->middleware('auth');

    Route::get('/about-us', [CompanyProfileController::class, 'AboutUs'])->name('about-us');
});
