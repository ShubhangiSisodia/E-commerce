import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SearchResults() {
  const router = useRouter();
  const { query } = router.query;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://fakerapi.it/api/v1/products?_locale=en_US&_quantity=12&name=${query}`);
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Search Results for "{query}"</h1>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="border p-4 rounded-md shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
