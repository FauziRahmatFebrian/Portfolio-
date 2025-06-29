
import { useState, useEffect } from 'react';

interface ResourceLoaderState {
  isLoading: boolean;
  progress: number;
  error: string | null;
}

export const useResourceLoader = () => {
  const [state, setState] = useState<ResourceLoaderState>({
    isLoading: true,
    progress: 0,
    error: null
  });

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Simulate loading different resources
        const resources = [
          'fonts',
          'images',
          'styles',
          'components',
          'animations'
        ];

        for (let i = 0; i < resources.length; i++) {
          // Simulate loading time for each resource
          await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
          
          setState(prev => ({
            ...prev,
            progress: ((i + 1) / resources.length) * 100
          }));
        }

        // Add a small delay before completing
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setState(prev => ({
          ...prev,
          isLoading: false,
          progress: 100
        }));
      } catch (error) {
        setState(prev => ({
          ...prev,
          error: 'Failed to load resources',
          isLoading: false
        }));
      }
    };

    loadResources();
  }, []);

  return state;
};
