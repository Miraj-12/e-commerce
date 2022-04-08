import React from 'react';
import { Link } from 'react-router-dom'
import './header.style.scss';
import { auth } from '../../firebase-utils/firebase-utlis'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart-dropdown/cart-dropdown.component'
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => (
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

            <CartIcon />
        </div>
        {hidden ? null :
            <Cart />
        }

    </div>
)
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});
export default connect(mapStateToProps)(Header);