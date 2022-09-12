import React from 'react'
import logo from '../logo.png'
import {Toolbar, Typography} from '@material-ui/core'
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
            paddingBottom: "1rem"    }
    }
})

export default function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className={classes.bar}>   
            <img src={logo} className="App-logo" alt="logo" />

            {/* <Typography variant="h6" className={classes.menuItem} >
                    <a
                    className="App-link"
                    href="https://app.gitbook.com/invite/jBR7g6Oy7Q9cEdqkWHT1/Yt6TnX8Vtmy1U1Qi0Y5b" target="_blank" rel="noreferrer"
                    >
                    Docs
                    </a>
                </Typography> */}

        </Toolbar>        
    )
}
