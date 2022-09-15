import { useMutation, useQuery, useQueryClient } from 'react-query'
import * as AuthApi from '../services/auth-service'

export function useSignInMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: AuthApi.signIn,
    onSuccess: () => {
      queryClient.invalidateQueries(['info'])
    }
  })
}

export function useSignUpMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: AuthApi.SignUp,
    onSuccess: () => {
      queryClient.invalidateQueries(['info'])
    }
  })
}

export function useSignInAdminMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: AuthApi.signInAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['info'])
    }
  })
}

export function useSignUpAdminMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: AuthApi.SignUpAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries(['info'])
    }
  })
}

export function useInfo() {
  return useQuery('info', AuthApi.info)
}
