import { useState, useEffect } from "react";

const useImageLoader = (src) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
    img.onerror = () => setError(true);
  }, [src]);

  return { loading, error };
};

export default useImageLoader;
