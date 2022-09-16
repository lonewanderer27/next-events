import Head from "next/head"
import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import Button from "../../components/ui/Button"
import ResultsTitle from "../../components/events/Results-Title"
import ErrorAlert from "../../components/ui/Error-Alert"

export default function FilteredEventsPage(){
    const router = useRouter()
    const slug = router.query.slug
    console.log(slug)

    if (!slug) {
        return (
            <p className="center">Loading...</p>
        )
    }

    // transform Year and Month string to number
    const selectedYear = +slug[0]
    const selectedMonth = +slug[1]

    // check if the transformation was successful,
    // and the data is not just some random strings but indeed numbers
    if (
        isNaN(selectedYear) || 
        isNaN(selectedMonth) || 
        selectedYear > 2030 || 
        selectedYear < 2021 ||
        selectedMonth < 1 ||
        selectedMonth > 12
    ) {
        return <>
            <ErrorAlert>
                <p className="center">Invalid filter. Please adjust your values.</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    // get our filtered events
    const filteredEvents = getFilteredEvents({
        year: selectedYear, 
        month: selectedMonth
    })

    // check if filteredEvents is a valid array
    // or if the length is greater than 0
    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
            <ErrorAlert>
                <p className="center">No events found for chosen filter.</p>
            </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }

    const date = new Date(selectedYear, selectedMonth - 1)
    
    return (
        <div>
            <Head>
                <title>Filtered Events</title>
            </Head>

            <ResultsTitle date={date}/>
            <EventList items={filteredEvents} />
        </div>
    )
}