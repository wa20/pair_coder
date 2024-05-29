'use client'

import Header from '@/components/Header'
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes'
import React from 'react'

function Providers({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <header className="border-b sticky top-0 bg-white z-50 shadow-md text-neutral-500">
                    <Header />
                </header>
                {children}
            </ThemeProvider>
        </SessionProvider>
        </div>
    )
}


export default Providers