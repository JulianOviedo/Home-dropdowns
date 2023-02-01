import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { useState, useRef } from 'react';
import NavItem from '../NavItem/NavItem';
import styles from './BurgerMenu.module.css'
import CloseIcon from '@mui/icons-material/Close';
import SignButtons from '../SignButtons/SignButtons';

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleBurgerMenu = () => {
        !isMenuOpen ? (document.body.style.overflow = 'hidden', setIsMenuOpen(true))
            : (document.body.style.overflow = 'visible', setIsMenuOpen(false))
    };

    const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
    const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', '/icon-reminders.svg', '/icon-planning.svg']
    const companyItems = ['History', 'Our Team', 'Blog']

    return (
        <Box sx={{ display: { sm: 'none', xs: 'flex', flexDirection: 'column' } }}>
            <MenuIcon onClick={handleBurgerMenu} />
            {isMenuOpen &&
                <div className={styles['burger-menu--container']}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', position: 'absolute', bottom: '0', width: '100%', mb:'20px'}}>
                        <SignButtons />
                    </Box>
                </div>
            }
        </Box>
    )
}

export default BurgerMenu;