'use client'; 

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Head from 'next/head';
import Nav from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';
import { motion } from 'framer-motion';
import styles from './Buy.module.css';

const Buy: React.FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [potatoName, setPotatoName] = useState<string | undefined>(undefined);

  const searchParams = useSearchParams();

  useEffect(() => {
    setIsClient(true);
    const potatoQuery = searchParams.get('potatoName');
    if (potatoQuery) {
      setPotatoName(potatoQuery);
    }
  }, [searchParams]);

  // States for form inputs
  const [personName, setPersonName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // States for validation errors
  const [errors, setErrors] = useState<{
    personName?: string;
    email?: string;
    phone?: string;
    address?: string;
    quantity?: string;
  }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const newErrors: {
      personName?: string;
      email?: string;
      phone?: string;
      address?: string;
      quantity?: string;
    } = {};

    // Validate name
    if (!personName.trim()) {
      newErrors.personName = 'Name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10}$/; // Example: requires exactly 10 digits
    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    // Validate address
    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    // Validate quantity
    const quantityNumber = parseInt(quantity, 10);
    if (!quantity.trim()) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(quantityNumber) || quantityNumber <= 0) {
      newErrors.quantity = 'Enter a valid quantity';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(`You have requested to buy: ${potatoName}\nQuantity: ${quantity}`);
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Nav />
      <div className={styles.buyContainer}>
        <Head>
          <title>Buy Potatoes Online | Order Fresh Potatoes - AGPotato</title>
        </Head>

        {potatoName ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.buyTitle}>Buying: {potatoName}</h2>
            <p className={styles.buyDescription}>
              Please fill out the form to purchase your potatoes.
            </p>
            <motion.form
              className={styles.buyForm}
              onSubmit={handleSubmit}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
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
              <div className={styles.formGroup}>
                <label htmlFor="personName">Your Name</label>
                <motion.input
                  whileFocus={{ borderColor: '#3498db' }}
                  type="text"
                  id="personName"
                  placeholder="Enter your name"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  required
                />
                {errors.personName && (
                  <span className={styles.error}>{errors.personName}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <motion.input
                  whileFocus={{ borderColor: '#3498db' }}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <motion.input
                  whileFocus={{ borderColor: '#3498db' }}
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <motion.textarea
                  whileFocus={{ borderColor: '#3498db' }}
                  id="address"
                  placeholder="Enter your address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                {errors.address && (
                  <span className={styles.error}>{errors.address}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity</label>
                <motion.input
                  whileFocus={{ borderColor: '#3498db' }}
                  type="number"
                  id="quantity"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
                {errors.quantity && (
                  <span className={styles.error}>{errors.quantity}</span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Additional Message</label>
                <motion.textarea
                  whileFocus={{ borderColor: '#3498db' }}
                  id="message"
                  placeholder="Any special instructions or requests"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <motion.button
                type="submit"
                className={styles.buyButton}
                whileHover={{ scale: 1.1, backgroundColor: '#2980b9' }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Order
              </motion.button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.p
            className={styles.errorMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Potato type not selected!
          </motion.p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
