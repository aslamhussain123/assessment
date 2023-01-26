import maskgroup from "../assets/images/mask.png";
import homeicon from "../assets/images/home.png";
import bellicon from "../assets/images/bell.png";
import cardpaymenticon from "../assets/images/cardpayment.png";
import diamondicon from "../assets/images/diamond.png";
import headseticon from "../assets/images/headset.png";
import levelicon from "../assets/images/level.png";
import promoicon from "../assets/images/promo.png";

 const sideMenuData = [
  {
    path: "/",
    img:  homeicon ,
  },
  {
    path: "/CompanyInsight",
    img:  maskgroup ,
  },
  {
    path: "/Details",
    img: diamondicon,
  },
  {
    path: "/",
    img: promoicon,
  },
  {
    path: "/",
    img: cardpaymenticon,
  },
  {
    path: "/",
    img: bellicon,
  },
  {
    path: "/",
    img: levelicon,
  },
  {
    path: "/",
    img: headseticon ,
  },
];

export default sideMenuData;