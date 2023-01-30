import Footer from '@/components/Footer/Footer';
import MainSection from '@/components/MainSection/MainSection';
import NavBar from '@/components/NavBar/NavBar';
import PanelImg from '@/components/PanelImg/PanelImg';
import { Box, Container, useTheme } from '@mui/material';

export default function Home() {
  const theme = useTheme()



  return (
    <>
      <NavBar />
      <Container sx={{ gridTemplateColumns: '60% 40%', height:'100vh',gridTemplateRows: '80%', px:'150px !important'
        ,display: 'grid', [theme.breakpoints.down('sm')]: {
          flexDirection: 'column'
        }
      }}>
         <Box sx={{width:'80%', height:'100%', display: 'grid', gridTemplateRows: '75% 25%'}}>
          <MainSection />
          <Footer />
        </Box>
        <PanelImg />
      </Container>
    </>
  )
}
