import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { convertTextToURLSlug, getCategoryLink } from "../../utils/helper";
import AppStoreLogo from "../../assets/images/app-store.webp";
import PlayStoreLogo from "../../assets/images/play-store.webp";
import Categories from "../../lib/data/categories.json";

const UsefulLinks: string[] = [
  "About",
  "Careers",
  "Blog",
  "Press",
  "Lead",
  "Value",
  "Privacy",
  "Terms",
  "FAQs",
  "Security",
  "Mobile",
  "Contact",
  "Partner",
  "Express",
  "Local",
  "Spotlight",
  "Warehouse",
  "Deliver",
];

const Footer = () => {
  const allCategories = Categories.map((cat) => ({
    id: cat.id,
    text: cat.title,
    link: getCategoryLink(cat),
  }));

  return (
    <footer>
      <div className="_container space-y-6">
        <div className="flex flex-col md:flex-row gap-4 pb-2">
          <div className="flex-1">
            <h4 className="font-bold my-4 text-lg leading-none lg:mr-4">
              Categories
            </h4>
            <div className="flex flex-wrap gap-y-1">
              {allCategories.map((cat) => (
                <div
                  className="cursor-pointer text-[15px] _text-default w-full xs:w-[50%]"
                  key={cat.id}
                >
                  <Link to={cat.link}>{cat.text}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold my-4 text-lg leading-none lg:mr-4">
              Useful Links
            </h4>
            <div className="flex flex-wrap gap-y-1">
              {UsefulLinks.map((link, i) => (
                <div
                  className="cursor-pointer text-[15px] _text-default w-[50%] xs:w-[33%]"
                  key={i}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fcfcfc] py-6 mt-2 min-h-[60px]">
        <div className="_container">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center">
            <div className="text-xs flex-1 _text-muted lg:max-w-md pr-6">
              &copy; Blink Commerce Private Limited, 2016-2025
            </div>
            <div className="flex flex-1 md:flex-row items-center gap-2">
              <h4 className="font-bold text-md leading-none lg:mr-4 _text-default">
                Download App
              </h4>
              <div className="h-8 w-24 rounded-[3px] cursor-pointer overflow-hidden">
                <img
                  src={AppStoreLogo}
                  alt="App store"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-8 w-24 rounded-[3px] cursor-pointer overflow-hidden">
                <img
                  src={PlayStoreLogo}
                  alt="Play store"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex items-center md:justify-end gap-4 lg:gap-6">
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaFacebookF />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaTwitter />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className="cursor-pointer w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
