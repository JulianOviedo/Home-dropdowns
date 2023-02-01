import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsl(0, 0%, 98%)', //Almost White
        },
        secondary: {
            main: 'hsl(0, 0%, 41%)', //Medium Gray
        },
        terciary: {
            main: 'hsl(0, 0%, 8%)' //Almost Black
        }
    },
    typography: {
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 376, //MOBILE DESIGN
            md: 850,
            lg: 1440, //DESKTOP DESIGN
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'inherit',
                    color: 'hsl(0, 0%, 41%)',
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: '15px '
                }
            }
        },
    }
});

const color = theme.palette

theme.typography.h1 = {
    fontWeight: 600,
    fontSize: '82px',
    [theme.breakpoints.down('md')]: {
        fontSize: '35px',
        fontWeight: 700
    }
}

theme.typography.h2 = {
    fontWeight: 500,
    color: color.secondary.main,
    fontSize: '18px',
    lineHeight: '28px',
    [theme.breakpoints.down('md')]: {
        fontSize: '17px',
    }
}

theme.typography.a = {
    color: color.secondary.main,
    '&:hover': {
        color: color.terciary.main
    },
}

