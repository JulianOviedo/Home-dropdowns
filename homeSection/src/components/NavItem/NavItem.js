import { MenuItem, MenuList, Typography } from '@mui/material'
import { useState } from 'react'

import arrowDown from '../../../public/icon-arrow-down.svg'
import arrowUp from '../../../public/icon-arrow-up.svg'



export default function NavItem({ name, dropdown, arrayItems, arrayIcons }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) //dropdown
    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            {dropdown ?
                <Typography sx={{p:'5px', textAlign: 'center'}} variant='a' onClick={handleDropdown}>
                    {name} {isDropdownOpen ? <img src='icon-arrow-down.svg' alt='arrow'/> : <img alt='arrow' src='icon-arrow-up.svg'/>}
                    {isDropdownOpen &&
                        <MenuList sx={{borderRadius: '20px', backgroundColor: 'white', boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)', position:'absolute',mt:'10px', alignItems:'center'}}>
                            {arrayItems.map((item, idx) => {
                                return (
                                    <>
                                        <MenuItem sx={{gap: '10px'}} key={idx}>
                                            {arrayIcons && arrayIcons[idx] && <img alt='icon' src={arrayIcons[idx]} key={idx} />}
                                            {/* // if u dont want to add any icon to the MenuItem u need to add a 'null' in the array of icons  */}
                                            {item}
                                        </MenuItem>
                                    </>
                                )
                            })}
                        </MenuList>
                    }
                </Typography>
                :
                <Typography sx={{p:'5px'}} variant='a'>{name}</Typography>}
        </>
    )
}
