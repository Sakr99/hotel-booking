import logo from "../Assets/9ee33fb1632f43484cc2b54bca270664.png";
import Instagram from "../Assets/Component 38.png";
import Twitter from "../Assets/Component 37.png";
import Facebook from "../Assets/Component 36.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#00214D] text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2  text-center  md:justify-between md:items-center border-b border-white/20 pb-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0">
            Be the first to hear about new hotels and get exclusive discounts
            delivered to your inbox.
          </h2>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="input px-4 py-2 rounded-full bg-white text-black w-full md:w-auto"
            />
            <button className="Subscribe px-6 py-2 rounded-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
          <div>
            <img src={logo} alt="Logo" className="w-24 bg-white mt-4" />
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm">Email@gmail.com</p>
            <p className="text-sm">000000000</p>
            <h3 className="font-semibold mt-4">Official Address</h3>
            <p className="text-sm">
              4th floor, 133/2, Location, Road, Street, Name, 678906
            </p>
            <h3 className="font-semibold mt-4">Follow Us</h3>
            <div className="flex gap-3 mt-2">
              <a href="#instagram" className="hover:opacity-75">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#twitter" className="hover:opacity-75">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="#facebook" className="hover:opacity-75">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#sascv">About Us</a>
              </li>
              <li>
                <a href="#sascv">Success Stories</a>
              </li>
              <li>
                <a href="#sascv">Title link 1</a>
              </li>
              <li>
                <a href="#sascv">Title link 2</a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-2">Policies</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#sascv">Privacy Statement</a>
              </li>
              <li>
                <a href="#sascv">Terms of Use</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#sascv">Blog</a>
              </li>
              <li>
                <a href="#sascv">Events</a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#sascvsascv">Title link 1</a>
              </li>
              <li>
                <a href="#sascv">Title link 2</a>
              </li>
              <li>
                <a href="#sascv">Title link 3</a>
              </li>
              <li>
                <a href="#sascv">Title link 4</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
      </footer>
      <div className="mt-8  flex flex-col md:flex-row justify-between items-center text-sm bg-white text-black">
        <p>© 2024 Company name. All rights reserved.</p>
        <div className="flex gap-3">
          <img src="/visa.png" alt="Visa" className="w-10" />
          <img src="/mastercard.png" alt="MasterCard" className="w-10" />
          <img src="/paypal.png" alt="PayPal" className="w-10" />
        </div>
        <button className="border border-white/50 px-3 py-1 rounded-full">
          $ USD ▼
        </button>
      </div>
    </>
  );
};

export default Footer;
