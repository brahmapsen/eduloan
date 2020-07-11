import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import contextImage from "../assets/context.png";

const useStyles = makeStyles(theme => ( {
    home: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "100%",
        verticalAlign: "bottom"
    }
}))

export default function Home(props){

    const classes = useStyles()

    return(
        <header className={classes.home}>
                <img alt="context" src={contextImage} className={classes.adornment}/>
        </header>
            
    )
}