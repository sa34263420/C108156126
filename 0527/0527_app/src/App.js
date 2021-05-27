import logo from './logo.svg';
import './App.css';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider, makeStyles,createMuiTheme } from '@material-ui/core/styles';
import {green, orange} from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: theme.background,
      border: 0,
      fontSize: 16,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color:green,
      height: 48,
      padding: '0 30px',

      root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
      },
    },
  }));

  const outerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });
  
  const innerTheme = createMuiTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });

  function DeepChild() {
    const classes = useStyles();
  
    return (
      <button type="button" className={classes.root}>
        Theming
      </button>
    );
  }
  const themeInstance = {
    background: 'linear-gradient(45deg, #FE4B8D 30%, #E44EE4 90%)',
    primary:{
      main: green[100],
    },
    status: {
      danger: orange[100],
    },
  };
  const theme = createMuiTheme({
    background: 'linear-gradient(30deg, #FFFFFF 30%, #AAAAAA 90%)',
    primary:{
      main: green[400],
    },
    status: {
      danger: orange[400],
    },
  });
  const classes = useStyles();
  return (
<div className="App">
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </div>

    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          <Button variant="contained">
          <ThemeProvider theme={theme}>
            AAAAAAAA
            </ThemeProvider>
          </Button>
        
        <ThemeProvider theme={themeInstance}>
          <DeepChild />
        </ThemeProvider>

        <TextField id="standard-basic" label="Standard" type="date" defaultValue="Default Value"
          helperText="HeHe" 
          InputProps={{
            readOnly: true,
          }}/>
        <ThemeProvider theme={outerTheme}>
          <Checkbox defaultChecked />
          <ThemeProvider theme={innerTheme}>
            <Checkbox defaultChecked />
          </ThemeProvider>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
