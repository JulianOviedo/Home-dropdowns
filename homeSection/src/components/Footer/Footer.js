import { Box } from '@mui/material'
import styles from './Footer.module.css'

const imgs = ['/client-audiophile.svg', '/client-databiz.svg', 'client-maker.svg', 'client-meet.svg']

export default function Footer() {

    return (
        <footer className={styles.footer}>
            {imgs.map((src, index) => {
                return (
                    <Box key={index} sx={{ maxWidth: 114 }}>
                        <img width='100%' src={src} key={index} alt='brandImg' />
                    </Box>
                )
            })}
        </footer>
    )
}