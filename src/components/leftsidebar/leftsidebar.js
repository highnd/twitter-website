import { Divider } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import apiusers from '../../api/api-users';
import { useState,useEffect } from 'react';



const Twitter = ({ name, id, img }) => {
    const classes = useStyles();

    return <ButtonBase>
        <Grid container direction={"row"} className={classes.twitterlist}>

            <img title={'....'} src={img} className={classes.userpic} />

            <Grid item container direction={"column"} style={{ width: 'max-content' }}>
                <div className={classes.twitterNamelist}>
                    <p className={classes.profileUserName}>{name}</p>
                    <p className={classes.profileId}>{id}</p>
                </div>
            </Grid>
        </Grid>

    </ButtonBase>
}
// .................................................

const user = [
    {
        name: "1عباس بوعذار",
        id: "@abbas_boazar",
        img: "/images/boazar.jpg"
    },

    {
        name: "2عباس بوعذار",
        id: "@abbas_boazar",
        img: "/images/boazar.jpg"
    },

    {
        name: "3عباس بوعذار",
        id: "@abbas_boazar",
        img: "/images/boazar.jpg"
    },
    {
        name: "4عباس بوعذار",
        id: "@abbas_boazar",
        img: "/images/boazar.jpg"
    },




]

// ..............................................



export default function Leftsidebar() {
    const classes = useStyles();


    const [users, setusers] = useState([])


useEffect(() => {
        apiusers((okay,data)=>{
            if(!okay)
              return  alert("ناموفق بود")
              else setusers(data)
            

        })
    }, [])


    return (
        <div className={classes.leftsidebar}>
            <Grid container direction={"row-reverse"}>

                <img title={'profile'} src={'/images/man3.jpg'} className={classes.profilePic} />

                <Grid item container direction={"column"} style={{ width: 'max-content' }}>
                    <div className={classes.profileTexts}>
                        <p className={classes.profileName}>مهدی فلاح کردی</p>
                        <p className={classes.profileId}>highnd(mehdi-fallah)</p>
                    </div>
                </Grid>
            </Grid>


            {/* ...................................................... */}


            <Grid item container direction={"column"} className={classes.twitterRoot}>


                <p className={classes.twitterTitle}>بهترین خبرنگاران</p>
                <Divider style={{ marginLeft: -24, marginRight: -21 }} />


                {
                    user.map((item, index) => {

                        return (
                              <Link to={`/Users/${item.name}`}>
                            <Twitter name={item.name} id={item.id} img={item.img} />
                            {index !== user.length - 1 &&
                                <Divider style={{ marginLeft: -24, marginRight: -21 }} />
                            }
                                  </Link>
                       )
                    })
                }



            </Grid>
        </div>
    )
}
