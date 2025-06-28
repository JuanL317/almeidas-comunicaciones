"use client";

export default function NormatividadPage() {
  return (
    <main className="min-h-[70vh] py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-4 text-center">
          Normatividad y Cumplimiento Regulatorio
        </h1>
        <p className="text-lg text-gray-700 text-center mb-1">
          Accede a toda la documentación normativa que rige nuestros servicios de telecomunicaciones.
        </p>
        <p className="text-lg text-gray-500 text-center mb-10">
          En Almeidas Comunicaciones cumplimos estrictamente con todas las disposiciones legales y normativas vigentes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center bg-blue-50 rounded-xl px-8 py-6 min-w-[140px]">
            <span className="text-2xl font-bold text-blue-700 mb-1">8</span>
            <span className="text-blue-700 font-medium">Resoluciones<br className="hidden md:block"/>CRC</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-xl px-8 py-6 min-w-[140px]">
            <span className="text-2xl font-bold text-green-600 mb-1">3</span>
            <span className="text-green-600 font-medium">Leyes</span>
          </div>
          <div className="flex flex-col items-center bg-orange-50 rounded-xl px-8 py-6 min-w-[140px]">
            <span className="text-2xl font-bold text-orange-500 mb-1">1</span>
            <span className="text-orange-500 font-medium">Decreto</span>
          </div>
          <div className="flex flex-col items-center bg-purple-50 rounded-xl px-8 py-6 min-w-[140px]">
            <span className="text-2xl font-bold text-purple-600 mb-1">1</span>
            <span className="text-purple-600 font-medium">Acuerdo</span>
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl px-8 py-6 min-w-[140px]">
            <span className="text-2xl font-bold text-gray-700 mb-1">1</span>
            <span className="text-gray-700 font-medium">Política</span>
          </div>
        </div>
      </div>
    </main>
  );
} 