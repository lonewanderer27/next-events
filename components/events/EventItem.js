import Button from "../ui/Button";
import DateIcon from "../icons/Date-Icon";
import AddressIcon from "../icons/Address-Icon";
import ArrowRightIcon from "../icons/Arrow-Right-Icon";
import styles from './EventItem.module.css'

export default function EventItem(props){
    const { title, image, date, location, id } = props;

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    const formattedAddress = location.replace(", ", "\n")
    const exploreLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={"/" + image} alt={title}/>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{readableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    {/* <Link href={exploreLink}>Explore Event</Link>     */}
                    <Button link={exploreLink}>
                        <span>
                            Explore Event
                        </span>
                        <span className={styles.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
    
}