import Link from "next/link"

import styles from './Button.module.css'

export default function Button(props){

    return (
        <>
            {/* If props.link exists, then we render an anchor tag */}
            {props.link ? 
                <Link href={props.link}>
                    <a className={styles.btn}>
                        {props.children}    
                        {/* Takes all components wrapped inside of this Button element. */}
                    </a>
                </Link>
            :
                <button className={styles.btn} onClick={props.onClick}>
                    {props.children}
                </button>
            }
        </>
    )
    
}