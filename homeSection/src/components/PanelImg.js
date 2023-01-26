import mobileLayout from '../../public/image-hero-mobile.png'
import desktopLayout from '../../public/image-hero-desktop.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize); // for unmmounting
      }, []);


    return (
        <figure>
            <Image src={currentImage} fill alt='panelImg' />
        </figure>
    )
}