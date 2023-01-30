import mobileLayout from '../../../public/image-hero-mobile.png'
import desktopLayout from '../../../public/image-hero-desktop.png'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './PanelImg.module.css'


export default function PanelImg() {
    const [currentImage, setCurrentImage] = useState(desktopLayout);

    const handleResize = () => {
        if (window.innerWidth < 600) {
          setCurrentImage(mobileLayout);
        } else {
          setCurrentImage(desktopLayout);
        }
      }

      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // for unmmounting
      }, []);

    return (
        <figure className={styles.figure}>
            <Image src={currentImage.src}  fill alt='panelImg' />
        </figure>
    )
}