import React from 'react'
import { RouteObject, Navigate } from 'react-router-dom'
import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" />

    },
    {
        path: '/discover',
        element: <Discover />

    },
    {
        path: '/mine',
        element: <Mine />

    },
    {
        path: '/foucus',
        element: <Focus />

    },
    {
        path: '/download',
        element: <Download name="Choi" age={18} />

    }

]

export default routes

