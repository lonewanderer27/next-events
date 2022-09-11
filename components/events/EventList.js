import EventItem from "./EventItem"
import styles from './EventList.module.css'

export default function EventList(props){
    const { items } = props;

    return (
        <div>
            <ul className={styles.list}>
                {
                    items.map(event => 
                        <EventItem
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            image={event.image}
                            date={event.date}
                            location={event.location}
                        />)
                }
            </ul>
        </div>
    )
}