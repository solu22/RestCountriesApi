
import { createTheme, Switch, ThemeProvider } from '@material-ui/core';
import { deepOrange, deepPurple, lightBlue, orange } from '@material-ui/core/colors';
import React, { useState } from 'react'

const Themes = ({children}:any) => {
    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
    const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
    const darkTheme = createTheme({
        palette: {
            type: palletType,
            primary: {
                main: mainPrimaryColor
            },
            secondary: {
                main: mainSecondaryColor
            }
        }
    });
    const handleThemeChange = () => {
        setDarkState(!darkState);
    };
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <Switch checked={darkState} onChange={handleThemeChange} />
                {children}
            </ThemeProvider>
        </div>
    )
}

export default Themes
