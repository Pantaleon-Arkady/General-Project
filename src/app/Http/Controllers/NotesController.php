<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notes;

class NotesController extends Controller
{
    public function createNote(Request $request)
    {
        $validated = $request->validate([
            'note' => ['required', 'string']
        ]);

        $user = $request->user();

        $note = Notes::create([
            'note' => $validated['note'],
            'user_id' => $user['id']
        ]);

        return response()->json([
            'stat' => true,
            'note' => $note->only('note', 'user_id')
        ]);
    }
}
