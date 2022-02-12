
import { colors } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";




const useStyles = makeStyles({

    container: {

        width: "30rem",
        margin: "10rem auto",
        display: "flex",
        flexDirection: "column",
        boxShadow: "2px 2px 3px 3px gray"



    },
    paperText: {

        padding: "1px",
        margin: "1rem",
        alignSelf: "center",
        fontSize: "1rem"


    },
    tab: {

        flex: "1"
    },

    containerInput: {

        padding: "1rem 0.8rem",
        marginLeft: "2.5rem",
        display: "grid",
        direction: "ltr",
        border: "none",




    },

    authButton: {
        width: "7rem",
        Height: "2rem",
        padding: "0.6rem",
        margin: "0.7rem auto",



    },
    input: {
        padding: "4px",
        margin: "0.6rem",
        lineHeight: "1.5rem",
        direction: "ltr",
        width: "14rem",
        borderRadius: "7px",
        // boxShadow: "inset 0px 0px  4px 1px  red",
        border: "0px solid",
        // borderBottom: "1px solid black",
        display: "block",
        // boxShadow: "inset 0 0 5px 5px #888",
        boxShadow: "inset 0px 1px 8px gray",
        outline: "none",

        '&:hover': {
            outline: "none"

        }

    }




});







export default useStyles;