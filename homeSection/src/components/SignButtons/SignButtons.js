import { Box } from '@mui/material'

const SignButtons = ({maxWidth}) => {
    
    return (
        <Box sx={{display: 'flex'}}>
            <button className=''>Login</button>
            <button>Register</button>
        </Box>
    )
}

export default SignButtons