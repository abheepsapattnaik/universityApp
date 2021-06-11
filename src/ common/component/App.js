import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import UniversityHome from "../../features/home/component";
import {HashRouter, Route, Switch} from "react-router-dom";
import UniversityDetails from "../../features/details/component";

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
        <HashRouter>
            <Switch>
                <Route exact path="/" component={UniversityHome}/>
                <Route exact path="/details/:id" component={UniversityDetails}/>
            </Switch>
        </HashRouter>

    </MuiThemeProvider>;

}


export default App;
