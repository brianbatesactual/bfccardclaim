import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.png'
import coin from '../coin.png'
import {Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "1.15rem",
        paddingBottom: "1.15rem",
        background: "#000000",
        ['@media (max-width:780px)']: { 
            flexDirection: "column"
           }
    },
    logo: {
        width: "10%",
        ['@media (max-width:780px)']: { 
            display: "none"
            }
    },
    coin: {
        width: "10%",
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
            paddingBottom: "1rem"    }
    }
})

export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className={classes.bar}>   
            <img src={logo} className={classes.logo} alt="logo" />
            <CustomBtn txt="Bitoku Founders Club" href="https://bitokufoundersclub.com" target="_blank" rel="noreferrer"/>
            <img src={coin} className={classes.coin} alt="coin" />
        </Toolbar>

        
    )
}
