import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 15, 
        background: "#9c3463",
        color: "#fff",
        transform: "none",
        boxShadow: "1px 1px 0 0 #000000",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#2b0037"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

export default function CustomBtn(props) {
  return (
    <StyledButton variant="contained" href={props.href} target={props.target} rel={props.rel}> {props.txt} </StyledButton>
    
  )
}