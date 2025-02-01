import { SignUpForm } from '@/components/user-signup-form'
export default function SignUp() {
    return (
        <>
            <div className="flex min-h-[70vh] w-full items-center justify-center p-6 md:p-10">
                <div className="w-full max-w-sm">
                    <SignUpForm />
                </div>
            </div>
        </>
    )
}
