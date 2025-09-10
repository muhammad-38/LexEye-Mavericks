import React from 'react'

const Section5 = () => {
    return (
        <>
            <div id="section5">
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
            </div>
        </>
    )
}

export default Section5