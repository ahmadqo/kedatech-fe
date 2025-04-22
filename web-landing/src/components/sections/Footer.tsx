import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-8 bg-indigo-50">
      <div className="container mx-auto px-4">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-14">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Gudang<span className="text-blue-600">KU</span>
            </a>
            <p className="mt-4 text-gray-600 text-sm">
              GudangKU adalah solusi ERP terpercaya yang dirancang untuk
              mengoptimalkan manajemen bisnis Anda. Kami menyediakan fitur
              lengkap untuk mendukung operasional yang efisien, terintegrasi,
              dan mudah digunakan.
            </p>
          </div>
          <div className="text-gray-600 text-sm flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-800">Hubungi Kami</h2>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Jl. Raya Jogja-Solo Km 2 Yogyakarta</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:support@kedatech.com" className="hover:underline">
                support@gudangku.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-600" />
              <a href="tel:+621234567890" className="hover:underline">
                +62 123 123 123
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-700 border-gray-300 border-t pt-4">
          © {new Date().getFullYear()} Candidate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
