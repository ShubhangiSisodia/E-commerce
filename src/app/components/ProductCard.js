import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Image src={product.image} alt={product.name} width={200} height={200} objectFit="cover" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}
