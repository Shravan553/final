'use client'; // Enables client-side rendering in Next.js
import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../../../../../Footer/Footer';
import styles from './Red.module.css';
import Navbar from '../../../../../Navbar/NavbarTYP';

const Red: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.hybrid302Potatoes}>
      <Navbar/>
      <Head>
        <meta charSet="utf-8" />
        <title>Hybrid 302 Potatoes - Flavorful & Resilient</title>
        <meta
          name="description"
          content="Hybrid 302 Potatoes, offering the best of flavor and resilience for a variety of dishes. Ideal for roasting, sautéing, mashing, and frying."
        />
        <meta
          name="keywords"
          content="Hybrid 302, potatoes, culinary, resilient potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes, versatile potatoes"
        />
        <meta name="author" content="Shravan J" />
        <meta property="og:title" content="Hybrid 302 Potatoes - Flavorful & Resilient" />
        <meta
          property="og:description"
          content="Discover Hybrid 302 Potatoes, a perfect balance of flavor and durability for all your cooking needs."
        />
        <meta property="og:image" content="/assets/hybrid.jpeg" />
        <meta property="og:url" content="http://yourwebsite.com/hybrid-302" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hybrid 302 Potatoes - Flavorful & Resilient" />
        <meta
          name="twitter:description"
          content="Hybrid 302 Potatoes are versatile and perfect for a range of dishes. Discover their flavor, texture, and best-served methods."
        />
        <meta name="twitter:image" content="/assets/hybrid.jpeg" />
      </Head>

  
      
      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Hybrid 302</h1>
          <h2 className={styles.subtitle}>Potatoes</h2>
          <p className={styles.tagline}>The best of flavor and resilience.</p>
          <p className={styles.description}>
            Hybrid 302 potatoes are cultivated for their enhanced durability and consistent texture. They perform well in various dishes, making them ideal for culinary experimentation.
          </p>
        </div>

        <div className={styles.imageContent}>
          <img src="/assets/hybrid.jpeg" alt="Hybrid 302 Potato" className={styles.potatoImage} />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Appearance</h2>
        <p className={styles.detailsText}>
          Smooth skin with a light tan color and firm, creamy white flesh.
        </p>

        <h2 className={styles.detailsTitle}>Texture</h2>
        <p className={styles.detailsText}>
          Slightly firm; versatile texture suitable for multiple cooking styles.
        </p>

        <h2 className={styles.detailsTitle}>Flavor</h2>
        <p className={styles.detailsText}>
          Mild and earthy with a subtle hint of sweetness.
        </p>

        <h2 className={styles.detailsTitle}>Best Served</h2>
        <ul className={styles.bestServedList}>
          <li>
            <img src="/assets/roasted12.png" alt="Roasted" className={styles.bestServedImage} />{' '}
            Roasted or Grilled
          </li>
          <li>
            <img src="/assets/sauted.png" alt="Sautéed" className={styles.bestServedImage} />{' '}
            Sautéed
          </li>
          <li>
            <img src="/assets/mashed.png" alt="Mashed" className={styles.bestServedImage} /> Mashed
          </li>
          <li>
            <img src="/assets/fried.png" alt="Fried" className={styles.bestServedImage} /> Fried
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Red;
