import { Link } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSquareWhatsapp } from "react-icons/fa6";
export default function Footer() {
  const linkStyle = "p-4";
  return (
    <div className="bg-[#0B1F3A] text-white p-4 rounded-lg">
      <div className=" grid grid-cols-3 p-2 ">
        {/* <div className=" p-4 gap-3">
          <h1 className="text-3xl font-semi-bold ">Address :</h1>
          <p className="mb-2">
            Vikas Automobiles,</p>
            <p className="mb-2"> Near Yadav Dharmkanta, Rewa Road, Satna,</p>
            <p className="mb-2"> Madhya Pradesh 485001</p>
          
        </div> */}
        <div className="p-6 space-y-4">
  <h1 className="text-3xl font-semibold">
    Address :
  </h1>

  <p className="leading-relaxed font-extrabold text-md">
    Vikas Automobiles
  </p>

  <p className="leading-relaxed">
  Vikas Automobiles, Near Yadav Dharmkanta, Rewa Road, Satna,Madhya Pradesh ,485001
  </p>

  <p className="leading-relaxed">
    
  </p>
</div>

        <div>
          <h1 className="text-3xl font-semibold ">Social Media</h1>
          <div className="p-4">
            <ul className="space-y-3">
  <li className="flex items-center gap-3">
    <SlSocialInstagram className="text-pink-400 text-xl" />
    <a
      href="https://www.instagram.com/hpclcfasatna/"
      className="hover:text-pink-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>
  </li>

  <li className="flex items-center gap-3">
    <TiSocialTwitter className="text-blue-400 text-xl" />
    <a
      href="https://twitter.com/cfa_hp_satna"
      className="hover:text-blue-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      Twitter
    </a>
  </li>

  <li className="flex items-center gap-3">
    <FaSquareWhatsapp className="text-green-400 text-xl" />
    <a
      href="https://wa.me/9827003016"
      className="hover:text-green-400 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      WhatsApp
    </a>
  </li>

  <li className="flex items-center gap-3">
    <TiSocialTwitter className="text-red-400 text-xl" />
    <a
      href="tel:+9827003016"
      className="hover:text-red-400 transition-colors"
    >
      +91 9827003016
    </a>
  </li>
</ul>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold ">Quick Links</h1>
           <div className="p-4">
            <ul className="space-y-3">
              <li className=" hover:text-blue-500">
                <Link to="/" className={linkStyle}>
                  Home
                </Link>
              </li>
             <li className=" hover:text-blue-500">
                <Link to="/products" className={linkStyle}>
                  Products
                </Link>
              </li>
              <li className=" hover:text-blue-500">
                <Link to="/about" className={linkStyle}>
                  About
                </Link>
              </li>
              <li className=" hover:text-blue-500">
                <Link to="/contact" className={linkStyle}>
                  Contact
                </Link>
              </li>
              <li className=" hover:text-blue-500">
                <Link to="/achievements" className={linkStyle}>
                  Achievements
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="bg-primary text-white text-center  mt-4 ">
        <p>
          <span>&copy;</span> 2026 Vikas Automobiles. All rights reserved.
        </p>
        <p>
          Contact Us <a href="tel:+9827003016">9827003016</a>
        </p>
      </footer>
    </div>
  );
}
