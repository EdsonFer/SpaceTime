import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as RobotoFlex,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const robotoFlex = RobotoFlex({
  subsets: ['latin'],
  variable: '--font-roboto',
})
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai',
})

export const metadata = {
  title: 'NLW SpaceTime',
  description: 'Cápsula do tempo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
