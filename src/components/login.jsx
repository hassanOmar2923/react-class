import { Alert } from '@mui/material'
import React from 'react'
import { useForm, } from "react-hook-form"
import { Box, Typography,Container,InputLabel ,OutlinedInput ,InputAdornment,IconButton,Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {  contextExporter } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const validation=yup.object({
  username:yup.string().required('please Enter Username'),
  password:yup.string().required('please Enter  Password').min(3)
})
export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({resolver:yupResolver(validation)})
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const direction=useNavigate()
  const {isloggedIn,setuserData,setIsloggedIn}=contextExporter()
  console.log(isloggedIn);
  const onSubmitHandler=(data)=>{
    localStorage.setItem('currentUser',JSON.stringify(data))
    setuserData(data)
    direction('Dashbard')
    setIsloggedIn(true)
  }
  return (
<Container maxWidth="sm">
<Alert sx={{marginTop:"100px"}}  severity="success">Login Page</Alert>
<Box variant='form' component={'form'} onSubmit={handleSubmit(onSubmitHandler)}>
<TextField sx={{ marginTop:'10px', }}  {...register("username")}  id="outlined-basic" fullWidth size='small' label="username" variant="outlined" />
{errors.username && (
  <Alert sx={{color:'red'}}  severity="error">{errors.username.message}</Alert>
)}
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
        {errors.password && (
          <Alert sx={{color:'red'}}  severity="error">{errors.password.message}</Alert>
        )}
        <br/>
        <br/>
        <Button type='submit' fullWidth variant="contained">
          Login

        </Button>
        </Box>
    </Container>
  )
}
