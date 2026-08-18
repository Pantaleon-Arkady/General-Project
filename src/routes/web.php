<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TrialsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NotesController;

// NOTES

Route::post('/delete-note', [NotesController::class, 'deleteNote']);
Route::get('/retrieve-notes', [NotesController::class, 'retrieveNotes']);
Route::post('/create-note', [NotesController::class, 'createNote']);

// USER

Route::post('/logout', [UserController::class, 'Logout']);
Route::post('/login', [UserController::class, 'Login']);
Route::post('/register', [UserController::class, 'Register']);
Route::get('/handshake', [TrialsController::class, 'handShake']);

Route::get('/', function () {
    return view('welcome');
});
