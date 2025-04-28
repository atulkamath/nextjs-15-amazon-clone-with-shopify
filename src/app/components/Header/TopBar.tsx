import { MenuIcon } from "lucide-react";
import Link from "next/link";
import AmazonLogo from "../AmazonLogo";
import SearchBar from "../SearchBar";
import AccountButton from "./AccountButton";
import Cart from "./Cart/Cart";
import LocationBar from "./LocationBar";
import { auth } from "@/app/auth";

const TopBar = async () => {
  const session = await auth();
  return (
    <div className="flex lg:flex-wrap items-center text-white relative z-10">
      <MenuIcon className="md:hidden ml-2" />
      <Link href="/">
        <AmazonLogo className="white" />
      </Link>
      <div className="hidden md:flex flex-shrink-0">
        <LocationBar />
      </div>
      <div className="hidden md:block flex-grow">
        <SearchBar />
      </div>
      <div className="ml-auto flex md:flex items-center">
        <span className="hidden lg:flex">🇦🇪 EN</span>

        <AccountButton session={session} />

        <Link href="/returns">
          <button className="hidden lg:flex border border-transparent hover:border-white p-1">
            <div className="text-sm text-start">
              <span>Returns</span>
              <br />
              <span className="font-bold whitespace-nowrap">& Orders</span>
            </div>
          </button>
        </Link>
        <Cart />
      </div>
    </div>
  );
};

export default TopBar;
