import { MenuItem, MenuList, Typography } from '@mui/material'
import { useEffect, useState } from 'react'


export default function NavItem({ name, dropdown, arrayItems, arrayIcons }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false) //dropdown
    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            {dropdown ?
                <Typography sx={{textAlign: 'center', cursor: 'pointer', width:140}} variant='a' component="a" onClick={handleDropdown}>
                    {name} {isDropdownOpen ? <img src='icon-arrow-down.svg' alt='arrow'/> : <img alt='arrow' src='icon-arrow-up.svg'/>}
                    {isDropdownOpen &&
                        <MenuList  sx={{display: 'flex',flexDirection:'column',borderRadius: '20px', backgroundColor: 'white', boxShadow:' 0 3px 10px rgb(0 0 0 / 0.2)'  ,mt:'10px', alignItems:'flex-start', p:'10px'}}>
                            {arrayItems.map((item, idx) => {
                                return (
                                    <>
                                        <MenuItem variant='a' component="a" sx={{gap: '10px', justifyContent:'start'}} key={idx}>
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
                <Typography sx={{textAlign: 'center', cursor: 'pointer'}} component="a" variant='a'>{name}</Typography>}
        </>
    )
}

