import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./details.css";
import "./details_responsive.css";
import { toast } from "react-toastify";

const Details = (props) => {
  window.scrollTo(0, 0);

  let { id } = useParams();
  let val = id;

  let da = props.data;
  const [details, setdetails] = useState(da);
  const [data, setdata] = useState("");

  let pg = [];

  useEffect(() => {
    // if (!localStorage.getItem("token")) {
      
    // } else {
      setdetails(da);
      setdata(details.find(({ _id }) => _id === val));
    // }

    // eslint-disable-next-line
  }, [props.data, data]);

  if (data) {
    pg.push(data);
  }

  let sliderContainer;
  let images;
  let index = 0;

  const previous = () => {
    // console.log(sliderContainer);
    index--;
    if (index < 0) {
      index = images.length - 1;
    }
    if (sliderContainer)
      sliderContainer[0].style.left = "-" + index * 100 + "%";
  };

  const next = () => {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    if (sliderContainer)
      sliderContainer[0].style.left = "-" + index * 100 + "%";
  };

  useEffect(() => {
    // eslint-disable-next-line
    sliderContainer = document.getElementsByClassName(
      "details_slider-container"
    );
    // eslint-disable-next-line
    images = document.querySelectorAll(".details_slider-container img");
  }, [previous, next]);

  const details_section = (e) => {
    e.preventDefault();
    const anchor = document.getElementById("details");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const rule_section = (e) => {
    e.preventDefault();
    const anchor = document.getElementById("rule");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const common_section = (e) => {
    e.preventDefault();
    const anchor = document.getElementById("common");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const other_section = (e) => {
    e.preventDefault();
    const anchor = document.getElementById("other");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const openModal = useRef();
  //   const closeModal = useRef();

  const contact_details = () => {
     if (!localStorage.getItem("token")) {
      // Navigator("/");
      toast.warning(`Please Login to Continue`, {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
    openModal.current.click();
  }
  };

  const [pg_name, setpg_name] = useState("");
  const [contact, setcontact] = useState("");

  const setvalues = (e) => {
    e.preventDefault();
    setpg_name(pg[0].pg_name);
    // console.log(pg[0].contactno1);
    setcontact(pg[0].contactno1);
  };

  return (
    <>
      

      {/* modal */}

      <button
        ref={openModal}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={setvalues}
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-5" id="exampleModalLabel">
                {pg_name.substring(0, 27)}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Contact No : {contact}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                // ref={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* (
        <div className="d-flex justify-content-center align-middle">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) */}

      {pg.length > 0 ? (
        <div>
          {/* Upper Section */}
          <div className="details_upper_section d-flex">
            <div className="details_upperrent ">
              <p>
                {" "}
                <b>Rent/Bed</b>
              </p>
              <b style={{ paddingRight: 3 }} className="details_res_price">
                ₹{pg[0].Price}
              </b>
              onwards
            </div>

            <div className="details_upperright">
              <div>
                <h2 className="details_upper_name">
                  {pg[0].pg_name.substring(0, 20)}
                </h2>
                <p className="local_area">
                  Pincode{" "}
                  <Link style={{ textDecoration: "none" }}>
                    {pg[0].pincode}
                  </Link>
                </p>
              </div>
              <div className="occupcy">
                <span className="details_gender" style={{ fontSize: 12 }}>
                  For {pg[0].Gender.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="details_phone_no_div">
              <button className="details_contact" onClick={contact_details}>
                View Phone No
              </button>
            </div>
          </div>

          {/* Navbar  */}

          <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid ">
              <div
                className="details_collapse2 navbar-collapse details_link_comp"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" onClick={details_section}>
                      <b>Details</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={rule_section}>
                      <b>Pg Rules</b>{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link " onClick={common_section}>
                      <b>Common Amentites</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={other_section}>
                      <b>Other charges</b>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Details  */}
          <div className=" container d-flex details_pg_deatils" id="details">
            {/* Image Section */}

            <div className="details_left_part">
              <div className="details_slider">
                <div className="details_slider-container">
                  <img src={`https://find-my-pg-backend.onrender.com/${pg[0].src2}`} alt="2" />
                  <img src={`https://find-my-pg-backend.onrender.com/${pg[0].src3}`} alt="3" />
                  <img src={`https://find-my-pg-backend.onrender.com/${pg[0].src4}`} alt="4" />
                  <img src={`https://find-my-pg-backend.onrender.com/${pg[0].src5}`} alt="4" />
                  <img src={`https://find-my-pg-backend.onrender.com/${pg[0].src6}`} alt="4" />
                  <img src={`https://find-my-pg-backend.onrender.com/${pg[0].src1}`} alt="1" />
                </div>
                <div className="details_slider-controls">
                  <button className="details_prev-button" onClick={previous}>
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="details_next-button" onClick={next}>
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div className="d-flex my-4 mx-4">
                <button className="details_contact" onClick={contact_details}>
                  View Phone No
                </button>
                <button
                  className="details_contact mx-4"
                  onClick={contact_details}
                >
                  Contact Owner
                </button>
              </div>
            </div>

            {/* Content Section */}

            <div className="details_right_section">
              <div>
                <h3 className="details_pg_name my-3">
                  {pg[0].pg_name.substring(0, 30)}
                </h3>
                <p className="details_pg_desc" style={{ color: "#909090" }}>
                  <b>Description : </b>
                  {pg[0].desc.substring(0, 400)}
                </p>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Deposit Amount
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Maintenance
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Notice Period
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Water Charges
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span className="details_small_val">₹ {pg[0].deposit}</span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].maintenance.charAt(0).toUpperCase() +
                        pg[0].maintenance.slice(1)}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].Notice_period}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].water_charges.charAt(0).toUpperCase() +
                        pg[0].water_charges.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container">
                <div className="row">
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Food Availability
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    AC Rooms
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Parking
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Power Backup
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span className="details_small_val">
                      {pg[0].Food_available.charAt(0).toUpperCase() +
                        pg[0].Food_available.slice(1)}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].ac_room.charAt(0).toUpperCase() +
                        pg[0].ac_room.slice(1)}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].parking.charAt(0).toUpperCase() +
                        pg[0].parking.slice(1)}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].power_backup.charAt(0).toUpperCase() +
                        pg[0].power_backup.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="container my-3">
                <div className="row">
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Available For
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Total Room Available
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Preferred Tenants
                  </div>
                  <div
                    className="col details_small_div"
                    style={{ color: "#909090" }}
                  >
                    Operating Since
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <span className="details_small_val">
                      {pg[0].available_for.charAt(0).toUpperCase() +
                        pg[0].available_for.slice(1)}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].no_of_beds}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].preferred_tenants.charAt(0).toUpperCase() +
                        pg[0].preferred_tenants.slice(1)}
                    </span>
                  </div>
                  <div className="col">
                    {" "}
                    <span className="details_small_val">
                      {pg[0].opertaing_since}
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>

          {/* pg rules  */}
          <div className="container details_houserule text-center" id="rule">
            <div className="row d-flex">
              <h3 className="details_title my-4"> PG Rules</h3>
              <div className="col details_small_div">
                <i className="fa fa-thin fa-clipboard fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa fa-light fa-clock fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-user fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa fa-light fa-egg fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa fa-thin fa-venus-mars fa-2xl"></i>
              </div>
            </div>
            <div className="row my-2">
              <div className="col details_small_div d-flex ">
                <span>Notice Period</span>
                <span style={{ color: "#909090" }}>
                  {`${pg[0].Notice_period}`}

                  {/* {pg[0].Notice_period.length > 0 ? (
                    `${pg[0].Notice_period} `
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )} */}
                </span>
              </div>
              <div className="col details_small_div d-flex">
                <span>Gate Closing Time</span>
                <span style={{ color: "#909090" }}>
                  {`${pg[0].Gate_timing}`}

                  {/* {pg[0].Gate_timing.length > 0 ? (
                    `${pg[0].Gate_timing}`
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )} */}
                </span>
              </div>
              <div className="col details_small_div d-flex ">
                <span>Visitor Entry</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].Visitor_Entry.toLowerCase() === "allowed" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="col details_small_div d-flex">
                <span>Non Veg</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].Non_veg.toLowerCase() === "allowed" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="col details_small_div d-flex">
                <span>Opposite Gender</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].opposite_gender.toLowerCase() === "allowed" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
            </div>
            <div className="row d-flex" style={{ marginTop: 80 }}>
              <div className="col details_small_div">
                <i className="fa-sharp fa-solid fa-smoking fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Smoking</span>
                  <span style={{ color: "#909090" }}>
                    {pg[0].Smoking.toLowerCase() === "allowed" ? (
                      <i
                        className="fa-sharp fa-solid fa-circle-check fa-lg"
                        style={{ color: "#54c922" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                        style={{ color: "#e70453" }}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-champagne-glasses fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Drinking</span>
                  <span style={{ color: "#909090" }}>
                    {pg[0].Drinking.toLowerCase() === "allowed" ? (
                      <i
                        className="fa-sharp fa-solid fa-circle-check fa-lg"
                        style={{ color: "#54c922" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                        style={{ color: "#e70453" }}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-music fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Loud Music</span>
                  <span style={{ color: "#909090" }}>
                    {pg[0].Loud_Music.toLowerCase() === "allowed" ? (
                      <i
                        className="fa-sharp fa-solid fa-circle-check fa-lg"
                        style={{ color: "#54c922" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                        style={{ color: "#e70453" }}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>

          <div className="container details_houserule text-center" id="common">
            <div className="row d-flex">
              <h3 className="details_title my-4">Common Area and Amenities</h3>
              <div className="col details_small_div">
                <i className="fa-solid fa-wifi fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-car-battery fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-broom fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-bottle-water fa-2xl"></i>
              </div>
              <div className="col details_small_div">
                <i className="fa-sharp fa-solid fa-dumbbell fa-2xl"></i>
              </div>
            </div>
            <div className="row my-2">
              <div className="col details_small_div d-flex ">
                <span>Wifi</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].wifi.toLowerCase() === "available" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="col details_small_div d-flex">
                <span>Power Backup</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].power_backup.toLowerCase() === "available" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="col details_small_div d-flex ">
                <span>Room Service</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].Room_cleaning.toLowerCase() === "available" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="col details_small_div d-flex">
                <span>Water Cooler</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].Water_cooler.toLowerCase() === "available" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
              <div className="col details_small_div d-flex">
                <span>Gym</span>
                <span style={{ color: "#909090" }}>
                  {pg[0].Gym.toLowerCase() === "available" ? (
                    <i
                      className="fa-sharp fa-solid fa-circle-check fa-lg"
                      style={{ color: "#54c922" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                      style={{ color: "#e70453" }}
                    ></i>
                  )}
                </span>
              </div>
            </div>
            <div className="row d-flex" style={{ marginTop: 80 }}>
              <div className="col details_small_div">
                <i className="fa-solid fa-elevator fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Lift</span>
                  <span style={{ color: "#909090" }}>
                    {pg[0].Lift.toLowerCase() === "available" ? (
                      <i
                        className="fa-sharp fa-solid fa-circle-check fa-lg"
                        style={{ color: "#54c922" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                        style={{ color: "#e70453" }}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="col details_small_div">
                <i className="fa fa-duotone fa-user-secret fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Warden</span>
                  <span style={{ color: "#909090" }}>
                    {pg[0].Warden.toLowerCase() === "available" ? (
                      <i
                        className="fa-sharp fa-solid fa-circle-check fa-lg"
                        style={{ color: "#54c922" }}
                      ></i>
                    ) : (
                      <i
                        className="fa-sharp fa-solid fa-circle-xmark fa-lg"
                        style={{ color: "#e70453" }}
                      ></i>
                    )}
                  </span>
                </div>
              </div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>

          <div
            className="container details_houserule details_sm-other text-center"
            id="other"
          >
            <div className="row d-flex">
              <h3 className="details_title my-4"> Other Charges</h3>
              <div className="col details_small_div">
                <i className="fa fa-thin fa-house fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Maintenance</span>
                  <span style={{ color: "#909090" }}>
                    {`${pg[0].maintenance}`}
                  </span>
                </div>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-bolt fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Water Charges</span>
                  <span style={{ color: "#909090" }}>
                    {`${pg[0].water_charges}`}
                  </span>
                </div>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-money-bill-transfer fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Deposit Amount</span>
                  <span style={{ color: "#909090" }}>
                    {`₹ ${pg[0].deposit}`}
                  </span>
                </div>
              </div>
              <div className="col details_small_div">
                <i className="fa-solid fa-jug-detergent fa-2xl"></i>
                <div className="col details_small_div d-flex my-3">
                  <span>Laundry</span>
                  <span style={{ color: "#909090" }}>{pg[0].laundry}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-middle">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
