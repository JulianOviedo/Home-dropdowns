import { MenuItem, MenuList, Typography } from '@mui/material'
import { useState } from 'react'


export default function NavItem({ name, dropdown, arrayItems, arrayIcons }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) //dropdown
    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            {dropdown ?
                <Typography variant='aDropdown' onClick={handleDropdown}>
                    {name}
                    {isDropdownOpen &&
                        <MenuList>
                            {arrayItems.map((item, idx) => {
                                return (
                                    <>
                                        <MenuItem key={idx}>
                                            {arrayIcons[idx] && <img alt='icon' src={arrayIcons[idx]} key={idx} />}
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
                <Typography variant='a'>{name}</Typography>}
        </>
    )
}
