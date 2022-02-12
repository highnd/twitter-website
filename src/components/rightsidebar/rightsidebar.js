import React from 'react'
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import { ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import apihashtag from '../../api/api-hashtag';
import { useEffect,useState } from 'react';


const hashtags = [
    "پرچم_دار_جدید",
    "کرونا_ویروس",
    "بیت_کوین",
    "ارز_مجازی",
    "هلو_سامر",

]

export default function Rightsidebar() {

    const classes = useStyles();



    const [hashtags, sethashtags] = useState([])


useEffect(() => {
        apihashtag((okay,data)=>{
            if(!okay)
              return  alert("ناموفق بود")
              else sethashtags(data)
            

        })
    }, [])

    return (
        <dive className={classes.Rightsidebar}>

<Link to={'/'}>

            <Grid container direction={"row"} alignItems={"center"} >
                <Grid item>
                    <img  src={'/images/mysite-logo.png'} className={classes.logo} />

                </Grid>
                <Grid item>
                    <p className={classes.logotext}>توییتر فارسی</p>
                </Grid>

            </Grid>
</Link> 

            <h1 className={classes.sartitr}>داغ ترین هشتگ ها</h1>


            <Grid container direction={"column"} >


                {

                    hashtags.map(item =>
                        <ButtonBase className={classes.hashtagclick}>
                           <Link to={"/hashtags/"+ item}>
                            <Grid item container alignItems={"center"}>
                                
                                <img title={'....'} src={'/images/hashtag.png'} className={classes.hashtag} />

                                <p className={classes.hashtagtext}>{item}</p>
                                
                            </Grid>
                            </Link>
                        </ButtonBase>



                    )

                }



            </Grid>


        </dive >
    )
}
