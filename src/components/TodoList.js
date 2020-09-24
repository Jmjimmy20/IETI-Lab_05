import React from 'react';
import {Todo} from './Todo';
import Grid from '@material-ui/core/Grid';

import './Todo.css';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.items.map((todo, i) => {
            return (
                <Todo 
                key={i} 
                description={todo.description} 
                name={todo.name} 
                status={todo.status} 
                dueDate={todo.dueDate}
                />
            );
        });

        return (

            <div>
                <Grid container spacing={4} className ="grid-container">
                    {todoList}
                </Grid>
            </div>
        );


    }

}