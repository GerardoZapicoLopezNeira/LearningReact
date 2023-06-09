//import logo from './logo.svg';
import './App.css';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Grid from './components/Grid'
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';
import { Typography } from '@material-ui/core';
import Footer from './components/Footer';
import Logo2022 from './img/logo2022-temp.jpg'
import Header from './components/Header';
import Divisors from './components/Divisors';
//import './freelancer.css';

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  talleres:{
    fontSize: "21px",
    marginTop:0,
    marginBottom:"1rem",
    maxWidth: "1140px",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  }

})

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});



function App() {
  const classes = styles();
  return (
    <div className="App">
      <createTheme theme={theme}>
        <NavBar />
        <Header url={Logo2022} alt={"Logo2022"} />
        <Divisors text={"Talleres"} />
        <div className={`${classes.talleres} ${classes.wrapper}`}>
          <Typography>En un mercado laboral cada vez más competitivo y cambiante en el que hace falta algo más que experiencia para destacar, entran en juego las soft skills, aquellas habilidades que definen cómo nos comunicamos, gestionamos y desarrollamos actividades grupales, resolvemos conflictos o cómo motivamos y escuchamos a nuestros compañeros.</Typography><br></br>
          <Typography>Somos conscientes de que estas habilidades siguen siendo subestimadas por los estudiantes y por nuestro sistema educativo, ya que no se suelen impartir en ningún aula, pero también somos conscientes de todos los beneficios que aportan.
            Por ello hemos organizado talleres por y para estudiantes universitarios, que te ayudarán a desarrollar estas habilidades de forma inmersiva, fácil, práctica y divertida.</Typography><br></br>
          <Typography>¡Apúntate a estas jornadas, podrás aprender cosas que no se dan en la Universidad! <br></br>Esperamos verte pronto,<br></br>SSA LC Madrid.</Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{ fill: "#4360A6", height: "125", width: "125" }} />} title="Secure" btnTitle="Show me More" />
          <Grid icon={<EventNoteIcon style={{ fill: "#449A76", height: "125", width: "125" }} />} title="Reliable" btnTitle="Show me More" />
          <Grid icon={<TrendingUpIcon style={{ fill: "#D05B2D", height: "125", width: "125" }} />} title="Performant" btnTitle="Show me More" />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{ fill: "#5EA780", height: "125", width: "125" }} />} title="Modular" btnTitle="Show me More" />
          <Grid icon={<ComputerIcon style={{ fill: "#E69426", height: "125", width: "125" }} />} title="Multi-Platform" btnTitle="Show me More" />
          <Grid icon={<HttpIcon style={{ fill: "#2EA09D", height: "125", width: "125" }} />} title="Connected" btnTitle="Show me More" />
        </div>
        <div className={classes.bigSpace}>
          <Footer />
        </div>
      </createTheme>
    </div>
  );
}

export default App;
