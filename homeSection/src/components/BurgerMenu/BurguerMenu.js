import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';

const BurgerMenu = () => {
    return (
        <Box sx={{display : {sm:'none', xs:'inline-block'}}}>
        <MenuIcon />
        </Box>
    )
}

export default BurgerMenu;