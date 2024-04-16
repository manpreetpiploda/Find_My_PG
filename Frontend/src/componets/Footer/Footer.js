import React from 'react'
import { Link } from "react-router-dom"
import './footer.css'

const Footer = () => {
    return (
        <>

            <footer className="bg-light text-center text-black border footer" style={{marginTop:0 }}>
                <div className="container p-4 pb-0 ">
                    <h3 className='my-4' style={{color:'#041073'}}>Find My PG </h3>
                    <section className="mb-2">
                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '	#4267B2' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#1DA1F2' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-twitter"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#DB4437' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-google"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#d62976' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-instagram"></i
                        ></Link>

                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#0A66C2' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></Link>
                        <Link
                            className="btn text-white btn-floating m-1 media"
                            style={{ backgroundColor: '#171515' }}
                            to="/"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></Link>
                    </section>

                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for New Updates</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form5Example2" className="form-control" placeholder='Enter Your Email'/>
                                        
                                    </div>
                                </div>

                                <div className="col-auto">

                                    <button type="submit" className="btn btn-primary mb-4 button">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>


                    <section className="mb-4">
                        <p>
                        Find My PG is India's Largest growing "PG Rental Network" attempting to provide better Paying Guest Accommodation Via our technology platform. We help find the best PG rental across Major Indian Cities..
                        </p>
                    </section>
                </div>
                {/* <!-- Copyright --> */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright:
                    <Link className="text-black" to="/">FindMyPg.com</Link>
                </div>
            </footer>

        </>
    )
}

export default Footer;