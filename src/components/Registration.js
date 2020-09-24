import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Css
import "../components/Registration.css";


export class Registration extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      name:"",
      passwordC:"",
      errorEmail: false,
      errorPass: false,
      errorName: false,
      errorPassC: false,
    }
  }

  handleEmail= (event) => {
    this.setState({
      email: event.target.value,
      errorEmail: false,
    });
  }

  handlePassword= (event) => {
    this.setState({
      password: event.target.value,
      errorPass: false,
    });
  }

  handleName= (event) => {
    this.setState({
      name: event.target.value,
      errorName: false,
    });
  }

  handlePassC= (event) => {
    this.setState({
      passwordC: event.target.value,
      errorPassC: false,
    });
  }

  regButton = (event) => {
    event.preventDefault();
    if(this.state.email !== "" && this.state.password !== "" && this.state.name !== "" && this.state.passwordC !== ""){
      localStorage.setItem('Name', this.state.name);
      localStorage.setItem('Pass2', this.state.passwordC);
      localStorage.setItem('Mail', this.state.email);
      localStorage.setItem('Pass', this.state.password);
      window.location.href = "/home";
    }
    else {
      if (this.state.email === "") {
        this.setState({
          errorEmail: true
        });
      }
      if (this.state.password === "") {
        this.setState({
          errorPass: true
        });
      }
      if (this.state.name === "") {
        this.setState({
          errorName: true
        });
      }
      if (this.state.passwordC === "") {
        this.setState({
          errorPassC: true
        });
      }
    }
    
    
  }
  
  logButton = (event) => {
    event.preventDefault();
    window.location.href = "/";
  }

  render(){
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={"paper"}>
          


          <Avatar className={"avatar"}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={"form"} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  autoFocus
                  onChange={(e) => this.handleName(e)}
                  error = {this.state.errorName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="mail"
                  label="Email"
                  name="Apellido"
                  autoComplete="lname"
                  onChange={(e) => this.handleEmail(e)}
                  error = {this.state.errorEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password1"
                  label="Password"
                  name="email"
                  autoComplete="email"
                  error = {this.state.errorPass}
                  onChange={(e) => this.handlePassword(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                  error = {this.state.errorPassC}
                  onChange={(e) => this.handlePassC(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={"buttonReg"}
              onClick ={(e) => this.regButton(e)}
            >
              Save
            </Button>
          </form>
        </div>
      </Container>
    );
  }
  
}