import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="bg-blue-900 text-white text-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Left side: contact info */}
        <div className="flex flex-wrap space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt /> <span>(000) 000-0000</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope /> <span>example@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
          </div>
        </div>

        {/* Right side: social icons */}
        <div className="flex space-x-4">
          <FaFacebookF className="cursor-pointer hover:text-blue-400" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-400" />
          <FaPinterestP className="cursor-pointer hover:text-blue-400" />
        </div>
      </div>
    </div>
  );
}
