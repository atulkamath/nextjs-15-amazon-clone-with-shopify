import HeroCarousel from "./components/HeroCarousel/HeroCarousel";

import ShortcutCarousel from "./components/ShortcutCarousel/ShortcutCarousel";
import TileCarousel from "./components/TileCarousel/TileCarousel";

export default function Home() {
  return (
    <div className="w-full h-full">
      <ShortcutCarousel />
      <HeroCarousel />
      <TileCarousel />
    </div>
  );
}
