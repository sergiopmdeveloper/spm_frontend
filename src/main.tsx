import App from '@/App.tsx'
import '@/styles/fonts'
import { GlobalStyles } from '@/styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>
)
