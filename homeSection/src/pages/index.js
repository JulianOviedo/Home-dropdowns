import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainSection from "@/components/MainSection/MainSection";
import PanelImg from "@/components/PanelImg/PanelImg";
import { Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme()

  return (
    <>
      <Header />
      <Box sx={{display: 'flex', [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
      }}}>
        <PanelImg />
        <MainSection />
      </Box>
      <Footer />
    </>
  )
}
