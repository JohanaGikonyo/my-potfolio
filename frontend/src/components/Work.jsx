import { useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img4 from "./images/computer2.jpg";
import img5 from "./images/computer3.jpg";
import img6 from "./images/computer4.jpg";
import img7 from "./images/code1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Work() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  useEffect(() => {
    // Scroll to the top when the pathname changes
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="m-7 tetx-white">
      <Slider {...settings} className="">
        <div>
          {" "}
          <div className="flex flex-col border p-3 m-2 rounded items-center justify-around flex-wrap gap-2 hover:bg-slate-900 hover:text-white ">
            <a href="https://jkelectronics.vercel.app/">
              <img src={img4} alt="" className="h-60 w-60  object-cover" />{" "}
            </a>{" "}
            <p>
              <p>An E-cormerce Website </p>
              <br />
              <span>
                {" "}
                <a href="https://jkelectronics.vercel.app/">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    View{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col border p-2 m-2 rounded items-center justify-around gap-2 hover:bg-slate-900 hover:text-white ">
            <a href="https://clustercalculator.vercel.app/">
              <img src={img5} alt="" className="h-60 w-60 object-cover" />
            </a>{" "}
            <p>
              <p>A Cluster Points Calculator </p>
              <br />
              <span>
                {" "}
                <a href="https://clustercalculator.vercel.app/">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    View{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col border p-2 m-2 rounded items-center justify-around gap-2">
            <a href="https://survayorsdocuments.vercel.app/">
              <img src={img6} alt="" className="h-60 w-60 object-cover" />
            </a>{" "}
            <p>
              <p>A Quantity Surveyor`s Website </p>
              <br />
              <span>
                {" "}
                <a href="https://survayorsdocuments.vercel.app/">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    View{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </a>
              </span>
            </p>{" "}
          </div>
        </div>
        <div>
          <div className="flex flex-col border p-2 m-2 rounded items-center justify-around gap-2 hover:bg-slate-900 hover:text-white ">
            <a href="https://shoppfyapp.vercel.app/">
              {" "}
              <img src={img7} alt="" className="h-60 w-60 object-cover" />
            </a>
            <p>
              <p>A Fabric Calculator for Shopify Users </p>
              <br />
              <span>
                {" "}
                <a href="https://shoppfyapp.vercel.app/">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    View{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col border p-2 m-2 rounded items-center justify-around gap-2 hover:bg-slate-900 hover:text-white ">
            <a href="https://clustercalculator.vercel.app/">
              <img src={img5} alt="" className="w-60 h-60 object-cover" />
            </a>{" "}
            <p>
              <p>A Cluster Points Calculator </p>
              <br />
              <span>
                {" "}
                <a href="https://clustercalculator.vercel.app/">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    View{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col border p-2 m-2 rounded items-center justify-around gap-2 hover:bg-slate-900 hover:text-white ">
            <a href="https://shoppfyapp.vercel.app/">
              {" "}
              <img src={img7} alt="" className="h-60 w-60 object-cover" />
            </a>
            <p>
              <p>A Fabric Calculator for Shopify Users </p>
              <br />
              <span>
                {" "}
                <a href="https://shoppfyapp.vercel.app/">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    View{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Work;
