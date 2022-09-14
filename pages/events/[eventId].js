import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data"
import Head from "next/head"
import EventSummary from "../../components/event-detail/Event-Summary"
import EventLogistics from "../../components/event-detail/Event-Logistics"
import EventContent from "../../components/event-detail/Event-Content"

export default function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId
    console.log(`eventId: ${eventId}`)

    const event = getEventById(eventId)
    if (!event) {
        return <p>No Event Found!</p>
    } else {
        console.log(event)
        return (
            <div>
                <Head>
                    <title>{eventId} Details</title>
                </Head>

                {/* <h1>{eventId} Event Detail</h1> */}
                <EventSummary title={event.title}/>
                <EventLogistics 
                    date={event.date}
                    address={event.location}
                    image={event.image}
                    imageAlt={event.title}
                />
                <EventContent>
                    <p>{event.description}</p>
                </EventContent>
            </div>
        )
    }

    
}