export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section>
            <nav>Next website</nav>
            {children}
        </section>
    );
}