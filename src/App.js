import React, { useState } from 'react';
import './App.css';
import Users from './Users/Users';
import MyComponent from './__mocks__/MyComponent';

function App () {
    const [count, setCount] = useState(0);

    const makeIncrementer = amount => setCount(prev => prev + amount);

    const increment = () => makeIncrementer(1);

    const decrement = () => {
      if (count === 0) {
        return;
      }
      return makeIncrementer(-1);
    }

    return (
        <div className="app">
            <p>Count: {count}</p>
            <button 
                className="increment" 
                onClick={increment}
            >
                Increment
            </button>
            <button 
                disabled={count === 0 ? true : false} 
                className="decrement" 
                onClick={decrement}
            >
                Decrement
            </button>
            <div className="users">
                <Users />
                <MyComponent />
            </div>
        </div>
    );
}

export default App;
