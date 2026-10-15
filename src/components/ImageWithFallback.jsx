import React, { useState } from 'react';

export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  fallbackTitle = 'Nexa Studio Concept'
}) {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#EEECFF]/50 ${aspectRatio} ${className}`}>
      {/* Background placeholder skeleton */}
      {!loaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-stone-200/60 via-stone-100 to-stone-200/60" />
      )}

      {hasError ? (
        /* Graceful SVG fallback in the exact brand palette */
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#EEECFF] to-[#E0DCFE] text-center select-none">
          <div className="w-12 h-12 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center font-bold text-xl mb-3 shadow-sm">
            N
          </div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[#4F46E5] mb-1">
            Visual Concept
          </span>
          <p className="text-sm font-medium text-[#171717] max-w-xs line-clamp-2">
            {alt || fallbackTitle}
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}
    </div>
  );
}
