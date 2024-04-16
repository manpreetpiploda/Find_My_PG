import React from 'react'
import './blog.css'
import './responsiveblog.css'
import { Link} from "react-router-dom";
import imgs from '../../img/pg_money.jpg'

const Blog = () => {
    window.scrollTo(0, 0);
    return (
        <>

            <div>
                <div className='headingblog' >
                    <h1 style={{ color: 'rgb(4, 16, 115)' }} >Welcome To Find My PG Blog</h1>
                </div>




                <div className='container-xxl d-flex my-3 colblog'>
                    <div className='container image_section_blog '>
                        <img src="https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/how-to-save-money.jpg" alt="Loading" className="w100 img_blog" />
                    </div>

                    <div className='content_section_blog'>
                        <h3 className='blog_title'> How to save money as a newcomer to a city by taking up a PG</h3>
                        <p style={{ color: 'red' }} className='my-3 blog_date'><b>07-04-2023</b></p>
                        <p>
                            <b className='blog_para'>
                                So you've just moved to a new city or looking to do so soon. This is likely to be for studying there or you've just gotten your first job and are looking...
                            </b>
                        </p>


                        <Link style={{ color: "rgb(1, 159, 233)", textDecoration: 'none' }}to={`/${0}`}><b>Continue Reading </b><i className="fa-solid fa-arrow-right fa-sm my-2"></i></Link>

                    </div>
                </div>



                <div className='container-xxl d-flex my-5 colblog'>
                    <div className=' conatiner image_section_blog '>
                        <img src={imgs} alt="Loading" className="w100 img_blog" />
                    </div>

                    <div className='content_section_blog'>
                        <h3 className='blog_title'>How Paying Guest can save lot of money for any New Comer to a Major City</h3>
                        <p style={{ color: 'red' }} className='my-3 blog_date'><b>09-04-2023</b></p>
                        <p>
                            <b className='blog_para'>
                                We've already mentioned another blog how getting a PG in a new city is the best option you have. Now let us tell you how our technology at Book My...
                            </b>
                        </p>


                        <Link style={{ color: "rgb(1, 159, 233)", textDecoration: 'none' }}to={`/${1}`}><b>Continue Reading </b><i className="fa-solid fa-arrow-right fa-sm my-2"></i></Link>

                    </div>
                </div>

                <div className='container-xxl d-flex my-5 colblog'>
                        <div className='container image_section_blog'>
                            <img src="https://bookmypg.co.in/storage/blog/medium/2021/04/359cda551c2b3628cf905bf59f6ad1e90301680.jpeg" alt="Loading" className="w100 img_blog" />
                        </div>

                        <div className='content_section_blog '>
                            <h3 className='blog_title'>Find My PG, a startup focused on improving the rental problem </h3>
                            <p style={{ color: 'red' }} className='my-3 blog_date'><b>06-04-2023</b></p>
                            <p>
                                <b className='blog_para'>
                                    Find My PG is a startup founded in India that helps people who are looking for rentals to find what they want when they want to.  Book My PG is an...
                                </b>
                            </p>

                            <Link style={{ color: "rgb(1, 159, 233)", textDecoration: 'none' }} to={`/${2}`}><b>Continue Reading </b><i className="fa-solid fa-arrow-right fa-sm my-2"></i></Link>

                        </div>
                    </div>




                <div className='container-xxl d-flex my-5 colblog'>
                    <div className=' conatiner image_section_blog '>
                        <img src="https://bookmypg.co.in/storage/blog/medium/2020/10/a1b236240966fbb6d6a4c531d8c3df6f0245119.jpeg" alt="Loading" className="w100 img_blog" />
                    </div>

                    <div className='content_section_blog'>
                        <h3 className='blog_title'>How To Select The Best PG To Stay</h3>
                        <p style={{ color: 'red' }} className='my-3 blog_date'><b>08-04-2023</b></p>
                        <p>
                            <b className='blog_para'>
                                Paying Guest accommodation is one where you stay on a sharing basis in a property that is taken on rent by others.PGs are commonly used in India...
                            </b>
                        </p>


                        <Link style={{ color: "rgb(1, 159, 233)", textDecoration: 'none' }}to={`/${3}`}><b>Continue Reading </b><i className="fa-solid fa-arrow-right fa-sm my-2"></i></Link>

                    </div>
                </div>


                <div className='container-xxl d-flex my-5 colblog'>
                    <div className=' conatiner image_section_blog '>
                        <img src="https://www.bu.edu/bhr/files/2021/05/6.png" alt="Loading" className="w100 img_blog" />
                    </div>

                    <div className='content_section_blog'>
                        <h3 className='blog_title'>Covid-19 Impact on Hospitality Industry </h3>
                        <p style={{ color: 'red' }} className='my-3 blog_date'><b>10-04-2023</b></p>
                        <p>
                            <b className='blog_para'>
                                Due to the Covid-19 pandemic, the world’s economy was shut down almost overnight . The pandemic has confronted the hospitality industry...

                            </b>
                        </p>
                        <Link style={{ color: "rgb(1, 159, 233)", textDecoration: 'none' }}to={`/${4}`}><b>Continue Reading </b><i className="fa-solid fa-arrow-right fa-sm my-2"></i></Link>

                    </div>
                </div>


            </div>

        </>
    )
}

export default Blog