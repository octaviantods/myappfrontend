import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh' }}>

          {/* Sidebar */}
          <aside style={{ width: '220px', background: '#f4f4f4', padding: '20px' }}>
            <h2>My Admin</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><Link href="/dashboard/users">UsersT</Link></li>
              <li><Link href="/dashboard/settings">Settings</Link></li>
            </ul>
          </aside>

          {/* Content */}
          <main style={{ flex: 1, padding: '20px' }}>
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}