import React from 'react'
import useStyles from '../styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { ButtonBase } from '@material-ui/core';
import { useEffect } from 'react';
import axios from "axios"
import apinewtweet from '../../../api/api-newtweet';


export default function Newtweet() {
    const input = React.useRef()
    const classes = useStyles();


    useEffect(() => {
        input.current.addEventListener("input", function (e) {
            console.log("input event fired", e.target.value)

        }, false)
    }, [])
    const newtweetlistener = () => {
            const tweettext = input.current.innerText
            if(!tweettext)
            return;
            const data ={
                id:Math.floor(Math.random()*100),
                'sender':{
                    "name":"ali",
                    "id":"@ali-parvin",
                },
                "text":tweettext,
                "likes":9
            }
        apinewtweet(data,(okay)=>{
            if(!okay)
            return alert("not send")
            else 
            return alert("massage has been sent")


        })

    }


    return (
        <div className={classes.NewTweet}>
            <Grid container>

                <img src={'images/man3.jpg'} className={classes.NewTweetPic} />

                <textarea placeholder={'...توییت کن'} ref={input} className={classes.NewTweetText} ref={input} />
            </Grid>
            <Grid container direction={'row-reverse'}>
                <Button variant={"contained"} onClick={newtweetlistener} className={classes.tweetbtn}>توییت</Button>
                <ButtonBase>
                    <ImageIcon color={"secondary"} className={classes.tweetchoosePic} />
                </ButtonBase>
            </Grid>
        </div>
    )
}
