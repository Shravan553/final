"use client";

import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import Footer from "../../../../Footer/Footer";
import Nav from "../../../../Navbar/NavbarTYP";
import styles from "./Potatomilk.module.css";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Milk: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nutritionalData = useMemo(
    () => [
      { label: "Calories", value: "100 kcal" },
      { label: "Fat", value: "3g" },
      { label: "Carbohydrates", value: "18g" },
      { label: "Sugars", value: "1g" },
      { label: "Protein", value: "2g" },
      { label: "Calcium", value: "300mg" },
      { label: "Vitamin D", value: "2.5µg" },
    ],
    []
  );

  const healthBenefits = useMemo(
    () => [
      "Rich in vitamins and minerals",
      "Low in calories and fat",
      "Dairy-free and lactose-free",
      "Supports digestive health",
    ],
    []
  );

  const recipes = useMemo(
    () => [
      {
        title: "Potato Milk Smoothie",
        description:
          "Blend potato milk with your favorite fruits for a creamy smoothie.",
      },
      {
        title: "Potato Milk Pancakes",
        description:
          "Use potato milk in pancake batter for fluffy, delicious pancakes.",
      },
      {
        title: "Potato Milk Mashed Potatoes",
        description:
          "Add potato milk for a creamy texture in your mashed potatoes.",
      },
    ],
    []
  );

  return (
    <section>
      <Nav />
      {/* SEO Meta Tags */}
      <Head>
        <title>Potato Milk: Nutrition, Health Benefits & Recipes</title>
        <meta
          name="description"
          content="Discover the benefits of potato milk - a lactose-free, vegan alternative. Explore nutritional facts, health benefits, and easy recipes for potato milk."
        />
        <meta
          name="keywords"
          content="potato milk, potato milk recipes, vegan milk alternative, lactose-free milk, potato milk nutrition, potato milk benefits, how to make potato milk, dairy-free milk"
        />
        <meta name="author" content="Jestina James" />
      </Head>

      {/* Header Section */}
      <header className={styles.headerSection}>
        <h1 className={styles.headerTitle3}>Potato Milk</h1>
        <p className={styles.headerSubtitle3}>
          The Nutrient-Packed Dairy-Free Alternative
        </p>
      </header>

      {/* Product Information Section */}
      <div className={styles.productInfo3}>
        <img
          src="/assets/milk.webp"
          alt="Potato Milk"
          className={styles.productImage3}
          loading="lazy"
        />
        <div className={styles.productDetails3}>
          <h2>What is Potato Milk?</h2>
          <p>
            Potato milk is a creamy and delicious non-dairy milk made from
            potatoes. It’s a fantastic choice for those who are lactose
            intolerant or looking for a plant-based alternative. Packed with
            nutrients, potato milk can be used in smoothies, coffee, and various
            recipes.
          </p>
        </div>
      </div>

      {/* Nutritional Facts Section */}
      <h2 className={styles.sectionTitle3}>Nutritional Facts (Per 1 Cup)</h2>
      <div className={styles.nutritionInfo3}>
        {nutritionalData.map((nutrient, index) => (
          <div className={styles.nutrient3} key={index}>
            <strong>{nutrient.label}:</strong> {nutrient.value}
          </div>
        ))}
      </div>

      {/* Health Benefits Section */}
      <h2 className={styles.sectionTitle3}>Health Benefits</h2>
      <ul className={styles.benefitsList3}>
        {healthBenefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      {/* Recipes Section */}
      <h2 className={styles.sectionTitle3}>Delicious Potato Milk Recipes</h2>
      <div className={styles.recipes3}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>

      

      {/* Footer Section */}
      <Footer />
    </section>
  );
};

export default Milk;
