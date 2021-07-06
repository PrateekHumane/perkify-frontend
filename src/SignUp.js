import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebaseapp.js";
import { AuthContext } from "./Auth.js";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'




import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      //textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));



const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        console.log(event)
        const email = event.email 
        const password = event.password
        try {
            await app
                .auth()
                .createUserWithEmailAndPassword(email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const classes = useStyles();
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 40,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 50,
        },
      };

    return (


        <div>
         <br></br>
         <br></br>

            <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={4} style={{height: "500px"}}>
          <Paper className={classes.paper} style={{height: "100%"}}>
          <br></br>
            <h2 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left"}}>Create your Perkify account</h2> 

<Form {...layout}

name="basic"
initialValues={{
  remember: true,
}}
onFinish={handleSignUp}
>

<div>
    <Grid container spacing={0}>

    <Grid item xs={1}> </Grid>
    <Grid item xs={5}>
    <h4 style={{textAlign:"left"}}>First Name</h4> 
<Form.Item
  label=""
  name="firstName"
  rules={[
    {
      required: true,
      message: 'Please input your first name!',
    },
  ]}
  
>
  <Input style = {{width: "95%", borderRadius: "5px"}} />
</Form.Item>
</Grid> 

<Grid item xs={5}>
    <h4 style={{textAlign:"left"}}>Last Name</h4> 
<Form.Item
  label=""
  name="lastName"
  rules={[
    {
      required: true,
      message: 'Please input your last name!',
    },
  ]}
  
>
  <Input style = {{width: "95%", borderRadius: "5px", direction: "ltr"}} />
</Form.Item>
</Grid>

<Grid item xs> </Grid>
</Grid>
</div> 

    <div>
    <Grid container spacing={0}>

    <Grid item xs={1}> </Grid>
    <Grid item xs={10}>
    <h4 style={{textAlign:"left"}}>Email</h4> 
<Form.Item
  label=""
  name="email"
  rules={[
    {
      required: true,
      message: 'Please input your username!',
    },
  ]}
  
>
  <Input style = {{width: "100%", borderRadius: "5px"}} />
</Form.Item>
</Grid> 
<Grid item xs> </Grid>
</Grid>
</div> 
<div>
    <Grid container spacing={0}>

    <Grid item xs={1}> </Grid>
    <Grid item xs={10}>
    <Grid container spacing={0}>
    <Grid item xs={4}>

     <h4 style={{textAlign:"left"}}>Password</h4> 
     </Grid> 
     <Grid item xs={8} style={{textAlign: "right"}} > 
        <a>Forgot your password? </a>
    </Grid>

    
     </Grid>
    <Form.Item
  label=""
  name="password"
  rules={[
    {
      required: true,
      message: 'Please input your password!',
    },
  ]}
>
  <Input.Password style = {{width: "100%", borderRadius: "5px"}} />
</Form.Item>
</Grid> 
<Grid item xs> </Grid>
</Grid>
</div> 



<Grid container spacing={0}>
<Grid item xs={1}> </Grid>
<Grid item xs={10}>


<Form.Item name="remember" valuePropName="checked" spacing={0} style={{textAlign: "left"}}>
  <Checkbox>Remember me</Checkbox>
</Form.Item>




<Form.Item style = {{width: "100%", borderRadius: "5px"}} >
  <Button type="primary" htmlType="submit" style = {{width: "100%", borderRadius: "5px"}}>
    Sign Up
  </Button>
</Form.Item>
</Grid>
</Grid>
  </Form>

          </Paper>
        </Grid>
        <Grid item xs>
        </Grid>
        </Grid>
            
            
        </div>
    );
};

export default withRouter(SignUp);
