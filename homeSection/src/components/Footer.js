import { Box } from "@mui/material"

const imgs = ['/client-audiophile.svg', '/client-databiz.svg', 'client-maker.svg', 'client-meet.svg']

export default function Footer() {

    return (
        <footer>
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems:'center'}}>
                {imgs.map((src, index) => {
                    return <img src={src} key={index} alt='brandImg' />
                })}
            </Box>
        </footer>
    )
}