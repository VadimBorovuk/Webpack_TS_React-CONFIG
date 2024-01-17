import React, {useState} from 'react';
import classes from './App.module.scss'

import {Link, Outlet} from 'react-router-dom'

import iconPng from '@/assets/sports.png'
// import iconSvg from '@/assets/webpack.svg'

import WebpackSvg from '@/assets/caled.svg'

export const App = () => {

    let [count, setCount] = useState<number>(0)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div className={classes.main}>
            <p className={classes.icon}>rest</p>
            <img src={iconPng} alt="" width={100} height={100}/>

                <WebpackSvg className={classes.icon} width={250} height={250} />
            <Link to={'/about'}>About</Link>
            <Link to={'/shop'}>Shop</Link>
            <div className={classes.test}>
                Hello world!
                {count}
                <button className={classes['click-button']} onClick={() => addCount()}>+</button>
            </div>
            <Outlet/>
        </div>

    );
};
