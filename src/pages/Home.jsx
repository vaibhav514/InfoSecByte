import React from 'react'

function Home() {
  return (
    <div>

        {/* main-slider */}
        <section className="w3l-main-slider" id="home">
            <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Be What You Want To Be </h5>
                                            <p className="mt-4 pr-lg-4">
                                                Take the first step to your journey to success with us
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/about"> 
                                            Ready to  get started?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info  banner-view banner-top1 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Learn and Improve Yourself in Less Time </h5>
                                            <p className="mt-4 pr-lg-4">
                                                Our self improvement courses is very effective 
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/about"> 
                                                Ready to get started?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top2 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Be More Productive to Be More Successful</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Don't waste your time, check out our tools
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/about"> 
                                                Ready to get started?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top3 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Enhance your skills with our plateform</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Take the first step to your journey to success with us
                                            </p>
                                            <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="/about"> 
                                                Ready to get started?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>

            <div className="waveWrapper waveAnimation">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{stroke: "none"}}></path>
                </svg>
            </div>
        </section>
        {/* /main-slider */}
        {/* <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h5 className="title-small text-center mb-1">Join our read Bloags</h5>
                    <h3 className="title-big text-center mb-sm-5 mb-4">Featured Online <span>Blogs</span></h3>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c1.jpg"
                                            alt="Card cap" />
                                    </a>
                                    <div className="post-pos">
                                        <a href="#reciepe" className="receipe blue">Beginner</a>
                                    </div>
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                        <p>$35.00</p>
                                        <ul className="rating-star">
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star-o"></span></li>
                                        </ul>
                                    </div>
                                    <a href="#course-single" className="course-desc">Open Programming Courses for everyone :
                                        Python
                                    </a>
                                    <div className="course-meta mt-4">
                                        <div className="meta-item course-lesson">
                                            <span className="fa fa-clock-o"></span>
                                            <span className="meta-value"> 20 hrs </span>
                                        </div>
                                        <div className="meta-item course-">
                                            <span className="fa fa-user-o"></span>
                                            <span className="meta-value"> 50 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="author align-items-center">
                                        <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                        <ul className="blog-meta">
                                            <li>
                                                <span className="meta-value mx-1">by</span> <a href="#author"> Olivia</a>
                                            </li>
                                            <li>
                                                <span className="meta-value mx-1">in</span> <a href="#author"> Programing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c5.jpg"
                                            alt="Card cap" />
                                    </a>
                                    <div className="course-price-badge"> Free</div>
                                    <div className="post-pos">
                                        <a href="#reciepe" className="receipe blue">Beginner</a>
                                    </div>
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                        <p>$0.00</p>
                                        <ul className="rating-star">
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star-o"></span></li>
                                        </ul>
                                    </div>
                                    <a href="#course-single" className="course-desc">Learning to Write as a clean and
                                        Professional
                                        Author</a>
                                    <div className="course-meta mt-4">
                                        <div className="meta-item course-lesson">
                                            <span className="fa fa-clock-o"></span>
                                            <span className="meta-value"> 20 hrs </span>
                                        </div>
                                        <div className="meta-item course-">
                                            <span className="fa fa-user-o"></span>
                                            <span className="meta-value"> 50 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="author align-items-center">
                                        <img src="assets/images/a2.jpg" alt="" className="img-fluid rounded-circle" />
                                        <ul className="blog-meta">
                                            <li>
                                                <span className="meta-value mx-1">by</span> <a href="#author"> Isabella</a>
                                            </li>
                                            <li>
                                                <span className="meta-value mx-1">in</span> <a href="#author"> Teaching</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item mt-lg-0 mt-5">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c6.jpg"
                                            alt="Card cap" />
                                    </a>
                                    <div className="course-price-badge-new"> New</div>
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1align-items-center">
                                        <p>$49.00</p>
                                        <ul className="rating-star">
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star-o"></span></li>
                                        </ul>
                                    </div>
                                    <a href="#course-single" className="course-desc">Learn Master JQuery in a Short Period of
                                        Time</a>
                                    <div className="course-meta mt-4">
                                        <div className="meta-item course-lesson">
                                            <span className="fa fa-clock-o"></span>
                                            <span className="meta-value"> 20 hrs </span>
                                        </div>
                                        <div className="meta-item course-">
                                            <span className="fa fa-user-o"></span>
                                            <span className="meta-value"> 50 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="author align-items-center">
                                        <img src="assets/images/a4.jpg" alt="" className="img-fluid rounded-circle" />
                                        <ul className="blog-meta">
                                            <li>
                                                <span className="meta-value mx-1">by</span> <a href="#author"> William</a>
                                            </li>
                                            <li>
                                                <span className="meta-value mx-1">in</span> <a href="#author"> Programing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 text-more">
                        <p className="pt-md-3 sample text-center">
                            Control your personal preference settings to get notified about appropriate courses
                            <a href="courses.html">View All Courses <span className="pl-2 fa fa-long-arrow-right"></span></a>
                        </p>
                    </div>
                </div>
            </div>
        </section> */}

        <section className="w3l-features py-5" id="facilities">
            <div className="call-w3 py-lg-5 py-md-4 py-2">
                <div className="container">
                    <div className="row main-cont-wthree-2">
                        <div className="col-lg-5 feature-grid-left">
                            <h5 className="title-small mb-1">Study and Learn</h5>
                            <h3 className="title-big mb-4">Our Facilities </h3>
                            <p className="text-para">Our platform offers diverse curated questions and quizzes,
                             providing a dynamic way to evaluate and reinforce your understanding.
 </p>
                            <p className="mt-3">Dedicated to a well-rounded education, InfoSecBytes is where learning meets 
                            practicality, empowering you with the knowledge and skills needed to navigate the intricate cybersecurity 
                            landscape confidently!</p>
                            <a href="/about" className="btn btn-primary btn-style mt-md-5 mt-4">Discover More</a>
                        </div>
                        <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                            <div className="call-grids-w3 d-grid">
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-certificate"></span></a>
                                    <h4><a href="/courses" className="title-head">Blogs</a></h4>
                                    <p>Read and Learn new things every now and then.</p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-book"></span></a>
                                    <h4><a href="/quiz" className="title-head">Quizzes</a></h4>
                                    <p>Check how much you know about you stuff.</p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-trophy"></span></a>
                                    <h4><a href="/tools" className="title-head">Tools</a></h4>
                                    <p>Let's make your work easier with our multiple tools.</p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <a href="#more" className="icon"><span className="fa fa-graduation-cap"></span></a>
                                    <h4><a href="/contact" className="title-head">Support</a></h4>
                                    <p>Facing difficulties, We are here to solve it for you .</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="w3l-homeblock3 py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <h5 className="title-small text-center mb-1">
                    From the news
                </h5>
                <h3 className="title-big text-center mb-sm-5 mb-4">
                    Latest 
                    <span>Blog</span>
                </h3>
                <div className="row top-pics">
                    <div className="col-md-6">
                        <div className="top-pic1">
                            <div className="card-body blog-details">
                                <a href="https://architkumar20001.medium.com/what-is-cyber-security-ca914accfbb1" className="blog-desc">
                                What is Cyber Security?
                                </a>
                                <div className="author align-items-center">
                                    <img src="assets/images/team1.jpg" alt="blogs" className="img-fluid rounded-circle" />
                                    <ul className="blog-meta">
                                        <li>
                                            <a href="https://architkumar20001.medium.com/">Archit Kumar</a>
                                        </li>
                                        <li className="meta-item blog-lesson">
                                            <span className="meta-value"> Apr 19, 2024 </span>. 
                                            <span className="meta-value ml-2">
                                                <span className="fa fa-clock-o"></span> 
                                                1 min
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-4">
                        <div className="top-pic2">
                            <div className="card-body blog-details">
                                <a href="https://medium.com/@shivamkumar121986/navigating-the-landscape-of-information-security-a-comprehensive-exploration-of-the-cia-triad-2db962f2c6dd" className="blog-desc">
                                Navigating the Landscape of Information Security: A Comprehensive Exploration of the CIA Triad
                                </a>
                                <div className="author align-items-center">
                                    <img src="assets/images/team2.jpg" alt="" className="img-fluid rounded-circle" />
                                    <ul className="blog-meta">
                                        <li>
                                            <a href="https://medium.com/@Manan_9">Manan Ladha</a>
                                        </li>
                                        <li className="meta-item blog-lesson">
                                            <span className="meta-value"> 
                                                Apr 19, 2024 </span>. 
                                                <span className="meta-value ml-2">
                                                    <span className="fa fa-clock-o"></span> 
                                                    1 min
                                                </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="top-pic3">
                                <div className="card-body blog-details">
                                    <a href="https://medium.com/@vagrawal7905/navigating-the-complex-world-of-computer-networks-a-comprehensive-guide-0f784d432a4c" className="blog-desc"> 
                                        Navigating the Complex World of Computer Networks: 
                                        A Comprehensive Guide
                                    </a>
                                    <div className="author align-items-center">
                                        <img src="assets/images/team3.jpg" alt="" className="img-fluid rounded-circle" />
                                        <ul className="blog-meta">
                                            <li>
                                                <a href="https://medium.com/@vagrawal7905">Vaibhav Agrawal</a>
                                            </li>
                                            <li className="meta-item blog-lesson">
                                                <span className="meta-value"> 
                                                    Apr 19, 2024 
                                                </span>. 
                                                <span className="meta-value ml-2">
                                                    <span className="fa fa-clock-o"></span> 
                                                    1 min
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-md-5 mt-4 text-more text-center">
                    <a href="courses">
                        View All Posts 
                        <span className="pl-2 fa fa-long-arrow-right"></span>
                    </a>
                </div>
            </div>
        </div>
        {/* //middle */}
        <section className="w3l-team py-5" id="team">
            <div className="call-w3 py-lg-5 py-md-4">
                <div className="container">
                    <div className="row main-cont-wthree-2">
                        <div className="col-lg-5 feature-grid-left">
                            <h5 className="title-small mb-1">
                                Developer
                            </h5>
                            <h3 className="title-big mb-4">
                                Meet us
                            </h3>
                            <p className="text-para">
                            Welcome to InfoSecBytes, the gateway to a comprehensive cybersecurity learning experience,
                             meticulously designed to guide users through essential concepts and practical exercises,
                              fostering a profound understanding of cybersecurity.
                            </p>
                            <p className="mt-3">
                            
                              We are the team of 3 Student from VIT Bhopal, We had made this as a major project under the 
                              guidance of our supervisior Dr. Praveen Sir. 
                              <br/>
                            We enjoyed and learned a lot while making this and we hope this project will be usefull to others.
                            </p>
                            <a href="/about" className="btn btn-primary btn-style mt-md-5 mt-4">
                                Discover More
                            </a>
                        </div>
                        <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="box16">
                                        <a href="#url">
                                            <img src="assets/images/team1.jpg" alt="" className="img-fluid radius-image" />
                                        </a>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <a href="#url">Archit </a>
                                            </h3>
                                            <span className="post">Student</span>
                                            <ul className="social">
                                                <li>
                                                    <a href="#link" className="facebook">
                                                        <span className="fa fa-facebook-f"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#link" className="twitter">
                                                        <span className="fa fa-twitter"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mt-sm-0 mt-3">
                                    <div className="box16">
                                        <a href="#url">
                                            <img src="assets/images/team2.jpg" alt="" className="img-fluid radius-image" />
                                        </a>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <a href="#url">Manan</a>
                                            </h3>
                                            <span className="post">Student</span>
                                            <ul className="social">
                                                <li>
                                                    <a href="#link" className="facebook">
                                                        <span className="fa fa-facebook-f"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#link" className="twitter">
                                                        <span className="fa fa-twitter"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mt-lg-4 mt-3">
                                    <div className="box16">
                                        <a href="#url">
                                            <img src="assets/images/team3.jpg" alt="" className="img-fluid radius-image" />
                                        </a>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <a href="#url">Vaibhav</a>
                                            </h3>
                                            <span className="post">Student</span>
                                            <ul className="social">
                                                <li>
                                                    <a href="#link" className="facebook">
                                                        <span className="fa fa-facebook-f"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#link" className="twitter">
                                                        <span className="fa fa-twitter"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mt-lg-4 mt-3">
                                    <div className="box16">
                                        <a href="#url"><img src="assets/images/team4.jpg" alt=""
                                                className="img-fluid radius-image" /></a>
                                        <div className="box-content">
                                            <h3 className="title"><a href="#url">Dr. Praven Lalwani</a></h3>
                                            <span className="post">Teacher</span>
                                            <ul className="social">
                                                <li>
                                                    <a href="#link" className="facebook">
                                                        <span className="fa fa-facebook-f"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#link" className="twitter">
                                                        <span className="fa fa-twitter"></span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home