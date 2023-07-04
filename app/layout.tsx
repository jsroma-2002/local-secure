import '@/styles/globals.css';

export const metadata = {
  title: 'Local Secure',
  description: 'The best local secure app ever'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
