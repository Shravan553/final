// src/components/LogoSlider.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import styles from './LogoSlider.module.css';

const LogoSlider: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isVisible to true when the section comes into view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Trigger the animation when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.imageSliderLog}>
      <Head>
        <title>Our Clients - Trusted Partners</title>
        <meta
          name="description"
          content="Discover the brands we work with. Our trusted clients include Blink, DUNZO, Swiggy, Flipkart, and many more."
        />
        <meta
          name="keywords"
          content="client logos, business partners, Blink, DUNZO, BigBasket, Swiggy, Reliance, Zepto, More, client brands"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <section
        ref={sectionRef}
        className={`${styles.logoSliders} ${isVisible ? styles.visible : ''}`}
      >
        {/* <h2>Our Clients</h2> */}
        <div className={styles.logoRows}>
          <div className={styles.logoTracks}>
            <img src="/assets/Blink.png" alt="Blink logo" className={styles.logos} loading="lazy" />
            <img src="/assets/buddha.png" alt="Buddha logo" className={styles.logos} loading="lazy" />
            <img src="/assets/DUNZO.png" alt="DUNZO logo" className={styles.logos} loading="lazy" />
            <img src="/assets/BigBasket.png" alt="BigBasket logo" className={styles.logos} loading="lazy" />
            <img src="/assets/flip.png" alt="Flipkart logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Reliance.png" alt="Reliance logo" className={styles.logos} loading="lazy" />
            <img src="/assets/swiggy.jpg" alt="Swiggy logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Zepto.png" alt="Zepto logo" className={styles.logos} loading="lazy" />
            <img src="/assets/More.jpg" alt="More logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Blink.png" alt="Blink logo" className={styles.logos} loading="lazy" />
            <img src="/assets/buddha.png" alt="Buddha logo" className={styles.logos} loading="lazy" />
            <img src="/assets/DUNZO.png" alt="DUNZO logo" className={styles.logos} loading="lazy" />
            <img src="/assets/BigBasket.png" alt="BigBasket logo" className={styles.logos} loading="lazy" />
            <img src="/assets/flip.png" alt="Flipkart logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Reliance.png" alt="Reliance logo" className={styles.logos} loading="lazy" />
            <img src="/assets/swiggy.jpg" alt="Swiggy logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Zepto.png" alt="Zepto logo" className={styles.logos} loading="lazy" />
            <img src="/assets/More.jpg" alt="More logo" className={styles.logos} loading="lazy" /><img src="/assets/Blink.png" alt="Blink logo" className={styles.logos} loading="lazy" />
            <img src="/assets/buddha.png" alt="Buddha logo" className={styles.logos} loading="lazy" />
            <img src="/assets/DUNZO.png" alt="DUNZO logo" className={styles.logos} loading="lazy" />
            <img src="/assets/BigBasket.png" alt="BigBasket logo" className={styles.logos} loading="lazy" />
            <img src="/assets/flip.png" alt="Flipkart logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Reliance.png" alt="Reliance logo" className={styles.logos} loading="lazy" />
            <img src="/assets/swiggy.jpg" alt="Swiggy logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Zepto.png" alt="Zepto logo" className={styles.logos} loading="lazy" />
            <img src="/assets/More.jpg" alt="More logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Blink.png" alt="Blink logo" className={styles.logos} loading="lazy" />
            <img src="/assets/buddha.png" alt="Buddha logo" className={styles.logos} loading="lazy" />
            <img src="/assets/DUNZO.png" alt="DUNZO logo" className={styles.logos} loading="lazy" />
            <img src="/assets/BigBasket.png" alt="BigBasket logo" className={styles.logos} loading="lazy" />
            <img src="/assets/flip.png" alt="Flipkart logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Reliance.png" alt="Reliance logo" className={styles.logos} loading="lazy" />
            <img src="/assets/swiggy.jpg" alt="Swiggy logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Zepto.png" alt="Zepto logo" className={styles.logos} loading="lazy" />
            <img src="/assets/More.jpg" alt="More logo" className={styles.logos} loading="lazy" /><img src="/assets/Blink.png" alt="Blink logo" className={styles.logos} loading="lazy" />
            <img src="/assets/buddha.png" alt="Buddha logo" className={styles.logos} loading="lazy" />
            <img src="/assets/DUNZO.png" alt="DUNZO logo" className={styles.logos} loading="lazy" />
            <img src="/assets/BigBasket.png" alt="BigBasket logo" className={styles.logos} loading="lazy" />
            <img src="/assets/flip.png" alt="Flipkart logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Reliance.png" alt="Reliance logo" className={styles.logos} loading="lazy" />
            <img src="/assets/swiggy.jpg" alt="Swiggy logo" className={styles.logos} loading="lazy" />
            <img src="/assets/Zepto.png" alt="Zepto logo" className={styles.logos} loading="lazy" />
            <img src="/assets/More.jpg" alt="More logo" className={styles.logos} loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoSlider;
