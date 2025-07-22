"use client";

import { Button } from "@/components/ui/button";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Sparkles } from "lucide-react";

export default function SignInPage() {
    return (
        <div className="grid w-full min-h-screen flex-grow items-center px-4 sm:justify-center">
            <SignIn.Root>
                <SignIn.Step
                    name="start"
                    className="w-full space-y-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 px-4 py-10 shadow-md ring-1 ring-black/5 dark:ring-white/10 sm:w-96 sm:px-8"
                >
                    <header className="text-center flex flex-col items-center">
                        <Sparkles className=" text-indigo-400 w-10 h-10" />
                        <h1 className="mt-4 text-xl font-medium tracking-tight text-zinc-950 dark:text-white">
                            Sign in to LearnMate AI
                        </h1>
                    </header>

                    <Clerk.GlobalError className="block text-sm text-red-400" />

                    <div className="space-y-4">
                        <Clerk.Field name="identifier" className="space-y-2">
                            <Clerk.Label className="text-sm font-medium text-zinc-950 dark:text-white">
                                Email address
                            </Clerk.Label>
                            <Clerk.Input
                                type="text"
                                required
                                className="w-full rounded-md bg-white dark:bg-zinc-800 px-3.5 py-2 text-sm text-zinc-900 dark:text-white outline-none ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:ring-zinc-400 dark:hover:ring-zinc-500 focus:ring-[1.5px] focus:ring-zinc-950 dark:focus:ring-zinc-300 data-[invalid]:ring-red-400"
                            />
                            <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>

                        <Clerk.Field name="password" className="space-y-2">
                        <Clerk.Label className="text-sm font-medium text-zinc-950 dark:text-white">
                            Password
                        </Clerk.Label>
                        <Clerk.Input
                            type="password"
                            required
                            className="w-full rounded-md bg-white dark:bg-zinc-800 px-3.5 py-2 text-sm text-zinc-900 dark:text-white outline-none ring-1 ring-inset ring-zinc-300 dark:ring-zinc-700 hover:ring-zinc-400 dark:hover:ring-zinc-500 focus:ring-[1.5px] focus:ring-zinc-950 dark:focus:ring-zinc-300 data-[invalid]:ring-red-400"
                        />
                        <Clerk.FieldError className="block text-sm text-red-400" />
                        </Clerk.Field>
                    </div>

                    <SignIn.Action submit asChild>
                        <Clerk.Loading>
                            {(isLoading) => (
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`w-full rounded-md px-3.5 py-2 text-center text-sm font-medium ${
                                        isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center">
                                            <Sparkles className="animate-spin w-5 h-5 mr-2" />
                                            Signing in…
                                        </span>
                                        ) : (
                                            "Sign In"
                                    )}
                                </Button>
                            )}
                        </Clerk.Loading>
                    </SignIn.Action>

                    <Clerk.GlobalError className="block text-sm text-red-400" />
                    <div className="space-y-2">
                        {/* Login with Google Button - Loading State Added */}
                        <Clerk.Loading scope="provider:google">
                            {(isLoading) => (
                                <Clerk.Connection
                                    name="google"
                                    disabled={isLoading}
                                    className={`flex w-full items-center justify-center gap-x-3 cursor-pointer rounded-md bg-neutral-700 px-3.5 py-2 text-sm font-medium text-white shadow-[0_1px_0_0_theme(colors.white/5%)_inset,0_0_0_1px_theme(colors.white/2%)_inset] outline-none hover:bg-gradient-to-b hover:from-white/5 hover:to-white/5 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-white active:bg-gradient-to-b active:from-black/20 active:to-black/20 active:text-white/70
                                    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center">
                                            <Sparkles className="animate-spin w-5 h-5 mr-2" />
                                            Redirecting…
                                        </span>
                                    ) : (
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 17 16"
                                                className="w-4"
                                                aria-hidden
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M8.82 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.998.96 11.256 0 8.82 0 4.41 0 .705 3.591.705 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.82Z"
                                                />
                                            </svg>
                                            <span>Login with Google</span>
                                        </>
                                    )}
                                </Clerk.Connection>
                            )}
                        </Clerk.Loading>
                    </div>

                    <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                        No account?{" "}
                        <Clerk.Link
                            navigate="sign-up"
                            className="font-medium text-zinc-950 dark:text-white decoration-zinc-950/20 dark:decoration-white/20 underline-offset-4 outline-none hover:text-zinc-700 dark:hover:text-zinc-300 hover:underline focus-visible:underline"
                        >
                            Sign Up
                        </Clerk.Link>
                    </p>
                </SignIn.Step>

                <div id="clerk-captcha"></div>
            </SignIn.Root>
        </div>
    );
}