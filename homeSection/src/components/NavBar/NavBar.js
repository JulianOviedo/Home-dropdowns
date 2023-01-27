import { Box } from '@mui/material'
import Image from 'next/image'
import NavItem from '../NavItem/NavItem'
import styles from './NavBar.module.css'

const NavBar = () => {

    const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
    const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', '/icon-reminders.svg', '/icon-planning.svg']

    const companyItems = ['History', 'Our Team', 'Blog']

    return (
        <Box sx={{display:'flex', p: '20px', alignItems: 'center'}}>
            <Image width="84" height="27" src='logo.svg' alt='logo' />
            <nav className={styles.nav}>
                <NavItem name='Features' dropdown={true} arrayItems={featuresItems} arrayIcons={featuresLogos} />
                <NavItem name='Company' dropdown={true} arrayItems={companyItems} />
                <NavItem name='Careers' />
                <NavItem name='About' />
            </nav>
        </Box>
    )

}

export default NavBar