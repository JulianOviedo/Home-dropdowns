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
});
