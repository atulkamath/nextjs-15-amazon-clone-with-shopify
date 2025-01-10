import { MenuIcon, ShoppingCart, User } from "lucide-react";
import AmazonLogo from "./AmazonLogo";

const Header = () => {
  return (
    <div className="flex bg-amazon-blue items-center px-2">
      <MenuIcon color="white" />
      <AmazonLogo className="white" />
      <div className="flex ml-auto items-center px-4 space-x-2">
        <button className="flex items-center text-xs">
          Sign in &gt; <User color="white" />
        </button>
        <ShoppingCart color="white" />
      </div>
    </div>
  );
};

export default Header;
