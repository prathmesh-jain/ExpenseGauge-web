import type { RouteObject } from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy'
import LandingPage from './LandingPage'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
  },
]