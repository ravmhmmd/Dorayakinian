import React, {useState, useEffect} from 'react'
import DropdownInside from './DropdownInside';
import NavbarInside from './NavbarInside'

const NavbarInsideBungkus = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen){
                setIsOpen(false)
            }
        }
        
        window.addEventListener('resize', hideMenu)

        return () => {
            window.removeEventListener('resize',hideMenu)
        }
    })
    return (
        <div className="sticky top-0">
                <NavbarInside toggle={toggle}/>
                <DropdownInside isOpen={isOpen} toggle={toggle}/>
        </div>
    )
}

export default NavbarInsideBungkus
