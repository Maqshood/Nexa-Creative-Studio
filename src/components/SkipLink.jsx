import React from 'react';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#4F46E5] text-white font-semibold rounded-lg shadow-lg focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
