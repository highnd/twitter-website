import React from 'react'
import Layout from './layout/layout'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Mainpart from '../pages/home/mainpart';
import Page404 from '../pages/home/components/Page404';
import TweetbyhashTag from '../pages/TweetsbyHashtag/TweetbyhashTag';
import TweetbyUser from '../pages/TweetbyUser/TweetbyUser';
import { AuthPage } from '../pages/AUTH/AuthPage';


function App() {
    return (
            
       


        <BrowserRouter>
        
            <PublicRoute path={"/login"} component={AuthPage} />
            <Switch>
                

                    <Layout>

                        <Switch>
                            <Route exact path={"/"} component={Mainpart} />
                            <Route exact path={"/hashtags/:hashtag"} component={TweetbyhashTag} />
                            <Route exact path={"/Users/:User"} component={TweetbyUser} />
                            <Route component={Page404} />
                        </Switch>
                    </Layout>
             
            </Switch>
        </BrowserRouter>

    )
}

  

 const islogin =()=>!!localStorage.getItem("x-auth-token")

 const PublicRoute =({component,...props})=>{

    return <Route {...props} render={(props)=>{

     if(islogin())
     return <Redirect to={"/"}/>
     else {
        return React.createElement(component,props)
     }
        
        
     
     
    
    }}/>
 }


 const privateRoute =({comp,...props})=>{

    return <Route {...props} render={(props)=>{

     if(!islogin())
     return <Redirect to={"/login"}/>
     else {
        return React.createElement(comp,props)
     }
        
        
     
     
    
    }}/>
 }


 
export default App;