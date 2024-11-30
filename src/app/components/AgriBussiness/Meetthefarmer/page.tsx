

"use client";

import React, { useEffect } from 'react';
// import Scroll from './scroll';
import Head from 'next/head';

import Footer from "../../../Footer/Footer"
import NavbarTYP from "../../../Navbar/NavbarTYP"

import styles from './Meetthefarmer.module.css';  // Assuming you're using CSS Modules



const Meetfarmer: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
  }, []);

  return (
    <div className={styles.supplyChainWrapper}>
      <Head>
        <title>Meet the Farmer | AGPotato</title>
        <meta name="description" content="Meet the dedicated farmers behind AGPotato. Learn about their contributions, sustainability practices, and their passion for growing high-quality potatoes." />
        <meta name="keywords" content="farmers, AGPotato, sustainability, potato farming, agricultural community" />
        <meta name="author" content="AGPotato" />
        <meta property="og:title" content="Meet the Farmer | AGPotato" />
        <meta property="og:description" content="Discover the faces behind AGPotato's premium potatoes. Meet the farmers, learn about their sustainable practices, and their impact on global agriculture." />
        <meta property="og:image" content="/assets/Meetfarmer1.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/meet-the-farmer" />
      </Head>
      <NavbarTYP/>
      {/* Header Section with Image */}
      <div className={styles.supply1ChainHeader}>
        <img src="/assets/Meetfarmer1.jpg" alt="Potato Supply Chain Header" className={styles.meetHeaderImage} />
        <h1 className={styles.headerTitle1}>Meet The Farmer</h1>
      </div>

      {/* Meet the Farmer Section */}
      <section className={styles.meetFarmerInfo}>
        <h2 className={styles.meetFarmerHeading}>Our Farmers, Our Heroes</h2>
        <p className={styles.meetFarmerParagraph}>
          At the heart of our supply chain are dedicated farmers who nurture the land and cultivate the finest potatoes. 
          Their passion, expertise, and hard work ensure that only the best produce reaches your table. We take pride in 
          building strong relationships with our farmers, supporting sustainable practices, and celebrating their invaluable 
          contributions to the community. Meet the people who grow with care and harvest with purpose – they are the lifeblood 
          of our mission to bring quality produce from the farm to your kitchen.
        </p>
      </section>

      <section className={styles.sustainabilitysTracker}>
        <div className={styles.impactsDetails}>
          <div className={styles.impactsCards}>
            <h3>Reduced Carbon Footprint</h3>
            <p>Your purchase saves 2kg of CO₂ emissions!</p>
          </div>
          <div className={styles.impactsCards}>
            <h3>Farmer Empowerment</h3>
            <p>Part of your purchase supports education programs for farmers.</p>
          </div>
        </div>
      </section>

      <section className={styles.farmerHighlight}>
        <div className={styles.farmerHighlightContent}>
          <h2 className={styles.farmerHighlightHeading}>Behind Every Potato: Meet the Growers</h2>
          <p className={styles.farmerHighlightParagraph}>
            AGPotato isn’t just about produce—it’s about people. Our farmers are innovators, 
            committed to sustainable agriculture and passionate about delivering high-quality crops. 
            By working directly with growers, we bridge the gap between farms and kitchens, 
            ensuring every bite is a testament to their dedication. With AGPotato, you're not just 
            buying potatoes; you're supporting a community that values transparency, quality, 
            and sustainability from the ground up.
          </p>
        </div>
      </section>

      <section className={styles.farmerGallery}>
        <h2 className={styles.galleryHeading}>Farmer Stories Gallery</h2>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItems}>
            <img src="/assets/Farmer1.jpeg" alt="Farmer 1" />
          </div>
          <div className={styles.galleryItems}>
            <img src="/assets/Farmer2.jpeg" alt="Farmer 2" />
          </div>
          <div className={styles.galleryItems}>
            <img src="/assets/Gimage7.jpeg" alt="Farmer 3" />
          </div>
          <div className={styles.galleryItems}>
            <img src="/assets/Gimage13.jpeg" alt="Farmer 4" />
          </div>
        </div>
      </section>

      

      {/* <Scroll /> */}
      <Footer />
    </div>
  );
};

export default Meetfarmer;
