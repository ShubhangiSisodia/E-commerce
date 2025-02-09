import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  let timeoutId;

  const handleChange = (e) => {
    clearTimeout(timeoutId);
    const value = e.target.value;
    setQuery(value);
    timeoutId = setTimeout(() => {
      if (value.trim()) {
        router.push(`/search?query=${value}`);
      }
    }, 300);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search products..."
      className="border p-2 w-full"
    />
  );
}
