import Image from "next/image";

interface ProductCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  category,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 bg-white">
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Category */}
      <p className="text-sm text-gray-500 mt-2">{category}</p>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-900 mt-1">{title}</h2>

      {/* Description */}
      <p className="text-gray-700 mt-2 text-sm">{description}</p>
    </div>
  );
};

export default ProductCard;
