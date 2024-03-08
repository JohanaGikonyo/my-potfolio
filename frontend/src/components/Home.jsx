import img2 from "./images/johana3.jpeg";
import img3 from "./images/computer1.jpg";
import img4 from "./images/computer2.jpg";
import img5 from "./images/computer3.jpg";
import img6 from "./images/computer4.jpg";
import img7 from "./images/code1.jpg";
import img8 from "./images/johana1.jpeg";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import animationData from "./images/Animation3.json";
import animationdownload from "./images/download.json";

import Lottie from "react-lottie";
import { BiRightArrow, BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Helpers/Helper";
import { NavLink } from "react-router-dom";
import pdf from "./images/cv.pdf";
import { Link } from "react-scroll";
function Home() {
  const { changeMode } = useContext(Context);
  const [numbers, setNumbers] = useState(0);
  useEffect(() => {
    // Scroll to the top when the pathname changes
    // window.scrollTo(0, 0);

    const countNumbers = setInterval(() => {
      numbers >= 300 ? "" : setNumbers(numbers + 1);
    }, [0.5]);
    return () => clearInterval(countNumbers);
  }, [numbers]);
  return (
    <div className="flex flex-col lg:flex-row  justify-between gap-5  ">
      <div className="flex justify-around lg:justify-center  bg-white text-black lg:bg-slate-800 lg:text-white lg:flex-col  lg:items-center   lg:h-[100vh] lg:w-[1000px] sticky top-10 lg:top-0 z-30 lg:z-0 left-0  p-2 rounded">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-70} duration={500} className="rounded">
          InTro
        </Link>
        <br />
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="rounded">
          InFo
        </Link>{" "}
        <br />
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="rounded"
        >
          Experience
        </Link>
        <br />
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="rounded"
        >
          Projects
        </Link>
        <br />
        <Link activeClass="active" to="quotes" spy={true} smooth={true} offset={-70} duration={500} className="rounded">
          Quotes
        </Link>
        <div>
          {" "}
          <div className="flex flex-end justify-center gap-3">
            <button>
              <a href="https://wa.me:/254742377527">
                <BiLogoWhatsapp />
              </a>
            </button>{" "}
            <a href="https://www.linkedin.com/in/johana-gikonyo-789118233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              {" "}
              <LinkedIn />
            </a>
            <a href="https://github.com/JohanaGikonyo">
              <GitHub />
            </a>{" "}
            <a href="https://www.facebook.com/johana.gikonyo.3">
              <BiLogoFacebookCircle />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <section className="flex flex-col lg:flex-row justify-around  border-collapse items-center" id="intro">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            width={200}
            height={200}
          />
          <div className="flex flex-col items-center lg:w-1/2">
            <h5 className="text-blue text-2xl italic">
              Johana Gikonyo Kihiu
              <br />
              <span className="p-3 text-sm text-orange-400 m-5">Website Developer | Engineer</span>
            </h5>
            <h6>A passionate Web Developer</h6>
            <div className="flex flex-row">
              <a href={pdf} download="Johana cv.pdf">
                <button
                  className="p-2 m-3 border rounded transition duration-500 ease-in-out transform hover:bg-orange-400 hover:text-white
            hover:scale-90"
                >
                  Download CV{" "}
                  <span>
                    {" "}
                    <Lottie
                      options={{
                        loop: true,
                        autoplay: true,
                        animationData: animationdownload,
                        rendererSettings: {
                          preserveAspectRatio: "xMidYMid slice",
                        },
                      }}
                      width={50}
                      height={50}
                    />
                  </span>
                </button>
              </a>
              <span className="flex flex-col items-center">
                <button className="btn">
                  <h1 className=" font-bold text-3xl">{numbers}+</h1>
                </button>
                <NavLink to="/about">
                  <button className="border border-orange-400 p-1 rounded m-3 transition duration-1000 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                    Learn More{" "}
                    <span className="text-blue-400">
                      <ArrowForwardIcon />
                    </span>
                  </button>
                </NavLink>
              </span>
            </div>
          </div>
          <div
            className={`${
              changeMode
                ? " text-center p-5 lg:w-1/2 flex flex-col items-center"
                : "text-center p-5 lg:w-1/2 flex flex-col items-center"
            }`}
          >
            {" "}
            <img src={img2} alt="" className="w-60 h-60 object-cover rounded" />
          </div>
        </section>
        <section
          className={`${
            changeMode
              ? "flex flex-col lg:flex-row items-center justify-between  m-3 p-2"
              : "flex flex-col lg:flex-row items-center  justify-between  m-3 p-2"
          }`}
          id="about"
        >
          <div
            className="bg-blue-500 flex flex-col items-center justify-evenly rounded lg:w-1/2 m-2 text-white text-xl transition duration-500 ease-in-out transform hover:bg-slate-800 hover:text-white
            hover:scale-110"
          >
            <img src={img3} alt="" className="w-60 h-60 rounded m-3 object-cover" />
            <h3>3+ Years of Experience</h3>
          </div>
          <div
            className="flex flex-col items-center lg:w-1/2 m-2 transition duration-500 ease-in-out transform hover:bg-slate-800 hover:text-white
            hover:scale-90 p-3"
            id="about"
          >
            <button className="overline">
              About <span className="text-orange-500">Me</span>
            </button>
            <p>
              A motivated, adaptable and responsible Software Developer with different required skills in software
              Development seeking an IT position which will utilize technical skills developed through past experience
              in this field. I have a methodical, customer-focused approach to work and a strong drive to see things
              through to completion. In my career journey, I have managed to create different business marketing
              softwares for different organizations.
            </p>
            <p>
              I Acqured a bachelor`s degree in Mathematics And Computer Science at MultiMedia University Of Kenya. I am
              a learned person looking forward to implementing my great knowledge and skills towards impacting the
              entire society positively.
            </p>
            <p>
              I`m also much collaborative and ready to work together with different teams in teh development field, and
              also interacting with people around the society, to learn and understand their needs.
            </p>
            <NavLink to="/about">
              <button className="border border-orange-500 p-1 rounded m-4 transition duration-1000 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                Learn <span className="text-orange-500 hover:text-white">More</span>
                <span className="text-blue-500">
                  <ArrowForwardIcon />
                </span>
              </button>
            </NavLink>
          </div>
        </section>
        <section id="experience">
          <div>
            <h3 className="overline-red-400 ">Knowlege And EXperience</h3>
          </div>
          <div
            className={`${
              changeMode
                ? "flex lg:flex-row gap-2 justify-around m-2  p-2 overflow-x-auto"
                : "flex lg:flex-row gap-2  justify-around m-2  p-2 overflow-x-auto -webkit-scrollbar-none"
            }`}
          >
            {" "}
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAADDElEQVR4nMVVS2sUQRDOik9Q0ZO/QJT4BxSfeJCAZKo2EgIqeBACHmLMQbcqJI7gJWoSRY2g4uOQkxoj+LhKLip6UAgBMZ4UiUEhW7Uao1FHqqcnO7sm7nrRgYae7uqq+r7+qrqm5v98USYHuotQewm0sz0r68stQphYkYPCNhvhvmjxX7ln1KuMGhHqZ0KZtjmDPjpSX1jH9YVV8b5MuXW3J+M51E1VOc9lC9v9oWPh1mh+W2O0hEH3M8iYOSXUCQaZJNSzZkuBBIQyYvth4/jSytmDniOQL83N0YJSVNI6kzFKV8leg26Mk8rvrhiAQO8xyIv0WjtIvaMK9C6D9hPID4JCU7IfNkYLCeQrgZ6sHABlkFCf2bwjkDUM+RajxGc+xCgPGeWnowvkEAdaGyN3FPZVEUCvMeonRnmXUEKoQqgvGfWJDT/X1CWPGUJC7Z7TsV0ooZxIVEMoNwlk2NGBsqHc3qTLIN/NhlFu+zPT5sN8lZlHGQIZ8Bndd8Ygx2Ou9Uxi1dEgq20k/4x62mwYtMcHGEySM58z7hllb+xUc2EYzWOQt8azSdIKylEHciGlIse17TnZxuujnmJ2vrL5PUXeQQYI9FXqHno992GSuUd1yYbNEyRW6aXSjTIWLEZRRHArDhDDMh49os5KARj1qK/0niLd+rokgMHxGbM/NOr/JxKKjJYZVYGcL6XI6JQ3LnvQ9lmKLspYRA/VK8IanVR1ySYIj/iBl+2NkkueTaYW6E8ytTXvfNgcVpBp+qB2e8P3RdWolheaFV9KVVaUnxj0+pyOUxfeZ5Xp5oHWciBtcWt27cHaxJCnYZKycpAbdK2zBX3KIHeqCKCnrHFZA5tBBYUmX1D91vAMoTXAMsqeW5FWgyAuujLeGaUrRUlres9au7V4eyMqBjgcfFjmm9cIZfN1hPkdjHLRPzImyam4c+oB2plfaZWfqMiez5pqPnv+0pdMlh3oFXsu7dkk0Mf+Hr7FndehulyV8+RrqYsW5QLdwqCbw7qPy2dPQkN7ZHKo8Jvu/9X3C7Mc8Y/kmAe+AAAAAElFTkSuQmCC" />

              <h5 className="text-red-800">React</h5>
            </button>
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,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" />
              <h5 className="text-red-800">Javascript</h5>
            </button>
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVR4nO2SIUtEQRSFn5oEi4rFP2DwH5ht4rt3w4DBbLAZVu51hcF/YFEEm8UmWMwGxaDBYDdrkD132Kgjj11ecnVmtyzyPrgMAzPnzL1ziqJhovE+TitjW9jule1jUE9Cdry/GVbHEpeN7ryQ3ShbHFZCuGyXveVscXW2pITn38RrEzZIK7i815PtpohrXfhSxsmei7PV/WqVMqwXRZwaanLAaAvhVNku+nPHZ4LZqzLOhe1xsL9O74qxKIQjIQvJnbXCVpHLYYkVZbz8+TeE2yqFI0XSu7c5YZz1Z/+j+J133YWxI9khrCnjSgjvwtYTsgdh23EuztSHmkjK/4xkDj43kqPSSYlkw0TyDb3AKw+6WxczAAAAAElFTkSuQmCC" />

              <h5 className="text-red-800">TailWind Css</h5>
            </button>
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAADCElEQVR4nO1WXYgNcRS/hUUiH1EknogXvJB9QJRalnvObI3ygpSbEhvLzjmzW9cT8cSjIpHixSteiMhXIiLkMw++ljXn3Lstlh2duTPrdm323rV3o/xqamY65/x+8///53dOKvUf/yK21oXDGZUI9bldDNps7waF3Eurw6DPGDUk1E8MGtg9oz7xUKFqxNygswj0TEQM8p1Rjzc5uUlZNxjPoAcJpSsSAnKeV+fmDBhxtoSAUC70RmACGfRsHNPFKIfY1Yn9J14SDiXUDIG8j4u+8tOyrq88H2R1skWM2k6gXtYNayoi95zcMka5FxfJM8ju7PpwRNni3bCGURoJVeKz8ohAVpaVTCg7kn0m1KO+k5+c6id2pTumEOoxRukufIw09pnEIO/sIieYnxog+BgssK0klLd9C8Do66/0Ls5+ObmfPJtIRjlle04gnUbAKLcZZA/VB+OKcwn0mtX+IwEE0mn/+8/DJt8K8frSCAjlThxjh/ZB0/I3o6omgFEuWayHsrE4JgufxjLI5fjwZaop4J7F+igrSuN8RxYy6i1Oy/aqCSDQ/fFvGtkwgZwmkL2EwdrWBpnxa+4AC8i6YQ2htjDqiyIhPZfVaEadXTUBxTDLZdBFPsiGaGUSJwS9WRUBLQ3t0ws2Kyd7i9uVbhtdaFjyuSoCMplwGIHmCOSL70j9rzVyaxILroqAlMU5uS2JxRLIawK9waBXrWklHdFmh4oFEMrb2DZrfyfA4KV1sTlhZESoHYyqZkAEesRz8nOLatYySltZVkyObIsbRzeDnmh2OqbGRWbGX3w9VSYs12r0NCMItpaVyOncUkK5Gy/vFyMl0I/x0u7rK3+7G45k1NaolRdy7lrNVCVw3XAIo25KHM/21MwmW/dhzO/yyMm5P73Bll03W62KyEtBKBOSqcZb1T7Nh/y80hh7RyAX47nwK4EeKO2IfwwPFQrFbViRwzaURiZk81/SGVHPFTvggIOdYDmBPIydLugZy0EfE8qq1GAgExmR7CwMIvrU7isePP/jb8EPkxDmTPmvLv4AAAAASUVORK5CYII=" />

              <h5 className="text-red-800">Node Js</h5>
            </button>
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENElEQVR4nO1YTYgcVRDu9R8EYxA0ahTFmxcFD9FL9qQsrNtVLc4hJw/q6sE9JW5XzcYMHqIeFBQSEE968qAoQVFBDCoYMUTQgB7UGNH8GGJ2u2pnk4Oalup5vbsz2739k8kmkv6gDzNd76t+79W/5zVo0KBBgwYNLhF0RuMrQl8DBn2NUQ8wqjJqTKhzBPoNobzeBploteLLvYsRk5PxlQzRFKMetg8vegj0N0Kd9Lx4JIuPMNrCqF1CeWc6WNg4jG+cDhY2Msq7Pd5oywqB8OHZ2xl03+KHgnzHqNvJl03toHtzpxVf9ay/cEs7kPsJ9DlC+X5xQyh72+MLt2YpZpTdTu5nGo/Wn8smaDxabzw9Ptm9QqAN3XsJ9FSq0MyqmDYeYdRHCPQXZ3a/zkzM3TkoNTUWX82g+x33nrzbK6lvT++Qdb/x9r0OYe4OAjnmTOWjsDW7rgTr0vrW7DoG/XjJ1OSGFTKJjt5BEWjo1QCBhm79KePre2nOSqDfppuo67wWHAj1E2dm72fJtAMZZ5SzhPI3o45W4WfU0d46OWs8WQJPLppTxZsYRAfmrmfQQ8aXZ5oM8kLv0OTYtlZ3Qxneba3uhtRibH1mhCKUP1dTXBXs66PuYA5kvU8sAGVvGiCKLKBVRp4weiiNTvUdMMsh5aDxWnQrOmFC2bkaG6HsLLxBAnnDnd52b4hg1B1O+fO1bd6r4FOWoROFvmwa0h56vCgPuNP+sm4UCqtEOUY5aoJlna4sLGm6mz5cwgzfG8wLk0l14RIz6AeFZs8g/5jwsOsl43O+d7pMprZEyssydVoJ2P+lKoG0vBjS99fmJozuI5Az7gbedP51xv4furKqqMpNqE/3FaSgT1VWdj6fst+y9cHj1zLKSWdiJ+33/3IjhPpWf3sgb1feiHeBkZoVgc6HqECoUsm8UgdbUQ6vIZY7OrkmyTVj5R0+zSMW970LgOWhl0B29b0D2VU6BDPKF4lwEI15a47Vm6SpKs0YgbzoosRL3hqDQadzm6SMMsXkvaKaiEH+WMtpSOjr5qKCMatwtHVeHgjlh6QfAX3CGwJmMLorMVnQQ1lBhCfmbypbwmeV8rbeW60RShqsPKEKHSKB/pQXOqs2VZXXMcqnbsefdx6Lr/FqwEZFBPqh28Q+q2BrNUk5KNWMbQ3mbzQ/cf7ymZ2sVwGdsb+uS6coDHIiaxBntk4g/9YZPAw2Y8aT61vs692EcsTt+HfyxS9uf+MR6/VN3q07Egbde87HKKjUSKhPIepXSzWPHGTQtvXedrVmLskVW7QDbTPIj0u1kX49A6dvG+Rcng96Y6JznQ3EI8aTl38GHCt6Jj3l4keOMujjnU58WRZfkqFBThDqy3X9bxDGw6CvJLwDFUH2qMgXn0BftQFeEtVAI0adNWe2abxNYS7aaXyDBg0aNGhwqeE/ZuLCniDSg8cAAAAASUVORK5CYII="></img>

              <h5 className="text-red-800">Express</h5>
            </button>
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABUUlEQVR4nLWVvUrEUBCF7yJY+AAWgtjJFtqJPoHaSGYSTCOW2q0gLuveSYR9AUvfQrAU9AXsbS0sxJ9quTPBbRQjiSxKjG5ufg6cMufLGe7cq5SFtMNr5ElbNSHypE0o9xrk0vfjqVrDQ2+4QMDPhBIn1sBntYUP/HiakG/H4WMHyL1aABolzIanLZDfAsesVArvutEsAY/yAF+jkhul4laFv+ejv8K/m5iN0oC82f82X5QKD2E0Pzlc4mSEg63HGWuAdtgpBEjsmnV7AJpOUUAfZK+240n51tYAAu4WBWjgQ3uAI9uFG4DZsQb0nNc5Qv4o1AB50RqQtgC5KgC4K73NAZjNyeORY1VecUuDXP+zZA+lliy70Rr5JSf8vdI99FN9iJYJZZg5OQeqTgVoVjXwU/IOEMq+akKEvKuRzxsJTwFutKRRThsDpC8cyonNR59mae3+mwhrggAAAABJRU5ErkJggg=="></img>

              <h5 className="text-red-800">Mongodb</h5>
            </button>
            <button className="flex flex-col items-center justify-evenly border border-blue-500 p-2 rounded">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrklEQVR4nO1YO4gUQRAdfyd+QPyh4CcxMhBBwU+gBiIqnlZtMHiogdGBgYGe3nbPCWvgL1EEPU4xE0REFEE00UgwMBBUFEGEAz/ooXc31XNffyN1u+P27e262zs9u8k+aJjdmempV1Xd9bocp4EGGogN1w2nCKSNEpQngO4IpDcSVZ8E+jE2+BrpNd/jZ7wUbchkwslOvdEBQ8sk0jmB9EmiCo0G0EcBdLY9Nbi05oZLVy2USFcF0Kix4QVD8BxAXUeb1YLaGA/+PgGqN67hEyOivstU0JKY4a2t4TSJdM264VgQEaQr/C2rxmeaP88UoB4mbbzMjwf8TSvGszdqbHyYHfQo44ZNsQnUIm1kyXVBXbGMFyl/f92Mx9yagGBvdcYjzZdI3+pPQPVWtcXyPl9v42V+PXQaV1gbRaqoR1HJtm1fZrGkkJUTGDGq2CwPkvJmtLMc3hFON0slOmsizIy0jQCVPuKGMzyk4+WeHe8oZRA5+lCRABxTlYZe1SunALqVBAGJKvTQX1c+fYxyc6JRvGMIpK9JEJCoRHkCSHfjEGB4QLuTICCQbldC4HVcAjnjrtuPAL0qS6AaqVxsnrTbN4cXnmUC3yogYL7/6+8fcwcWR9ce0k6J9McigZHECUhQ9/8nBmMRABpKPIX4twd0MPrNVVeAeq958UCMCHxOfBFnPaV8liP5qARbo1QSqPrTzX3LE1vEMuY2Gv0nkB47TjgpH1m6rN17whVfGn5HoLqReCEruHeo4Fj6TsvnNtPvsFQpS4CbTrYICFBBB/orNOdsEkC/c+kwYh4Bf21ZAiyYiu3fVUaAw/6U00Ujcd489xWPbj0l/wuWrjYlskA6Gs3NqlUAvTUmAHTKqRR8eDCqB6C8jNszW6DqKEoAaLgd1cp/DtpD6yXQr4pTB2hY7g4WVUwgG2rqqjLUJYxQzzJbwqna/GcMHHTJMUXG9eclcKg/kZ8/bBJIL8sSR/oqdvlzjQmMeSkVtNiNAo2mUwOro/m9VP+aXPu99DupwHXigHuVVqMA9ELvuEmgk6W9ry44dpq66oHVSCCd1ucXoJ4Xyfv7+pqJBa6iNkkIpJ/6+TYNwapxhQ3onpW+6IRIWNyZuBYcccMZ0fzcL8r+ry5ab6/r4F6lrd1JaDnO1doDf3tihhfpm3ZWo2cKovA7vUdtduoFb9fgEpYdptopN7q5LuhH0LqBBSAvSu7bcOuDDx58ssvKERqRQD1ctATQTZbEei1ooIEGnFj4C0lddm/9scIvAAAAAElFTkSuQmCC"></img>

              <h5 className="text-red-800">Next Js</h5>
            </button>
          </div>
        </section>
        <section
          className={`${
            changeMode
              ? "flex flex-col  items-center justify-between  m-3 p-2"
              : "flex flex-col  items-center boredr justify-between  m-3 p-2"
          }`}
          id="projects"
        >
          <div>
            <h3 className="underline">
              Latest <span className="text-orange-500">Projects</span>
            </h3>
          </div>
          <div className="lg:grid lg:grid-cols-2  lg:gap-20 flex flex-col gap-8  rounded p-5 items-center ">
            <div
              className="flex flex-col  p-2 m-2 rounded items-center justify-around flex-wrap gap-2  transition duration-500 ease-in-out transform hover:bg-slate-400 hover:text-white z-4 shadow-lg shadow-slate-900
            hover:scale-90 "
            >
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
            <div
              className="flex flex-col  p-2 m-2 rounded items-center justify-around gap-2  transition duration-500 ease-in-out transform hover:bg-slate-400 hover:text-white z-4 shadow-lg shadow-slate-900
            hover:scale-90"
            >
              <a href="https://clustercalculator.vercel.app/">
                <img src={img5} alt="" className="h-60 w-60 object-cover" />
              </a>{" "}
              <p>
                <p>A Cluster Points Calculator </p>
                <br />
                <span>
                  {" "}
                  <a href="https://clustercalculator.vercel.app/">
                    <button className="border border-orange-400 p-1 rounded m-3 transition duration-1000 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                      View{" "}
                      <span className="text-blue-400">
                        <ArrowForwardIcon />
                      </span>
                    </button>
                  </a>
                </span>
              </p>
            </div>
            <div
              className="flex flex-col  p-2 m-2 rounded items-center justify-around gap-2  transition duration-500 ease-in-out transform hover:bg-slate-400 hover:text-white z-4 shadow-lg shadow-slate-900
            hover:scale-90"
            >
              <a href="https://survayorsdocuments.vercel.app/">
                <img src={img6} alt="" className="h-60 w-60 object-cover" />
              </a>{" "}
              <p>
                <p>A Quantity Surveyor`s Website </p>
                <br />
                <span>
                  {" "}
                  <a href="https://survayorsdocuments.vercel.app/">
                    <button className="border border-orange-400 p-1 rounded m-3 transition duration-1000 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
                      View{" "}
                      <span className="text-blue-400">
                        <ArrowForwardIcon />
                      </span>
                    </button>
                  </a>
                </span>
              </p>{" "}
            </div>
            <div
              className="flex flex-col  p-2 m-2 rounded items-center justify-around gap-2  transition duration-500 ease-in-out transform  hover:text-white z-4 shadow-lg shadow-slate-900
            hover:scale-90"
            >
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
                    <button className=" border-orange-400 p-1 rounded m-3 transition duration-1000 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
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
          <NavLink to="work">
            <button className=" rounded border-t-orange-500 p-3 transition duration-1000 ease-in-out transform hover:bg-orange-400 hover:text-white hover:scale-90">
              See{" "}
              <span className="text-orange-400 ">
                More <ArrowForwardIcon />
              </span>
            </button>
          </NavLink>{" "}
        </section>
        <section className="carousel w-full" id="quotes">
          <div className="carousel-item w-full relative flex flex-col items-center p-2 border m-5">
            <div className="flex flex-row">
              <p>
                <span className="flex items-center">
                  {" "}
                  <BiSolidQuoteSingleLeft />
                  Nothing is impossible. The word itself says `I`m possible!But, There is nothing impossible to they who
                  will try.
                  <BiSolidQuoteSingleRight />
                </span>
              </p>
            </div>
            <img src={img8} alt="" className=" border rounded-[100%] w-40 h-40 object-cover" />
            <p>@JgKihiu Developer</p>
            <div className="absolute flex flex-row justify-between transform -translate-y-1/2 left-5 top-1/2 right-5"></div>

            <a href="#" className="btn btn-circle">
              <BiRightArrow />
            </a>
          </div>
          <div className="carousel-item w-full relative flex flex-col items-center p-2 border m-5">
            <div className="flex flex-row">
              <p>
                <span className="flex items-center">
                  {" "}
                  <BiSolidQuoteSingleLeft />
                  Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking
                  chair talking to your grandchildren many years from now, be sure you have a good story to tell.
                  <BiSolidQuoteSingleRight />
                </span>
              </p>
            </div>
            <img src={img5} alt="" className=" border rounded-[100%] w-40 h-40 object-cover" />
            <p>@Dackson Omana Ceo</p>
            <div className="absolute flex flex-row justify-between transform -translate-y-1/2 left-5 top-1/2 right-5">
              <a href="#" className="btn btn-circle">
                <BiLeftArrow />
              </a>
              <a href="#" className="btn btn-circle">
                <BiRightArrow />
              </a>
            </div>
          </div>
          <div className="carousel-item w-full relative flex flex-col items-center p-2 border m-5">
            <div className="flex flex-row">
              <p>
                <span className="flex items-center">
                  {" "}
                  <BiSolidQuoteSingleLeft />
                  I just want you to know that if you are out there and you are being really hard on yourself right now
                  for something that has happened ... it`s normal. That is what is going to happen to you in life. No
                  one gets through unscathed. We are all going to have a few scratches on us. Please be kind to
                  yourselves and stand up for yourself, please.
                  <BiSolidQuoteSingleRight />
                </span>
              </p>
              <div className="absolute flex flex-row justify-between transform -translate-y-1/2 left-5 top-1/2 right-5">
                <a href="#" className="btn btn-circle">
                  <BiLeftArrow />
                </a>
                <a href="#" className="btn btn-circle">
                  <BiRightArrow />
                </a>
              </div>
            </div>
            <img src={img4} alt="" className=" border rounded-[100%] w-40 h-40 object-cover" />
            <p>@Eistegn Mark Software Engineer</p>
            <div className="absolute flex flex-row justify-between transform -translate-y-1/2 left-5 top-1/2 right-5">
              <a href="#" className="btn btn-circle">
                <BiLeftArrow />
              </a>
              <a href="#" className="btn btn-circle">
                <BiRightArrow />
              </a>
            </div>
          </div>
          <div className="carousel-item w-full relative flex flex-col items-center p-2 border m-5">
            <div className="flex flex-row">
              <p>
                <span className="flex items-center">
                  {" "}
                  <BiSolidQuoteSingleLeft />
                  For me, becoming isn`t about arriving somewhere or achieving a certain aim. I see it instead as
                  forward motion, a means of evolving, a way to reach continuously toward a better self. The journey
                  doesn`t end.
                  <BiSolidQuoteSingleRight />
                </span>
              </p>
            </div>
            <img src={img2} alt="" className=" border rounded-[100%] w-40 h-40 object-cover" />
            <p>@JgKihiu Developer</p>
            <div className="absolute flex flex-row justify-between transform -translate-y-1/2 left-5 top-1/2 right-5"></div>
            <a href="#" className="btn btn-circle">
              <BiLeftArrow />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
