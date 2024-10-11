import Section1WithCarousel from "../../components/Section1WithCarousel";
import CustomNavbar from "../../components/CustomNavbar"; 


const Home = () => {
  return (
    <div className="w-full ">
      <CustomNavbar />
      <Section1WithCarousel />
      <h1 className="text-2xl text-red-500">Puruba</h1>
    </div>
  );
};

export default Home;