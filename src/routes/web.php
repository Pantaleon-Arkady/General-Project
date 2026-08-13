<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrialsController;
use App\Http\Controllers\UserController;

Route::post('/logout', [UserController::class, 'Logout']);
Route::post('/login', [UserController::class, 'Login']);
Route::post('/register', [UserController::class, 'Register']);
Route::get('/handshake', [TrialsController::class, 'handShake']);

Route::get('/', function () {
    return view('welcome');
});
