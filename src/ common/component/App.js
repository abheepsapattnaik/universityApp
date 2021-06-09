import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import {getUniversities} from "../../service/universityService";
import {useDispatch} from "react-redux";

const theme = createMuiTheme({
        palette: {
            secondary: {
                main: '#C62828'
            }
        },
    })
;

const App = () => {
    const dispatch = useDispatch();
    getUniversities('india', dispatch);
    return <MuiThemeProvider theme={theme}>
        <div className="App">
        </div>
    </MuiThemeProvider>;
}


export default App;
