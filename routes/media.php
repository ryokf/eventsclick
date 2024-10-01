<?php

use App\Http\Controllers\Media\CompanyProfileController;
use App\Http\Controllers\Media\ContentController;
use App\Http\Controllers\Media\DashboardController;
use App\Http\Controllers\Media\HomeController;
use App\Http\Controllers\Media\ProgramController;
use Illuminate\Support\Facades\Route;

Route::prefix('/media')->name('media.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::get('/program', [ProgramController::class, 'index'])->name('program');

    Route::get('/program/content', [ContentController::class, 'index'])->name('content');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/dashboard/program', [DashboardController::class, 'program'])->name('dashboard.program');

    Route::get('/dashboard/program/category', [DashboardController::class, 'category'])->name('dashboard.category');

    Route::get('/dashboard/program/category/content', [DashboardController::class, 'content'])->name('dashboard.content');

    Route::get('/about-us', [CompanyProfileController::class, 'AboutUs'])->name('about-us');
});
