import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';

const lexend = Lexend({
    variable: '--font-lexend',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'SETMySpace - Celebrate Your Birthday Party',
    description: 'Book professionals for your birthday party.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${lexend.variable} antialiased`}>{children}</body>
        </html>
    );
}
