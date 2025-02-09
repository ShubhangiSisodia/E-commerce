import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakerapi.it/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>{product.description}</p>
    </div>
  );
}
