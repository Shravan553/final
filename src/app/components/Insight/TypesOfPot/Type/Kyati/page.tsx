"use client";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./kyati.module.css"; // Importing CSS module
import Footer from "../../../../../Footer/Footer";
import Navbar from "../../../../../Navbar/NavbarTYP"; // Assuming Footer is in the same structure

const Kyati: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.kyatiPotatoes}>
        <Navbar/>
      <Head>
        <title>Kyati Potatoes - Distinctive and Versatile</title>
        <meta
          name="description"
          content="Kyati Potatoes are cherished for their firm texture and earthy taste, making them excellent for a wide range of dishes. Ideal for roasting, sautéing, mashing, and frying."
        />
        <meta
          name="keywords"
          content="Kyati Potatoes, versatile potatoes, roasted potatoes, sautéed potatoes, mashed potatoes, fried potatoes"
        />
        <meta name="author" content="Your Name or Company" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Kyati Potatoes - Distinctive and Versatile" />
        <meta
          property="og:description"
          content="Kyati Potatoes are cherished for their firm texture and earthy taste, making them excellent for a wide range of dishes. These potatoes bring a natural depth to meals."
        />
        <meta property="og:image" content="/assets/kyati.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/kyati-potatoes" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kyati Potatoes - Distinctive and Versatile" />
        <meta
          name="twitter:description"
          content="Kyati Potatoes are cherished for their firm texture and earthy taste, perfect for roasting, sautéing, mashing, or frying."
        />
        <meta name="twitter:image" content="/assets/kyati.jpg" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>{/* Add your logo here */}</div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Kyati Potatoes</h1>
          <h2 className={styles.subtitle}>Distinctive and Versatile</h2>
          <p className={styles.tagline}>An ideal choice for both texture and flavor.</p>
          <p className={styles.description}>
            Kyati Potatoes are cherished for their firm texture and earthy taste, making them excellent for a wide range of dishes. These potatoes bring a natural depth to meals and can be roasted, sautéed, mashed, or fried to perfection.
          </p>
        </div>

        {/* Image Section */}
        <div className={styles.imageContent}>
          <Image
            src="/assets/kyati.jpg"
            alt="Kyati Potato"
            width={350}
            height={250}
            className={styles.potatoImage}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Appearance</h2>
        <p className={styles.detailsText}>
          Kyati Potatoes feature a light, smooth skin with a creamy interior, making them both visually appealing and versatile.
        </p>

        <h2 className={styles.detailsTitle}>Texture</h2>
        <p className={styles.detailsText}>
          Known for their firm and slightly waxy texture, these potatoes hold up well in various cooking methods, ensuring a satisfying bite.
        </p>

        <h2 className={styles.detailsTitle}>Flavor</h2>
        <p className={styles.detailsText}>
          Kyati Potatoes offer a mild, earthy flavor with a hint of nuttiness, making them a flavorful addition to any dish.
        </p>

        <h2 className={styles.detailsTitle}>Best Served</h2>
        <ul className={styles.bestServedList}>
          <li>
            <Image
              src="/assets/roasted12.png"
              alt="Roasted Potato"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />{" "}
            Roasted or Grilled
          </li>
          <li>
            <Image
              src="/assets/sauted.png"
              alt="Sautéed Potato"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />{" "}
            Sautéed
          </li>
          <li>
            <Image
              src="/assets/mashed.png"
              alt="Mashed Potato"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />{" "}
            Mashed
          </li>
          <li>
            <Image
              src="/assets/fried.png"
              alt="Fried Potato"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />{" "}
            Fried
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Kyati;
