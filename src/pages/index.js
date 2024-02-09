// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './components/gallery'
import Profile1 from './qcomps/profile_mistake'
import Profile2 from './qcomps/firstcomp'
import Bios from './qcomps/bios'
import Todos from './qcomps/todos'
import Props from './qcomps/gallery_props'
import Avatat from './components/profile_props'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <Gallery/>
        <Profile1/>
        <Profile2/>
        <Bios/>
        <Todos/>
        <Avatat/>
        <Props/>
    </div>


  )
}
