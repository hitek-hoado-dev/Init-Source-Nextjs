"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import * as Form from '@radix-ui/react-form';
import * as Label from '@radix-ui/react-label';
import { setCookie } from '@/utils/cookie';
import { STORAGES } from '@/constants/storages';
import { useRouter } from 'next/navigation';
import { APP_ROUTE } from '@/constants/routes';
import { FormMode, IFormAuth } from '../types';
import { useLogin } from '../hooks/useLogin';
import { passwordPattern } from '../constants';


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
      error,
      isMutating: isLoading,
    } = useLogin()

    const onSubmit = (data: IFormAuth) => {
      console.log(data)
      setCookie(STORAGES.ACCESS_TOKEN, data)
      router.push(APP_ROUTE.home)
    }

  return (
    <div className="auth-form-container">
      <h1 className="auth-title">
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </h1>

      <Form.Root onSubmit={handleSubmit(onSubmit)} className="auth-form">
        <div className="form-fields">
          <Form.Field name="name" className="form-field">
            <div className="field-row">
              <Form.Label className="field-label">Name</Form.Label>
              <Form.Control asChild>
                <input
                  className={`input ${errors.name ? 'input-error' : ''}`}
                  {...register("name", { required: "Name is required" })}
                  disabled={isLoading}
                />
              </Form.Control>
            </div>
            {errors.name && (
              <Form.Message className="error-message">
                {errors.name.message}
              </Form.Message>
            )}
          </Form.Field>

          <Form.Field name="password" className="form-field">
            <div className="field-row">
              <Form.Label className="field-label">Password</Form.Label>
              <Form.Control asChild>
                <input
                  type="password"
                  className={`input ${errors.password ? 'input-error' : ''}`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                    pattern: {
                      value: passwordPattern,
                      message: "Password must be at least 6 characters long and include uppercase, lowercase, a number, and a special character"
                    }
                  })}
                  disabled={isLoading}
                />
              </Form.Control>
            </div>
            {errors.password && (
              <Form.Message className="error-message">
                {errors.password.message}
              </Form.Message>
            )}
          </Form.Field>

          <Form.Submit asChild>
            <button 
              className="submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : mode === 'login' ? 'Log In' : 'Sign Up'}
            </button>
          </Form.Submit>

          {/* Error Alert */}
          {error && (
            <div className="error-alert">
              {(error as Error).message}
            </div>
          )}
        </div>
      </Form.Root>

      <style jsx>{`
        .auth-form-container {
          width: 400px;
          margin: 0 auto;
          padding: 32px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .auth-title {
          text-align: center;
          margin-bottom: 24px;
          font-size: 24px;
          font-weight: 600;
        }
        .auth-form {
          width: 100%;
        }
        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .field-label {
          font-size: 14px;
          font-weight: 500;
        }
        .input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          width: 100%;
        }
        .input-error {
          border-color: #d32f2f;
        }
        .error-message {
          color: #d32f2f;
          font-size: 12px;
        }
        .submit-button {
          background: #1976d2;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 16px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          width: 100%;
        }
        .submit-button:hover {
          background: #1565c0;
        }
        .submit-button:disabled {
          background: #bdbdbd;
          cursor: not-allowed;
        }
        .error-alert {
          background: #fdeded;
          color: #d32f2f;
          padding: 12px;
          border-radius: 4px;
          font-size: 14px;
        }
      `}</style>
    </div>
  )
}

export default FormUser
