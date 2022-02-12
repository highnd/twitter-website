import React from 'react'
import useStyles from './styles'
import Rightsidebar from '../rightsidebar/rightsidebar';
import Leftsidebar from '../leftsidebar/leftsidebar';
import Mainpart from '../../pages/home/mainpart';
import { Divider } from '@material-ui/core';
import TweetbyhashTag from '../../pages/TweetsbyHashtag/TweetbyhashTag';
import TweetbyUser from '../../pages/TweetbyUser/TweetbyUser';
import {BrowserRouter,Route} from 'react-router-dom'

export default function Layout(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Rightsidebar />
            <Divider orientation={'vertical'} className={classes.Divider} />
            <div className={classes.content}>
           {props.children}
            </div>
            <Divider orientation={'vertical'} className={classes.Divider} />
            <Leftsidebar />

        </div>
    )
}
