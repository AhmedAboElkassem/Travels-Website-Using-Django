"use client";
import React, { useContext, useRef, useState } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
// import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
import luggage from "../../public/Luggage.jpg";
import Image from "next/image";
import { TripContext } from "../Context/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import { useRouter } from "next/navigation";
import axios from "axios";
export default function Booking() {
  const [counterBag, setcounterBag] = useState(0);
  const { selectedTrip } = useContext(TripContext);
  const router = useRouter();
  // ----------------------------
  async function bookSubmit(values) {
    console.log("Form submitted with values:", values);
    router.push("/Payment");
    try {
      let response = await axios.post(
        "https://aboelkassem.pythonanywhere.com/api/traveler_info/",
        values
      );
      console.log("test", response);
    } catch (error) {
      console.log(error);
    }
  }
  // ----------------------------
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    middleName: Yup.string(),
    lastName: Yup.string().required("Last name is required"),
    suffix: Yup.string(),
    dob: Yup.date().required("Date of birth is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    redressNumber: Yup.string(),
    knownTravelerNumber: Yup.string().required(
      "Known traveler number is required"
    ),
    emergencyFirstName: Yup.string().required(
      "Emergency contact first name is required"
    ),
    emergencyLastName: Yup.string().required(
      "Emergency contact last name is required"
    ),
    emergencyEmail: Yup.string()
      .email("Invalid email")
      .required("Emergency contact email is required"),
    emergencyPhone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Emergency contact phone number is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      suffix: "",
      dob: "",
      email: "",
      phone: "",
      redressNumber: "",
      knownTravelerNumber: "",
      emergencyFirstName: "",
      emergencyLastName: "",
      emergencyEmail: "",
      emergencyPhone: "",
    },
    validationSchema: validationSchema,
    onSubmit: bookSubmit,
  });
  return (
    <>
      <div className=" vh-100 ">
        <Navbar />
        <div className="container">
          <div className="row my-5">
            <h1 className=".cata+h3">Passenger information</h1>
            <p className="bookh3 text-start">
              Enter the required information for each traveler and be sure that
              it exactly matches the government-issued ID presented at the
              airport.
            </p>
          </div>
          {/* ------------------------------- */}
          <h5 className="mb-4">Passenger 1 (Adult)</h5>
          <div className="row">
            <div className="col-lg-8">
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="row mb-3">
                  <div className="col-lg-3 ">
                    <input
                      type="text"
                      className=" form-control form-control-lg"
                      placeholder="First name*"
                      name="firstName"
                      id="firstName"
                      value={formik.values.firstName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-danger">
                        {formik.errors.firstName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-3  ">
                    <input
                      type="text"
                      className=" form-control form-control-lg my-lg-0 my-md-2 my-sm-2 my-2"
                      placeholder="Middle"
                      name="middleName"
                      id="middleName"
                      value={formik.values.middleName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.middleName && formik.errors.middleName ? (
                      <div className="text-danger">
                        {formik.errors.middleName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-3 ">
                    <input
                      type="text"
                      className=" form-control form-control-lg"
                      placeholder="Last name*"
                      name="lastName"
                      id="lastName"
                      value={formik.values.lastName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-danger">
                        {formik.errors.lastName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* ------- */}
                <div className="row mb-3">
                  <div className="col-lg-3 ">
                    <input
                      type="text"
                      className=" form-control form-control-lg"
                      placeholder="Suffix"
                      name="suffix"
                      id="suffix"
                      value={formik.values.suffix}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.suffix && formik.errors.suffix ? (
                      <div className="text-danger">{formik.errors.suffix}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-4 ">
                    <input
                      type="text"
                      className="form-control form-control-lg my-lg-0 my-md-2 my-sm-2 my-2"
                      placeholder="Date of birth*"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) {
                          e.target.type = "text";
                        }
                      }}
                      name="dob"
                      id="dob"
                      value={formik.values.dob}
                      // onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.dob && formik.errors.dob ? (
                      <div className="text-danger">{formik.errors.dob}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* ------- */}
                <div className="row mb-3">
                  <div className="col-lg-5 ">
                    <input
                      type="email"
                      className=" form-control form-control-lg "
                      placeholder="Email address*"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-4 ">
                    <input
                      type="text"
                      className="form-control form-control-lg my-lg-0 my-md-2 my-sm-2 my-2"
                      placeholder="Phone number*"
                      name="phone"
                      id="phone"
                      value={formik.values.phone}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-danger">{formik.errors.phone}</div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* ------- */}
                <div className="row mb-3">
                  <div className="col-lg-5 ">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Redress number"
                      name="redressNumber"
                      id="redressNumber"
                      value={formik.values.redressNumber}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.redressNumber &&
                    formik.errors.redressNumber ? (
                      <div className="text-danger">
                        {formik.errors.redressNumber}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-4 ">
                    <input
                      type="text"
                      className=" form-control form-control-lg my-lg-0 my-md-2 my-sm-2 my-2"
                      placeholder="Known traveller number*"
                      name="knownTravelerNumber"
                      id="knownTravelerNumber"
                      value={formik.values.knownTravelerNumber}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.knownTravelerNumber &&
                    formik.errors.knownTravelerNumber ? (
                      <div className="text-danger">
                        {formik.errors.knownTravelerNumber}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* -------------------------------------- */}

                <h5 className="my-5">Emergency contact information</h5>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Same as Passenger 1
                  </label>
                </div>
                <div className="row my-3">
                  <div className="col-lg-5 ">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="First name*"
                      name="emergencyFirstName"
                      id="emergencyFirstName"
                      value={formik.values.emergencyFirstName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.emergencyFirstName &&
                    formik.errors.emergencyFirstName ? (
                      <div className="text-danger">
                        {formik.errors.emergencyFirstName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-4 ">
                    <input
                      type="text"
                      className=" form-control form-control-lg mt-lg-0 mt-md-2 mt-sm-2 my-2"
                      placeholder="Last name*"
                      name="emergencyLastName"
                      id="emergencyLastName"
                      value={formik.values.emergencyLastName}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.emergencyLastName &&
                    formik.errors.emergencyLastName ? (
                      <div className="text-danger">
                        {formik.errors.emergencyLastName}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-lg-5 ">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Email address*"
                      name="emergencyEmail"
                      id="emergencyEmail"
                      value={formik.values.emergencyEmail}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.emergencyEmail &&
                    formik.errors.emergencyEmail ? (
                      <div className="text-danger">
                        {formik.errors.emergencyEmail}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-4 ">
                    <input
                      type="text"
                      className=" form-control form-control-lg mt-lg-0 mt-md-2 mt-sm-2 my-2"
                      placeholder="Phone number*"
                      name="emergencyPhone"
                      id="emergencyPhone"
                      value={formik.values.emergencyPhone}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.emergencyPhone &&
                    formik.errors.emergencyPhone ? (
                      <div className="text-danger">
                        {formik.errors.emergencyPhone}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* ------------------------------------------------ */}
                <h5 className="mt-5">Bag information</h5>
                <p className="bookh3 col-lg-9">
                  Each passenger is allowed one free carry-on bag and one
                  personal item. First checked bag for each passenger is also
                  free. Second bag check fees are waived for loyalty program
                  members. See the full bag policy.
                </p>
                {/* ------------------------------------------------ */}
                <label htmlFor="">Checked bags</label>
                <div className="row   align-items-center mt-2">
                  <div className="col-lg-1 col-md-1 col-sm-2 col-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        setcounterBag(counterBag + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-lg-1 text-center col-md-1 col-sm-2 col-2 ">
                    {counterBag}
                  </div>
                  <div className="col-lg-1  col-md-1 col-sm-2 col-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        if (counterBag > 0) {
                          setcounterBag(counterBag - 1);
                        }
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>

                {/* ------------------------------------------------ */}

                <div className="row w-lg-75 w-md-100 w-sm-100 mt-5 mb-md-3 mb-sm-3 mb-3">
                  <Button
                    type="submit"
                    className="btn   btn-primary  col-lg-3 col-md-6 col-sm-4 py-2 my-2"
                    // onClick={() => {

                    // }}
                    disabled={!(formik.isValid && formik.dirty)}
                  >
                    Save and Pay
                  </Button>
                  <button
                    type="button"
                    className="btn  col-lg-3 col-md-6 col-sm-4"
                  >
                    Select seats
                  </button>
                </div>
              </form>
            </div>
            {/* ---------------------------------------ahmed---------- */}

            <div className="col-lg-4 d-flex justify-content-between flex-column ">
              <div>
                <div className="card_trip p-4  mb-4">
                  {selectedTrip && Object.keys(selectedTrip).length > 0 ? (
                    <div className="  align-items-center">
                      <div className="row">
                        <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                          {selectedTrip.from}
                          <i className="fa-solid fa-arrow-right mx-2"></i>
                          {selectedTrip.to}
                        </div>
                        <div
                          className="col-12 col-lg-6 col-md-2 fs-6 
                      "
                        >
                          {selectedTrip.date}
                        </div>
                      </div>

                      <div className="row my-3">
                        <div className="col-lg-6" style={{ color: "#7C8DB0" }}>
                          <i class="fa-solid fa-plane me-2"></i>
                          {selectedTrip.airline}
                        </div>
                        <div className="col-lg-6 ">
                          Dur : {selectedTrip.duration}
                        </div>
                      </div>
                      <div className="row justify-content-end align-self-end">
                        <div
                          className="col-lg-6
                        
                        "
                        >
                          Total: {selectedTrip.price}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="bookh3 ">No Select Trip</p>
                      <button
                        type="button"
                        className="btn bg-primary text-white"
                        onClick={() => {
                          router.push("/flights");
                        }}
                      >
                        Select Trip
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div>
                <Image src={luggage} alt="luggage"></Image>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
