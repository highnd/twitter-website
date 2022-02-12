import React from 'react'
import useStyles from './styles';
import Header from '../../components/Header/header';
import { Divider } from '@material-ui/core';
import Newtweet from './components/newtweet';
import Postlist from './components/Postlist';
import HomeIcon from '@material-ui/icons/Home';
import { useState,useEffect } from 'react';
 

const tweets = [
    {

sender:{
name:'sumsong',
id:'@sumsong',
img:'/images/man3.jpg',
likes:'12'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت #کرفس نیستبهترین غذا بر غذا برای صبحانه مفصل با #اختلاف خورشتای صبحانه مفصل با اختلاف خورشت کرفس نیست'
    },

    {

sender:{
name:'abbas',
id:'@abbas',
img:'/images/man3.jpg',
likes:'15'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با #اختلاف خورشت کرفس #نیستبهترین غذا برای صبحانه مفصل با اختلاف خورشت  غذا برای صبحانه مفصل با اختلاف #خورش غذا برای صبحانه مفصل با اختلاف خورشتت کرفس نیست'
    },
        {

sender:{
name:'asghar',
id:'@asghar',
img:'/images/man3.jpg',
likes:'18'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس #نیستبهترین غذا برای صبحانه #مفصل با اختلاف خورشت کرفس نیست'
    },
        {

sender:{
name:'sumsong',
id:'@sumsong',
img:'/images/man3.jpg',
likes:'0'
},
text:'اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستمفصل با اختلاف خورشت کرفس نیستبهترین غذا برای #صبحانه مفصل با اختلاف خورشت کرفس نیست'
    }


    
]
export default function Mainpart() {

    const classes = useStyles();


    const [tweet, settweet] = useState([])


useEffect(() => {
        apiTweets((okay,data)=>{
            if(!okay)
              return  alert("ناموفق بود")
              else settweet(data)
            

        })
    }, [])

    return (
        <div className={classes.mainpart}>
            <Header title={"خانه"} Icon={ <HomeIcon />} />
            <Divider className={classes.Divider}/>
           <Newtweet/>
           <Postlist data={tweets}/>
        </div>
    )
}
