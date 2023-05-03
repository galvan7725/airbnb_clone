import './globals.css'
import {Nunito} from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from "@/app/components/ClientOnly";
import Modal from './components/modals/Modal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} >
      <ClientOnly>
          <Modal isOpen={true} title="Login Modal" actionLabel="Submit"/>
        <Navbar/>
      </ClientOnly>
        {children}
        </body>
    </html>
  )
}
