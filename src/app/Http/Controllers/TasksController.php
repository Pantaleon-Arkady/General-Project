<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasks;
use Illuminate\Support\Facades\Auth;

class TasksController extends Controller
{
    public function updateTask(Request $request)
    {
        $validated = $request->validate([
            'task_id' => ['required', 'integer'],
            'task' => ['required', 'string'],
            'status' => ['required', 'bool']
        ]);

        $task = Tasks::findOrFail($validated['task_id']);

        $user = Auth::id();

        if ($task->user_id !== $user) {
            return response()->json([
                'stat' => false,
                'message' => "Unauthorized action"
            ]);
        }

        $task->update([
            'task' => $validated['task'],
            'isDone' => $validated['status']
        ]);

        return response()->json([
            'stat' => true,
            'task' => $task->only('task', 'isDone', 'user_id'),
            'message' => "Update success"
        ]);
    }

    public function deleteTask(Request $request)
    {
        $validated = $request->validate([
            'task_id' => ['required', 'integer'],
            'user_id' => ['required', 'integer']
        ]);

        $frontendUser = (int) $validated['user_id'];
        $backendUser = Auth::id();

        if ($frontendUser !== $backendUser) {
            return response()->json([
                'stat' => false,
                'message' => "Unauthorized action",
                'front' => $validated['user_id'],
                'back' => $backendUser
            ]);
        }

        $task = Tasks::findOrFail($validated['task_id']);

        $task->delete();

        return response()->json([
            'stat' => true,
            'message' => 'Task deleted successfully'
        ]);
    }

    public function retrieveTasks(Request $request)
    {
        $validated = $request->validate([
            'user_id' => ['required', 'integer']
        ]);

        $frontendUser = (int) $validated['user_id'];
        $backendUser = Auth::id();

        if ($frontendUser !== $backendUser) {
            return response()->json([
                'stat' => false,
                'message' => "Unauthorized action",
                'front' => $validated['user_id'],
                'back' => $backendUser
            ]);
        }

        $tasks = Tasks::where('user_id', $validated['user_id'])->get();

        return response()->json([
            'stat' => true,
            'tasks' => $tasks
        ]);
    }

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
                'message' => "Unauthorized action",
                'front' => $validated['user_id'],
                'back' => $backendUser
            ]);
        }

        $task = Tasks::create([
            'task' => $validated['task'],
            'user_id' => $backendUser,
            'isDone' => false
        ]);

        return response()->json([
            'stat' => true,
            'task' => $task->only('task', 'user_id', 'isDone'),
            'front' => $validated['user_id'],
            'back' => $backendUser
        ]);
    }
}
