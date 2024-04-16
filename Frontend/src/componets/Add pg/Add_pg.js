import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./add_pg.css";
import { toast ,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_Pg = () => {
  const [details, setdeatils] = useState({
    // id: "",
    pg_name: "",
    Address: "",
    city: "",
    desc: "",
    contactno1: "",
    pincode: "",
    deposit: "",
    Price: "",
    no_of_beds: "",
    opertaing_since: "",
  });

  const [drop, setdrop] = useState({
    Gender: "Unisex",
    Food_available: "Vegetarien",
    ac_room: "Available",
    parking: "Available",
    power_backup: "Available",
    available_for: "Boys & Girls",
    preferred_tenants: "Students",
    maintenance: "Yes",
    water_charges: "Yes",
    laundry: "Available",
    Visitor_Entry: "Allowed",
    Non_veg: "Allowed",
    Notice_period: "None",
    opposite_gender: "Allowed",
    Smoking: "Allowed",
    Drinking: "Allowed",
    Loud_Music: "Allowed",
    // Party: "Allowed",
    wifi: "Available",
    // Power: "Available",
    Room_cleaning: "Available",
    Water_cooler: "Available",
    Gate_timing: "None",
    Gym: "Available",
    Lift: "Available",
    Warden: "Available",
  });

  const Navigator = useNavigate();

  const dropchange = async (e) => {
    let id = document.getElementById(`${e.target.id}`).value;
    e.target.value = id;
    setdrop({ ...drop, [e.target.name]: e.target.value });
  };

  const changehandler = (e) => {
    setdeatils({ ...details, [e.target.name]: e.target.value });
  };

  const [image, setImage] = useState("");
  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("id", details.id);
    formData.append("pg_name", details.pg_name);
    formData.append("Address", details.Address);
    formData.append("city", details.city);
    formData.append("desc", details.desc);
    formData.append("area", "Gt12");
    formData.append("pincode", details.pincode);
    formData.append("deposit", details.deposit);
    formData.append("Price", details.Price);
    formData.append("no_of_beds", details.no_of_beds);
    formData.append("opertaing_since", details.opertaing_since);
    formData.append("contactno1", details.contactno1);

    formData.append("maintenance", drop.maintenance);
    formData.append("water_charges", drop.water_charges);
    formData.append("Notice_period", drop.Notice_period);
    formData.append("Gate_timing", drop.Gate_timing);
    formData.append("Gender", drop.Gender);
    formData.append("Food_available", drop.Food_available);
    formData.append("ac_room", drop.ac_room);
    formData.append("parking", drop.parking);
    formData.append("power_backup", drop.power_backup);
    formData.append("available_for", drop.available_for);
    formData.append("preferred_tenants", drop.preferred_tenants);
    formData.append("laundry", drop.laundry);
    formData.append("Visitor_Entry", drop.Visitor_Entry);
    formData.append("Non_veg", drop.Non_veg);
    formData.append("opposite_gender", drop.opposite_gender);
    formData.append("Smoking", drop.Smoking);
    formData.append("Drinking", drop.Drinking);
    formData.append("Loud_Music", drop.Loud_Music);
    // formData.append("Party", drop.Party);
    formData.append("wifi", drop.wifi);
    // formData.append("Power", drop.Power);
    formData.append("Room_cleaning", drop.Room_cleaning);
    formData.append("Water_cooler", drop.Water_cooler);
    formData.append("Gym", drop.Gym);
    formData.append("Lift", drop.Lift);
    formData.append("Warden", drop.Warden);

    for (let i = 0; i < image.length; i++) {
      const file = image[i];
      formData.append("image", file);
    }

    await axios.post("https://find-my-pg-backend.onrender.com/api/upload/addDetails", formData);

    toast.success(`PG Added Successfully`, {
      position: "top-centre",
      autoClose: 900,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    Navigator("/");
    setTimeout(() => { toast.dismiss() }, 500);
    toast.dismiss()
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container my-4">
        <h1>Fill Pg Details</h1>
      </div>

      <div className="container">
        <form onSubmit={upload}>
          {/* Id */}
          {/* <div>
            <label htmlFor="id" className="form-label mt-3 owner_details">
              <b>Enter Id</b>
            </label>

            <input
              type="number"
              className="form-control"
              id="id"
              name="id"
              value={details.id}
              onChange={changehandler}
              required
            ></input>
          </div> */}

          {/* Pg_name */}
          <div className="mb-3">
            <label htmlFor="pg_name" className="form-label mt-3 owner_details">
              <b>Enter PG Name</b>
            </label>

            <input
              type="name"
              minLength="5"
              className="form-control"
              id="ownername"
              name="pg_name"
              value={details.pg_name}
              onChange={changehandler}
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label htmlFor="Address" className="form-label owner_details">
              <b>Enter Pg Address</b>
            </label>
            <textarea
              className="form-control"
              id="Textarea1"
              value={details.Address}
              onChange={changehandler}
              name="Address"
              rows="2"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label htmlFor="Price" className="form-label mt-3 owner_details">
              <b>PG Rent</b>
            </label>

            <input
              type="number"
              className="form-control"
              id="ownerid"
              name="Price"
              value={details.Price}
              onChange={changehandler}
              required
            ></input>
          </div>

          {/* City */}
          <div className="mb-3">
            <label htmlFor="city" className="form-label mt-3 owner_details">
              <b>Enter PG City</b>
            </label>
            <input
              type="name"
              minLength="5"
              className="form-control"
              id="citys"
              name="city"
              value={details.city}
              onChange={changehandler}
              required
            />
          </div>

          {/* Pincode */}
          <div className="mb-3">
            <label htmlFor="pincode" className="form-label owner_details">
              <b>Enter Pincode</b>
            </label>

            <input
              id="teladdhar"
              name="pincode"
              className="form-control contact_no"
              type="tel"
              size="6"
              minLength="6"
              maxLength="6"
              value={details.pincode}
              onChange={changehandler}
              pattern="[0-9]{6}"
              required
            />
          </div>

          {/* Contact No */}
          <div className="mb-3">
            <label htmlFor="contactno1" className="form-label owner_details">
              <b>Enter Contact No</b>
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

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="desc" className="form-label owner_details">
              <b>Enter Pg Description</b>
            </label>
            <input
              className="form-control"
              minLength="120"
              id="desc"
              name="desc"
              rows="3"
              value={details.desc}
              onChange={changehandler}
              required
            ></input>
          </div>

          {/* Area */}
          {/* <div className="mb-3">
            <label htmlFor="area" className="form-label owner_details">
              <b>Enter Area</b>
            </label>
            <input
              className="form-control"
              id="Textarea2"
              type="text"
              value={details.area}
              onChange={changehandler}
              name="area"
              required
            ></input>
          </div> */}

          {/* No of Beds */}
          <div className="mb-3">
            <label htmlFor="no_of_beds" className="form-label owner_details">
              <b>No of Bed Available</b>
            </label>

            <input
              id="no_of_beds"
              name="no_of_beds"
              className="form-control "
              type="number"
              size="6"
              min="1"
              max="10000"
              value={details.no_of_beds}
              onChange={changehandler}
              required
            />
          </div>

          {/* Deposite Amount */}
          <div className="mb-3">
            <label htmlFor="deposit" className="form-label owner_details">
              <b>Deposite Amount</b>
            </label>

            <input
              id="deposit"
              name="deposit"
              className="form-control "
              type="number"
              size="6"
              min="0"
              max="10000"
              value={details.deposit}
              onChange={changehandler}
              required
            />
          </div>

          {/* opertaing_since */}
          <div className="mb-3">
            <label
              htmlFor="opertaing_since"
              className="form-label owner_details"
            >
              <b>Opertaing Since (Year)</b>
            </label>

            <input
              id="opertaing_since"
              name="opertaing_since"
              className="form-control "
              type="number"
              size="6"
              min="1800"
              max="2023"
              placeholder="xxxx"
              value={details.opertaing_since}
              onChange={changehandler}
              required
            />
          </div>

          {/* Uplode Images */}
          <div className="mb-2">
            <label
              htmlFor="opertaing_since"
              className="form-label owner_details"
            >
              <b>Uplode Images (Minimum : 6)</b>
            </label>
            <input
              onChange={(e) => setImage(e.target.files)}
              type="file"
              className="form-control "
              multiple
              required
            />
            <div id="imagehelp" className="form-text">
              Please Uplode Minimum 6 Photos.
            </div>
          </div>

          {/* PG Rules */}
          <div className="container text-center shadow">
            <h4 className="text-centre">PG Rules</h4>
            <div className="row align-items-start">
              <div className="col">
                {/* Gate timing */}
                <div>
                  <div>
                    <label
                      htmlFor="Gate_timing"
                      className="form-label label_contact"
                    >
                      <b>Gate Close Timing</b>
                    </label>
                  </div>
                  <select
                    id="Gate_timing"
                    name="Gate_timing"
                    className="mb-3 dropbox_contact px-2"
                    value={drop.Gate_timing}
                    onChange={dropchange}
                  >
                    <option value="None">None</option>
                    <option value="07:30 PM">07:30 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="08:30 PM">08:30 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                    <option value="09:30 PM">09:30 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="10:30 PM">10:30 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Notice_period */}
                <div>
                  <div>
                    <label
                      htmlFor="Notice_period"
                      className="form-label label_contact"
                    >
                      <b>Notice Period</b>
                    </label>
                  </div>
                  <select
                    id="select15"
                    name="Notice_period"
                    value={drop.Notice_period}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact px-1"
                  >
                    <option value="None">None</option>
                    <option value="1 Month">1 Month</option>
                    <option value="2 Month">2 Month</option>
                    <option value="3 Month">3 Month</option>
                    <option value="4 Month">4 Month</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/*Drinking */}
                <div>
                  <div>
                    <label
                      htmlFor="Drinking"
                      className="form-label label_contact"
                    >
                      <b>Drinking</b>
                    </label>
                  </div>
                  <select
                    id="select13"
                    name="Drinking"
                    className="mb-3 dropbox_contact"
                    value={drop.Drinking}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/*Music */}

                <div>
                  <div>
                    <label
                      htmlFor="Loud_Music"
                      className="form-label label_contact"
                    >
                      <b>Loud Music</b>
                    </label>
                  </div>
                  <select
                    id="select14"
                    name="Loud_Music"
                    className="mb-3 dropbox_contact"
                    value={drop.Loud_Music}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col">
                {/* Visitor */}
                <div>
                  <div>
                    <label
                      htmlFor="Visitor_Entry"
                      className="form-label label_contact"
                    >
                      <b>Visitor</b>
                    </label>
                  </div>
                  <select
                    id="select9"
                    name="Visitor_Entry"
                    className="mb-3 dropbox_contact"
                    value={drop.Visitor_Entry}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Non veg */}
                <div>
                  <div>
                    <label
                      htmlFor="Non_veg"
                      className="form-label label_contact"
                    >
                      <b>Non Veg</b>
                    </label>
                  </div>
                  <select
                    id="select10"
                    name="Non_veg"
                    value={drop.Non_veg}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/*Opposite Gender */}
                <div>
                  <div>
                    <label
                      htmlFor="opposite_gender"
                      className="form-label label_contact"
                    >
                      <b>Opposite Gender</b>
                    </label>
                  </div>
                  <select
                    id="select11"
                    name="opposite_gender"
                    className="mb-3 dropbox_contact"
                    value={drop.opposite_gender}
                    onChange={dropchange}
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/*Smoking */}
                <div>
                  <div>
                    <label
                      htmlFor="Smoking"
                      className="form-label label_contact"
                    >
                      <b>Smoking</b>
                    </label>
                  </div>
                  <select
                    id="select12"
                    name="Smoking"
                    value={drop.Smoking}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Allow">Allowed</option>
                    <option value="Not-Allow">Not-Allowed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Common Area and Amenities */}
          <div className="container text-center shadow">
            <h4 className="text-centre">Common Area and Amenities</h4>
            <div className="row align-items-start">
              <div className="col">
                {/* Wifi */}
                <div>
                  <div>
                    <label htmlFor="wifi" className="form-label label_contact">
                      <b>Wifi</b>
                    </label>
                  </div>
                  <select
                    id="select16"
                    name="wifi"
                    value={drop.wifi}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* power backup */}
                <div>
                  <div>
                    <label
                      htmlFor="power_backup"
                      className="form-label label_contact"
                    >
                      <b>Power Backup </b>
                    </label>
                  </div>

                  <select
                    id="select5"
                    name="power_backup"
                    className="mb-3 dropbox_contact"
                    onChange={dropchange}
                    value={drop.power_backup}
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Food_available */}
                <div>
                  <div>
                    <label
                      htmlFor="Food_available"
                      className="form-label label_contact"
                    >
                      <b>Food Available</b>
                    </label>
                  </div>

                  <select
                    id="select2"
                    name="Food_available"
                    className="mb-3 dropbox_contact"
                    onChange={dropchange}
                    value={drop.Food_available}
                  >
                    <option value="Vegetarien">Vegetarien</option>
                    <option value="Non-Vegetarien">Non-Vegetarien</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Water Cooler */}
                <div>
                  <div>
                    <label
                      htmlFor="Water_cooler"
                      className="form-label label_contact"
                    >
                      <b>Water Cooler</b>
                    </label>
                  </div>
                  <select
                    id="select19"
                    name="Water_cooler"
                    value={drop.Water_cooler}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col">
                {/* Gym */}
                <div>
                  <div>
                    <label htmlFor="Gym" className="form-label label_contact">
                      <b>Gym</b>
                    </label>
                  </div>
                  <select
                    id="select20"
                    name="Gym"
                    value={drop.Gym}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Lift */}
                <div>
                  <div>
                    <label htmlFor="Lift" className="form-label label_contact">
                      <b>Elevator</b>
                    </label>
                  </div>
                  <select
                    id="select21"
                    name="Lift"
                    value={drop.Lift}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Warden */}
                <div>
                  <div>
                    <label
                      htmlFor="Warden"
                      className="form-label label_contact"
                    >
                      <b>Warden</b>
                    </label>
                  </div>
                  <select
                    id="select22"
                    name="Warden"
                    value={drop.Warden}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Room Cleaning */}
                <div>
                  <div>
                    <label
                      htmlFor="Room_cleaning"
                      className="form-label label_contact"
                    >
                      <b>Room Cleaning</b>
                    </label>
                  </div>
                  <select
                    id="select18"
                    name="Room_cleaning"
                    value={drop.Room_cleaning}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Other Changes */}
          <div className="container text-center shadow">
            <h4 className="text-centre">Other Details</h4>

            <div className="row align-items-start">
              <div className="col">
                {/* water_charges  */}
                <div>
                  <div>
                    <label
                      htmlFor="water_charges"
                      className="form-label label_contact"
                    >
                      <b>Water Charges </b>
                    </label>
                  </div>

                  <select
                    id="water_charges"
                    name="water_charges"
                    className="mb-3 dropbox_contact px-3"
                    onChange={dropchange}
                    value={drop.water_charges}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Gender */}
                <div>
                  <div>
                    <label
                      htmlFor="Gender"
                      className="form-label label_contact"
                    >
                      <b>Pg For Gender</b>
                    </label>
                  </div>
                  <select
                    id="Gender"
                    name="Gender"
                    className="mb-3 dropbox_contact px-2"
                    value={drop.Gender}
                    onChange={dropchange}
                  >
                    <option value="Unisex">Unisex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* maintenance  */}
                <div>
                  <div>
                    <label
                      htmlFor="maintenance"
                      className="form-label label_contact"
                    >
                      <b>Maintenance </b>
                    </label>
                  </div>

                  <select
                    id="maintenance"
                    name="maintenance"
                    className="mb-3 dropbox_contact px-3"
                    onChange={dropchange}
                    value={drop.maintenance}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* Laundry */}
                <div>
                  <div>
                    <label
                      htmlFor="laundry"
                      className="form-label label_contact"
                    >
                      <b>Laundry </b>
                    </label>
                  </div>

                  <select
                    id="laundry"
                    name="laundry"
                    className="mb-3 dropbox_contact"
                    onChange={dropchange}
                    value={drop.laundry}
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row align-items-start">
              <div className="col">
                {/* Preferred  Tenants */}
                <div>
                  <div>
                    <label
                      htmlFor="preferred_tenants"
                      className="form-label label_contact"
                    >
                      <b>Preferred Tenants </b>
                    </label>
                  </div>

                  <select
                    id="preferred_tenants"
                    name="preferred_tenants"
                    className="mb-3 dropbox_contact"
                    value={drop.preferred_tenants}
                    onChange={dropchange}
                  >
                    <option value="Students">Students</option>
                    <option value="Working Person">Working Person</option>
                    <option value="Family">Family</option>
                    <option value="All">All</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* ac_room  */}
                <div>
                  <div className="">
                    <label
                      htmlFor="ac_room"
                      className="form-label label_contact"
                    >
                      <b>AC Room</b>
                    </label>
                  </div>
                  <select
                    id="ac_room"
                    name="ac_room"
                    value={drop.ac_room}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* parking  */}
                <div>
                  <div className="">
                    <label
                      htmlFor="parking"
                      className="form-label label_contact"
                    >
                      <b>Parking</b>
                    </label>
                  </div>
                  <select
                    id="parking"
                    name="parking"
                    value={drop.parking}
                    onChange={dropchange}
                    className="mb-3 dropbox_contact"
                  >
                    <option value="Available">Available</option>
                    <option value="Not-Available">Not-Available</option>
                  </select>
                </div>
              </div>

              <div className="col">
                {/* available_for */}
                <div>
                  <div className="">
                    <label
                      htmlFor="available_for"
                      className="form-label label_contact"
                    >
                      <b>Available For </b>
                    </label>
                  </div>

                  <select
                    id="available_for"
                    name="available_for"
                    className="mb-3 dropbox_contact "
                  >
                    <option value="Boys & Girls">Boys & Girls</option>
                    <option value="Boys">Boys</option>
                    <option value="Girls">Girls</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary my-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add_Pg;
