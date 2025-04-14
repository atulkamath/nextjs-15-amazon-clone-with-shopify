import { Star } from "lucide-react";

export default function ReviewCard() {
  return (
    <p className="flex items-center">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <Star size={16} key={index} color="orange" fill="orange" />
      ))}
      (600)
    </p>
  );
}
