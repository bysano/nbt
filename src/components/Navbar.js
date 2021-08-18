import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {graphql, useStaticQuery} from "gatsby";
import SvgIcon from "@material-ui/icons/Menu";
import {Icon} from "@material-ui/core";
import theme from "../theme";


const useStyles = makeStyles((theme) => ({
    imageIcon: {
        height: '40px',

    },
    iconRoot: {
        textAlign: 'center',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar:
        {
            boxShadow: "none",
            color: "black",
            backgroundColor: "transparent",
            height: '100px'

        }
}));


export default function Navbar() {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    const {title} = data.site.siteMetadata

    const classes = useStyles();
    console.log(theme.palette);
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Icon classes={{root: classes.iconRoot}}>
                        <img className={classes.imageIcon} src="/nbt.svg"/>
                    </Icon>
                    <Typography variant="h6" className={classes.title}>
                        Услуги
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        Готовые изделия
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        О компании
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        О компании
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}



