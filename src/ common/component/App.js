import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import UniversityHome from "../../features/home/component";

const theme = createMuiTheme({
        palette: {
            secondary: {
                main: '#C62828'
            }
        },
    })
;

const App = () => {
    return <MuiThemeProvider theme={theme}>
        <UniversityHome/>
    </MuiThemeProvider>;
}


export default App;
