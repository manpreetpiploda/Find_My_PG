import React, { useEffect, useState } from "react";
import "./home.css";
import "./responsive.css";
import { city_data } from "../../data/citydata";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Home = (props) => {
  window.scrollTo(0, 0);

  const color = "#041073";
  let [text, settext] = useState("");
  const onchange = (text) => {
    settext(text);
  };

  let da = props.data;
  const [details, setdetails] = useState(da);

  useEffect(() => {
    setdetails(da);
    // eslint-disable-next-line
  }, [da]);

  const cleartext = (e) => {
    settext("");
  };

  const check = (e) => {
    e.preventDefault();
    // if (!localStorage.getItem("token")) {
    //   toast.dismiss();
    //   toast.error(`Please Login To Continue`, {
    //     position: "top-center",
    //     autoClose: 1200,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    // } else {
    onchange(e.target.value);
    // }
  };

  let Navigateor = useNavigate("");

  const successCallback = async (position) => {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
    );
    let data = await response.json();

    // To get First Word Of city Only
    let user_city = data.address.city;
    let first = user_city.split(" ").at(0);
    console.log(first);
    if (first === "जयपुर") first = "Jaipur";
    Navigateor(`search/${first}`);
  };

  const errorCallback = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        toast.dismiss();
        toast.error(`Allow Location To Continue`, {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigator.geolocation.getCurrentPosition(successCallback);
        break;
      case error.POSITION_UNAVAILABLE:
        toast.dismiss();
        toast.error(`Location Not Available`, {
          position: "top-center",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        break;
      case error.TIMEOUT:
        toast.dismiss();
        toast.error(`Get user location timed out`, {
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
  };

  const user_location = (e) => {
    e.preventDefault();
    // if (!localStorage.getItem("token")) {
    //   toast.dismiss();
    //   toast.error(`Please Login To Continue`, {
    //     position: "top-center",
    //     autoClose: 1200,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //   });
    // } else {
    //    To Get User Loaction
    if (navigator.geolocation) {
      //returns position(latitude and longitude) or error
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      //For old browser i.e IE
      toast.dismiss();
      toast.error(` browser does not support geolocation`, {
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
    // }
  };

  return (
    <div>
      <div className="container section1">
        <h1 style={{ color: color }}>Find My PG</h1>
        <p style={{ fontSize: 20 }}>
          India's Largest PG Network to Find your PG Online
        </p>
      </div>

      {/* Search data */}
      <div className="container input-group mb-3 d-flex">
        <div className="d-flex serachsection container">
          <input
            type="text"
            placeholder="Enter city name, area etc.."
            className="searchtext"
            name="search"
            value={text}
            // onClick={check}
            onChange={check}
            autoComplete="off"
          />
          <i className="fa-solid fa-xmark  serachion" onClick={cleartext}></i>
          <button
            type="button"
            id="search"
            onClick={user_location}
            className="search-submit"
          >
            <i className="fa-solid fa-location-dot px-2"></i> Near me
          </button>
        </div>
      </div>

      {/* search results */}
      <div>
        {text && (
          <ul className="search_result list-group">
            {details
              .filter((search) =>
                search.Address.toLowerCase().includes(text.toLowerCase())
              )
              .map((search, k) => (
                <Link
                  to={`pgdetails/${search._id}`}
                  style={{ textDecoration: "none" }}
                  key={k}
                >
                  <li className="list_item list-group-item ">
                    <i
                      className="fa-sharp fa-solid fa-location-dot fa-beat-fade location_icon"
                      style={{ color: "#ee1b65" }}
                    ></i>
                    {search.Address.substring(0, 50)}
                  </li>
                </Link>
              ))}
          </ul>
        )}
      </div>

      {/* Citys */}

      <div className="container d-flex city">
        {city_data.map((data, k) => {
          return (
            <Link
              to={`search/${data.name}`}
              style={{ textDecoration: "none", color: "black" }}
              key={k}
            >
              <div className="component">
                <div>
                  <img src={data.img} alt="" className="img" />
                </div>
                <h5 className="imgs my-1">{data.name}</h5>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Long Image */}
      <div className="longimg">
        <img
          className="longimg"
          src="https://bookmypg.co.in/assets/front/images/city-slider.png"
          alt=""
        />
      </div>
      {/* About Us Section */}
      <div className="container d-flex about">
        <div className="leftabout">
          <h2 className="h2 anim-left-title my-5" style={{ color: color }}>
            About Find My PG
          </h2>
          <p className="tex">
            "Find Your PG, is fastest-growing network of managed Paying Guest
            (PG) rentals. We hope to provide you with the best renting solutions
            with the help of our designs and technology.Our services across the
            country will help you find and book Paying Guest (PG) rental homes."
          </p>

          <Link type="button" className="btn" to="/about">
            Read More
          </Link>
        </div>

        <div className="img_about">
          <div className="col-md-6 wow fadeIn animated rightabout">
            <img
              src="https://bookmypg.co.in/assets/front/images/about.png"
              alt=""
              className="img-responsive"
            />{" "}
          </div>
        </div>
      </div>

      {/* How Work */}
      <div>
        <hr className="my-5" />
        <h1 style={{ color: color }} className="my-5 text-center">
          How it Work's
        </h1>

        <div className="container tex2">
          <p>
            Our process is simple and very different from those of others in
            this industry. The search process is streamlined by the locality or
            landmark of your choice. This allows you to find the right PG or
            Room.
          </p>
        </div>

        <div className="d-flex w_div">
          <div className="">
            <div className="w_logo">
              <img
                src="https://bookmypg.co.in/assets/front/images/hiw-icon-01.png"
                alt=""
                className="w100"
              />
            </div>
            <p className="worktex">Search </p>
            <p className="texdesc my-2">Find PG Easily Using Filters</p>
          </div>
          <div>
            <div className="w_logo">
              <img
                src="https://bookmypg.co.in/assets/front/images/hiw-icon-02.png"
                alt=""
                className="w100"
              />
            </div>
            <p className="worktex">Make Payment</p>
            <p className="texdesc my-2">Choose Your PG and Pay Online</p>
          </div>
          <div>
            <div className="w_logo">
              <img
                src="https://bookmypg.co.in/assets/front/images/hiw-icon-03.png"
                alt=""
                className="w100"
              />
            </div>
            <p className="worktex">Booking Confirmation</p>
            <p className="texdesc my-2">Get Confirmed booking date </p>
          </div>
        </div>
      </div>

      {/* What we Offer */}
      <div>
        <hr className="my-5" />
        <h1 style={{ color: color }} className="my-5 text-center">
          What We Offer
        </h1>

        <div className="container tex2">
          <p>
            The listed services are offered to all our customers. We assure you
            the best deals in all our properties and the chance to live a more
            luxurious life with lesser cost.
          </p>
        </div>

        <div className="d-flex w_div">
          <div>
            <div className="o_logo">
              <img
                src="https://bookmypg.co.in/assets/front/images/find-pgs-icon.png"
                alt=""
                height={63}
                width={63}
              />{" "}
            </div>
            <p className="worktex">Find PG Near You</p>
            <p className="texdesc my-2">
              Find Your PG By Selecting Your Location
            </p>
          </div>
          <div>
            <div className="o_logo">
              <img
                src="https://bookmypg.co.in/assets/front/images/book-online-icon.png"
                alt=""
                height={63}
                width={63}
              />
            </div>
            <p className="worktex">Book Online</p>
            <p className="texdesc my-2">Book your PG online Through Our web</p>
          </div>

          <div className="my-5">
            <div className="o_logo">
              <img
                src="https://bookmypg.co.in/assets/front/images/best-deals-icon.png"
                alt=""
                height={63}
                width={63}
              />
            </div>
            <p className="worktex">Best Deals On PGs</p>
            <p className="texdesc my-2">
              We have tie ups with PGs in every city. We make sure that You get
              the best deals for PGs.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
