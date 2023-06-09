import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles({
    img:{
        maxWidth: "100%",
        height: "auto"
    },
    body:{
        paddingTop:"105px",
        paddingBottom:"6rem"
    }




})


export default function Header(props) {
    const classes = styles(); 
    const {url, alt} = props;
  return (
    
    <div className={classes.body}><img className={classes.img} src={url} alt={alt}/><br></br></div>
  )
}
