import Logo from '../../assets/static/logo.svg';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

import './Navigation.styles.scss';

export default function Navigation() {
    
    const [openMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        openMobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }

    const closeMobileMenu = () => {
        setMobileMenu(false)
    }

    return(
        <Fragment>
        <div>
            <header>
                <div className='navbar'>
                    <Link to='/'>
                        <img className='logo' src={Logo} alt='logo' onClick={closeMobileMenu}/>
                    </Link>

                    <div className='hamburger' onClick={handleMobileMenu}>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                    </div>

                    { openMobileMenu ?
                        <div className='mobile-navlinks'>
                            <Link className='nav-link' to='/portfolio' onClick={closeMobileMenu}>Portfolio</Link>
                            <Link className='nav-link' to='/about' onClick={closeMobileMenu}>About Us</Link>
                            <Link className='nav-link' to='/contact' onClick={closeMobileMenu}>Contact</Link>
                        </div>
                    : null
                    }
                    
                    
                    <div className='navlinks'>
                        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                        <Link className='nav-link' to='/about'>About Us</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link>
                    </div>
                </div>
            </header>
            
        </div>
        <Outlet />
        </Fragment>

    )
}





/* Home

Portfolio
About Us
Contact

Project Paramour

Project made for an art museum near Southwest London. Project Paramour is 
a statement of bold, modern architecture.

See Our Portfolio

Seraph Station

The Seraph Station project challenged us to design a unique station that would 
transport people through time. The result is a fresh and futuristic model 
inspired by space stations.

See Our Portfolio

Federal II Tower

A sequel theme project for a tower originally built in the 1800s. We achieved 
this with a striking look of brutal minimalism with modern touches.

See Our Portfolio

Trinity Bank Tower

Trinity Bank challenged us to make a concept for a 84 story building located 
in the middle of a city with a high earthquake frequency. For this project we 
used curves to blend design and stability to meet our objectives.

See Our Portfolio

01
02
03
04

Welcome

Welcome to Arch Studio

We have a unique network and skillset to help bring your projects to life. Our 
small team of highly skilled individuals combined with our large network put us 
in a strong position to deliver exceptional results.

Over the past 10 years, we have worked on all kinds of projects. From stations 
to high-rise buildings, we create spaces that inspire and delight.

We work closely with our clients so that we understand the intricacies of each 
project. This allows us to work in harmony the surrounding area to create truly 
stunning projects that will stand the test of time.

Small team, big ideas

About Us

Featured

See all

1
Project Del Sol
View All Projects

2
228B Tower
View All Projects

3
Le Prototype
View All Projects

Portfolio
About Us
Contact

See Our Portfolio */