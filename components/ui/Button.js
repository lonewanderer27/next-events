import Link from "next/link"

import styles from './Button.module.css'

export default function Button(props){
    return (
        <Link href={props.link}>
            <a className={styles.btn}>
                {props.children}    
                {/* Takes all components wrapped inside of this Button element. */}
            </a>
        </Link>
    )
    
}