import createTheme from '@mui/material/styles/createTheme';

const lightTheme = createTheme({
    palette:{
        mode:'light',
        primary:{
            main:'#1a237e',
            light:'#534bae',
            dark:'#000051',
            contrastText:'#ffffff'
        },
        secondary:{
            main:'#411268',
            light:'#703e97',
            dark:'#19003d',
            contrastText:'#ffffff'
        },
        background:{
            paper:'#fff',
            default:'#EEEEEE'
        },
    },
    typography:{
        fontFamily:"'Nunito','Arial', sans-serif"
    }
});

export {lightTheme};
