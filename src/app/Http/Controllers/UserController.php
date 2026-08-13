<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function Login(Request $request)
    {
        $validated = $request->validate([
            'namemail' => [
                'required',
                'string'
            ],
            'password' => [
                'required',
                'string'
            ]
        ]);

        $loginInput = $validated['namemail'];

        $user = filter_var($loginInput, FILTER_VALIDATE_EMAIL)
            ? User::where('email', $loginInput)->first()
            : User::where('name', $loginInput)->first();

        if (!$user) {
            return response()->json([
                'stat' => false
            ], 401);
        }

        return response()->json([
            'stat' => true,
            'message' => "Login Success",
            'user' => $loginInput
        ]);
    }

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
