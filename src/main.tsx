import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  type HydrationState,
} from 'react-router-dom'
import { createHead, UnheadProvider } from '@unhead/react/client'

import { routes } from './App'
import './index.css'

const head = createHead()

const hydrationData = (
  window as Window & {
    __staticRouterHydrationData?: HydrationState
  }
).__staticRouterHydrationData

const router = createBrowserRouter(routes, {
  hydrationData,
})

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <UnheadProvider value={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>,
)