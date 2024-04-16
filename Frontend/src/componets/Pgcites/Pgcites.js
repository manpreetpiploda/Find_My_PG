import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import datacontext from "../../Context/Data/datacontext";
import "./pgcites.css";
import "./PgCitiesResponsive.css";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Pgcites = (props) => {
  let { city } = useParams();
  let da = props.data;
  const Context = useContext(datacontext);
  const { dbdata, getNote } = Context;

  const [citydata, setcitydata] = useState(props.data);
  const [search_data, setsearch_data] = useState(props.data);
  const [len, setlen] = useState(0);

  const [sort, setsort] = useState(false);
  const [genderfilter, setgenderfilter] = useState("all");
  let pin = document.getElementById("pin");

  const clearfilter = () => {
    const btn = [];

    btn[0] = document.getElementById("flexRadioDisabled1");
    btn[1] = document.getElementById("flexRadioDisabled2");
    btn[2] = document.getElementById("flexRadioDisabled3");
    btn[3] = document.getElementById("flexRadio1");
    btn[4] = document.getElementById("flexRadio2");
    btn[5] = document.getElementById("flexRadio3");
    btn[6] = document.getElementById("flexRadio4");

    for (var i = 0; i < 7; i++) {
      btn[i].checked = false;
    }
    var newdata = da.filter(function (a) {
      return a.city.toLowerCase() === `${city.toLowerCase()}`;
    });
    pin.value = "";
    setgenderfilter("all");
    setcitydata(newdata);
  };

  useEffect(() => {
    getNote();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let response = dbdata.filter(function (a) {
      return a.city.toLowerCase() === `${city.toLowerCase()}`;
    });
    setcitydata(response);
    setsearch_data(dbdata);
    // eslint-disable-next-line
  }, [dbdata]);

  useEffect(() => {
    setlen(citydata.length);
    // eslint-disable-next-line
  }, [citydata]);

  let navi = useNavigate();

  const gendercheck = () => {
    let btn1 = document.getElementById("flexRadioDisabled1");
    let btn2 = document.getElementById("flexRadioDisabled2");
    let btn3 = document.getElementById("flexRadioDisabled3");

    if (
      btn1.checked === false &&
      btn2.checked === false &&
      btn3.checked === false
    )
      setgenderfilter("all");
  };

  const onselectl = () => {
    setsort(true);
  };

  const onselecth = () => {
    setsort(false);
  };

  const handleclick = (e) => {
  };

  const renttogenderfilterswitch = () => {
    var btn = [];
    pin.value = "";
    btn[0] = document.getElementById("flexRadio1");
    btn[1] = document.getElementById("flexRadio2");
    btn[2] = document.getElementById("flexRadio3");
    btn[3] = document.getElementById("flexRadio4");

    for (var i = 0; i < 4; i++) {
      btn[i].checked = false;
    }
  };

  const malefilter = () => {
    var pincode = pin.value.toString();

    var newdata = search_data.filter(function (a) {
      return (
        a.Gender.toLowerCase() === "male" &&
        a.city.toLowerCase() === `${city.toLowerCase()}` &&
        a.pincode.match(pincode)
      );
    });
    setgenderfilter("male");
    setcitydata(newdata);
    renttogenderfilterswitch();
  };

  const femalefilter = () => {
    var pincode = pin.value.toString();
    var newdata = search_data.filter(function (a) {
      return (
        a.Gender.toLowerCase() === "female" &&
        a.city.toLowerCase() === `${city.toLowerCase()}` &&
        a.pincode.match(pincode)
      );
    });
    setgenderfilter("female");
    setcitydata(newdata);
    renttogenderfilterswitch();
  };

  const unisexfilter = () => {
    var pincode = pin.value.toString();
    var newdata = search_data.filter(function (a) {
      return (
        a.Gender.toLowerCase() === "unisex" &&
        a.city.toLowerCase() === `${city.toLowerCase()}` &&
        a.pincode.match(pincode)
      );
    });
    setgenderfilter("unisex");
    setcitydata(newdata);
    renttogenderfilterswitch();
  };

  const under5000filter = () => {
    var pincode = pin.value.toString();
    gendercheck();
    var newdata = search_data.filter(function (a) {
      if (genderfilter === "all") {
        return (
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price < 5000 &&
          a.pincode.match(pincode)
        );
      } else {
        return (
          a.Gender.toLowerCase() === genderfilter &&
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price < 5000 &&
          a.pincode.match(pincode)
        );
      }
    });
    setcitydata(newdata);
  };

  const val5000to7500filter = () => {
    var pincode = pin.value.toString();
    gendercheck();
    var newdata = search_data.filter(function (a) {
      if (genderfilter === "all") {
        return (
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price >= 5000 &&
          a.Price < 7500 &&
          a.pincode.match(pincode)
        );
      } else {
        return (
          a.Gender.toLowerCase() === genderfilter &&
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price >= 5000 &&
          a.Price < 7500 &&
          a.pincode.match(pincode)
        );
      }
    });
    setcitydata(newdata);
  };

  const val7500to10000filter = () => {
    var pincode = pin.value.toString();

    gendercheck();

    var newdata = search_data.filter(function (a) {
      if (genderfilter === "all") {
        return (
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price >= 7500 &&
          a.Price < 10000 &&
          a.pincode.match(pincode)
        );
      } else {
        return (
          a.Gender.toLowerCase() === genderfilter &&
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price >= 7500 &&
          a.Price < 10000 &&
          a.pincode.match(pincode)
        );
      }
    });
    setcitydata(newdata);
  };

  const morethan10000filter = () => {
    var pincode = pin.value.toString();
    gendercheck();

    var newdata = search_data.filter(function (a) {
      if (genderfilter === "all") {
        return (
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price >= 10000 &&
          a.pincode.match(pincode)
        );
      } else {
        return (
          a.Gender.toLowerCase() === genderfilter &&
          a.city.toLowerCase() === `${city.toLowerCase()}` &&
          a.Price >= 10000 &&
          a.pincode.match(pincode)
        );
      }
    });
    setcitydata(newdata);
  };

  const search_by_pin = () => {
    var pincode = pin.value.toString();
    gendercheck();
    var newdata;
    // console.log(genderfilter);
    if (pincode.length > 0 && genderfilter === "all") {
      newdata = search_data.filter(function (a) {
        return (
          a.pincode.match(pincode) &&
          a.city.toLowerCase() === `${city.toLowerCase()}`
        );
      });
    } else {
      newdata = search_data.filter(function (a) {
        return (
          a.pincode.match(pincode) && a.Gender.toLowerCase() === genderfilter
        );
      });
    }
    setcitydata(newdata);
  };

  return (
    <>
      <div className="d-flex">
        {/* Filter */}
        <div className="filter City_heading">
          <div className="City_heading2 ">
            <h3 className="city_filter_heading">Filters</h3>
            <button
              type="button"
              className="btn btnclearfilter"
              onClick={clearfilter}
            >
              Clear Filters <i className="fa-solid fa-xmark fa-beat mx-1"></i>
            </button>
          </div>

          <hr />

          {/* Gender Filter */}
          <div className="filter1">
            <h3 className="my-2 city_filter_heading">Gender</h3>

            <div className="form-check ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled1"
                onClick={malefilter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadioDisabled"
              >
                Male
              </label>
            </div>

            <div className="form-check ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled2"
                onClick={femalefilter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadioDisabled2"
              >
                Female
              </label>
            </div>

            <div className="form-check ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled3"
                onClick={unisexfilter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadioDisabled3"
              >
                Unisex
              </label>
            </div>
          </div>

          <hr />

          {/* Rent Filter */}
          <div className="filter1">
            <h3 className="my-3 city_filter_heading">Monthly rent</h3>

            <div className="form-check my-2 ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadio"
                id="flexRadio1"
                onClick={under5000filter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadio1"
              >
                &lt; 5000
              </label>
            </div>

            <div className="form-check my-2 ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadio"
                id="flexRadio2"
                onClick={val5000to7500filter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadio2"
              >
                5,000 - 7,500
              </label>
            </div>

            <div className="form-check my-2 ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadio"
                id="flexRadio3"
                onClick={val7500to10000filter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadio3"
              >
                7,500 - 10,000
              </label>
            </div>

            <div className="form-check my-2 ">
              <input
                className="form-check-input City_check_box"
                type="radio"
                name="flexRadio"
                id="flexRadio4"
                onClick={morethan10000filter}
              />
              <label
                className="form-check-label mx-2 city_filter_font"
                htmlFor="flexRadio4"
              >
                &gt; 10,000
              </label>
            </div>
          </div>

          <hr />
          {/* Todo Pincode*/}

          <div className="filter1">
            <label htmlFor="number" className="pincode city_filter_heading">
              <b>Search by Pincode</b>
            </label>
            <div className="pin_div">
              <input
                name="pincode"
                id="pin"
                type="number"
                inputMode="numeric"
                maxLength="4"
                autoComplete="false"
                className="pin_enter"
                placeholder="Enter Pincode"
              />
              <i
                className="fa-solid fa-magnifying-glass pin_search"
                onClick={search_by_pin}
              ></i>
            </div>
          </div>
        </div>

        {/* Sort By  */}
        <div>
          <div className="City_sort_by_div">
            {/* Upper Section */}
            <div className="City_upper d-flex">
              <b className="pg_no_of_result">{citydata.length} Result Found </b>
              <div className="dropdown City_sort_button">
                <button
                  className=" dropdown-toggle City_drop "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>Sort By</b>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <button className="dropdown-item" onClick={onselectl}>
                    Price : Low to High{" "}
                    {sort ? (
                      <i
                        className="fa-solid fa-circle-check mx-2"
                        style={{ color: "#39b329" }}
                      ></i>
                    ) : (
                      " "
                    )}
                  </button>
                  <button className="dropdown-item" onClick={onselecth}>
                    Price : High to Low{" "}
                    {!sort ? (
                      <i
                        className="fa-solid fa-circle-check mx-2"
                        style={{ color: "#39b329" }}
                      ></i>
                    ) : (
                      " "
                    )}
                  </button>
                </ul>
              </div>
            </div>
          </div>

          {/* Pg Data  */}
          <div className="container Cities_data">
            {len != 0
              ? sort
                ? citydata
                    .sort(function (a, b) {
                      return parseFloat(a.Price) - parseFloat(b.Price);
                    })
                    .map((data, k) => {
                      return (
                        <div className="City_pg_details" key={k}>
                          <div className="pg_div container">
                            <div className="City_div_img">
                              <img
                                src={`https://find-my-pg-backend.onrender.com/${data.src1}`}
                                alt="PICS NOT AVAILABLE"
                                className="City_pg_img text-center"
                              />
                            </div>

                            {/*pg name and gender logo  */}
                            <div className="d-flex">
                              <div className="City_div_name">
                                <p>{data.pg_name.substring(0, 30)}</p>
                              </div>
                            </div>

                            {/* Gender   */}
                            <div className="d-flex my-2">
                              <b>Gender : </b>
                              {data.Gender.toLowerCase() === "male" && (
                                <div className="City_div_logo">
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//male-c.svg"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              )}
                              {data.Gender.toLowerCase() === "female" && (
                                <div className="City_div_logo">
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//female-c.svg"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              )}
                              {data.Gender.toLowerCase() === "unisex" && (
                                <div className="City_div_logo">
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//female-c.svg"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//male-c.svg"
                                    className="mx-1"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              )}
                            </div>

                            <div className=" d-flex City_div_location">
                              {/* Address */}
                              <p>
                                <b>Location</b> :{" "}
                                {data.Address.substring(0, 80)}
                              </p>
                            </div>

                            {/*Rent Details*/}
                            <div>
                              <p>
                                <b>Rent</b> : {data.Price}
                              </p>
                            </div>

                            <div>
                              {/* pincode */}
                              <p>
                                <b>Pincode</b> : {data.pincode}
                              </p>
                            </div>

                            {/* View Pg Details Button */}
                            <div className="div_btn">
                              <button
                                className="btn"
                                onClick={(e) =>
                                  handleclick(navi(`/pgdetails/${data._id}`))
                                }
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
                : citydata
                    .sort(function (a, b) {
                      return parseFloat(b.Price) - parseFloat(a.Price);
                    })
                    .map((data, k) => {
                      return (
                        <div className="City_pg_details" key={k}>
                          <div className="pg_div">
                            <div className="City_div_img">
                              <img
                                src={`https://find-my-pg-backend.onrender.com/${data.src1}`}
                                alt="PICS NOT AVAILABLE"
                                className="City_pg_img text-center"
                              />
                            </div>

                            {/*pg name and gender logo  */}
                            <div className="City_div_name_logo d-flex">
                              <div className="City_div_name">
                                <p>{data.pg_name.substring(0, 30)}</p>
                              </div>
                            </div>

                            {/* Gender   */}
                            <div className="d-flex my-2">
                              <b>Gender : </b>
                              {data.Gender.toLowerCase() === "male" && (
                                <div className="City_div_logo">
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//male-c.svg"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              )}
                              {data.Gender.toLowerCase() === "female" && (
                                <div className="City_div_logo">
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//female-c.svg"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              )}
                              {data.Gender.toLowerCase() === "unisex" && (
                                <div className="City_div_logo">
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//female-c.svg"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                  <img
                                    src="https://bookmypg.co.in/assets/front/images//male-c.svg"
                                    className="mx-1"
                                    alt="male"
                                    height={30}
                                    width={30}
                                  />
                                </div>
                              )}
                            </div>

                            <div className=" d-flex City_div_location">
                              {/* Addrress */}
                              <p>
                                <b>Location</b> :{" "}
                                {data.Address.substring(0, 80)}
                              </p>
                            </div>

                            {/*Rent Details*/}
                            <div>
                              <p>
                                <b>Pincode</b> : {data.pincode}
                              </p>
                            </div>

                            {/*Rent Details*/}
                            <div>
                              <p>
                                <b>Rent</b> : {data.Price}
                              </p>
                            </div>

                            {/* View Pg Details Button */}
                            <div className="div_btn">
                              <button
                                className="btn"
                                onClick={(e) =>
                                  handleclick(navi(`/pgdetails/${data._id}`))
                                }
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })
              : // todo

                (len === 0 && setTimeout(() => {
                  setlen(10);
                }, 50000),
                (
                  <div className="loader-pg">
                    <div className="d-flex justify-content-center align-center">
                      {citydata.length === 0  && len === 0? (
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        <span>No Result Found</span>
                      )}
                    </div>
                  </div>
                )
                )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pgcites;
