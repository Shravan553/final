'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';  // Import from 'next/navigation'
import Head from 'next/head';
import Nav from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';
import styles from './Sell.module.css';

const Sell: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [potatoName, setPotatoName] = useState<string | undefined>(undefined);
  
  const searchParams = useSearchParams();  // Use useSearchParams hook to access query parameters

  useEffect(() => {
    setIsClient(true);
    const potatoQuery = searchParams.get('potatoName');
    if (potatoQuery) {
      setPotatoName(potatoQuery);  // Set potatoName state if it's found
    }
  }, [searchParams]);

  // States for form input values
  const [personName, setPersonName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // State for form errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    let formErrors: { [key: string]: string } = {};
    if (!personName) formErrors.personName = 'Name is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) formErrors.email = 'A valid email is required';
    if (!phone || !/^\d+$/.test(phone)) formErrors.phone = 'Phone number must contain only digits';
    if (!address) formErrors.address = 'Address is required';
    if (!quantity || parseInt(quantity) <= 0) formErrors.quantity = 'Quantity must be a positive number';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`You have requested to Sell: ${potatoName}\nQuantity: ${quantity}`);
    }
  };

  if (!isClient) {
    return null;  // Optionally, return null or a loading spinner until the component is fully client-side
  }

  return (
    <div>
      <Nav />
      <div className={styles.buyContainer}>
        <Head>
          <title>Sell Potatoes | AGPotato</title>
        </Head>

        {potatoName ? (
          <>
            <h2 className={styles.buyTitle}>Selling: {potatoName}</h2>
            <p className={styles.buyDescription}>Please fill out the form to sell your potatoes.</p>
            <form className={styles.buyForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="potatoName">Potato Name</label>
                <input
                  type="text"
                  id="potatoName"
                  value={potatoName}
                  readOnly
                  className={styles.readonlyInput}
                />
              </div>

              {/* Name Field */}
              <div className={styles.formGroup}>
                <label htmlFor="personName">Your Name</label>
                <input
                  type="text"
                  id="personName"
                  placeholder="Enter your name"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                />
                {errors.personName && <p className={styles.error}>{errors.personName}</p>}
              </div>

              {/* Email Field */}
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </div>

              {/* Phone Field */}
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
              </div>

              {/* Address Field */}
              <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                {errors.address && <p className={styles.error}>{errors.address}</p>}
              </div>

              {/* Quantity Field */}
              <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                {errors.quantity && <p className={styles.error}>{errors.quantity}</p>}
              </div>

              {/* Additional Message */}
              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Message</label>
                <textarea
                  id="message"
                  placeholder="Any special instructions or requests"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className={styles.buyButton}>Submit Order</button>
            </form>
          </>
        ) : (
          <p className={styles.errorMessage}>Potato type not selected!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Sell;
