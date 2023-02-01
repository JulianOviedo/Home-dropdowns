import { Button } from '@mui/material'

const SignButtons = () => {

    
    return (
        <>
            <Button sx={{width: 100, height: 40, mr: '5px'}} variant='contained'>Login</Button>
            <Button sx={{width:100, height: 40, border:'1px solid hsl(0, 0%, 41%)'}} variant='contained'>Register</Button>
        </>
    )
}

export default SignButtons

// <Box sx={{display: {sm: 'flex',xs: 'none'}, justifyContent:'flex-end'}}>
