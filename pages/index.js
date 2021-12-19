import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigiDao</title>
        <meta name="description" content="A Mysterious Place Where Digital Monsters Roam Free and Flourish" />
        <link rel="icon" href="/walking.gif" />
      </Head>

      <div className={styles.wrapper}>
        <img src="/logo.png" alt="logo" className={styles.logo}/>

        <h1>Coming Soon</h1>

        <div className={styles.subText}>
          Solana&apos;s First Generative Fully Animated Collection
          <img src="/dragon.gif" alt="animated dragon"/>
        </div>

        <img src="/walking.gif" alt="nft" className={styles.nft}/>

        <div className={styles.text}>
          <p>Solana&apos;s First Generative GIF Collection</p>
          <p>SAVE the Digiverse</p>
          <p>Discover ancient Secrets</p>
          <p>Become the DigiDestined</p>
        </div>

        <div className={styles.gameFeatures}>
          <h2>Game Features:</h2>
          <p className={styles.icons}>Battle for DigiTokens <img src="/sword.png"/></p>
          <p className={styles.icons}>Hatch DigiEggz <img src="egg.png"/></p>
          <p>DigiStake</p>
          <p>Digivolve</p>
        </div>
      </div>

      <div className={styles.banner}>
        <img src="/banner.gif" alt="banner"/>
      </div>
      
    </div>
  )
}
