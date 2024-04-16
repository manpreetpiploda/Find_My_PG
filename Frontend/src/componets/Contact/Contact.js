import React, { useState } from 'react'
import './contact.css'
import './contact_responsive.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const [details, setdeatils] = useState({ email: "", number: "", name: "", city: "", message: "", enquiry: "" });

    const changehandler = (e) => {
        setdeatils({ ...details, [e.target.name]: e.target.value });
    }

    const sumbit_from = async (e) => {
        e.preventDefault();
        let select= document.querySelector('#select');
        const response = await fetch("https://find-my-pg-backend.onrender.com/api/contact_form/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            },
            body: JSON.stringify({ email: details.email, mobile_no: details.number, name: details.name, city: details.city, message: details.message, enquiry_type: select.value.toString() })
        })
        const json = await response.json();
        if (json.success) {

            toast.dismiss();
            toast.success(`Form Submit Successfully, You Will get response on email`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setdeatils({ email: "", number: "", name: "", city: "", message: "", enquiry: "" });
            
        }
        else {
            // To show Alert 
            console.log(json);
            toast.dismiss();
            toast.error(`${json.error}`, {
                position: "top-center",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        }

    }


    return (
        <>
            <ToastContainer
                position="top-centre"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className='container text-center main_section_contact'>
                <h1 className='contact_us_heading'>IT’S EASY TO FIND US</h1>

                <p className='my-3'><b>Please Feel Free to Contact us for any PG Booking related Issues, Complaints and for any support needed for moving to the PG you have Booked through us.</b></p>
            </div>

            <div className='container d-flex mb-5 my-5 shadow_contact pt-3'>

                <div className='left_part_contact mt-5'>
                    <div className=' d-flex mb-5 div_fix_details'>
                        <div>
                            <i className="fa-sharp fa-solid fa-location-dot fa-2xl my-4 mx-3"></i>
                        </div >
                        <div className=' d-flex' style={{ flexDirection: 'column' }}>
                            <span style={{ color: 'rgb(4, 16, 215)' }}><strong>ADDRESS</strong></span>
                            <span><b> 1, Tara Nagar-C ,VKI Siker Road Harmda Jaipur, Rajasthan</b></span>
                        </div>
                    </div>

                    <div className='d-flex mb-5 div_fix_details'>
                        <div >
                            <i className="fa-solid fa-phone fa-2xl my-4 mx-2"></i>
                        </div >
                        <div className=' d-flex' style={{ flexDirection: 'column' }}>
                            <span style={{ color: 'rgb(4, 16, 215)' }}><strong>Phone</strong></span>
                            <span><b>+91-6376013481</b></span>
                        </div>
                    </div>


                    <div className='d-flex mb-5'>
                        <div >
                            <i className="fa-sharp fa-solid fa-envelope  fa-2xl my-4 mx-1"></i>
                        </div >
                        <div className=' d-flex div_fix_details' style={{ flexDirection: 'column' }}>
                            <span style={{ color: 'rgb(4, 16, 215)' }} className='mx-2'><strong>EMAIL</strong></span>
                            <span className='mx-2'><b>info@findmypg.co.in</b></span>
                        </div>
                    </div>

                </div>


                <div className='right_part_contact'>
                    {/* Right part  */}

                    <div className='container'>
                        <form on onSubmit={sumbit_from}>
                            <div className="mb-3  div_details">

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label label_contact" ><b>Name</b></label>
                                    <input type="name" className="form-control first_text_contact bor_contact" value={details.name} onChange={changehandler} id="password2" name="name" required/>
                                </div>

                                <div>
                                    <label htmlFor="email" className="form-label label_contact"><b> Email</b></label>
                                    <input type="email" className="form-control second_text_contact bor_contact" id="email2" value={details.email} onChange={changehandler} name="email" aria-describedby="emailHelp" required/>
                                </div>
                            </div>
                            <div className="mb-3 div_details">

                                <div className="mb-3">
                                    <label htmlFor="MobileNo" className="form-label label_contact" ><b> Mobile </b></label>
                                    <input type="number" className="form-control first_text_contact bor_contact" value={details.number} onChange={changehandler} id="MobileNo" name="number" required/>
                                </div>

                                <div>
                                    <label htmlFor="city" className="form-label label_contact" ><b>City</b> </label>
                                    <input type="text" className="form-control second_text_contact bor_contact" value={details.city} onChange={changehandler} id="City" name="city" required/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="city" className="form-label label_contact" ><b>Enquiry Type</b></label>
                            </div>

                            <select id="select" className='mb-3 dropbox_contact'>
                                <option value="Pg Booking">Pg Booking</option>
                                <option value="Customer Service">Customer Service</option>
                                <option value="Customer Service">Complaint</option>
                            </select>


                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label label_contact"><b> Message</b></label>
                                <textarea className="form-control bor_contact" id="exampleFormControlTextarea1" value={details.message} onChange={changehandler} name='message' rows="2" required></textarea>
                            </div>


                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary mb-4">Sumbit</button>
                            </div>
                        </form>
                    </div>

                </div >


            </div >
        </>
    )
}

export default Contact