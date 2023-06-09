import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles({
    bar:{
        paddingTop: 0,
        backgroundColor: "#01507B",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        color:"#fff",
        flexGrow: 1,
        textAlign:"center",
        display:"inline-block",
        float: "none",
        "&:hover": {
            color:  "#D98320"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    },
    mainItem:{
        cursor: "pointer", 
        color:"#fff",
        fontSize:"1.5rem",
        textAlign:"center",
        flexGrow: 1,
        "&:hover": {
            color:  "#D98320"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})


export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <Typography variant="h6" className={classes.mainItem}>
                SOFT SKILLS ACADEMY MADRID
            </Typography>

            <Typography variant="h6" className={classes.menuItem}>
                TALLERES
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                HORARIO
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                TRAINERS
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                APUNTATE
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                CONÓCENOS
            </Typography>
        </Toolbar>
    )
}
