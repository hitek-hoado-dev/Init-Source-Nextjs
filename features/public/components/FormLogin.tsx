import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { APP_ROUTE } from '@/constants/routes'
import { authHooks } from '@/features/auth/hooks/useLogin'
import * as Form from '@radix-ui/react-form'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const FormLogin = () => {

    const loginMutation = authHooks.useLogin()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt with:', formData)
    // Handle login logic here
    loginMutation.mutate({ data: formData })
  }

  const router = useRouter()

  return (      
    <Form.Root onSubmit={handleSubmit} className="space-y-4">
        <Form.Field name="username">
            <Form.Control asChild>
                <Input
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={formData.username}
                    onChange={handleChange}
                />
            </Form.Control>
        </Form.Field>
        
        <Form.Field name="password">
            <Form.Control asChild>
                <Input
                    type="password"
                    name="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                />
            </Form.Control>
        </Form.Field>

        <div className='flex items-center justify-center gap-5'>
            <Button onClick={() => router.push(APP_ROUTE.forgot)} className='uppercase'>
                Username Recovery
            </Button>
            <Form.Submit asChild disabled={loginMutation.isPending}>
                <Button type="submit" className="text-[25px] font-bold tracking-[1.25px] uppercase">
                    Go
                </Button>
            </Form.Submit>
            <Button onClick={() => router.push(APP_ROUTE.forgot)} className='uppercase'>
                Password Recovery
            </Button>  
        </div>

        <p className='font-inter text-[12px] text-white text-center'>
            Not a member? Join <a href={APP_ROUTE.signup} className='font-bold'>Hurum Horolory</a> today
        </p>

        <p className='text-center text-[12px] font-libreFranklin font-bold tracking-[0.6px] text-semanticBlue2 uppercase'>
            <a href={APP_ROUTE.signup}  >
                Become a Member
            </a>
        </p>
        
    </Form.Root>
  )
}

export default FormLogin