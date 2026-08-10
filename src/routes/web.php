<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrialsController;

Route::get('/handshake', [TrialsController::class, 'handShake']);

Route::get('/', function () {
    return view('welcome');
});
