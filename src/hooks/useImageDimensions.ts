import { useState, useEffect } from "react";

export function useImageDimensions(src: string) {
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setLoading(false);
    };
    
    img.onerror = () => {
      setLoading(false);
    };
  }, [src]);

  return { dimensions, loading };
}

