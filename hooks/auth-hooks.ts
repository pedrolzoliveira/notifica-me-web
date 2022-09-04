import { useMutation } from 'react-query';
import * as AuthApi from '../services/auth-service';

export function useSignInMutation() {
    return useMutation({
        mutationFn: AuthApi.signIn,
    });
}


export function useSignUpMutation() {
    return useMutation({
        mutationFn: AuthApi.SignUp,
    });
}

export function useSignInAdminMutation() {
    return useMutation({
        mutationFn: AuthApi.signInAdmin,
    });
}


export function useSignUpAdminMutation() {
    return useMutation({
        mutationFn: AuthApi.SignUpAdmin,
    });
}