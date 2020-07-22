import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import taskImage from "../assets/tasks.jpg";

const useStyles = makeStyles(theme => ( {
    task: {
        backgroundColor: theme.palette.secondary,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "100%",
        verticalAlign: "top"
    }
}))

export default function Task(props){

    const classes = useStyles()

    return(
        <div className={classes.task}>
            <img alt="task items" src={taskImage} className={classes.adornment}/>
        </div>
            
    )
}