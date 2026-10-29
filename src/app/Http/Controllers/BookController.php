<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BookFactory;

class BookController extends Controller
{
    public function createBook(Request $request)
    {
        $validated = $request->validate([
            'book_name' => ['string', 'required'],
            'book_author' => ['string', 'required']
        ]);

        $book = BookFactory::create(
            $validated['book_name'],
            $validated['book_author']
        );

        $data = $book->getBookInfo();

        return response()->json([
            'stat' => true,
            'book' => $data
        ]);
    }
}
