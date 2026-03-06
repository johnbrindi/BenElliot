export const metadata = {
    title: 'Sanity Studio',
    description: 'Manage your content',
};

export const viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    )
}
