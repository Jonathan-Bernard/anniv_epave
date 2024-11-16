"use client";
import React from "react";
import Image from "next/image";
import styles from "../../app/styles/EasterEgg.module.css";

const EasterEgg = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.leonardpicture}
        src="/leonard.jpg"
        alt="Leonard"
        width={500}
        height={500}
      />
      <h1 className={styles.text}>Je t&apos;emmerde connard !</h1>
    </div>
  );
};

export default EasterEgg;
