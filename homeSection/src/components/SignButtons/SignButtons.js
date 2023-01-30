import { useTheme } from '@emotion/react'
import { Box, Button } from '@mui/material'
import styles from './SignButtons.module.css'

const SignButtons = () => {

    const theme = useTheme()
    
    return (
        <Box className={styles['button-container']} sx={{display: 'flex', justifyContent:'flex-end'}}>
            <Button sx={{width: 100, height: 40, mr: '5px'}} variant='contained'>Login</Button>
            <Button sx={{width:100, height: 40, border:'1px solid hsl(0, 0%, 41%)'}} variant='contained'>Register</Button>
        </Box>
    )
}

export default SignButtons