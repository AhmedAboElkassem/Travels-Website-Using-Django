"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { cookies } from "next/headers";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";
export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);

  async function loginSubmit(values) {
    setisLoading(true);

    try {
      let response = await axios.post(
        "https://aboelkassem.pythonanywhere.com/api/login/",
        values
      );
      setisLoading(false);

      console.log("ya", response);

      Cookies.set("Token", response.data.token, {
        expires: 1,
        sameSite: "strict",
        path: "/",
      });
      console.log("testr", response.data.token);
      setErrorMessage("");
      router.push("/Home");
      // localStorage.setItem("Token", response.data.token);
      // console.log("res", response);
    } catch (err) {
      if (err.response.data.message) {
        // console.log("Error :", err.response.data.messagem);
        setErrorMessage(err.response.data.message);
        setisLoading(false);
      } else {
        // console.log("Error1:", err.message);
        setErrorMessage("An unexpected error occurred");
      }
    }
  }

  let validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      //   "At least 8 characters, with one uppercase letter, one lowercase letter, and one number."
      // )
      .required("Password is requird"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: loginSubmit,
  });
  return (
    <div className="row vh-100 m-0 p-0">
      <div className="col-lg-6 vh-100 p-0 plane d-none d-lg-flex  flex-column   align-items-center">
        <h1 className="travelTo mt-5">Travelista Tours</h1>
        <p className="col-lg-8 text-center text-white">
          Travel is the only purchase that enriches you in ways beyond material
          wealth
        </p>
      </div>
      <div
        className=" 
      
      col-lg-4 col-md-6 col-12 p-5 d-flex flex-column justify-content-center  m-lg-auto m-md-auto 
      "
      >
        <div className=" d-flex flex-column position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="270"
            height="59"
            viewBox="0 0 291 59"
            className=" position-absolute"
            fill="none"
            style={{ top: "-33px", left: "70px" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M232.615 21.401C235.123 23.6083 234.403 23.3537 240.229 21.7408C245.338 20.2122 242.917 19.703 247.485 22.1649C251.609 24.4583 258.329 26.7518 261.467 28.5341C260.3 30.9979 250.265 39.0652 247.845 42.3771C248.743 42.8011 249.459 43.1419 250.443 43.5669C251.967 44.2455 251.609 44.2455 253.401 43.2271C257.343 41.103 269.979 34.3098 272.488 33.2894C275.801 34.6486 284.585 38.8957 287.629 38.7253C289.064 38.6411 291.395 38.3013 290.943 36.6023C289.78 32.4413 281.894 30.1469 276.786 28.0239C274.728 27.1758 275.265 27.261 274.817 25.136C274.276 22.8435 270.872 6.19786 270.066 5.34978C269.707 5.09517 266.93 3.99151 266.394 3.73594C266.124 5.26554 265.945 6.9636 265.855 8.57648L264.96 18.003C264.96 19.5316 264.691 21.3149 264.421 22.7583C262.092 21.6547 259.762 20.7205 257.342 19.6168C245.337 14.1809 247.484 17.8335 244.71 11.719C243.094 8.32187 243.094 6.28304 239.6 6.79418C240.229 13.5874 238.26 17.8345 232.615 21.401ZM235.213 12.994C236.555 13.419 236.018 15.3707 234.496 15.0318L232.434 14.3532C231.181 14.0124 231.538 11.9745 233.151 12.3986L235.213 12.994ZM1.79082 58.7681C0.627346 59.6171 -0.717959 57.9181 0.448542 57.1533L1.34341 56.3904C2.59677 55.4552 3.85215 57.2385 2.77655 58.0043L1.79082 58.7681ZM7.97379 54.096C6.80729 54.946 5.46506 53.247 6.53763 52.3989L8.33132 51.1249C9.4958 50.2749 10.841 51.8878 9.67452 52.7378L7.97379 54.096ZM14.9627 48.9166C13.8891 49.7657 12.454 48.1528 13.6205 47.3028L15.4111 46.0288C16.5755 45.1807 18.0108 46.7945 16.7554 47.7278L14.9627 48.9166ZM22.1324 44.0751C20.879 44.8409 19.7105 43.0576 20.879 42.2928L22.6676 41.103C24.0149 40.3401 25.1774 42.1234 23.924 42.8882L22.1324 44.0751ZM29.4788 39.3198C28.2254 40.0846 27.061 38.3023 28.2255 37.5365L30.104 36.4329C31.3604 35.669 32.5249 37.4523 31.3604 38.2152L29.4788 39.3198ZM36.9182 34.819C35.7517 35.5829 34.4983 33.8848 35.7516 33.0358L37.7241 31.9321C38.7987 31.2525 40.141 32.9506 38.7987 33.8006L36.9182 34.819ZM44.5332 30.5729C43.187 31.2515 42.2932 29.3831 43.4566 28.7896L45.4301 27.685C46.7723 27.0916 47.76 28.9591 46.5037 29.5535L44.5332 30.5729ZM52.3271 26.5804C50.9848 27.1758 49.9971 25.3906 51.3424 24.712L53.3118 23.7778C54.6581 23.0991 55.5519 25.0518 54.2995 25.6481L52.3271 26.5804ZM60.3057 22.8445C58.9595 23.4389 57.9738 21.5704 59.317 20.977L61.2904 20.0418C62.5438 19.4474 63.6184 21.3158 62.2762 21.9093L60.3057 22.8445ZM68.2773 19.3632C66.8422 19.8724 66.1261 17.9187 67.4714 17.4086L69.4408 16.5595C70.877 16.0513 71.6829 18.0891 70.3376 18.5132L68.2773 19.3632ZM76.5196 16.2207C75.1774 16.7299 74.2826 14.7772 75.7147 14.1818L77.777 13.5032C79.1182 12.994 79.9252 14.9466 78.582 15.4559L76.5196 16.2207ZM84.7659 13.3328C83.2409 13.7578 82.7935 11.6347 84.0499 11.2959L86.199 10.6153C87.7241 10.1913 88.1705 12.2282 86.9151 12.6532L84.7659 13.3328ZM93.1869 10.6995C91.7538 11.1236 91.2175 9.08668 92.5608 8.74687L94.713 8.15245C96.1451 7.7265 96.7713 9.76532 95.3382 10.1051L93.1869 10.6995ZM101.701 8.49322C100.444 8.83206 99.6396 6.87938 101.165 6.45343L103.312 5.94515C104.928 5.60631 105.195 7.72842 103.85 7.98399L101.701 8.49322ZM110.301 6.62572C108.869 6.87938 108.512 4.75535 109.854 4.50074L112.096 4.07671C113.528 3.82209 113.889 5.85996 112.454 6.11362L110.301 6.62572ZM118.994 5.01188C117.652 5.26649 117.111 3.22672 118.637 2.97306C119.353 2.80268 120.069 2.71844 120.878 2.54806C122.131 2.37864 122.756 4.41651 121.235 4.67113C120.426 4.75536 119.71 4.92669 118.994 5.01188ZM127.777 3.73689C126.25 3.90632 126.072 1.86845 127.507 1.69998L129.656 1.44345C131.181 1.27403 131.361 3.39804 129.925 3.48323L127.777 3.73689ZM136.557 2.8869C135.124 3.05728 134.856 0.935178 136.377 0.764797L138.618 0.595371C139.96 0.510181 140.32 2.54806 138.708 2.71749L136.557 2.8869ZM145.338 2.37864C143.813 2.37864 143.903 0.25557 145.248 0.25557L147.49 0.169426C149.011 0.169426 149.011 2.20826 147.579 2.29441L145.338 2.37864ZM154.211 2.12402C152.775 2.12402 152.685 0.0851906 154.211 0C154.927 0 155.733 0 156.449 0C157.795 0 157.973 2.12402 156.449 2.12402C155.643 2.12402 154.927 2.12402 154.211 2.12402ZM163.079 2.29344C161.466 2.20825 161.736 0.0842285 163.168 0.168462L165.32 0.254606C166.843 0.339797 166.662 2.46191 165.23 2.37767L163.079 2.29344ZM171.862 2.71749C170.425 2.63326 170.515 0.510178 172.04 0.679602L174.284 0.849028C175.716 0.934219 175.536 2.9721 174.103 2.88595L171.862 2.71749ZM180.641 3.56748C179.299 3.39806 179.387 1.27403 180.911 1.44345C181.629 1.52864 182.434 1.61384 183.15 1.69998C184.496 1.78422 184.406 3.90727 182.88 3.73689C182.165 3.65266 181.449 3.56748 180.641 3.56748ZM189.423 4.58593C187.901 4.33132 188.438 2.29345 189.78 2.54806L192.021 2.8869C193.453 3.14151 193.007 5.18131 191.664 4.9267L189.423 4.58593ZM198.206 6.02938C196.77 5.77477 197.13 3.7369 198.564 3.99248L200.801 4.33131C202.148 4.58593 201.79 6.70996 200.354 6.45343L198.206 6.02938ZM206.806 7.72842C205.463 7.4738 205.82 5.35073 207.343 5.69053L209.495 6.11458C211.016 6.54053 210.301 8.49321 208.957 8.15436L206.806 7.72842ZM215.41 9.68013C213.974 9.25705 214.604 7.30438 215.947 7.64322L218.187 8.15341C219.62 8.57745 218.994 10.5301 217.558 10.1913L215.41 9.68013ZM223.921 11.8894C222.578 11.5505 223.115 9.51072 224.55 9.85243L226.699 10.4459C228.045 10.7857 227.594 12.9088 226.073 12.4838L223.921 11.8894Z"
              fill="#009EE2"
            />
          </svg>

          <h1 className="welcome text-center ">welcome</h1>

          <p className=" text-center mt-2 loEmail">Login with Email</p>
          <form
            action=""
            onSubmit={formik.handleSubmit}
            className="justify-content-center  mt-3"
          >
            <input
              type="email"
              name="email"
              className=" form-control form-control-lg "
              id="email"
              // autoComplete="current-Email"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : (
              ""
            )}

            <input
              type="password"
              name="password"
              id="password"
              className="form-control  form-control-lg mt-3"
              placeholder="Enter Your Password"
              // autoComplete="current-password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className=" text-danger">{formik.errors.password}</div>
            ) : (
              ""
            )}
            <Link
              href="/"
              className="d-flex justify-content-end text-decoration-none mt-2 loEmail "
            >
              Forgot your password?
            </Link>
            {/* ..... */}
            {errorMessage && (
              <div className="alert alert-danger text-center">
                {errorMessage}
              </div>
            )}
            <div className="mt-4 d-flex justify-content-center ">
              <Button
                className="w-50 py-2 "
                style={{ backgroundColor: "#009EE2" }}
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
              >
                {isLoading ? (
                  <div className="d-flex  align-items-center  justify-content-center ">
                    <ThreeDots
                      visible={true}
                      height="40"
                      width="40"
                      color="#ffffff"
                      radius="9"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  <> Login</>
                )}
              </Button>
            </div>

            <p className="text-center mt-3 loEmail">
              Don’t have account?{" "}
              <Link href="/Register" className=" text-decoration-none">
                {" "}
                Register Now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
