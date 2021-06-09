import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
        palette: {
            secondary: {
                main: '#C62828'
            }
        },
    })
;

const App = () => (
    <MuiThemeProvider theme={theme}>
        <div className="App">
        </div>
    </MuiThemeProvider>
);


export default App;
