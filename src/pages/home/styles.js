import { makeStyles } from "@material-ui/styles";




const useStyles = makeStyles({



    mainpart: {
        backgroundColor: "white",
        flex: 1,
         overflowY:'auto'


    },
    Header:{
        display:'flex',
        paddingRight:'9px',
        backgroundColor:'white',
        alignItems:'center',
     


    },
    HeaderTitle:{
        fontSize:'1.2rem',
        fontWeight:'800',
        marginRight:'0.5rem',
        alignItems:'center',
        paddingTop:'3px',

    },
    Divider:{
        backgroundColor:'red',
        filter:'opacity(0.4)'



    },
    NewTweet:{

     padding:'18px',
     backgroundColor: "white",
     display:'flex',
     flexDirection:'column'


    },
    NewPost:{
      marginTop:'5px',
       padding:'2px',
       backgroundColor: "white",
       display:'flex',
       flexDirection:'column',
       marginBottom:'20px',
       border:'7px solid #FFE4E1'


    },

    NewTweetPic:{

        width: '60px',
        height: '60px',
        borderRadius: '50%',
        padding: '1rem', 
        

    },

    NewTweetText:{

     margin:'1.5rem',
     border:'none',
     flex:1,
     '&:focus':{
         outline:'unset',
        
     },

    },
    tweetbtn:{
        backgroundColor:'red',
        color:'white',
        borderRadius:'1rem',
        minHeight:'30px',
        height:'30px',
        lineHeight:'1rem',
        minWidth:'5rem',
        marginLeft:'20px',
        marginTop:'0.2rem'
        
    },
    tweetchoosePic:{
       
       padding:'0.5rem',
       
    },
    postname:{
    fontSize:20,
    fontWeight:700,
    
    paddingTop:'3px',

    },
    postId:{
       fontSize:'0.9rem',
       color:'gray',
       direction:'ltr',
        marginRight:'1rem',
        paddingTop:'10px',
    },
    tweetcontent:{

        marginRight:'3rem',
        fontSize:17,
     
        
    },
    likenumbers:{
        paddingTop:'8px',
        marginLeft:'9px'
    },
    hastag: {

        width: '35px',
        height: '35px',
        marginRight: '2rem'
    },
    
});







export default useStyles;