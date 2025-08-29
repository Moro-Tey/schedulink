"use client";

import useAuth from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Home() {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (!user && !loading) {
        router.push("/dashboard");
    }
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <h1 className="text-4xl font-bold">Welcome to the Scheduler App</h1>
            {loading ? <p>Loading...</p> : <Auth />}
            {user ? (
                <div>
                    <p className="mt-4">Hello, {user.name}</p>
                    <button className="mt-4 btn" onClick={logout}>Logout</button>
                </div>
            ) : (
                <button className="mt-4 btn" onClick={login}>Login</button>
            )}
        </div>
    )
}
