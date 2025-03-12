import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductGridWithTitle from "./components/ProductGridWithTitle/ProductGridWithTitle";
import ShortcutCarousel from "./components/ShortcutCarousel/ShortcutCarousel";
import TileCarousel from "./components/TileCarousel/TileCarousel";
import { productGridMetaAData } from "./data/productGridMetaData";

export default function Home() {
  return (
    <div className="w-full h-full">
      <ShortcutCarousel />
      <HeroCarousel />
      <TileCarousel />
      <ProductGrid />
      <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-12">
        {productGridMetaAData.map(
          (data, index) =>
            data && (
              <ProductGridWithTitle
                key={index}
                title={data.title}
                tag={data.tag}
              />
            )
        )}
      </div>
    </div>
  );
}
