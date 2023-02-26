import { Button, Grid, InputLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Register = () => {
  return (
    <Box className="register-form-container">
      <Typography variant="h4" className="register-form-title">
        Create an Account
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <InputLabel mt={2} align="left" className="registerlabel">
              Email 
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
        <InputLabel mt={2} align="left" className="registerlabel">
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
        <Grid item xs={12}>
        <InputLabel mt={2} align="left" className="registerlabel">
              Confirm Password 
            </InputLabel>
            <TextField
              className="input-control"
              type="password"
              size="small"
              variant="outlined"
              fullWidth
              required
              name="cpassword"
              autoComplete="off"
            />
        </Grid>

        <Grid xs={12} sm={12} item className="input-group">
            <Button
              color="primary"
              type="submit"
              variant="contained"
              className="btn btn-primary"
            >
              Sign Up
            </Button>
          </Grid>
      </Grid>
    </Box>
  )
}

export default Register