import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { BiLogoUpwork } from "react-icons/bi";
import { useEffect, useState } from "react";
function Footer() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="m-0 p-4 bg-slate-900 text-white flex flex-col">
      <div>{date.toLocaleTimeString()}</div>
      <div className="flex flex-end justify-center gap-3">
        <BiLogoWhatsapp />

        <BiLogoInstagramAlt />
        <BiLogoYoutube />
        <BiLogoFacebookCircle />
        <BiLogoTwitter />
        <LinkedIn />
        <GitHub />
        <BiLogoUpwork />
      </div>
      <div>@copywrite{new Date().getFullYear()} @jgkihiu</div>
    </div>
  );
}

export default Footer;
