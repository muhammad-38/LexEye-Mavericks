import { useState } from 'react'
import Balance from "./assets/logo.png"
import Logo from "./assets/Actual-Logo.png"
import Arrow from "./assets/arrow-right-solid-full.svg"
import Video from "./assets/video-2.mp4"
import Traffic from "./assets/Traffic-Police.jpg"
import Protest from "./assets/Protest.jpg"
import Crime from "./assets/Crime.jpg"
import labour from "./assets/labour.webp"
import Property from "./assets/Property.web.webp"
import Family from "./assets/Family.webp"
import Insta from "./assets/instagram.svg"
import Facebook from "./assets/facebook.svg"
import Image from "./assets/img4.jpg"
import './index.css'


function App() {

  return (
    <>
      {/* <header class="w-full">
      <nav>
        <a href="">
          <img src={Logo} alt="Logo" class="logo" />
        </a>

        <a href="login.html" id="goback-btn">Get Started</a>
      </nav>
    </header> */}

    <div id="smooth-wrapper">
      {/* <!-- required for ScrollSmoother --> */}
      <div id="smooth-content">
        <div id="main" class="w-full">
          <img src={Balance} alt="" srcset="" id="headphone" />

          {/* <div id="section1">
            <div>
              <h1 class="heading">LexEye</h1>
              <p>
                LexEye make legel help accessible anywhere, anytime, even
                offline
              </p>
            </div>
          </div> */}

          {/* <div id="section2">
            <div class="content-wrapper">
              <h2 class="heading">Balance Forge</h2>
              <p>
                Crafted for clarity, balance, and vision — the Clarity Engine is
                where technology meets justice, turning complexity into
                confidence and insight into action.
              </p>
            </div>
            <div class="feature-wrapper">
              <div class="feature-box radius">
                <div class="feature-name">Crystal-Clear Clarity</div>
                <div class="feature-detail">
                  Every statute simplified and explained for better
                  understanding.
                </div>
              </div>
              <div class="feature-box radius">
                <div class="feature-name">Anytime, Anywhere Access</div>
                <div class="feature-detail">
                  Your complete legal library, wherever you are.
                </div>
              </div>
              <div class="feature-box radius">
                <div class="feature-name">40+ Laws Accessible</div>
                <div class="feature-detail">
                  From constitutional texts to local acts, all in one place.
                </div>
              </div>
            </div>
          </div> */}
          {/* <!-- middle section --> */}
          {/* <div class="middlesection" id="middle-section">
            <div class="move">
              <div class="track">
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>

                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
                <div class="marque">
                  <h1>What is LexEye</h1>
                  <img src={Arrow} />
                </div>
              </div>
            </div>
            <div class="middle-section-para">
              <h1>Accessibility</h1>
              <p>
                LexEye is designed to give people direct and uncomplicated
                access to the laws of Pakistan. Instead of searching through
                heavy books or unreliable sources, users can find everything
                they need collected in one secure space. From constitutional
                provisions to detailed acts and regulations, the platform offers
                almost every law in Pakistan in a format that is easy to read
                and easy to navigate. This makes it useful not only for legal
                professionals, but also for students, researchers, and ordinary
                citizens who simply want to understand the rules that shape
                their everyday lives.
              </p>
              <h1>Offline Availability</h1>
              <p>
                One of LexEye’s most valuable features is the ability to
                download laws for offline use. In a country where internet
                access can be limited or inconsistent, this option ensures that
                people are never cut off from critical legal information.
                Whether you are preparing for a court hearing, writing a paper,
                or simply want to keep important documents with you on the go,
                LexEye allows you to save entire texts directly to your device.
                This blend of online convenience and offline reliability makes
                LexEye a dependable companion in any situation.
              </p>
              <h1>Empowerment</h1>
              <p>
                LexEye is more than just a database — it is a tool for
                empowerment. When people have easy access to the law, they gain
                the confidence to understand their rights, fulfill their
                responsibilities, and make informed decisions. By breaking down
                the barriers that often surround legal knowledge, LexEye helps
                close the gap between complex legal systems and the citizens
                they are meant to serve. In this way, the platform is not only
                useful for professionals but is also an educational resource for
                anyone who wishes to learn and grow.
              </p>
              <h1>Trust and Simplicity</h1>
              <p>
                Built with reliability and clarity at its core, LexEye removes
                the confusion of scattered legal resources. Every document is
                carefully organized, and the platform’s simple layout ensures
                that users can focus on the content instead of wasting time
                figuring out where to look. This trust in both accuracy and
                usability makes LexEye stand out as a platform that respects the
                importance of law and the people who depend on it.
              </p>
            </div>
          </div> */}

          {/* <div id="section3">
            <h2 class="heading">LexSource</h2>
            <div class="content-wrapper">
              <video
                width="500"
                height="auto"
                autoplay
                loop
                muted
                class="radius"
              >
                <source src={Video} type="video/mp4" />
              </video>
              <div class="content">
                <p>
                  Crafted for the modern legal mind, LexEye delivers access to
                  laws with clarity and precision. From constitutional rights to
                  everyday regulations, you don’t just read the law, you
                  understand it.
                </p>
                <p>
                  Whether you’re preparing for court or seeking quick legal
                  guidance, the platform adapts to your needs. With LexEye, the
                  law becomes accessible—reliable, comprehensive, and
                  empowering.
                </p>
              </div>
            </div>
          </div> */}

          {/* <div id="section4">
            <img
              src={Protest}
              alt=""
              srcset=""
              class="img1 radius"
            />
            <img
              src={Traffic}
              alt=""
              srcset=""
              class="img2 radius"
            />
            <img
              src={Crime}
              alt=""
              srcset=""
              class="img3 radius"
            />
          </div> */}

          {/* <div id="section5">
            <h2 class="heading">Top Categories</h2>
            <div class="product-section">
              <div class="product">
                <img src={Protest} alt="" />
                <div class="name">
                  <h3>The Constitution of Pakistan, 1973</h3>
                </div>
              </div>
              <div class="product">
                <img src={Traffic} alt="" />
                <div class="name"><h3>Pakistan Penal Code, 1860</h3></div>
              </div>
              <div class="product">
                <img src={Crime} alt="" />
                <div class="name">
                  <h3>Code of Criminal Procedure, 1898</h3>
                </div>
              </div>
            </div>
            <button><a href="./pages/Categories.jsx">Go To Categories</a></button>
          </div> */}
        </div>

        {/* <div id="section6" class="w-full">
          <img src={Image} class="radius" alt="" srcset="" />
          <div class="content-wrapper">
            <h2 class="heading">Pure Escape</h2>
            <p>
              Step into a world where every note feels alive. Audira headphones
              are engineered to create a sound experience that surrounds
              you—deep, rich, and breathtaking.
            </p>
            <p>
              Whether you're working, relaxing, or moving, our design blends
              comfort and clarity for every lifestyle. You don’t just listen —
              you feel the moment.
            </p>
          </div>
        </div> */}

        {/* <footer class="w-full">
          <a href="index.html">
            <img src={Logo} alt="Logo" class="logo" />
          </a>
          <div class="social">
            <a href=""><img src={Insta} alt=""></img></a>
            <a href=""><img src={Facebook} alt=""></img></a>
          </div>
        </footer> */}
      </div>
    </div>
    </>
  )
}

export default App
