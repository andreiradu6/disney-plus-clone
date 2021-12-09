import React from 'react'
import styled  from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Nav>
            <Link to='/'>
                <Logo src="/images/logo.svg"/>
            </Link>
            <NavMenu>
                <Link to='/' className="link">
                    <img src="/images/home-icon.svg"/>
                    <span>HOME</span>
                </Link>
                <Link to='/search'>
                    <img src="/images/search-icon.svg"/>
                    <span>SEARCH</span>
                </Link>
                <Link to='/watchlist'>
                    <img src="/images/watchlist-icon.svg"/>
                    <span>WATCHLIST</span>
                </Link>
                <Link to='/originals'>
                    <img src="/images/original-icon.svg"/>
                    <span>ORIGINALS</span>
                </Link>
                <Link to='/movies'>
                    <img src="/images/movie-icon.svg"/>
                    <span>MOVIES</span>
                </Link>
                <Link to='/series'>
                    <img src="/images/series-icon.svg"/>
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            <UserImg src="/images/slider-badging.jpg"/>
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    height:70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`


    display:flex;
    flex: 1;
    margin-left: 25px;
    align-items:center;

    a,Link{
        text-decoration:none;
        color: #fff;  
        cursor:pointer;
        display:flex;
        align-items:center;
        padding: 0 12px;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position:relative;

            &:after{
                content: '';
                height: 2px;
                background-color: #fff;
                position:absolute;
                bottom:-6px;
                left:0;
                right:0;
                opacity:0;
                transform-origin: left center;
                transform:scaleX(0);
                transition: all 250ms cubic-bezier(.25,.46,.45,.94) 0s;
            }
        }

        &:hover{
            span:after{
                transform:scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    object-fit:cover;
    border-radius: 50%;
    cursor:pointer;
`