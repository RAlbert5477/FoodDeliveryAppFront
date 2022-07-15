import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

import logo from './logo.png'
import "./Header.css";
import {IoCartOutline} from "react-icons/io5";

export const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    const colorOfLink = ({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal' })


    return (
        <>
            <div className="headerBanner"/>
            <header className="nav">
                <NavLink className="nav-link nav-link-logo" to="/food-menu">
                    <img

                        className="logo" src={logo} alt="logo"/>
                </NavLink>

                {(toggleMenu || screenWidth > 819) && (
                    <nav>

                        <ul className="nav-menu">
                            {/*<NavLink*/}
                            {/*    style={colorOfLink}*/}
                            {/*    className="nav-link items"*/}
                            {/*    to="/">*/}
                            {/*    <li className="items">*/}
                            {/*        Home*/}
                            {/*    </li>*/}
                            {/*</NavLink>*/}
                            <NavLink
                                style={colorOfLink}
                                className="nav-link items"
                                to="/food-menu">
                                <li className="items">
                                    Food Menu
                                </li>
                            </NavLink>
                            <NavLink
                                style={colorOfLink}
                                className="nav-link items"
                                to="/delivery-schedule">
                                <li className="items">
                                    Delivery Schedule
                                </li>
                            </NavLink>

                            <NavLink
                                style={colorOfLink}
                                className="nav-link items"
                                to="/cart">
                                <li className="cart-logo">
                                    <IoCartOutline/>
                                    <div className="cart-logo-products"/>
                                </li>
                            </NavLink>


                            <NavLink
                                className="nav-btnLink "
                                to="/sign-in">
                                <button className="nav-btnLink-btn">
                                    Sign In
                                </button>
                            </NavLink>
                        </ul>

                    </nav>

                )}
                <button
                    onClick={toggleNav}
                    className={ toggleMenu ? "burger active" : "burger" }>
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </button>

            </header>
        </>


    )
}