function NotesList({ notes }) {

    return (
        <>
            {notes.map((note, i) => (
                <div
                    key={i}
                    className="bg-white rounded mb-2 py-1 px-2"
                >
                    {note.note}
                </div>
            ))}
        </>
    )
}

export default NotesList;