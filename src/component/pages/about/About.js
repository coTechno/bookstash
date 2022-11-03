import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about-container'>
            <div className="about-header">
                <h1>About Us</h1>
                <p className="content">
                    Please contact us at bookstash@info.org for scientific and social research as well as book publishing.
                    Please select from the following:
                </p>
            </div>
            <div className="about-row">
                <div className="about-col">
                    <p className="about-para">
                    Established in 2004, the Institute for Education, Research, and Scholarships (IFERS) is an award-winning California-based 501(c)(3) nonprofit public charity organization dedicated to improving society by conducting scientific and social research as well as being a fiscal sponsor for more than 150 humanitarian projects.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel doloremque amet iste repudiandae doloribus sapiente aliquam tenetur tempora neque aut. Iure, obcaecati? Alias animi, excepturi aspernatur doloribus ea pariatur quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quidem dicta earum laudantium perferendis necessitatibus magni molestias accusamus officiis dolorem.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://istanbul.com/blog/wp-content/uploads/2020/01/2413396.jpg" alt="" />
                </div>
            </div>
            <div className="about-row">
                <div className="about-image">
                    <img src="https://s28151.pcdn.co/library/wp-content/uploads/sites/88/2020/11/goddard-library-renew-a-book.jpg" alt="" />
                </div>
                <div className="about-col">
                    <p className="about-para">
                    We believe in changing the world for the better through education, research, and scholarships. Our ultimate goal is to create a better world with lasting peace, prosperity, and universal rights for all. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit mollitia eaque fuga atque et, molestias dolorum eligendi quam at suscipit fugit, reprehenderit ex exercitationem labore aliquam? Necessitatibus provident, exercitationem nam dolor id sed? Quasi eveniet distinctio ratione praesentium, reiciendis exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam eos distinctio deserunt atque cupiditate, perferendis ipsum nisi eum harum placeat, rerum iure tempore, dolor omnis?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About