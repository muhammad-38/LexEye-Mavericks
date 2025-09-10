import React from 'react'

const Header = () => {
  return (
    <>
    <header class="w-full">
          <nav>
            <a href="">
              <img src={Logo} alt="Logo" class="logo" />
            </a>
    
            <a href="login.html" id="goback-btn">Get Started</a>
          </nav>
        </header>
    </>
  )
}

export default Header