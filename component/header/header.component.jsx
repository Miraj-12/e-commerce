import React from 'react';
import { Link } from 'react-router-dom'
import './header.style.scss';
import { auth } from '../../firebase-utils/firebase-utlis'
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="shop">
                Shop
            </Link>
            <Link className='option' to="shop">
                Contract Us
            </Link>
            {
                currentUser ?
                    (<div className='option' onClick={() => auth.signOut()}>SignOut</div>)
                    :
                    (<Link className='option' to='/signIn'> Sign In</Link>)

            }

        </div>
    </div>
)

export default Header;