function DateComponent() {

    const date = new Date(); 

    const dateMonth = date.getMonth();

    const dateMonthName = date.toLocaleString('default', { month: 'long' });

    const dateDay = date.toLocaleDateString('en-US', { weekday: 'long' });

    const dateOnly = date.toLocaleDateString();

    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dateDayIndex = daysOfTheWeek.indexOf(dateDay);

    return (
        <>
            <div>
                Date App Component
                <div>
                    basic new current date: {String(date)} - date only: {dateOnly}<br />
                    month index: {dateMonth} - month name: {dateMonthName}<br />
                    date day name: {dateDay} - index: {dateDayIndex}
                </div>
            </div>
        </>
    )
}

export default DateComponent;