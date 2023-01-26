import styles from './Button.module.css'

export default function ButtonPrimary ({says}) {
    return (
        <button className={styles.button}>{says}</button>
    )
}