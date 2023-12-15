import Image from 'next/image'
import { Inter } from 'next/font/google'
import SearchVenue from '@/features/SearchVenue/SearchVenue'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <SearchVenue />
    </main>
  )
}
