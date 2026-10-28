import { useState } from "react";
import axios from "../api/axios";

function Class() {
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");

    const handleBook = (e) => {
        e.preventDefault();

        console.log("creating book info");
        console.log("Book Title: " + bookName);
        console.log("Book Author: " + bookAuthor);
    }

    return (
        <>
            <div>
                PHP Design Pattern Trials

                <form onSubmit={(e) => handleBook(e)}>
                    <input
                        type="text"
                        placeholder="Book Title..."
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                    /><br />
                    <input
                        type="text"
                        placeholder="Book Author..."
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                    /><br />
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Sumbit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Class;