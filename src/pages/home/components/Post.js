import React from 'react'
import useStyles from '../styles'
import { Grid } from '@material-ui/core';
import { ButtonBase } from '@material-ui/core';

import LoopIcon from '@material-ui/icons/Loop';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IconButton } from '@material-ui/core';

export default function Post({data}) {
    const classes = useStyles();

  const renderTweet = (text) =>{

return {__html: text.replace(/#\S+/g,"<a style='color:red'>$&</a>")};


  }
 

    return (
    
        <div className={classes.NewPost}>
            <Grid container direction={'column'} >
                <Grid item container direction={'row'}>
           <img  src={data.sender.img} className={classes.NewTweetPic} />
              <p className={classes.postname}>{data.sender.name}</p>
              <p className={classes.postId}>{data.sender.id}</p>

                </Grid>

                <p  dangerouslySetInnerHTML={renderTweet(data.text)}  className={classes.tweetcontent}></p>

            </Grid>










{/* <Grid container>

           <img  src={'images/man3.jpg'} className={classes.NewTweetPic} style={{with:'max-content'}} />

            <Grid item container direction={'column'} style={{with:'max-content'}}>  

            <Grid item container >
              <p className={classes.postname}>عباس قادری</p>
              <p className={classes.postId}>@abbas_ghaderi</p>
             </Grid>  
             
            <p> بهترین وعده غذایی با اختلاف صبحانس ه</p>
             
              </Grid> 
         

         </Grid>    */}








{/* ...................................................... */}






            <Grid container direction={'row-reverse'}>
                 <IconButton>
                 <LoopIcon color={"secondary"} style={{borderRadius:'50%',}} className={classes.tweetchoosePic}/>
                 </IconButton> 
               
                <IconButton>
                 <FavoriteIcon color={"secondary"} className={classes.tweetchoosePic}/>
                 </IconButton> 
                 <p className={classes.likenumbers}>{data.sender.likes}</p>
            
            </Grid>
        </div>
    )
}
