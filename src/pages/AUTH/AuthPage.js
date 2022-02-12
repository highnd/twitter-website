import React from 'react'
import useStyles from './styles'
import { Paper } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { useState } from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Button from '@material-ui/core/Button';
import apiAuthlog, { apiAuthreg } from '../../api/api-auth';

const LOGIN_TAB_VALUE = 0
const REG_TAB_VALUE = 1

export const AuthPage = () => {


    const classes = useStyles();

    

    const [tab, settab] = useState(LOGIN_TAB_VALUE)

           
    // login state
  const [usernamelog, setusernamelog] = useState()
  const [passwordlog, setpasswordlog] = useState()

//   register state
const [usernamereg, setusernamereg] = useState()
const [emailreg, setemailreg] = useState()
const [passwordreg, setpasswordreg] = useState()
const [confpasswordreg, setconfpasswordreg] = useState()

 

  const validatelog =(user)=>{
  if(!user.username)
  return "pls inter username"
  
   if(!user.password)
   return "pls inter password"

  }

  const handlelog =()=>{

  const user ={
      username: usernamelog,
      password:passwordlog,

  }
  const error = validatelog(user)
  if(error)
  return alert(error)
  apiAuthlog(user,(okay,data)=>{
   
    if(!okay)
    return alert("not okay try again // log in")
    alert("log in seccses")
    localStorage.setitem("name",data.name)
    localStorage.setitem("image",data.image)
    localStorage.setitem("username",data.username)
    localStorage.setitem("x-auth-token",data["x-auth-token"])


  })

  }

  const validateregister =(user)=>{
       if(!user.username)
  return "pls inter username"
  
   if(!user.password)
   return "pls inter password"

    if(!user.email)
  return "pls inter username"
  
   if(!user.confpassword)
   return "pls inter password"

   if(user.password !== user.confpassword)
   return "password not match"
   
  

  }
  const handleregister=()=>{
   
    const user ={

        username:usernamereg,
        email:emailreg,
        password:passwordreg,
        confpassword:confpasswordreg,
    }
    const error = validateregister(user)
         if(error)
          return  alert(error,"register not okay pls try again")
            user.confpassword = undefined;

            apiAuthreg(user,(okay,data)=>{
   
    if(!okay)
    return alert("not okay try again //register")
    alert("register  seccses")
    localStorage.setitem("name",data.name)
    localStorage.setitem("image",data.image)
    localStorage.setitem("username",data.username)
    localStorage.setitem("x-auth-token",data["x-auth-token"])


  })

  }


    const handleChange = (e, newvalue) => {
        settab(newvalue)

    }

    return (
        <>

            <Paper square className={classes.container}>
                <p className={classes.paperText}>welcome to our website</p>
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab className={classes.tab} icon={<PersonPinIcon />} value={LOGIN_TAB_VALUE} label="login" />

                    <Tab icon={<PersonPinIcon />} value={REG_TAB_VALUE} label="sign up" />
                </Tabs>
                {tab === LOGIN_TAB_VALUE &&

                    <div className={classes.containerInput}>
                        <div>
                            <label for="uname"><b>USerName:</b></label>
                            <input value={usernamelog} onChange={(e) => setusernamelog(e.target.value)} className={classes.input} type="text" placeholder="Enter email" name="uname" required></input>
                            {/* {password < 7 &&

                                <div>
                                    this password is so short
                                </div>
                            } */}
                        </div>
                        <div>
                            <label for="psw"><b>Password:</b></label>
                            <input value={passwordlog} onChange={(e) => setpasswordlog(e.target.value)} className={classes.input} type="password" placeholder="Enter Password" name="psw" required></input>
                        </div>

                        <Button className={classes.authButton} onClick={handlelog}  variant="contained" color="secondary">
                            log in
                        </Button>
                    </div>
                }
                {tab === REG_TAB_VALUE &&

                    <div className={classes.containerInput}>
                        <div>
                            <label for="uname"><b>Username:</b></label>
                            <input value={usernamereg} onChange={e=>setusernamereg(e.target.value)} className={classes.input} type="text" placeholder="Enter Username" name="uname" required></input>
                        </div>
                        <div>
                            <label for="psw"><b>Password:</b></label>
                            <input value={passwordreg} onChange={e=>setpasswordreg(e.target.value)} className={classes.input} type="password" placeholder="Enter Password" name="psw" required></input>
                        </div>
                        <div>
                            <label for="psw-r"><b>re-password:</b></label>
                            <input value={confpasswordreg} onChange={e=>setconfpasswordreg(e.target.value)} className={classes.input} type="password" placeholder="Enter Password-repeat" name="psw-r" required></input>
                        </div>
                        <div>
                            <label for="uname1"><b>email:</b></label>
                            <input value={emailreg} onChange={e=>setemailreg(e.target.value)} className={classes.input} type="email" placeholder="Enter email" name="uname1" required></input>
                        </div>


                        <Button className={classes.authButton} onClick={handleregister} variant="contained" color="secondary">
                            sign up
                        </Button>
                    </div>
                }
            </Paper>
        </>
    )
}
