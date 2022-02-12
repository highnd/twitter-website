import { makeStyles } from "@material-ui/styles";




const useStyles = makeStyles({

    leftsidebar: {
        backgroundColor: 'white',
        width: '25%',
        padding: '0.1rem 2rem'

    },
    profilePic: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        padding: '1rem',


    },

    userpic: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',



    },
    profileTexts: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr'

    },
    profileId: {
        flex: 1,
        color: '#808080',
        fontSize: '0.9rem',




    },

    profileName: {
        flex: 1,



    },

    profileUserName: {
        flex: 1,
        height: '10px',


    },
    twitterRoot: {
        background: '#FFE4E1', 
        marginTop: '2rem',
        borderRadius: '2.5rem',
        padding: '9px 24px',
        marginRight: '7px',


    },
    twitterTitle: {
        fontSize: '1.1rem',
        fontWeight: '600',
        marginBottom: '12px',


    },
    twitterNamelist: {

        marginRight: '0.5rem',
        width: 'max-content',




    },
    twitterlist: {
        padding: '6px 0',

    }




});







export default useStyles;