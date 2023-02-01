import { Button } from '@mui/material'

const SignButtons = () => {

    
    return (
        <>
            <Button sx={{width: '90%', height: 40, mr: '5px'}} variant='contained'>Login</Button>
            <Button sx={{width: '90%', height: 40, border:'1px solid hsl(0, 0%, 41%)'}} variant='contained'>Register</Button>
        </>
    )
}

export default SignButtons
