import { useState } from "react";
import axios from "../api/axios";

function Class() {
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [book, setBook] = useState();

    const handleBook = async(e) => {
        e.preventDefault();

        const bookData = {
            book_name: bookName,
            book_author: bookAuthor
        }

        try {
            const res = await axios.post('/create-book', bookData);

            if (res.data.stat) {
                setBook(JSON.stringify(res.data.book));
            }
        } catch (err) {
            console.log(err.response);
        }
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
                <div>
                    Book: {book ? book : "No book yet"}
                </div>
            </div>
        </>
    )
}

export default Class;