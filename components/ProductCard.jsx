import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product._id}`} className="">
      <Image
        src={product.imageUrl}
        alt={product.title}
        width={1000}
        height={1000}
        className="w-full h-68 rounded-2xl object-cover hover:scale-105 transition mb-3"
      />
      <h1 className="text-3xl">{product.title}</h1>
      <h1 className="text-green-700 font-bold">N{product.price}</h1>
      <h1 className="truncate">{product.description}</h1>
    </Link>
  );
};

export default ProductCard;
