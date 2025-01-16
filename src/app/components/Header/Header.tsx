import SearchBar from "../SearchBar";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import LocationBar from "./LocationBar";

const Header = () => {
  return (
    <header className="w-full bg-amazon-blue md:bg-amazon-dark-blue">
      <TopBar />
      <div className="md:hidden">
        <SearchBar />
      </div>
      <NavBar />
      <div className="md:hidden">
        <LocationBar />
      </div>
    </header>
  );
};

export default Header;
