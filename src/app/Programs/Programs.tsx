"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Programs.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// Define program data types
interface ProgramData {
  src: string;
  title: string;
  link: string;
}

// Program data
const programs: ProgramData[] = [
  { src: "/assets/supply.jpg", title: "Supply Chain", link: "/supply-chain" },
  { src: "/assets/bypro.jpg", title: "Potato By Product", link: "/potato-by-product" },
  { src: "/assets/expo.jpg", title: "Export Excellence", link: "/export-excellence" },
  { src: "/assets/cold.png", title: "Cold Storage", link: "/Coldstorage" },
  { src: "/assets/flo.jpg", title: "Frozen Products", link: "/frozen-products" },
  { src: "/assets/far.jpg", title: "Meet the Farmer", link: "/Meetfarmer" },
];

const Programs: React.FC = () => {
  // Correctly type and initialize programRefs
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animated);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe each ref
    programRefs.current.forEach((program) => {
      if (program) observer.observe(program);
    });

    return () => {
      // Cleanup observers
      programRefs.current.forEach((program) => {
        if (program) observer.unobserve(program);
      });
    };
  }, []);

  return (
    <div className={styles.programs}>
      <Head>
        <title>Our Programs - AGPotato</title>
        <meta
          name="description"
          content="Explore AGPotato's various programs including Supply Chain, Potato By Product, Export Excellence, Cold Storage, Frozen Products, and Meet the Farmer."
        />
        <meta
          name="keywords"
          content="AGPotato, supply chain, potato by product, export excellence, cold storage, frozen products, meet the farmer, agricultural programs"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {programs.map((program, index) => (
       

<div
  key={index}
  className={styles.program}
  ref={(el) => {
    programRefs.current[index] = el as HTMLDivElement | null; // Explicit type assertion
  }}
>
          <Link href={program.link} passHref>
            <Image
              src={program.src}
              alt={program.title}
              width={400} // Adjust as needed
              height={300} // Adjust as needed
              className={styles.programImage}
            />
          </Link>
          <div className={styles.caption}>
            <h2 className={styles.programTitle}>{program.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
