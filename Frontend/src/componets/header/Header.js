import React, { useRef, useState } from 'react'
import './header.css'
import { Link, useNavigate, NavLink } from "react-router-dom";
import logo from '../../img/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  window.scrollTo(0, 0);
  

  const color = "#041073";
  let Navigator = useNavigate();

  const handlelogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    toast.dismiss();
    Navigator('/');
    toast.success(`Logout Successfully`, {
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

  const ref = useRef();
  const ref2 = useRef();
  const refclose = useRef();
  const refclose2 = useRef();

  const login = (e) => {
    e.preventDefault();
    ref.current.click();
  }

  const signup = (e) => {
    e.preventDefault();
    ref2.current.click();
  }

  const [details, setdeatils] = useState({ email: "", password: "" });
  let Navigate = useNavigate();

  // This will work when we sumbit form it use the fetch api at given url
  const clickhandler = async (e) => {
    e.preventDefault();
    const response = await fetch("https://find-my-pg-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: details.email, password: details.password })
    })
    const json = await response.json();
    if (json.success) {
      // save the token and redirect 
      localStorage.setItem('token', json.token);

      // this is used to Navigate to home page
      refclose.current.click();
      toast.dismiss();
      Navigate('/');

      toast.success(`Login Successfully`, {
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
    else {
      // To show Alert 
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

  // When value of email or password changes
  const changehandler = (e) => {
    setdeatils({ ...details, [e.target.name]: e.target.value });
  }


  //                                           // Sign up logic
  const [signupdetails, setsignupdetails] = useState({ sname: "", semail: "", spassword: "" })

  const sonhandler = async (e) => {
    e.preventDefault();
    const response = await fetch("https://find-my-pg-backend.onrender.com/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: signupdetails.sname, email: signupdetails.semail, password: signupdetails.spassword })
    })

    try {
      const json = await response.json();
      if (json.success) {
        // save the token and redirect 
        localStorage.setItem('token', json.token);

        toast.dismiss();
        // To show Alert 
        toast.success('Account Created Successfully ', {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        refclose2.current.click();

        // this is used to Navigate to home page
        Navigate('/');

      }
      else {
        // To show Alert 
        if (json.error) {
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
        else {
          toast.dismiss();
          toast.error('Enter a Vaild Email', {
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
    }
    catch (error) {
      toast.dismiss();
      toast.error(' Invalid Details', {
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

//              // TO Fetch User Detials
  // if(localStorage.getItem('token'))
  // {
  //   const fun = async () =>{
  //     const response = await fetch("http://localhost:5000/api/auth/getuser", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "token" : `${localStorage.getItem('token')}`
  //       }
  //   })
  //       console.log(response);
  //     }

  //   fun();
  //   // const json = response.json();
  // }

  // When value of email or password changes
  const schangehandler = (e) => {
    setsignupdetails({ ...signupdetails, [e.target.name]: e.target.value });
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
      {/*  This is Login Modal */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch modal
      </button>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content col">
            <div className="modal-header">
              {/* <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              /> */}
              <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{ color: 'blue' }}>Login To Continue Find My Pg </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

            </div>

            <div className="modal-body">
              <div className='container mx-7 my-3'>
                <form onSubmit={clickhandler}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"> Email address</label>
                    <input type="email" className="form-control" id="email2" value={details.email} onChange={changehandler} name="email" aria-describedby="emailHelp" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" value={details.password} onChange={changehandler} id="password2" name="password" required />
                  </div>
                  <div className="modal-footer">
                    <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      <div>
        <button type="button" ref={ref2} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
          Launch modal
        </button>

        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog" >
            <div className="modal-content col">
              <div className="modal-header">
                {/* <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                /> */}
                <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{ color: 'blue' }}>Create Account For Find My Pg </h1>
                <button type="button" ref={refclose2} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              </div>

              <div className="modal-body">
                <div className='container mx-10 my-5'>
                  {/* <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  /> */}
                  <form onSubmit={sonhandler} >
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Enter Your Name</label>
                      <input type="text" className="form-control" value={signupdetails.sname} id="name" name="sname" onChange={schangehandler} aria-describedby="emailHelp" required autoComplete='none' />
                    </div>

                    <div className="mb-3">


                      <label htmlFor="email" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="email" name="semail" aria-describedby="emailHelp" value={signupdetails.semail} onChange={schangehandler} required />
                      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input type="password" className="form-control" id="password" value={signupdetails.spassword} onChange={schangehandler} name="spassword" minLength={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>



      {/* Navbar  */}
      <nav className="navbar navbar-expand-lg  bg-dark newbar sticky " style={{ zIndex: 999, position: 'sticky' }} data-bs-theme="light">
        <div className="container-fluid nav_color">
          {/* <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          /> */}
          <Link className="navbar-brand logotext " to="/"><img src={logo} alt="Logo Loading" className='logo' /><b style={{ color: color }} >Find My PG</b></Link>


          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                {/* <NavLink className="nav-link" to="/">Home</NavLink> */}
                <NavLink  to="/" className={({isActive})=>`nav-link ${isActive?"color":"noncolor"}`}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/blog" className={({isActive})=>`nav-link ${isActive?`color`:`noncolor`}`}>Blog </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  to="/contact" className={({isActive})=>`nav-link ${isActive?`color`:`noncolor`}`} >Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({isActive})=>`nav-link ${isActive?`color`:`noncolor`}`}  >About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/PGowners" className={({isActive})=>`nav-link ${isActive?`color`:`noncolor`}`}  >For PG Owners</NavLink>
              </li>

            </ul>
            {!localStorage.getItem('token') ? <form className="d-flex btn_div" role="search">
              <button className="btn btn-primary mx-2" onClick={login} >Login</button>
              <button className="btn btn-primary" onClick={signup}>Sign Up</button>
            </form> : <form className="d-flex btn_logout" role="search">
              <button onClick={handlelogout} className="btn btn-primary" >Logout</button>
            </form>
            }
          </div>

        </div>
      </nav>
    </>
  )
  
}


export default Header;

