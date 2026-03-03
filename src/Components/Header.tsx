import styles from './Header.module.css'
import rocketicon from '../assets/rocket.png'

export function Header() {
    return (
        <header className={styles.headerSection}>
            <img className={styles.icon} src={rocketicon} alt="" />
            <h1>todo</h1>
        </header>
    )
}