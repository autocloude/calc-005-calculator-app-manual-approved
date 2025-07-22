import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          CALC-005 Calculator App
        </h1>
        <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
          A modern calculator application built with React, TypeScript, and Next.js.
          Features a responsive design with dark mode styling and smooth animations.
        </p>
        <Calculator />
      </div>
    </main>
  );
}
