<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TrialsController extends Controller
{
    public function handShake()
    {
        return response()->json([
            'stat' => true,
            'message' => "Backend reached - general handshake between React and Laravel"
        ]);
    }
}
