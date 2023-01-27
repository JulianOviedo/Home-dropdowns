import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import MainSection from '@/components/MainSection/MainSection';
import MyNavbar from '@/components/NavBar/NavBar';
import PanelImg from '@/components/PanelImg/PanelImg';
import { Box, useTheme } from '@mui/material';

export default function Home() {
  const theme = useTheme()

  const featuresItems = ['Todo List', 'Calendar', 'Reminders', 'Planning']
  const featuresLogos = ['/icon-todo.svg', '/icon-calendar.svg', null, '/icon-planning.svg']

  return (
    <>
    <MyNavbar name='Features' dropdown={true} arrayItems={featuresItems} arrayIcons={featuresLogos}/>
      {/* <Header />
      <Box sx={{
        display: 'flex', [theme.breakpoints.down('sm')]: {
          flexDirection: 'column'
        }
      }}>
        <PanelImg />
        <MainSection />
      </Box>
      <Footer /> */}
    </>
  )
}
