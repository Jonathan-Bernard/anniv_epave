"use client";
// pages/Cadeau.tsx
import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import styles from "../styles/Cadeau.module.css"; // Assurez-vous que le chemin vers le CSS est correct

const Cadeau = () => {
  useEffect(() => {
    // Lancer les confettis au chargement de la page
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Surprise 🎉!</h1>
      <p className={styles.description}>
        Voilà une cagnotte spéciale pour toi. Clique sur le lien pour la
        découvrir ❤️
      </p>
      <a
        href="https://lydia-app.com/pots?id=37591-la-moula-pour-l-epave"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        Voir mon cadeau 🎁
      </a>
    </div>
  );
};

export default Cadeau;
