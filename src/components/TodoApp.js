import React from 'react';
import {TodoList} from './TodoList';
import moment from "moment";
import MomentUtils from '@date-io/moment';
import TextField from '@material-ui/core/TextField';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { NativeSelect ,InputLabel} from '@material-ui/core';


export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], description: '' , name: '', status: '', dueDate: new moment()}; 
      this.handleChange = this.handleChange.bind(this);
      this.handlePriority = this.handlePriority.bind(this); 
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleStatus = this.handleStatusChange.bind(this);
    }

    componentDidMount(){
      if(!localStorage.getItem('User') && !localStorage.getItem('Psswd')) window.location.href = "/"
    }

    

    render() {
        return (
          <div>
            <h3>TODO</h3>
            
            <form onSubmit={this.handleSubmit}>

            <TextField
              id="Text"
              label="Description"
              onChange={this.handleChange}
              value={this.state.description}
              margin="normal"
              variant="outlined"
            />

            <br/>

            <TextField
              id="Priority"
              label="Name"
              onChange={this.handlePriority}
              value={this.state.name}
              margin="normal"
              variant="outlined"
            />

            <br/>

            <Grid 
                  container 
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '10vh',}}>
              <InputLabel>Status :</InputLabel>
              <NativeSelect 
                  value={this.state.status}
                  onChange={this.handleStatusChange}
                  >
                  <option value=""> </option>
                  <option value={"Ready"}>Ready</option>
                  <option value={"In Progress"}>In Progress</option>
                  <option value={"Done"}>Done</option>
              </NativeSelect>
            </Grid>

            <br/>

            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container justify="space-around">
                  <KeyboardDatePicker

                      variant="inline"
                      format="DD/MM/YYYY"
                      margin="normal"
                      id="date-picker-inline"
                      label="Fecha"
                      value={this.state.dueDate}
                      onChange={this.handleDateChange}
                      KeyboardButtonProps={{
                          'aria-label': 'change date',
                      }}
                  />
              </Grid>
            </MuiPickersUtilsProvider>

            <br/>

            <button>
              Add #{this.state.items.length + 1}
            </button>

            </form>

            <TodoList items={this.state.items}/>
            
          </div>
        );
    }

    handleChange(e) {
        this.setState({ description: e.target.value });
    }

    handlePriority(e){
        this.setState({ name: e.target.value });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleStatusChange = (event) =>{
      this.setState({
        status: event.target.value
      });
    }
  
    handleSubmit(e) {
        e.preventDefault();


        if (!this.state.description.length || !this.state.name.length || !this.state.status.length|| !this.state.dueDate) {
            return;
        }

        if (localStorage.getItem("cards") === null) {
          var cards = [this.state];
          localStorage.setItem("cards", JSON.stringify(cards));
        } else {
          let cards = JSON.parse(localStorage.getItem("cards"));
          cards.push(this.state);
          localStorage.setItem("cards", JSON.stringify(cards));
        }
        window.location.href = "/home";
    }
  
    

}