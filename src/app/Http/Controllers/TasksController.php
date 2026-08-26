<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasks;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    public function createTask(Request $request)
    {
        $validated = $request->validate([
            'task' => ['required', 'string'],
            'user_id' => ['required', 'integer']
        ]);

        $backendUser = Auth::id();

        if ($validated['user_id'] !== $backendUser) {
            return response()->json([
                'stat' => false,
                'message' => "Unauthorized action"
            ]);
        }

        $task = Tasks::create([
            'task' => $validated['task'],
            'user_id' => $backendUser,
            'isDone' => false
        ]);

        return response()->json([
            'stat' => true,
            'task' => $task->only('task', 'user_id', 'isDone')
        ]);
    }
}
