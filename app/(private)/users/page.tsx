"use client"

import GeneralLoading from '@/components/GeneralLoading'
import { useUsers } from '@/features/users/hooks/useUsers'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useTranslations } from 'next-intl'
import React from 'react'

interface User {
  name: string
  phone: string
  username: string
}

const UsersPage = () => {
    const { data, isLoading } = useUsers()
    const t = useTranslations("Users")
    console.log(data, isLoading)
    if(isLoading) return <GeneralLoading />
  return (
    <div className='flex flex-col p-6'>
      <h1 className="text-black mb-4">{t("title")}</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>{t("name")}</strong></TableCell>
              <TableCell><strong>{t("phone")}</strong></TableCell>
              <TableCell><strong>{t("username")}</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: User) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  {row.username}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default UsersPage