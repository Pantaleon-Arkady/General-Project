<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use App\Models\User;

class UserController extends Controller
{
    public function Register(Request $request)
    {
        $validated = $request->validate([
            'username' => [
                'required',
                'string',
                'min:4',
                'max:30',
                'alpha_dash',
                'unique:users,name'
            ],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                'unique:users,email'
            ],
            'password' => [
                'required',
                Password::min(8)
                    ->mixedCase()
                    ->numbers()
                    ->symbols()
            ]
        ]);

        $user = User::create([
            'name' => $validated['username'],
            'email' => $validated['email'],
            'password' => $validated['password']
        ]);

        return response()->json([
            'stat' => true,
            'user' => $user,
            'message' => "Registration Success!"
        ]);
    }
}
