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

import List from './components/list_plain'
import Key from './components/list_keys'
import Key2 from './qcomps/list_keys_id'
import Recipes from './qcomps/recipes'
import MenuBar from './qcomps/menuBar'
import Gallery1 from './components/whyState'
import State from './components/state'
import State2 from './qcomps/state'
import StateObj from './components/stateObj'

import Atrics from './components/artistsArr'
import ArtisR from './qcomps/artistsRemoveArr'
import AObject from './qcomps/arrObj'
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

        <List/>
        <Key/>
        <Key2/>
        <Recipes/>
        <MenuBar/>
        <Gallery1/>
        <State/>
        <State2/>
        <StateObj/>

        <Atrics/>
        <ArtisR/>
        <AObject/>
    </div>


  )
}
