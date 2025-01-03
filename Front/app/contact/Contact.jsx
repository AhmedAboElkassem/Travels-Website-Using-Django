import React from "react";

export default function Contact() {
  return (
    <>
      <div className="mx-10 mtSp contbody p-5 vh-50 position-relative">
        <h1 className="conth1 mb-lg-5">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>
        <div className="row justify-content-center">
          <input
            type="text"
            placeholder="Your email"
            className="p-3 col-lg-6 rounded-3 form-control form-control-lg w-50"
          />
          <button className="btn ms-lg-3 btn-warning col-lg-2 rounded-3">
            Subscribe
          </button>
        </div>

        <div className="position-absolute" style={{ top: "0", right: "15px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle cx="35" cy="35" r="35" fill="url(#paint0_linear_1_489)" />
            <path
              d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
              fill="white"
            />
            <path
              d="M25.2636 40.9555L27.9971 50.6841C28.3427 51.9157 29.3387 52.8313 30.5948 53.0729C31.8776 53.3192 33.1321 52.8124 33.894 51.8182L52.3678 27.7111C53.2092 26.6137 53.3019 25.1879 52.6105 23.9905L24.9789 39.9436L25.2636 40.9555Z"
              fill="white"
            />
            <path
              d="M36.2232 33.4515C36.5044 33.9385 36.3379 34.5616 35.8504 34.8431L25.2636 40.9553L24.979 39.9434L24.245 39.1909L34.8317 33.0787C35.3192 32.7973 35.9421 32.9646 36.2232 33.4515Z"
              fill="url(#paint1_linear_1_489)"
            />
            <path
              d="M25.2637 40.9554L35.8504 34.8432C36.3379 34.5617 36.5044 33.9387 36.2232 33.4517L24.979 39.9435L25.2637 40.9554Z"
              fill="url(#paint2_linear_1_489)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_489"
                x1="49.6467"
                y1="1.96393"
                x2="19.564"
                y2="77.7643"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#747DEF" />
                <stop offset="1" stopColor="#5E3BE1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_489"
                x1="32.4078"
                y1="34.5441"
                x2="33.5453"
                y2="36.8251"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#747DEF" />
                <stop offset="1" stopColor="#5E3BE1" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_489"
                x1="32.9028"
                y1="35.4017"
                x2="33.5069"
                y2="36.5259"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#747DEF" />
                <stop offset="1" stopColor="#5E3BE1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
}
