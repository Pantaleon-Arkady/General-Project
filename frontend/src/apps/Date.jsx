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
            <div
                className="app_page bg-secondary"
            >
                <div
                    className="app_header"
                >
                    Header
                </div>
                <div className="date_app_content">
                    <div
                        className="date_separation_wrapper"
                    >
                        <div className="date_date_div">
                            <div>Date App Component</div>
                            <div>
                                basic new current date: {String(date)} - date only: {dateOnly}<br />
                                month index: {dateMonth} - month name: {dateMonthName}<br />
                                date day name: {dateDay} - index: {dateDayIndex}
                            </div>
                        </div>
                    </div>
                    <div
                        className="date_separation_wrapper"
                    >
                        <div className="date_temporal_div">
                            <div>Temporal</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DateComponent;