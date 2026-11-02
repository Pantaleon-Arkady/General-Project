<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterEventRequest;
use App\Http\Requests\LoginEventRequest;

class UserController extends Controller
{
    public function Logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'stat' => true,
            'message' => "Log out success!"
        ]);
    }

    public function Login(LoginEventRequest $request)
    {
        $validated = $request->validated();

        $loginInput = $validated['namemail'];

        $user = filter_var($loginInput, FILTER_VALIDATE_EMAIL)
            ? User::where('email', $loginInput)->first()
            : User::where('name', $loginInput)->first();

        if (!$user) {
            return response()->json([
                'stat' => false,
                "message" => "Email / username cannot be found."
            ], 401);
        }

        if (!Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'stat' => false,
                'message' => "Password does not match."
            ], 401);
        }

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'stat' => true,
            'message' => "Login Success!",
            'user' => $user->only('id', 'name', 'email')
        ]);
    }

    public function Register(RegisterEventRequest $request)
    {
        $validated = $request->validated();

        $user = User::create([
            'name' => $validated['username'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password'])
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'stat' => true,
            'user' => $user->only('id', 'name', 'email'),
            'message' => "Registration Success!"
        ]);
    }
}
