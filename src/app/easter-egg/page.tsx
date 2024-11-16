"use client";
import React from "react";
import Image from "next/image";
import styles from "../../app/styles/EasterEgg.module.css";

const EasterEgg = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.leonard}>Oh non Léonard !</h1>
      <Image
        className={styles.leonardpicture}
        src="/leonard.jpg"
        alt="Leonard"
        width={500}
        height={500}
      />
    </div>
  );
};

export default EasterEgg;
