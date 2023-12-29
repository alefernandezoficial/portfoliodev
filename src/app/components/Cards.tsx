
// Cards.module.css
/* Agrega tus estilos CSS según sea necesario */

// Card.tsx
'use client'
import React, { useState } from 'react';
import styles from "./Cards.module.css";
import Image from 'next/image';

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.imagecontainer}>
        {showImage && 
        <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={150}
      />}
      </div>
    </div>
  );
};

export default Card;
