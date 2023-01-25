import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
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
        fontWeigth: 500,
        [theme.breakpoints.up('sm')]: {
            fontWeigth: 700
        }
    }
});

export default theme;