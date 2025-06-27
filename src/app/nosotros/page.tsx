import AnimatedPage from '@/components/ui/AnimatedPage';

export default function NosotrosPage() {
  const stats = [
    {
      number: '500+',
      label: 'Clientes Satisfechos',
      description: 'Familias y empresas que confían en nuestros servicios'
    },
    {
      number: '24/7',
      label: 'Soporte Técnico',
      description: 'Asistencia disponible en nuestros horarios de atención'
    },
    {
      number: '99%',
      label: 'Tiempo de Actividad',
      description: 'Conectividad confiable y estable'
    },
    {
      number: '5+',
      label: 'Años de Experiencia',
      description: 'Especialistas en conectividad rural y urbana'
    }
  ]

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Compromiso',
      description: 'Nos comprometemos con la excelencia en cada servicio que brindamos a nuestros clientes.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovación',
      description: 'Utilizamos tecnología de vanguardia para brindar la mejor experiencia de conectividad.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Calidad',
      description: 'Garantizamos servicios de alta calidad que superan las expectativas de nuestros clientes.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Responsabilidad',
      description: 'Actuamos con responsabilidad social y ambiental en todas nuestras operaciones.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Accesibilidad',
      description: 'Hacemos la tecnología accesible para todas las comunidades, urbanas y rurales.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Trabajo en Equipo',
      description: 'Fomentamos la colaboración y el trabajo en equipo para lograr mejores resultados.'
    }
  ]

  return (
    <AnimatedPage>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-8">
              Sobre Nosotros
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
              Almeidas Comunicaciones SAS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Almeidas Comunicaciones SAS es una empresa comprometida con conectar 
              comunidades a través de tecnología avanzada y servicio de calidad.
            </p>
          </div>

          {/* Misión y Visión Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Misión */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Misión</h3>
              </div>
              <p className="text-blue-900 text-lg leading-relaxed">
                Brindar soluciones de conectividad confiables, rápidas y accesibles a través de servicios de internet
                por fibra óptica, radioenlace y televisión digital, mejorando la calidad de vida de nuestros clientes y
                contribuyendo al desarrollo tecnológico de las comunidades a las que servimos.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800">Visión</h3>
              </div>
              <p className="text-green-900 text-lg leading-relaxed">
                Ser la empresa líder en telecomunicaciones en nuestra región, reconocida por la excelencia en el
                servicio, innovación constante y compromiso con la inclusión digital, conectando hogares y empresas
                con tecnología de vanguardia para un futuro más conectado.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
                Nuestros Valores
              </h3>
              <p className="text-gray-600">
                Los principios que guían nuestro trabajo y relación con la comunidad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex justify-center mb-20">
            <div className="relative max-w-md">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Almeidas Comunicaciones SAS</h4>
                    <p className="text-gray-600">Conectando el futuro</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-700">Cobertura</span>
                    <span className="text-blue-600 font-semibold">Urbana y Rural</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-700">Tecnología</span>
                    <span className="text-green-600 font-semibold">Alámbrica e Inalámbrica</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-700">Servicios</span>
                    <span className="text-gray-600 font-semibold">Internet + TV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para conectarte?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Únete a cientos de familias y empresas que ya disfrutan de nuestros servicios
            </p>
            <a 
              href="/contacto"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              Solicitar Servicio
            </a>
          </div>
        </div>
      </section>
    </AnimatedPage>
  )
} 