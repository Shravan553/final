'use client'; // Enables client-side rendering in Next.js
import { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './chip.module.css';
import Footer from '../../../../../Footer/Footer';
import Navbar from '../../../../../Navbar/NavbarTYP'; // Import the styles module

const Chip: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.chipsonaPotatoes}>
        <Navbar/>
      <Head>
        <title>Chipsona Potatoes - Perfect for Crispy Snacks</title>
        <meta
          name="description"
          content="Explore Chipsona potatoes, ideal for making crispy snacks like chips, fries, and fried dishes. Discover recipes and more."
        />
        <meta
          name="keywords"
          content="Chipsona potatoes, potato recipes, crispy snacks, fried potatoes, potato chips, potato fries"
        />
        <meta property="og:title" content="Chipsona Potatoes - Perfect for Crispy Snacks" />
        <meta
          property="og:description"
          content="Chipsona potatoes are perfect for making crispy snacks like potato chips and fries. Learn more about their texture, flavor, and best-serving methods."
        />
        <meta property="og:image" content="/assets/chipsona.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/chipsona-potatoes" />
        <meta name="twitter:title" content="Chipsona Potatoes - Perfect for Crispy Snacks" />
        <meta
          name="twitter:description"
          content="Chipsona potatoes are perfect for making crispy snacks like potato chips and fries. Learn more about their texture, flavor, and best-serving methods."
        />
        <meta name="twitter:image" content="/assets/chipsona.jpg" />
      </Head>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Chipsona Potatoes</h1>
          <h2 className={styles.subtitle}>Perfect for Crispy Snacks</h2>
          <p className={styles.tagline}>High in starch, low in sugar, ideal for chips.</p>
          <p className={styles.description}>
            Chipsona potatoes are bred for producing high-quality potato chips and fries. With their pale yellow skin and
            firm texture, these potatoes ensure a crispy and delicious snacking experience.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/chipsona.jpg"
            alt="Chipsona Potato"
            width={350}
            height={350}
            className={styles.potatoImage}
            priority
          />
        </div>
      </main>

      <section className={styles.imageGallery}>
        <Image
          src="/assets/chi1.jpg"
          alt="Chipsona Potato Chips"
          width={150}
          height={150}
          className={styles.galleryImage}
        />
        <Image
          src="/assets/chi2.jpg"
          alt="Crispy Fried Chipsona Potatoes"
          width={150}
          height={150}
          className={styles.galleryImage}
        />
        <Image
          src="/assets/chi3.jpg"
          alt="Golden Chipsona Fries"
          width={150}
          height={150}
          className={styles.galleryImage}
        />
      </section>

      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Appearance</h2>
        <p className={styles.detailsText}>
          Chipsona potatoes have pale yellow skin and white flesh, perfect for crispy fried snacks.
        </p>

        <h2 className={styles.detailsTitle}>Texture</h2>
        <p className={styles.detailsText}>Firm and dense; holds its shape well after frying.</p>

        <h2 className={styles.detailsTitle}>Flavor</h2>
        <p className={styles.detailsText}>
          Neutral taste with a hint of sweetness, making it ideal for both salty and savory snacks.
        </p>

        <h2 className={styles.detailsTitle}>Best Served</h2>
        <ul className={styles.bestServedList}>
          <li>
            <Image
              src="/assets/chips.png"
              alt="Chips"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />
            Chips
          </li>
          <li>
            <Image
              src="/assets/crispy_fries.png"
              alt="Crispy Fries"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />
            Crispy Fries
          </li>
          <li>
            <Image
              src="/assets/fried56.png"
              alt="Fried Snacks"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />
            Fried Snacks
          </li>
        </ul>
      </section>
      <Footer/>
    </div>
  );
};

export default Chip;
