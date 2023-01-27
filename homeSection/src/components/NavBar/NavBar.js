import NavItem from '../NavItem/NavItem'
import styles from './NavBar.module.css'

const NavBar = () => {

    const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
    const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', '/icon-reminders.svg', '/icon-planning.svg']

    const companyItems = ['History', 'Our Team', 'Blog']

    return (
        <a className={styles.a}>
            <NavItem name='Features' dropdown={true} arrayItems={featuresItems} arrayIcons={featuresLogos} />
            <NavItem name='Company' dropdown={true} arrayItems={companyItems}/>
            <NavItem name='Careers'/>
            <NavItem name='About'/>
        </a>
    )

}

export default NavBar