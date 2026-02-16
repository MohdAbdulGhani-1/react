const About = () => {
    return<section className="about">
        <div className="container">
            <h1>About Us</h1>
            <p className="intro">
                Welcome to our website! We are passionate about creating
                modern and user-friendly web applications.
            </p>

            <div className="about-content">
                <div className="about-text">
                    <h2>Who We Are</h2>
                    <p>
                        We are a team of developers focused on building
                        high-quality web solutions using modern technologies.
                    </p>

                    <h2>Our Mission</h2>
                    <p className="mission" style={{color: "white"}}>
                        Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
                    </p>
                </div>

                <div className="about-iframe">
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/fLz2fgU_x1Q" title="About Us Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="about-image" style={{ height: "200px", width: "100%", objectFit: "cover" }}>
                    <img src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg" alt="About Us Image" />
            </div>
        </div>
    </section>
}
export default About;