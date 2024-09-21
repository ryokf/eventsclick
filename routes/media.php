<?php

use App\Http\Controllers\Media\HomeController;
use App\Http\Controllers\Media\ProgramController;
use Illuminate\Support\Facades\Route;

Route::prefix('/media')->name('media.')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::get('/program', [ProgramController::class, 'index'])->name('program');
});
