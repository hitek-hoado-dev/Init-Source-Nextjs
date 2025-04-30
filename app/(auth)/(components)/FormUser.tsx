"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

import { Alert, Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { FormMode, IFormAuth } from '../(types)';
import { useLogin } from '../(hooks)/useLogin';
import { setCookie } from '@/utils/cookie';
import { STORAGES } from '@/constants/storages';
import { useRouter } from 'next/navigation';
import { APP_ROUTE } from '@/constants/routes';

interface AuthFormProps {
  /** 'login' hoặc 'signup' để đổi title và button text */
  mode: FormMode
  /** callback khi submit, trả về object { name, password } */
  // onSubmit: (data: IFormAuth) => void
}

const FormUser: React.FC<AuthFormProps> = ({ mode }) => {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IFormAuth>();

    // 2) SWR mutation hook
    const {
      trigger: login,
      error,
      isMutating: isLoading,
    } = useLogin()

    const onSubmit = (data: IFormAuth) => {
      // login(data)
      setCookie(STORAGES.ACCESS_TOKEN, data)
      router.push(APP_ROUTE.home)
    }
  
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: Authkeys) => {
//     setFormData({
//         ...formData,
//         [field]: e.target.value,
//     })
//   }

  return (
    <Paper
      elevation={3}
      sx={{
        width: 400,
        // height: 400,
        mx: 'auto',
        p: 4,
      }}
    >
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate aria-disabled={isLoading}>
        <Stack spacing={2}>
          <TextField
            label="Name"
            // name="name"
            // value={formData.name}
            // onChange={e => handleInputChange(e, "name")}      
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
            required
            size='small'
          />

          <TextField
            label="Password"
            type="password"
            // name="password"
            // value={formData.password}
            // onChange={e => handleInputChange(e, "password")}
            {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: "Password must be at least 6 characters long and include uppercase, lowercase, a number, and a special character"
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            required
            size='small'
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            loading={isLoading}
          >
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </Button>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {(error as Error).message}
            </Alert>
          )}
          
        </Stack>
      </Box>
    </Paper>
  )
}

export default FormUser
