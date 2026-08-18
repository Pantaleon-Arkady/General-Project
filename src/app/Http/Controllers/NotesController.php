<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notes;

class NotesController extends Controller
{
    public function createNote(Request $request)
    {
        $validated = $request->validate([
            'note' => ['required', 'string'],
            'userId' => ['required', 'integer']
        ]);

        $note = Notes::create([
            'note' => $validated['note'],
            'user_id' => $validated['userId']
        ]);

        return response()->json([
            'stat' => true,
            'note' => $note->only('note', 'user_id')
        ]);
    }
}
