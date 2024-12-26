"use client";

import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { TripContext } from "../Context/Context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Payment() {
  const { selectedHotel, selectedTrip } = useContext(TripContext);
  const [isHotelSelected, setIsHotelSelected] = useState(false);
  const router = useRouter();

  let priceTravel = selectedTrip.price;
  useEffect(() => {
    console.log(selectedHotel);

    if (selectedHotel) {
      setIsHotelSelected(true);
      console.log("Hotel is selected");
    } else {
      setIsHotelSelected(false);
      console.log("Hotel is not selected");
    }
  }, [selectedHotel]);

  function paymentSubmit() {
    console.log("Payment submitted");
    toast.success(
      "Payment successful! You will be redirected to the home page."
    );

    setTimeout(() => {
      router.push("/Home");
    }, 2000);
  }

  let validationSchema = Yup.object({
    cardName: Yup.string().required(`Cardholder's name is required`),
    cardNumber: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Card number is required"),
    expiry: Yup.string().required("Expiry date is required"),
    cvc: Yup.string()
      .matches(/^\d{3}$/, "CVC must be 3 digits")
      .required("CVC is required"),
    discountCode: Yup.string(),
  });

  const Formik = useFormik({
    initialValues: {
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
      discountCode: "",
    },
    validationSchema: validationSchema,
    onSubmit: paymentSubmit,
  });

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6">
            <h1 className="cata+h3">Let’s Make Payment</h1>
            <h6 className="cata text-start my-3" style={{ fontSize: "14px" }}>
              To start your subscription, input your card details to make //
              payment. You will be redirected to your banks authorization page .
            </h6>

            <form
              onSubmit={Formik.handleSubmit}
              className="col-12 col-lg-10 my-5"
            >
              <div>
                <label htmlFor="cardName">{`Cardholder's Name`}</label>
                <input
                  type="text"
                  name="cardName"
                  id="cardName"
                  className="form-control form-control-lg"
                  placeholder="PAULINA CHIMAROKE"
                  value={Formik.values.cardName}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.cardName && Formik.errors.cardName ? (
                  <div className="text-danger">{Formik.errors.cardName}</div>
                ) : null}
              </div>
              <div className="my-3">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  className="form-control form-control-lg"
                  placeholder="9870 3456 7890 6473"
                  value={Formik.values.cardNumber}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.cardNumber && Formik.errors.cardNumber ? (
                  <div className="text-danger">{Formik.errors.cardNumber}</div>
                ) : null}
              </div>
              <div className="row justify-content-between">
                <div className="col-lg-4 col-md-4 col-6">
                  <label htmlFor="expiry">Expiry</label>
                  <input
                    type="month"
                    name="expiry"
                    id="expiry"
                    className="form-control form-control-lg"
                    value={Formik.values.expiry}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.expiry && Formik.errors.expiry ? (
                    <div className="text-danger">{Formik.errors.expiry}</div>
                  ) : null}
                </div>
                <div className="col-lg-4 col-md-4 col-6">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    className="form-control form-control-lg"
                    placeholder="000"
                    value={Formik.values.cvc}
                    onChange={Formik.handleChange}
                    onBlur={Formik.handleBlur}
                  />
                  {Formik.touched.cvc && Formik.errors.cvc ? (
                    <div className="text-danger">{Formik.errors.cvc}</div>
                  ) : null}
                </div>
              </div>

              <div className="my-3">
                <label htmlFor="discountCode">Discount Code</label>
                <input
                  type="text"
                  name="discountCode"
                  id="discountCode"
                  className="form-control form-control-lg"
                  placeholder="CHIKAMSO-20-OFF"
                  value={Formik.values.discountCode}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
              </div>

              <div className="row m-0 p-0">
                <button type="submit" className="btn btn-primary col-lg-4">
                  Pay
                </button>
              </div>
            </form>
          </div>

          <div className="col-lg-6 d-flex justify-content-center">
            <div className="col-lg-8 position-relative Payment_info p-4">
              <h6>You’re paying,</h6>
              {selectedTrip && Object.keys(selectedTrip).length > 0 ? (
                <>
                  <h1 className="text-center my-4 text-black">
                    {selectedTrip.price}
                  </h1>
                  <hr />
                  <h5>Name: Ahmed Kassem</h5>
                  <br />
                  <div className="col-12 col-lg-8">
                    <>
                      {selectedTrip.from}
                      <i className="fa-solid fa-arrow-right mx-2"></i>{" "}
                      {selectedTrip.to}
                    </>
                  </div>

                  <br />
                  <h6>Hotel: {isHotelSelected ? "Yes" : "No"}</h6>
                  <br />
                  <div className="row justify-content-between">
                    <h6 className="col-6">Bags: 100$</h6>
                    <span className="col-6 text-end">x2</span>
                  </div>
                  <hr />
                  <div>
                    Total:{" "}
                    <strong className="fs-4 text-end">
                      {parseFloat(priceTravel.replace("$", "")) + 100}$
                    </strong>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
