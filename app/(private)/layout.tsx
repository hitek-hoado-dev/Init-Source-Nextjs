"use client"

import { AppBar, Button, Drawer, IconButton, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

const menuItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Users', path: '/users' },
  { label: 'Settings', path: '/settings' },
];

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter();
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  return (
    <div className='flex min-h-screen w-full'>
        <AppBar position='static' className='h-16'>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setIsOpenSidebar(true)}
                >
                    <MenuIcon />
                </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
            {children}
            <Drawer 
                open={isOpenSidebar} 
                onClose={() => setIsOpenSidebar(false)}
                variant="permanent"
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
    </div>
  )
}

export default PrivateLayout