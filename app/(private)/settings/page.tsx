// app/settings/page.tsx
import React from 'react'
import {
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material'

export const dynamic = 'force-static'
export const revalidate = false

const steps = [
  {
    title: '1. Open Your Profile',
    description: 'Click on your avatar in the top-right corner to open your profile settings.',
    img: '/images/guide-step1.png',
  },
  {
    title: '2. Navigate to Security',
    description: 'In the sidebar, select **Security** to manage your password, 2FA, and sessions.',
    img: '/images/guide-step2.png',
  },
  {
    title: '3. Update Password',
    description: 'Enter your current password, then choose a new one and confirm.',
    img: '/images/guide-step3.png',
  },
  {
    title: '4. Enable Two-Factor Authentication',
    description: 'Scan the QR code with your authenticator app and enter the code shown.',
    img: '/images/guide-step4.png',
  },
]

export default function SettingPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Settings Guide
      </Typography>
      <Typography variant="body1" paragraph>
        Follow the steps below to secure your account and customize your preferences.
      </Typography>

      {steps.map((step, idx) => (
        <Paper key={idx} sx={{ p: 3, mb: 4 }} elevation={1}>
          <Typography variant="h5" gutterBottom>
            {step.title}
          </Typography>
          <Typography variant="body2" paragraph>
            {step.description}
          </Typography>
          <Box
            component="img"
            src={step.img}
            alt={step.title}
            sx={{
              width: '100%',
              maxHeight: 300,
              objectFit: 'contain',
              borderRadius: 1,
            }}
          />
        </Paper>
      ))}

      <Typography variant="caption" color="text.secondary" display="block" textAlign="center">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  )
}
