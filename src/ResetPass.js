import React, { useCallback, useContext, useState } from "react";
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
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ResetPass = ({ history }) => {

    const [didSendReset, sentReset] = useState(false)

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

      
    const handlePassReset = useCallback(
        async event => {
            const email = event.email 
            try {
                await app
                    .auth()
                    .sendPasswordResetEmail(email).then(sentReset(true));
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/console" />;
    }
    return (


        <div>
         <br></br>
         <br></br>

            <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={4} style={{height: "300px"}}>
          <Paper className={classes.paper} style={{height: "100%"}}>
          <br></br>
          {didSendReset === false ?(
<>
            <h2 style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "left"}}>Reset your password</h2> 
<Form {...layout}
name="basic"
initialValues={{
  remember: true,
}}
onFinish={handlePassReset}
>

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
      message: 'Please input your email!',
    },
  ]}
  
>
  <Input style = {{width: "100%", borderRadius: "5px"}} />
</Form.Item>
</Grid> 
<Grid item xs> </Grid>
</Grid>
</div>


<Grid container spacing={0}>
<Grid item xs={1}> </Grid>
<Grid item xs={10}>





<Form.Item style = {{width: "100%", borderRadius: "5px"}} >
  <Button type="primary" htmlType="submit" style = {{width: "100%", borderRadius: "5px"}}>
    Reset password
  </Button>
</Form.Item>
</Grid>
</Grid>
  </Form></>
  ) 
    : (<div><h2 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "left"}}>Check your email for instructions to reset your password
        </h2> 
        <p>Didn't get the email? Check your spam folder</p>
         </div>)
}

  





          </Paper>
        </Grid>
        <Grid item xs>
        </Grid>
        </Grid>
            
            
        </div>
    );
};

export default withRouter(ResetPass);


