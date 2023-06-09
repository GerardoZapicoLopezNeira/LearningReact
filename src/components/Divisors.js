import React from 'react'
import { makeStyles } from '@material-ui/core'


const styles = makeStyles({
    div:{
        color:"#01507B",
        textTransform:"uppercase",
        marginBottom: 0
    },
    h2:{
        textAlign:"center",
        fontSize:"3rem",
        fontFamily: "Font Awesome 5 Free",
        content:"\f000"
    },
    star:{
        boxSizing: "border-box",
        borderColor: "#01507B",
        maxWidth: "15rem",
        padding: 0,
        textAlign: "center",
        border: "none",
        borderTop: "solid 0.25rem",
        marginTop: "2.5rem",
        marginBottom: "2rem",
        marginLeft: "auto",
        marginRight: "auto",
        
    }





})


export default function Divisors(props) {
    const classes=styles();
    const {text} = props;
  return (
    <div  className={classes.div}>
        <h2 className={classes.h2}>{text}</h2>
        <hr className={classes.star}></hr>
    </div>
  )
}
