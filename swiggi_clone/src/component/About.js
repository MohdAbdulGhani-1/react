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
                    <p>
                        Our mission is to deliver efficient, scalable,
                        and beautiful digital products.
                    </p>
                </div>

                <div className="about-image">
                    <img src="https://via.placeholder.com/300" alt="About Image"/>
                </div>
            </div>
        </div>
    </section>
}
export default About;