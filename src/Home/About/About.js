import React from 'react';
import aboutus1 from'../../images/About/about_us_1.jpg';
import aboutus2 from'../../images/About/about_us_2.jpg';
const About = () => {
    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className='mt-5 p-5'>
                        <h1>About US</h1>
                        <p>Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec dignissim massa felis ad nulla donec porttitor nulla et tristique dignissim.</p>
                        <button type="button" class="btn btn-danger mt-4 p-2">About Us</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className='img-fluid img-thumbnail' src={aboutus1} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className='img-fluid img-thumbnail' src={aboutus2} alt="" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className='mt-5 p-5'>
                        <h1>Great Location</h1>
                        <p>Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet. Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec dignissim massa felis ad nulla donec porttitor nulla et tristique dignissim.</p>
                        <button type="button" class="btn btn-danger mt-4 p-2">Great Location</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;


