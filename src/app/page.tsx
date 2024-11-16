// src/app/page.tsx
"use client";

import { useRouter } from "next/navigation"; // Assurez-vous d'utiliser next/navigation
import styles from "../app/styles/page.module.css"; // Ajustez le chemin si nécessaire

const Home = () => {
  const router = useRouter();

  const goToGift = () => {
    router.push("/cadeau");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JOYEUX ANNIVERSSAIRE ÉPAVE 🎉!</h1>
      <p className={styles.description}>
        Un cadeau spécial t&apos;attend... Clique pour le découvrir !
      </p>
      <button className={styles.button} onClick={goToGift}>
        Découvrir mon cadeau 🎁
      </button>
    </div>
  );
};

export default Home;
