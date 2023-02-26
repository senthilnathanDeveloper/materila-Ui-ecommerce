import { Button, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Login = () => {
  return (
    <Box className="login-container">
 <Typography variant="h5" className="form-title" align="center">
        Log In To Your Account
      </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <InputLabel align="left" className="loginlabel">
              Company Email 
            </InputLabel>
            <TextField
              className="input-control"
              type="email"
              size="small"
              variant="outlined"
              fullWidth
              required
              name="email"
              autoComplete="off"
            />
            </Grid>
            <Grid item xs={12}>
            <InputLabel align="left" className="loginlabel">
              Password 
            </InputLabel>
            <TextField
              className="input-control"
              type="password"
              size="small"
              variant="outlined"
              fullWidth
              required
              name="password"
              autoComplete="off"
            />
            </Grid>

            <Grid item xs={12} sm={12} className="input-group">
            <Button color="primary" type="submit" variant="contained" className="btn btn-primary">
              Log In
            </Button>
          </Grid>

            <Grid item xs={12} sm={12} className="input-group">
            <Link className="link" to="/register">
              <div align="center" className="already-account">
                {`Don't`} have an account ?<span className="account"> SignUp</span>
              </div>
            </Link>
          </Grid>
        </Grid>

    </Box>
  )
}

export default Login