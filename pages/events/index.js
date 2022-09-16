import Head from "next/head"
import { getAllEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/Events-Search";
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";

export default function Events() {
    const events = getAllEvents()
    const router = useRouter()

    function findEventsHandler(year, month) {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>All Events</title>
            </Head>

            <div>
                <EventsSearch onSearch={findEventsHandler} />
                <EventList items={events} />
            </div>
        </div>
    )
}