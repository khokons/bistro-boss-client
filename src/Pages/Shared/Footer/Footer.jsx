

const Footer = () => {
    return (
     <footer className="h-[470px] my-12">

      <div className="flex justify-between">
        <div className="h-[400px] w-1/2 bg-[#1F2937] flex flex-col justify-center items-center text-center">
        <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div className="h-[400px] w-1/2 bg-[#111827] flex flex-col justify-center items-center text-center">
          <h3 className="text-lg font-semibold mb-4">Follow US</h3>
          <p>Join us on social media</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center bg-black text-white py-5">
          <p>Copyright © CulinaryCloud. All rights reserved by <span className="text-yellow-500">KHOKON</span></p>
        </div>

     </footer>
    );
};

export default Footer;