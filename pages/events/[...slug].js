import Head from "next/head"
import { useRouter } from "next/router"

export default function FilteredEventsPage(){
    const router = useRouter()
    const slug = router.query
    console.log(slug)
    return (
        <div>
            <Head>
                <title>Filtered Events</title>
            </Head>

            <h1>Filtered Events</h1>
        </div>
    )
}