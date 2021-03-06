import React from 'react'
import classes from './BuildControl.css'


const buildControl = (props) =>{
    return (
        <div className={classes.BuildControl} >
           <div className={classes.Label}>{props.label}</div> 
           <button className={classes.Less}>Remove</button>
           <button onClick ={props.addIngredient(props.type)} className={classes.More}>Add</button>
        </div>
    );
}

export default buildControl;