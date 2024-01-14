import React, {useState} from 'react';
import classes from './App.module.scss'
export const App = () => {

    let [count, setCount] = useState<number>(0)

    const addCount = () =>{

        setCount(prev => prev + 1 )

        console.log(classes)
    }

    return (
        <div className={classes.test}>
            Hello world!
            {count}
            <button className={classes['click-button']} onClick={()=> addCount()}>+</button>
        </div>
    );
};
