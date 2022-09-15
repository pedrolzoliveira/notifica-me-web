import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useInfo } from '../hooks/auth-hooks'

const Home: NextPage = () => {
  const router = useRouter()

  const { data: info, isLoading: infoLoading } = useInfo()

  if (((info?.customer) == null) && !infoLoading) {
    router.push('/signin')
  }

  return (
      <div></div>
  )
}

export default Home
