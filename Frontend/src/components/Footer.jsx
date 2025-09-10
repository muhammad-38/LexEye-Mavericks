import React from 'react'

const Footer = () => {
  return (
    <>
        <footer class="w-full">
          <a href="index.html">
            <img src={Logo} alt="Logo" class="logo" />
          </a>
          <div class="social">
            <a href=""><img src={Insta} alt=""></img></a>
            <a href=""><img src={Facebook} alt=""></img></a>
          </div>
        </footer>
    </>
  )
}

export default Footer