'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import styles from './Jyoti.module.css'; // Import CSS module
import Footer from '../../../../../Footer/Footer'; 
import Navbar from '../../../../../Navbar/NavbarTYP'; // Update path as per your structure
import Head from 'next/head'; // Import Next.js Head component

const Jyoti: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.jyotiPotatoes}>
      <Navbar />
      <Head>
        <title>Jyoti Potatoes - Smooth, Balanced, and Flavorful</title>
        <meta
          name="description"
          content="Jyoti Potatoes are perfect for enhancing any dish with its smooth, balanced flavor and texture. Ideal for roasting, sautéing, mashing, or frying."
        />
        <meta
          name="keywords"
          content="Jyoti potatoes, smooth potatoes, balanced potatoes, flavorful potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes"
        />
        <meta property="og:title" content="Jyoti Potatoes - Smooth, Balanced, and Flavorful" />
        <meta
          property="og:description"
          content="Jyoti Potatoes are perfect for enhancing any dish with its smooth, balanced flavor and texture. Ideal for roasting, sautéing, mashing, or frying."
        />
        <meta
          property="og:image"
          content="/assets/jyothi.webp" // Local image path
        />
        <meta property="og:url" content="https://yourwebsite.com/jyoti-potatoes" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          {/* Add your logo here */}
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Jyoti Potatoes</h1>
          <h2 className={styles.subtitle}>Smooth, Balanced, and Flavorful</h2>
          <p className={styles.tagline}>Perfect for enhancing any dish with its subtle flavors.</p>
          <p className={styles.description}>
            Jyoti Potatoes are celebrated for their balanced flavor and texture, making them an ideal choice for various cooking methods. They bring a rich, earthy taste that enhances any meal, whether roasted, mashed, fried, or sautéed.
          </p>
        </div>

        <div className={styles.imageContent}>
          <img
            src="/assets/jyothi.webp" // Local image path
            alt="Jyoti Potato"
            className={styles.potatoImage}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Appearance</h2>
        <p className={styles.detailsText}>
          Jyoti Potatoes have a smooth skin and a light, creamy interior, providing an inviting look and versatile use in dishes.
        </p>

        <h2 className={styles.detailsTitle}>Texture</h2>
        <p className={styles.detailsText}>
          Known for a balanced, slightly waxy texture, Jyoti Potatoes retain their structure well during cooking, providing an enjoyable bite in each recipe.
        </p>

        <h2 className={styles.detailsTitle}>Flavor</h2>
        <p className={styles.detailsText}>
          Jyoti Potatoes feature a mild, earthy flavor with a hint of natural sweetness, making them an adaptable ingredient for numerous recipes.
        </p>

        <h2 className={styles.detailsTitle}>Best Served</h2>
        <ul className={styles.bestServedList}>
          <li>
            <img
              src="/assets/roasted12.png" // Local image path
              alt="Roasted Potato"
              className={styles.bestServedImage}
            />{' '}
            Roasted or Grilled
          </li>
          <li>
            <img
              src="/assets/sauted.png" // Local image path
              alt="Sautéed Potato"
              className={styles.bestServedImage}
            />{' '}
            Sautéed
          </li>
          <li>
            <img
              src="/assets/mashed.png" // Local image path
              alt="Mashed Potato"
              className={styles.bestServedImage}
            />{' '}
            Mashed
          </li>
          <li>
            <img
              src="/assets/fried.png" // Local image path
              alt="Fried Potato"
              className={styles.bestServedImage}
            />{' '}
            Fried
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default Jyoti;
