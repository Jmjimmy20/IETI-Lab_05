import React from 'react';
import { TodoList } from './TodoList';

export class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    
    componentDidMount(){
        if(!localStorage.getItem("User") && !localStorage.getItem("Psswd")){
            window.location.href = "/"
          }
    }

    render(){
        return(
            <header>
                <TodoList items={
                        localStorage.getItem("cards") === null
                        ? []
                        : JSON.parse(localStorage.getItem("cards"))}/>
            </header>

        );
    }

}