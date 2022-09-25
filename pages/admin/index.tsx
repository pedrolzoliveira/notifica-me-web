import { useInfo } from '../../hooks/auth-hooks'

const Admin = () => {
  const { data: infoPayload } = useInfo()
  // const router = useRouter()

  if (!infoPayload?.admin) {
    // router.push('/admin/signin')
  }

  return (
    <div>

    </div>
  )
}

export default Admin
