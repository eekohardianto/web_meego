<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

use App\Http\Controllers\DashboardController;

use App\Http\Controllers\LoginController;

use App\Http\Controllers\RegisterController;



Route::get('/', HomeController::class);

Route::get('/dashboard', DashboardController::class)->middleware('auth');

Route::get('/login', [LoginController::class, 'create'])->name('login');

Route::post('/login', [LoginController::class, 'store']);

Route::post('/logout', [LoginController::class, 'destroy']);

Route::get('/register', [RegisterController::class, 'create']);

Route::post('/register', [RegisterController::class, 'store']);