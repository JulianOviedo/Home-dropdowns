import { Box, Typography } from "@mui/material";
import ButtonPrimary from "./ButtonPrimary/ButtonPrimary";

export default function MainSection() {
    return (
        <section>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:"left" }}>
                <Typography variant="h1">Make remote work</Typography>
                <Typography variant="body1">Get your team in sync, no matter your location.<br />Streamline processes, create team rituals and watch productivity soar.</Typography>
                <Box sx={{ width: 150, height: 50 }}>
                    <ButtonPrimary says='Learn more' />
                </Box>
            </Box>
        </section>
    )
}