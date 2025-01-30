"use client"
import { LoginForm } from '@/components/user-auth-form'
export default function SignIn() {
    return (
        <>
            <div className="flex min-h-[70vh] w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <LoginForm />
                </div>
            </div>

        </>
    )
}
