import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';
import Discover from '@/views/discover';
import Recommend from '@/views/discover/children-views/recommend';
import Mine from '@/views/mine';
import Focus from '@/views/focus';
import Download from '@/views/download';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: 'recommend',
        element: <Recommend />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
];

export default routes;
