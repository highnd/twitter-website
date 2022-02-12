import React from 'react'
import useStyles from '../home/styles';
import Header from '../../components/Header/header';
import { Divider } from '@material-ui/core';
import Postlist from '../home/components/Postlist';
import { useState,useEffect } from 'react';
import apihashtag from '../../api/api-hashtag';


const tweets = [
    {

sender:{
name:'sumsong',
id:'@sumsong',
img:'/images/man3.jpg',
likes:'12'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستبهترین غذا بر غذا برای صبحانه مفصل با اختلاف خورشتای صبحانه مفصل با اختلاف خورشت کرفس نیست'
    },

    {

sender:{
name:'abbas',
id:'@abbas',
img:'/images/man3.jpg',
likes:'15'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستبهترین غذا برای صبحانه مفصل با اختلاف خورشت  غذا برای صبحانه مفصل با اختلاف خورش غذا برای صبحانه مفصل با اختلاف خورشتت کرفس نیست'
    },
        {

sender:{
name:'asghar',
id:'@asghar',
img:'/images/man3.jpg',
likes:'18'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستبهترین غذا برای صبحانه مفصل با اختلاف خورشت کرفس نیست'
    },
        {

sender:{
name:'sumsong',
id:'@sumsong',
img:'/images/man3.jpg',
likes:'0'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستبهترین غذا برای صبحانه مفصل با اختلاف خورشت کرفس نیست'
    }


    
]
export default function TweetbyhashTag(props) {

    const classes = useStyles();

const [tweet, settweet] = useState([])


useEffect(() => {
        apihashtag((okay,data)=>{
            if(!okay)
              return  alert("ناموفق بود")
              else settweet(data)
            

        })
    }, [])
    return (
        <div className={classes.mainpart}>
            <Header title={props.match.params.hashtag} Icon={<img src={'/images/hashtag.png'} className={classes.hastag} />}  />
           <Postlist data={tweets}/>
        </div>
    )
}