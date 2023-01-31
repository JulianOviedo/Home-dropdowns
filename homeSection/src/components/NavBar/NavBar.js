import { Box, useTheme } from '@mui/material'
import Image from 'next/image'
import BurgerMenu from '../BurgerMenu/BurguerMenu'
import NavItem from '../NavItem/NavItem'
import SignButtons from '../SignButtons/SignButtons'
import styles from './NavBar.module.css'

const NavBar = () => {

    const theme = useTheme()

    const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
    const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', '/icon-reminders.svg', '/icon-planning.svg']

    const companyItems = ['History', 'Our Team', 'Blog']

    return (
        <Box component='header' sx={{ display: 'grid', gridTemplateColumns: '10% 70% auto' ,p: '20px', height:40, [theme.breakpoints.down('sm')]: {display: 'flex', justifyContent: 'space-between', p:'10px'}}}>
            <Image width="84" height="27" src='logo.svg' alt='logo' />
            <BurgerMenu/>
            <nav className={styles.nav}>
                <NavItem name='Features' dropdown={true} arrayItems={featuresItems} arrayIcons={featuresLogos} />
                <NavItem name='Company' dropdown={true} arrayItems={companyItems} />
                <NavItem name='Careers' />
                <NavItem name='About' />
            </nav>
            <SignButtons />
        </Box>
    )

}

export default NavBar