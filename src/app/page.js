import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='dalai'>
        <Link href="#">T1 Khaliuna🤣</Link>
      </div>
    </main>
  )
}
