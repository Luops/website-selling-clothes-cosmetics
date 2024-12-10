import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating: number; // Exemplo: 3.5
};

const RatingStars: React.FC<RatingProps> = ({ rating }) => {
  const maxStars = 5;

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        if (index < Math.floor(rating)) {
          // Estrela cheia
          return <Star key={index} className="w-5 h-5 text-yellow-500" />;
        } else if (index < rating) {
          // Estrela pela metade
          return <StarHalf key={index} className="w-5 h-5 text-yellow-500" />;
        } else {
          // Estrela vazia
          return <Star key={index} className="w-5 h-5 text-gray-300" />;
        }
      })}
    </div>
  );
};

export default RatingStars;
