import { makeStyles } from "@material-ui/styles";




const useStyles = makeStyles({
    root: {

        height: '100vh',
        width: '100%',

        display: 'flex'

    },
    Divider: {

        height: '100%',
        width: '1px',
        backgroundColor: "red",
        filter: "opacity(0.5)"

    },
    content:{
        flex:1
    }


});







export default useStyles;