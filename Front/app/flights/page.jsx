import Navbar from "../navbar/Navbar";
import Book from "../book/book";
import Travellr from "../Components/travellr/Travellr";
import Footer from "../footer/Footer";
import Reviews from "../Components/Reviews/Reviews";

export default function Flight() {
  return (
    <>
      <div className="Airplane vh-100 bg-black">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-8 col-sm-12"
              style={{ marginTop: "11rem" }}
            >
              <h1
                className="li_nav"
                style={{ fontSize: "3rem", fontFamily: "cursive" }}
              >
                Life is short and the world is wide!
              </h1>
              <p className="mt-4 text-white" style={{ fontSize: "18px" }}>
                To get the best of your adventure, you just need to embrace the
                journey with an open mind and a spirit of curiosity
              </p>
              <button className="btn bg-black text-white">Try for free</button>
            </div>
          </div>
        </div>
      </div>
      <Book />
      <Travellr />
      <Reviews />
      <Footer />
    </>
  );
}
