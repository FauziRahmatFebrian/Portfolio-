
import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import { Progress } from '@/components/ui/progress';

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00ff88"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const LoadingText = ({ progress }: { progress: number }) => {
  return (
    <Text
      position={[0, -3, 0]}
      fontSize={0.5}
      color="#00ff88"
      anchorX="center"
      anchorY="middle"
    >
      {`Loading... ${Math.round(progress)}%`}
    </Text>
  );
};

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* 3D Scene */}
      <div className="w-96 h-96 mb-8">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <AnimatedSphere />
            <LoadingText progress={progress} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
          </Suspense>
        </Canvas>
      </div>

      {/* Loading Bar */}
      <div className="w-80 mb-4">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 glow-text">
          Memuat <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-muted-foreground">
          Sedang menyiapkan pengalaman terbaik untuk Anda...
        </p>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-40 w-1 h-1 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />
    </div>
  );
};

export default LoadingScreen;
