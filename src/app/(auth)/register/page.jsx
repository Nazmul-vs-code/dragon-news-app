'use client'
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';

const RegisterPage = () => {

    const {
        register,
        handleSubmit
    } = useForm();

    const handleRegisterFunc = async (data) => {

        const { email, name , photo , password } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: '/',
        });
        console.log(res, error ,  " form response here")

        error && alert(error.message);
        // dragon-news
        
        res && alert("User added successfully. ")
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-100px)] bg-slate-100 px-4">
            <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-sm border border-gray-100">

                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Login your account
                </h2>

                <hr className="mb-8 border-gray-200" />

                {/* Form */}
                <form onSubmit={handleSubmit(handleRegisterFunc)}
                    className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="w-full px-4 py-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm rounded-md"
                            required
                            {...register('name')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Enter your photo url here
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo"
                            className="w-full px-4 py-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm rounded-md"
                            required
                            {...register('photo')}
                        />
                    </div>

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

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm rounded-md"
                            required
                            {...register('password')}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full btn bg-black text-white "
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                {/* <p className="mt-8 text-center text-sm text-gray-600">
                    Dont’t Have An Account ?{' '}
                    <Link href="/register" className="text-orange-500 font-bold hover:underline">
                        Register
                    </Link>
                </p> */}
            </div>
        </div>
    );
};

export default RegisterPage;