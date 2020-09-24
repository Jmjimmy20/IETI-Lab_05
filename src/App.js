import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

import {Login} from "./components/Login";
import {TodoApp} from "./components/TodoApp";
import Drawer from './components/Drawer';
import {NewTask} from './components/NewTask';
import {Home} from './components/Home';
import {Registration} from './components/Registration';


    const LoginView =() =>(
        <div>
            <Login/>
            <br/>
            <br/>
        </div>
    );

    const TodoView =() =>(
        <div>
            
            <br/>
            <br/>
            <Drawer/>
            <TodoApp/>
        </div>
    );

    const TaskView =() =>(
        <div>
            
            <br/>
            <br/>
            <Drawer/>
            <NewTask/>
        </div>
    );

    const HomeView =() =>(
        <div>
            
            <br/>
            <br/>
            <Drawer/>
            <Home/>
        </div>
    );

    const RegView =() =>(
        <div>
            
            <br/>
            <br/>
            <Drawer/>
            <Registration/>
        </div>
    );





class App extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {items: [], description: '', name: '', status: '', dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (

            <Router>
                <div className="App">
                    <header className="App-header" >
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    
                    <div>   
                        
                        <Switch>
                            <Route exact path="/" component={Login}/>  
                            <Route path="/todo" component={TodoView}/>
                            <Route path="/newTask" component = {TaskView}/>
                            <Route path="/home" component = {HomeView}/>
                            <Route path="/reg" component = {RegView}/>
                        </Switch>                     
                    </div>
                </div>

            </Router>

        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
