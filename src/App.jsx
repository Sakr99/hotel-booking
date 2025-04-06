import Header from './Components/Header.jsx';
import Navbar from './Components/Navbar.jsx'
import Category from "./Components/Category.jsx";
import OverView from "./Components/OverView.jsx"
import Footer from './Components/Footer.jsx'
import "@fortawesome/fontawesome-free/css/all.min.css"
import CountriesOption from './Components/CountriesOption.jsx';
export default function App() {
   return (
     <>
       <div className=" bg-sky-950 ">
         <div className=" flex justify-center p-2 text-xs ">
           🏨 We Know You Love Great Stays. Get Exclusive Hotel Deals &
           Discounts!
         </div>
         <div className="bg-white rounded-md ">
           <Navbar />
           <div className="container mx-auto px-4  md:p-0">
             <Header />
           </div>
           <Category />
           <OverView />
<CountriesOption/>
         </div>

         <Footer />
       </div>   
     </>
   ); 
}