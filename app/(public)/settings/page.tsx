// app/settings/page.tsx
import React from 'react'
import {
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material'
import { getTranslations } from 'next-intl/server'

// export const dynamic = 'force-static'
// export const revalidate = false

export default async function SettingPage() {
  // Lấy hàm t(key, vars) từ namespace 'Settings'
  const t = await getTranslations('Settings')

  const steps = [
    {
      title: t('steps.step1Title'),
      description: t('steps.step1Description'),
      img: '/images/guide-step1.png',
    },
    {
      title: t('steps.step2Title'),
      description: t('steps.step2Description'),
      img: '/images/guide-step2.png',
    },
    {
      title: t('steps.step3Title'),
      description: t('steps.step3Description'),
      img: '/images/guide-step3.png',
    },
    {
      title: t('steps.step4Title'),
      description: t('steps.step4Description'),
      img: '/images/guide-step4.png',
    },
  ]

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        {t('title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('description')}
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

      <Typography
        variant="caption"
        color="text.secondary"
        display="block"
        textAlign="center"
      >
        {t('lastUpdated', { date: new Date().toLocaleDateString() })}
      </Typography>
    </Container>
  )
}
