/* eslint-disable no-unused-vars */
import React from 'react'
import './Header.css'
import OlxLogo from '../../assets/OlxLogo'
import Search from '../../assets/search'
import Arrow from '../../assets/arrow'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/FirebaseContext'
import firebase from 'firebase/compat/app';
import { getAuth,signOut } from 'firebase/auth';

function Header() {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const auth = getAuth();
    const logOut = (id)=>{
        signOut(auth).then(() => {
            console.log('user signed out');
            // User is logged out
          }).catch((error) => {
            // An error occurred
          });
    }
  return (
    <div className='container header-page col-md-12'>
      <div className='row header-list'>
        <div className='logo' onClick={()=>navigate('/')}>
            <OlxLogo/>
        </div>
        <div className='search'>
            <Search/>
            <input type="text" placeholder='India' />
            <Arrow/>
        </div>
        <div className='search-input'>
            <div className='input'>
                <input type="text" placeholder="Find car,mobile phone and more..." />
            </div>
            <div className='search-icon'>
                <Search/>
            </div>
        </div>
        <div className='language'>
            <span>ENGLISH</span>
            <Arrow/>
        </div>
        <div className='login-btn'>
        {user?
            <span> {user.displayName} </span>:
            <span onClick={()=>navigate('/login')}>Login</span> }
            <hr />
        </div>
        <div className='logout-btn'>
            {user?
            <button className='logout-btn' onClick={()=>logOut(user.uid)}>Logout</button>:""
            }
        </div>
        <div className='sell-btn' onClick={()=>navigate('/create-post')}>
            <SellButton/>
            <div className='sell-menu'>
                <SellButtonPlus/>
                <span>SELL</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
