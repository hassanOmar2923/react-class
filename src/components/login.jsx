import { Alert } from '@mui/material'
import React from 'react'
import { useForm, } from "react-hook-form"
import { Box, Typography,Container,InputLabel ,OutlinedInput ,InputAdornment,IconButton,Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onSubmitHandler=(data)=>{
    console.log(data);
  }
  return (
<Container maxWidth="sm">
<Alert sx={{marginTop:"100px"}}  severity="success">Login Page</Alert>
<Box variant='form' component={'form'} onSubmit={handleSubmit(onSubmitHandler)}>


<TextField sx={{ marginTop:'10px', }}  {...register("username")}  id="outlined-basic" fullWidth size='small' label="username" variant="outlined" />
<FormControl sx={{ marginTop:'10px', }} fullWidth  variant="outlined">
          <InputLabel   htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth size='small'
          {...register("password")}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <br/>
        <br/>
        <Button type='submit' fullWidth variant="contained">
          Login

        </Button>
        </Box>
    </Container>
  )
}
