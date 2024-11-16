// src/app/page.tsx
"use client";

import { useRouter } from "next/navigation";
import styles from "../app/styles/page.module.css";

const Home = () => {
  const router = useRouter();

  const goToGift = () => {
    router.push("/cadeau");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JOYEUX ANNIVERSAIRE ÉPAVE 🎉!</h1>
      <p className={styles.description}>23 ans ça se fête ! 🎂</p>
      <p className={styles.description}>
        Un cadeau spécial t&apos;attend... Clique pour le découvrir !
      </p>
      <button className={styles.button} onClick={goToGift}>
        Découvrir mon cadeau 🎁
      </button>
      {/* Bouton invisible pour l'easter egg */}
      <a href="/easter-egg" className={styles.hiddenButton}></a>
    </div>
  );
};

export default Home;
