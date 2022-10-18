import { useState } from 'react';
import type { NextPage } from "next";
// import Image from "next/image";
import { ImageList, ImageListItem, Fab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { PhotoInterface } from "../interfaces/photo.interface";
import styles from '../styles/Vault.module.css'

interface Props {
  photos: Array<PhotoInterface>
}

const Vault: NextPage<Props> = ({ photos }) => {
  const [image, setImage] = useState('');
  return (
    <>
      <h1>Vault</h1>
      <div className={styles.gallery}>
        {photos.map((item: PhotoInterface) => (
          <img
            className={styles.image}
            key={item.id}
            src={item.thumbnailUrl}
            alt={item.title}
            loading="lazy"
            onClick={() => setImage(item.url)}
          />
        ))}
      </div>
      <div className={styles.overlay} style={{display: image ? 'flex' : 'none'}}>
        <Fab className={styles.close} size='small' aria-label="delete" onClick={() => setImage('')}>
          <CloseIcon />
        </Fab>
        <img src={image} alt='Overlay' />
      </div>
  </>

    
  )
}

export default Vault;

export async function getStaticProps() {
  const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photosResponseJson = await photosResponse.json();
  return {
    props: {
      photos: photosResponseJson,
    }
  }
}