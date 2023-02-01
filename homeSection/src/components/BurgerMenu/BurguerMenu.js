import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import NavItem from '../NavItem/NavItem';
import styles from './BurgerMenu.module.css'
import CloseIcon from '@mui/icons-material/Close';

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };
  
    const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
    const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', '/icon-reminders.svg', '/icon-planning.svg']
    const companyItems = ['History', 'Our Team', 'Blog']

    return (
        <Box sx={{ display: { sm: 'none', xs: 'inline-block' } }}>
            <MenuIcon onClick={handleBurgerMenu} />
            {isMenuOpen &&
                <div onClick={() => setIsMenuOpen(false)} className={styles['burger-menu--container']}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: '5px' }}>
                        <CloseIcon onClick={handleBurgerMenu} sx={{ fontSize: '40px', mb: '15px' }} />
                    </Box>
                    <nav className={styles.nav}>
                        <NavItem name='Features' dropdown={true} arrayItems={featuresItems}
                            arrayIcons={featuresLogos} />
                        <NavItem name='Company' dropdown={true} arrayItems={companyItems} />
                        <NavItem name='Careers' />
                        <NavItem name='About' />
                    </nav>
                </div>
            }
        </Box>
    )
}

export default BurgerMenu;