import React, { useState } from "react";
import "./owners.css";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Owners = () => {

  
  let Navigator = useNavigate();

  const [details, setdeatils] = useState({
    email: "",
    contactno1: "",
    contactno2: "",
    name: "",
    addharnumber: "",
    pg_name: "",
  });

  const changehandler = (e) => {
    setdeatils({ ...details, [e.target.name]: e.target.value });
  };

  const sumbit_from = async (e) => {
    e.preventDefault();

    if (!localStorage.getItem("token")) {
      toast.warning(`Please Login To Continue`, {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const response = await fetch(
        "https://find-my-pg-backend.onrender.com/api/owner_details/add_owner",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
          body: JSON.stringify({
            email: details.email,
            contactno2: details.contactno2,
            contactno1: details.contactno1,
            name: details.name,
            addharnumber: details.addharnumber,
            pg_name: details.pg_name,
          }),
        }
      );
      
      const json = await response.json();
      if (json.success) {
        toast.dismiss();
        toast.success(`Please Fill PG Details Correctly`, {
          position: "top-center",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setdeatils({
          email: "",
          contactno1: "",
          contactno2: "",
          name: "",
          addharnumber: "",
          pg_name: "",
        });
        Navigator('/Add_pg');

      } else {
        // To show Alert
        toast.dismiss();
        toast.error(`Error At Our End`, {
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
  };

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
      <div className="container my-4 owner_heading">
        <h1>Connect Your Pg With Find My PG </h1>
      </div>

      <div className="container">
        <form onSubmit={sumbit_from}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label mt-3 owner_details"
            >
              <b>Enter Your Name</b>
            </label>
            <input
              type="name"
              minLength="5"
              className="form-control"
              id="ownername"
              name="name"
              value={details.name}
              onChange={changehandler}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label owner_details"
            >
              <b>Your Contact No</b>
            </label>
            <input
              id="phone"
              name="contactno1"
              className="form-control contact_no"
              type="tel"
              minLength={10}
              maxLength={10}
              value={details.contactno1}
              onChange={changehandler}
              pattern="[0-9]{10}"
              placeholder="xxxxxxxxxx"
              required
              />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label owner_details"
            >
              <b>Alternate Contact No (Optional)</b>
            </label>
            <input
              id="phone2"
              name="contactno2"
              className="form-control contact_no"
              type="tel"
              size="10"
              minLength={10}
              maxLength={10}
              value={details.contactno2}
              onChange={changehandler}
              pattern="[0-9]{10}"
              placeholder="xxxxxxxxxx"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label owner_details"
            >
              <b>Enter Your Addhar No</b>
            </label>

            <input
              id="teladdhar"
              name="addharnumber"
              className="form-control contact_no"
              type="tel"
              size="12"
              minLength="12"
              maxLength="12"
              value={details.addharnumber}
              onChange={changehandler}
              pattern="[0-9]{12}"
              required
              placeholder="xxxxxxxxxxxx"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label owner_details"
            >
              <b>PG Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              id="pg_name"
              required
              name="pg_name"
              minLength={5}
              value={details.pg_name}
              onChange={changehandler}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label owner_details"
            >
              <b>Email address</b>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              name="email"
              value={details.email}
              onChange={changehandler}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Owners;
