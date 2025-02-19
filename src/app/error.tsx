'use client';

import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faRedo } from '@fortawesome/free-solid-svg-icons';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="glass-effect p-8 rounded-xl max-w-lg w-full mx-4 text-center">
        <div className="text-red-500 mb-6">
          <FontAwesomeIcon icon={faExclamationTriangle} size="3x" />
        </div>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        
        <p className="text-gray-600 mb-8">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
        >
          <FontAwesomeIcon icon={faRedo} />
          Try again
        </button>
      </div>
    </div>
  );
}
