"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./russet.module.css"; // Importing CSS module for styling
import Head from "next/head";
import Navbar from "../../../../../Navbar/NavbarTYP";
import Footer from "../../../../../Footer/Footer";

const Russet: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <div className={styles.classic2001Potatoes}>
      <Navbar/>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Russet potatoes, Classic 2001 potatoes, baked russet potatoes, mashed russet potatoes, fried russet potatoes, sautéed russet potatoes, best potatoes for cooking"
        />
        <meta
          name="description"
          content="Explore the quality and versatility of Classic 2001 Russet Potatoes. Ideal for baking, frying, mashing, and sautéing."
        />
        <title>Classic 2001 Russet Potatoes</title>
      </Head>

     
      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.titles}>Classic 2001</h1>
          <h2 className={styles.subtitle}>Potatoes</h2>
          <p className={styles.tagline}>Time-tested quality in every bite.</p>
          <p className={styles.description}>
            Classic 2001 potatoes are celebrated for their consistent quality and exceptional taste. Their balanced
            texture and classic flavor make them a top choice for traditional recipes.
          </p>
        </div>

        <div className={styles.imageContent}>
          <Image
            src="/assets/2001.webp"
            alt="Classic 2001 Potato"
            width={350}
            height={250}
            className={styles.potatoImage}
          />
        </div>
      </main>

      <section className={styles.detailsSection}>
        <h2 className={styles.detailsTitle}>Appearance</h2>
        <p className={styles.detailsText}>
          Classic medium to large size, round to oval shape, with a lightly textured tan skin and creamy white flesh.
        </p>

        <h2 className={styles.detailsTitle}>Texture</h2>
        <p className={styles.detailsText}>
          Smooth, slightly firm; holds shape well in cooking, making it versatile for various dishes.
        </p>

        <h2 className={styles.detailsTitle}>Flavor</h2>
        <p className={styles.detailsText}>
          Rich, earthy, and mildly sweet; an ideal choice for bringing out comforting flavors.
        </p>

        <h2 className={styles.detailsTitle}>Best Served</h2>
        <ul className={styles.bestServedList}>
          <li>
            <Image
              src="/assets/baked.png"
              alt="Baked Potato"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />{" "}
            Baked or Roasted
          </li>
          <li>
            <Image
              src="/assets/sauted.png"
              alt="Sautéed Potato"
              width={50}
              height={50}
              className={styles.bestServedImage}
            />{" "}
            Pan Fried or Sautéed
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

      <section className={styles.funGifSection}>
        <h2>Watch How to Prepare</h2>
        <Link href="/rost">
          <Image
            src="/assets/cooking.gif"
            alt="Cooking Classic 2001 Potatoes"
            width={300}
            height={200}
            className={styles.cookingGif}
          />
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Russet;
