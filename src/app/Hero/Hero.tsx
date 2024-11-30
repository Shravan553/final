"use client";

import React, { useState, useEffect } from 'react';
import styles from "../Hero/Hero.module.css";
import Image from 'next/image';
import NavLink from "next/link";
import Head from 'next/head';

// Import images directly in code
import img2 from '/assets/mm.png';
import img3 from '../../assets/websiteimage3.jpg';
import img4 from '../../assets/3-01.jpeg';
import img5 from '../../assets/websiteimage7.png';
import img7 from '../../assets/websiteimage10.png';

// Define the types for the slides
interface Slide {
  image: string;
  heading: string;
  description: string;
}

const slides: Slide[] = [
    {
      image: '/assets/websiteimage7.png', // Direct path
      heading: "AGPotato - Crust & Pure, Sustainable Potato Flour",
      description: "Committed to producing high-quality potato flour through sustainable practices, rich in nutrients and versatile.",
    },
    {
      image: '/assets/3-01.jpeg', // Direct path
      heading: "Global Excellence in Potato Export",
      description: "Exporting the Best of Potatoes with a Focus on Sustainability.",
    },
    {
      image: '/assets/ma.png', // Direct path
      heading: "AGPotato - Leading the Way in Farming Innovation",
      description: "Empowering farmers with cutting-edge, sustainable farming techniques for optimized yields and quality.",
    },
    {
      image: '/assets/websiteimage3.jpg', // Direct path
      heading: "AGPotato - Revolutionizing the Future of Agriculture",
      description: "Transforming potato farming with advanced eco-friendly techniques, fostering a sustainable agricultural future.",
    },
    {
      image: '/assets/websiteimage10.png', // Direct path
      heading: "AGPotato - Natural & Sustainable Potato Flour",
      description: "High-quality potato flour produced through sustainable practices, versatile and nutrient-rich.",
    }
  ];

const WebHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false); // Initialize without `window`

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [slides.length]);

  return (
    <div className={styles.webHero}>
      {/* Helmet for dynamic metadata */}
      <Head>
        <title>AGPotato - Excellence in Sustainable Potato Products</title>
        <meta
          name="description"
          content="AGPotato leads in sustainable potato farming, producing nutrient-rich potato flour. Our eco-friendly farming techniques and global export services ensure the highest quality products. Explore our commitment to sustainability in agriculture."
        />
        <meta name="keywords" content="Potato, Sustainable Farming, AGPotato, Potato Flour, Agriculture Innovation, Sustainable Agriculture, Eco-Friendly Farming, Potato Products, Export, Nutrient-Rich Potato Flour, Sustainable Practices" />
        <meta name="author" content="AGPotato Team" />
        <meta property="og:title" content="AGPotato - Revolutionizing Sustainable Potato Farming" />
        <meta
          property="og:description"
          content="Explore AGPotato's commitment to sustainability and innovation in potato farming and global export. Our high-quality, eco-friendly potato flour promotes a sustainable agricultural future."
        />
        <meta property="og:image" content={slides[currentIndex].image} />
        <meta property="og:url" content="https://www.agpotato.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AGPotato - Sustainable Potato Products" />
        <meta
          name="twitter:description"
          content="AGPotato is your trusted source for sustainable potato flour and eco-friendly farming solutions. Join us in promoting sustainable agriculture and high-quality products."
        />
        <meta name="twitter:image" content={slides[currentIndex].image} />
        <meta name="twitter:url" content="https://www.agpotato.com" />
      </Head>

      {/* Hero Section */}
      <div className={styles.webHeroSlider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.webHeroSlide} ${index === currentIndex ? styles.webActive : ''}`}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              layout="fill"  // Adjust layout to cover the container size
              objectFit="cover" // Ensures the image covers the whole slide area
              className={styles.slideImage} // If you'd like to apply custom styles
            />
            <div className={styles.webHeroText}>
              <h1>{slide.heading}</h1>
              {!isMobile && <p>{slide.description}</p>}
            </div>
          </div>
        ))}
        <div className={styles.webSliderControls}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.webSliderDot} ${index === currentIndex ? styles.webActive : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebHero;
