function DateComponent() {

    const date = new Date(); 

    return (
        <>
            <div>
                Date App Component
                <div>
                    basic new date: {String(date)}
                </div>
            </div>
        </>
    )
}

export default DateComponent;