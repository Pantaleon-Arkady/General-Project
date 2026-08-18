<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Notes;
use Illuminate\Support\Facades\Auth;

class NotesController extends Controller
{
    public function retrieveNotes(Request $request)
    {
        $validated = $request->validate([
            'userId' => ['required', 'integer']
        ]);

        $frontUser = intval($validated['userId']);

        $userId = Auth::id();

        if ($frontUser !== $userId) {
            return response()->json([
                'stat' => false,
                'message' => "User request is not properly authenticated"
            ], 403);
        }

        $notes = Notes::where('user_id', $frontUser)->get();

        return response()->json([
            'stat' => true,
            // 'front' => $frontUser,
            // 'back' => $userId
            'notes' => $notes,
            'message' => "Notes retrieval: OK!"
        ], 200);
    }

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
