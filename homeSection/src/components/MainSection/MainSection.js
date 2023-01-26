import { Box, Typography, useTheme } from "@mui/material";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import styles from './MainSection.module.css'

export default function MainSection() {
  const theme = useTheme()

    return (
        <section className={styles.section}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "left", [theme.breakpoints.down('sm')]: {
                alignItems: 'center', py: '20px', px: '10px', textAlign: 'center', gap: '15px'
            } }}>
                <Typography variant="h1" sx={{fontSize: '2rem'}}>Make remote work</Typography>
                <Typography variant="body1">Get your team in sync, no matter your location. Streamline processes, create team rituals and watch productivity soar.</Typography>
                <Box sx={{ width: 150, height: 50 }}>
                    <ButtonPrimary says='Learn more' />
                </Box>
            </Box>
        </section>
    )
}