import { useState } from "react";

function DateComponent() {
    const [component, setComponent] = useState("date");

    const date = new Date(); 

    const dateMonth = date.getMonth();

    const dateMonthName = date.toLocaleString('default', { month: 'long' });

    const dateDay = date.toLocaleDateString('en-US', { weekday: 'long' });

    const dateOnly = date.toLocaleDateString();

    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dateDayIndex = daysOfTheWeek.indexOf(dateDay);

    const handleComponent = () => {
        if (component === "date") {
            setComponent("temporal")
        } else {
            setComponent("date");
        }
    }

    return (
        <>
            <div
                className="app_page bg-secondary"
            >
                <div
                    className="app_header"
                >
                    <button
                        className="btn btn-primary"
                        onClick={() => handleComponent()}
                    >
                        Switch: {component}
                    </button>
                </div>
                <div className="date_app_content">
                    <div
                        className={`date_separation_wrapper ${component === "temporal" ? "component_none" : ""}`}
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
                        className={`date_separation_wrapper ${component === "date" ? "component_none" : ""}`}
                    >
                        <div className="date_temporal_div">
                            <div>Temporal The quick brown fox jumped over the lazy dog. Lorem ipsum dolor.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DateComponent;