"use client"

import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItemButton, ListItemText, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import { headerHeight, drawerWidth, menuItems } from '../constants'
import { useRouter } from 'next/navigation'
import { clearCookie, getCookie } from '@/utils/cookie'
import { STORAGES } from '@/constants/storages'
import { APP_ROUTE } from '@/constants/routes'

const HeaderWithSideBar = () => {

    const router = useRouter();
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const token = getCookie(STORAGES.ACCESS_TOKEN)
    const appName = process.env.NEXT_PUBLIC_APP_NAME

    const handleLogout = () => {
        clearCookie(STORAGES.ACCESS_TOKEN)
        router.push(APP_ROUTE.login)
    }

  return (
    <AppBar position='static' sx={{ height: headerHeight }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                    >
                        <MenuIcon />
                    </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {appName}
                </Typography>
                {token ? (
                    <div className='flex gap-3 items-center'>
                        <Avatar />
                        <Button color='error' variant='contained' onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button color="inherit">Login</Button>
                )}
                </Toolbar>
                <Drawer 
                    open={isOpenSidebar} 
                    onClose={() => setIsOpenSidebar(false)}
                    variant="persistent"
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        top: '64px',
                    },
                    }}
                >
                    <List component={"nav"}>
                        {menuItems.map((item) => (
                            <ListItemButton
                                href={item.path}
                                key={item.path}
                                onClick={() => router.push(item.path)}
                            >
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        ))}
                    </List>
                </Drawer>
    </AppBar>
  )
}

export default HeaderWithSideBar