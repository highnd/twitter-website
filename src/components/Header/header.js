import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import useStyles from './styles';


export default function Header({title,Icon}) {

    const classes = useStyles();

    
    return (
        <div className={classes.Header}>
           {Icon}
           <p className={classes.HeaderTitle}> {title}</p>
        </div>
    )
}
