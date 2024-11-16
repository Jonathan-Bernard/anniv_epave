"use client";
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import styles from "../../app/styles/Cadeau.module.css";
import Image from "next/image";

const Cadeau = () => {
  useEffect(() => {
    confetti({
      particleCount: 1000,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Surprise 🎉!</h1>
      <p className={styles.description}>Voilà une</p>
      <p className={styles.cagnotte}>CAGNOTTE</p>
      <p className={styles.description}>spéciale pour toi.</p>
      <p className={styles.description}>
        Tu pourras t&apos;acheter une cafetière pour te réveiller le matin 😊
      </p>
      <Image
        src="/cafetiere.jpg"
        alt="Cadeau"
        width={300}
        height={300}
        className={styles.image}
      />
      <p className={styles.description}>
        Clique sur le lien pour la découvrir ❤️
      </p>

      <a
        href="https://lydia-app.com/pots?id=37591-la-moula-pour-l-epave"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Voir la cagnotte 🤑
      </a>
    </div>
  );
};

export default Cadeau;
