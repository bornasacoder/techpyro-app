import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Content1 from '@/contents/Content1'
import Content2 from '@/contents/Content2'
import Content3 from '@/contents/Content3'
import Content4 from '@/contents/Content4'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Content1/>
     <Content2/>
   <Content3/>
    <Content4/>
    </>
  )
}
