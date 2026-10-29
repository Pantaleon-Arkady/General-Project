<?php

namespace App;

class Book {

    private $bookName;
    private $bookAuthor;

    public function __construct($name, $author) {
        $this->bookName = $name;
        $this->bookAuthor = $author;
    }

    public function getBookInfo() {
        return $this->bookName . ' - ' . $this->bookAuthor;
    }
}

class BookFactory {
    public static function create($name, $author) {
        return new Book($name, $author);
    }
}
