import HeroCarousel from "./components/HeroCarousel/HeroCarousel";

import ShortcutCarousel from "./components/ShortcutCarousel/ShortcutCarousel";

export default function Home() {
  return (
    <div className="w-full h-full">
      <ShortcutCarousel />
      <HeroCarousel />
    </div>
  );
}
