import React, {useState} from 'react';
import './App.scss'
export const App = () => {

    let [count, setCount] = useState<number>(0)

    const addCount = () =>{

        setCount(prev => prev + 1 )
    }

    return (
        <div className='test'>
            Hello world!
            {count}
            <button onClick={()=> addCount()}>+</button>
        </div>
    );
};
