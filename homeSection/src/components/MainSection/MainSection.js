import { Box, Typography, useTheme } from '@mui/material';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import styles from './MainSection.module.css'

export default function MainSection() {
    const theme = useTheme()

    return (
        <section className={styles.section}>
            <Box sx={{
                display: 'flex', flexDirection: 'column', alignItems:'left', gap:'50px', flexWrap: 'wrap', [theme.breakpoints.down('sm')]: {
                    alignItems: 'center', py: '20px', px: '10px', textAlign: 'center', gap: '15px'
                }
            }}>
                <Typography variant="h1" >Make remote work</Typography>
                <Typography variant="h2" sx={{width:'80%'}}>Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar.</Typography>
                <Box sx={{ width: 180, height: 65 }}>
                    <ButtonPrimary says='Learn more' />
                </Box>
            </Box>
        </section>
    )
}