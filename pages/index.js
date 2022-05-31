import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import postsStore from '../store/postsStore'
import ToastStore from '../store/ToastStore'
import t from '../components/Translation'
import s from '../styles/Home.module.css'
import Seo from '../components/Seo'
import Axios from 'axios'


const Home = () => {
  const router = useRouter();
  Axios.defaults.headers.common['Language'] = router.locale;

  return (
    <>
      <Seo />
      <div className={s.container}>
        <Link href='/'>
          <a>
            <h2>{t("home")}</h2>
          </a>
        </Link>
        <Link href='/about'>
          <a>
            <h2>{t("about")}</h2>
          </a>
        </Link>
        <Link href='/posts'>
          <a>
            <h2>{t("posts")}</h2>
          </a>
        </Link>
        <Link href={router.asPath} locale="az" passHref={true}>
          <a>
            <li>AZ</li>
          </a>
        </Link>
        <Link href={router.asPath} locale="ru" passHref={true}>
          <a>
            <li>RU</li>
          </a>
        </Link>
        <Link href={router.asPath} locale="en" passHref={true}>
          <a>
            <li>EN</li>
          </a>
        </Link>
        <button onClick={() => ToastStore.successToast("Success blya")}>Show Success Toast</button>
        <button onClick={() => ToastStore.errorToast("Error blya")}>Show Error Toast</button>
      </div>
    </>
  )
}

export default Home
