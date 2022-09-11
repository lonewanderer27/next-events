import { useRouter } from "next/router"
import Head from "next/head"

export default function Event() {
    const router = useRouter()
    const eventId = router.query.eventId
    return (
        <div>
            <Head>
                <title>{eventId} Details</title>
            </Head>

            <h1>{eventId} Event Detail</h1>
        </div>
    )
}