import { getAllEvents } from "../../dummy-data"
import styles from "./Events-Search.module.css"
import Button from "../ui/Button"
import { useRef } from "react";

export default function EventsSearch(props) {
    function toMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('en-US', {
            month: 'long',
        });
    }

    let years = [];
    let months = [];
    let monthsLong = [];

    const events = getAllEvents()
    events.map(event => {
        const eventDate = new Date(event.date)
        years.push(`${eventDate.getFullYear()}`)
        months.push(`${eventDate.getMonth() + 1}`)
        monthsLong.push(`${eventDate.toLocaleString('default', { month: 'long' })}`)
        // days.push(`${eventDate.getDay()}`)
    })

    // Remove duplicates
    years = [...new Set(years)]
    months = [...new Set(months)]
    monthsLong = [...new Set(monthsLong)]

    // Generate Option elements from Year list
    const yearOptions = years.map(year => {
        return <option key={year} value={`${year}`}>{`${year}`}</option>
    })

    // Generate Option elements from Month list
    const monthOptions = months.map(month => {
        return (
            <option key={month} value={`${month}`}>
                {toMonthName(month)}
            </option>
        )
    })

    const yearInputRef = useRef()
    const monthInputRef = useRef()

    function submitHandler(event) {
        event.preventDefault()
        const selectedYear = yearInputRef.current.value
        const selectedMonth = monthInputRef.current.value

        props.onSearch(selectedYear, selectedMonth)
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="year">Year</label>
                    <select id="year" ref={yearInputRef}>
                        {yearOptions}
                    </select>
                </div>
                <div className={styles.control}>
                    <label htmlFor="month">Month</label>
                    <select id="month" ref={monthInputRef}>
                        {monthOptions}
                    </select>
                </div>
            </div>
            <Button onClick={submitHandler}>Find Events</Button>
        </form>
    )
}