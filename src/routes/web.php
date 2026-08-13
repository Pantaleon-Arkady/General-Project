<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrialsController;
use App\Http\Controllers\UserController;

Route::post('/register', [UserController::class, 'register']);
Route::get('/handshake', [TrialsController::class, 'handShake']);

Route::get('/', function () {
    return view('welcome');
});
