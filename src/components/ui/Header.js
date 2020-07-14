import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../assets/logo.jpg';


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  const useStyles = makeStyles(theme => ( {
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")] : {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")] : {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")] : {
            height: "7em"
        },
        [theme.breakpoints.down("xs")] : {
            height: "5.5em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
         marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
          }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));
export default function Header(props){

    const classes = useStyles();
    //const theme = useTheme();

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/" disableRipple 
                             className={classes.logoContainer}>
                             <img alt="company logo" className={classes.logo} src={logo}/>
                        </Button>
                        <Tabs className={classes.tabContainer}>
                            <Tab label="Home" className={classes.tab} />
                            <Tab label="Student" className={classes.tab}/>
                            <Tab label="Lender"  className={classes.tab}/>
                            <Tab label="Insurer" className={classes.tab}/>
                            <Tab label="Institute" className={classes.tab}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <div className={classes.toolbarMargin}></div>

        </React.Fragment>
    )
    
}