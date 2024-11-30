'use client'; // Enables client-side rendering

import React, { useEffect } from 'react';
import styles from './Hasan.module.css'; // Import CSS module
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP';
import Image from 'next/image';

const Hasan: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.hasanPotatoes}>
      <Navbar />

      <header className={styles.header}>
        <div className={styles.logo}>
          {/* Add your logo here if needed */}
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Hasan Potatoes</h1>
          <h2 className={styles.subtitle}>Robust, Nutritious, and Flavorful</h2>
          <p className={styles.tagline}>
            Bringing a rich texture and bold taste to every meal.
          </p>
          <p className={styles.description}>
            Hasan Potatoes are renowned for their hearty flavor and dense texture, making them ideal for a variety of cooking styles. They add a robust, earthy essence to meals, whether roasted, mashed, fried, or sautéed.
          </p>
        </div>

        {/* Image section */}
        <div className={styles.imageContent}>
          <Image
            src="/assets/hasan.jpeg"
            alt="Hasan Potato"
            className={styles.potatoImage1}
            width={600}
            height={400}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Appearance</h2>
        <p className={styles.detailsText}>
          Hasan Potatoes have a rustic, light brown skin with a firm, creamy flesh, giving them a distinctive, inviting look in any dish.
        </p>

        <h2 className={styles.detailsTitle}>Texture</h2>
        <p className={styles.detailsText}>
          Known for their dense, slightly starchy texture, Hasan Potatoes hold up well in cooking, providing a satisfying bite in each recipe.
        </p>

        <h2 className={styles.detailsTitle}>Flavor</h2>
        <p className={styles.detailsText}>
          With a deep, earthy flavor and subtle nutty undertones, Hasan Potatoes elevate any recipe, bringing a rich and savory taste.
        </p>

        <h2 className={styles.detailsTitle}>Best Served</h2>
        <ul className={styles.bestServedList}>
          <li>
            <Image
              src="/assets/roasted12.png"
              alt="Roasted Potato"
              className={styles.bestServedImage}
              width={100}
              height={100}
            />
            Roasted or Grilled
          </li>
          <li>
            <Image
              src="/assets/sauted.png"
              alt="Sautéed Potato"
              className={styles.bestServedImage}
              width={100}
              height={100}
            />
            Sautéed
          </li>
          <li>
            <Image
              src="/assets/mashed.png"
              alt="Mashed Potato"
              className={styles.bestServedImage}
              width={100}
              height={100}
            />
            Mashed
          </li>
          <li>
            <Image
              src="/assets/fried.png"
              alt="Fried Potato"
              className={styles.bestServedImage}
              width={100}
              height={100}
            />
            Fried
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Hasan;
