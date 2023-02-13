import Navbar from "./Navbar";
import Secondary_nav from "./Secondary_nav";
import Home_landing from "./Home_landing";
import BottomSildeItems from "./BottomSildeItems";
import Products from "./products";

const Layout = ({ children }) => {
  return (
    <div className="h-screen">
      <div>
        <Navbar className="bg-white" />

        <Secondary_nav className="bg-white" />

        <Home_landing className="bg-white" />
        <BottomSildeItems />
      </div>
      <div>
        <Products />
      </div>
      {children}
    </div>
  );
};

export default Layout;
