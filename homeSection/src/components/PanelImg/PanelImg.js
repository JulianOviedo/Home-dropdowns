import mobileLayout from '../../../public/image-hero-mobile.png'
import desktopLayout from '../../../public/image-hero-desktop.png'
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // for unmmounting
      }, []);

    return (
        <figure>
            <img src={currentImage.src} width='100%' height='100%' alt='panelImg' />
        </figure>
    )
}