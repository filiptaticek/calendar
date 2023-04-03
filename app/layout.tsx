//this file wrapps up all the files in the project

export const metadata = {
  title: "Calendar",
  description: "Made by Filip Taticek",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='m-auto max-w-screen-2xl border border-black p-10'>
          {children}
        </div>
      </body>
    </html>
  )
}
