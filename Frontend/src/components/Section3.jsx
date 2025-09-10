import React from 'react'

const Section3 = () => {
    return (
        <>
            <div id="section3">
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
            </div>
        </>
    )
}

export default Section3