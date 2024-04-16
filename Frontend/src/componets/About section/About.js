import React from 'react'
import './about.css'
import './about_responsive.css'

const About = () => {
  return (

    <>
      <div className='container mt-5 mb-4'>
        <h1 style={{ color: 'rgb(4, 16, 115)' }}>About Us</h1>
      </div>

      <div className='container about_sec_text_head'>
        <p>Find My PG is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by Location with Specific requirement by filtering by Location, IT Parks, Land Mark, Price, Room type, Amenities, Gender and Food. Presently we have Launched in Platform in Chennai, Coimbatore and Bangalore. We will soon expand to all the Major Cities of the Country</p>
      </div>

      <div className='container about_section'>

        <div className='left_part_div_about'>
          <img src="https://bookmypg.co.in/assets/front/images/about-01.jpg" alt="" className="about_img" />
        </div>

        <div className='right_part_div_about'>

          <div className=''>
            <h1 style={{ color: '#014073' }} className='about_sec_text_head'>
              Who we are?
            </h1>
          </div>

          <div className=''>
            <p className='about_sec_text'>We are a set of well-selected and chosen Paying Guest services. This is a platform where those, who are willing to open their homes to guests, meet the people looking for wonderful homes to stay in and not have to look for hotels or favors in any city for their long stays. We ensure the places listed and the people looking for a stay are selected based on careful filtering criteria so that both parties benefit and the safety of all involved persons is ensured. We know how important a safe home is to you at both ends of the deal and that is a promise we make.
            </p>
          </div>
        </div>
      </div>


      <div className='container about_section'>
        <div className='right_part_div_about changeside_about'>

          <div className=''>
            <h1 style={{ color: '#014073' }} className='about_sec_text_head'>
              What we do?
            </h1>
          </div>

          <div className=''>
            <p className='about_sec_text'>
              We put together a list of places where our guests can stay as a PG. This is done based on listings on our site by homeowners. We ensure that not only are they a safe home for the guest but the guest too is safe for them. These places can be searched based on locality, budget, need, and multiple other filters. Find the perfect PG stay or guest with us.
            </p>
          </div>
        </div>
        <div className='left_part_div_about'>
          <img src="https://bookmypg.co.in/assets/front/images/about-01.jpg" alt="" className="about_img" />
        </div>
      </div>


      <div className='container about_section'>

        <div className='left_part_div_about'>
          <img src="https://bookmypg.co.in/assets/front/images/about-01.jpg" alt="" className="about_img" />
        </div>

        <div className='right_part_div_about'>

          <div className=''>
            <h1 style={{ color: '#014073' }} className='about_sec_text_head'>
              What are we amining at?
            </h1>
          </div>

          <div className=''>
            <p className='about_sec_text'>Our aim and motto are simple and singular. To provide the guests with a PG that feels like home best fitting their needs and the homeowners a guest who fits right in. To attain this we work with homeowners and guests to give everyone involved the best possible experience.
            Our method of arriving at this involves detailed verification of all parties, a good database of homes and guests and being updated in real-time ensuring there is no problem for either party to find the right person/ home sitting where they are from their systems.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default About