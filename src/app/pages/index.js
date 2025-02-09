import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakerapi.it/api/v1/products?_locale=en_US&_quantity=12');
        const data = await res.json();
        console.log(data); 
        setProducts(data.data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <p>Rating: {product.rating}</p>
        </div>
      ))}
    </div>
  );
}
