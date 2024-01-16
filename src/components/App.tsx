import React, {useState} from 'react';
import classes from './App.module.scss'

import {Link, Outlet} from 'react-router-dom'

export const App = () => {

    let [count, setCount] = useState<number>(0)

    const addCount = () =>{

        setCount(prev => prev + 1 )

        console.log(classes)
    }

    return (
        <div>
            <Link to={'/about'}>About</Link>
            <Link to={'/shop'}>Shop</Link>
            <div className={classes.test}>
                Hello world!
                {count}
                <button className={classes['click-button']} onClick={()=> addCount()}>+</button>
            </div>
            <Outlet/>
        </div>

    );
};
