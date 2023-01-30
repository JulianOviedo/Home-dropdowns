import { Box } from '@mui/material'
import styles from './Footer.module.css'

const imgs = ['/client-databiz.svg', '/client-audiophile.svg', 'client-meet.svg', 'client-maker.svg']

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