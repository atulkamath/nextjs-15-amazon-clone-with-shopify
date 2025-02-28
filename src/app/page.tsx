import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ShortcutCarousel from "./components/ShortcutCarousel/ShortcutCarousel";
import TileCarousel from "./components/TileCarousel/TileCarousel";

export default function Home() {
  return (
    <div className="w-full h-full">
      <ShortcutCarousel />
      <HeroCarousel />
      <TileCarousel />
      <ProductGrid />
    </div>
  );
}
