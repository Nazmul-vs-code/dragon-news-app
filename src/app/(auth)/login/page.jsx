'use client'
import React, { useState } from 'react'; // 1. Import useState
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { Eye, EyeOff } from 'lucide-react'; // 2. Nice icons (optional, or use text)

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false); // 3. State for toggle

    const {
        register,
        handleSubmit
    } = useForm();

    const handleLoginFunc = async (data) => {
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        if (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-100px)] bg-slate-100 px-4">
            <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Login your account
                </h2>
                <hr className="mb-8 border-gray-200" />

                <form onSubmit={handleSubmit(handleLoginFunc)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm rounded-md"
                            required
                            {...register('email')}
                        />
                    </div>

                    <div className="relative"> {/* 4. Added relative for icon positioning */}
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"} // 5. Dynamic type
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm rounded-md pr-12"
                            required
                            {...register('password')}
                        />
                        {/* 6. Toggle Button */}
                        <button
                            type="button" // Important: set to button so it doesn't submit the form
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[38px] text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full btn bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-8 text-center text-sm text-gray-600">
                    Dont’t Have An Account ?{' '}
                    <Link href="/register" className="text-orange-500 font-bold hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;