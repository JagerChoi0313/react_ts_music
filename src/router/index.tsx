import React from 'react'

import { RouteObject, Navigate } from 'react-router-dom'
import {lazy} from 'react'

//分包处理的写法
const Discover=lazy(()=>import('@/views/discover'))
const Mine=lazy(()=>import('@/views/mine'))
const Focus=lazy(()=>import('@/views/focus'))
const Download=lazy(()=>import('@/views/download'))

// import Discover from '@/views/discover'
// import Mine from '@/views/mine'
// import Focus from '@/views/focus'
// import Download from '@/views/download'

//二级路由
const Recommend =lazy(()=>import('@/views/discover/children-views/recommend'))
const Artist =lazy(()=>import('@/views/discover/children-views/artist'))
const Songs =lazy(()=>import('@/views/discover/children-views/songs'))
const DJradio =lazy(()=>import('@/views/discover/children-views/DJradio'))
const Album =lazy(()=>import('@/views/discover/children-views/album'))
const Ranking =lazy(()=>import('@/views/discover/children-views/ranking'))

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/discover" />

    },
    {
        path: '/discover',
        element: <Discover />,
        children:[
            {
                path:'/discover/recommned',
                element:<Recommend/>
            },
             {
                path:'/discover/songs',
                element:<Songs/>
            },
             {
                path:'/discover/artist',
                element:<Artist/>
            },
             {
                path:'/discover/ranking',
                element:<Ranking/>
            },
             {
                path:'/discover/DJradio',
                element:<DJradio/>
            },
             {
                path:'/discover/album',
                element:<Album/>
            }
        ]
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
        element: <Download />

    }

]

export default routes

