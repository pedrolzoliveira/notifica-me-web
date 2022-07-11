import '../styles/globals.css';

import type { AppProps } from 'next/app'
import { SideBar } from '../components/side-bar';

import { QueryClientProvider } from 'react-query';
import { queryClient } from '../queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex'>
        <SideBar/>
        <div className='w-full h-full'>
          <Component {...pageProps}/>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default MyApp
