<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

use App\Http\Controllers\DashboardController;

use App\Http\Controllers\LoginController;

use App\Http\Controllers\RegisterController;



Route::get('/', HomeController::class);

Route::get('/dashboard', DashboardController::class);

Route::get('/login', [LoginController::class, 'create']);

Route::post('/login', [LoginController::class, 'store']);

Route::get('/register', [RegisterController::class, 'create']);

Route::post('/register', [RegisterController::class, 'store']);