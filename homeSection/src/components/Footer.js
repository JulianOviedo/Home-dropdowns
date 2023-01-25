import { Box } from "@mui/material"

const imgs = ['/client-audiophile.svg', '/client-databiz.svg', 'client-maker.svg', 'client-meet.svg']

export default function Footer() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', height: '36px'}}>
            {imgs.map((src, index) => {
                return <img src={src} key={index} alt='brandImg'/>
            })}
        </Box>
    )
}