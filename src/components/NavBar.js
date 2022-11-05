import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.png'
import {Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        paddingBottom: "1.15rem",
        background: "#000000",
        ['@media (max-width:780px)']: { 
            flexDirection: "column"
           }
    },
    logo: {
        width: "7%",
        ['@media (max-width:780px)']: { 
            display: "none"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            alignItems: "center",
            paddingTop: "1.15rem",
            paddingRight: "1.15rem",
            paddingBottom: "1rem"    }
    }
})

export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className={classes.bar}>   
            <img src={logo} className="App-logo" alt="logo" />
            <CustomBtn txt="Link" href="https://bitokufoundersclub.com" target="_blank" rel="noreferrer"/>
            <img src={logo} className="App-logo" alt="logo" />
        </Toolbar>

        
    )
}
