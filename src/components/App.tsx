import React from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';

const App = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <TodoList></TodoList>
        </div>
    );
}

export default App;