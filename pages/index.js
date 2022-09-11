import Head from 'next/head'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()
  console.log(featuredEvents)

  return (
    <div className={styles.container}>
      <Head>
        <title>Featured Events</title>
      </Head>

      <div>
        <EventList items={featuredEvents} />
      </div>
    </div>
  )
}
