<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;

use App\Http\Controllers\LoginController;

use App\Http\Controllers\DashboardController;


Route::get('/', HomeController::class);

Route::get('/dashboard', DashboardController::class);

Route::get('/login', [LoginController::class, 'create']);

Route::get('/login', [LoginController::class, 'store']);