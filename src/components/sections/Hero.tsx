import Link from 'next/link'

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Conectamos tu mundo con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                velocidad y calidad
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Servicios de internet y televisión de alta velocidad para hogares y empresas 
              en zonas urbanas y rurales. Conectamos comunidades con tecnología avanzada.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contacto"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Solicitar Servicio
              </Link>
              <Link 
                href="#servicios"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Ver Planes
              </Link>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Alta Velocidad</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Cobertura Total</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">24/7 Soporte</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Almeidas Comunicaciones</h3>
                      <p className="text-sm text-gray-500">Conectando comunidades</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                {/* Speed Indicator */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Velocidad de Internet</span>
                    <span className="text-2xl font-bold text-primary-600">100 Mbps</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>

                {/* Services */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">Internet</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Activo</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">Televisión</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Activo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 