import Link from 'next/link'

const Services = () => {
  const plans = [
    {
      name: 'Básico',
      price: '$29.900 COP',
      speed: '25 Mbps',
      features: [
        'Internet de alta velocidad',
        'Soporte técnico básico',
        'Instalación gratuita',
        'Sin límite de datos'
      ],
      popular: false
    },
    {
      name: 'Estándar',
      price: '$49.900 COP',
      speed: '50 Mbps',
      features: [
        'Internet de alta velocidad',
        'Soporte técnico prioritario',
        'Instalación gratuita',
        'Sin límite de datos',
        'Router WiFi incluido'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$79.900 COP',
      speed: '100 Mbps',
      features: [
        'Internet de alta velocidad',
        'Soporte técnico 24/7',
        'Instalación gratuita',
        'Sin límite de datos',
        'Router WiFi avanzado',
        'Televisión HD incluida'
      ],
      popular: false
    }
  ]

  const tvPlans = [
    {
      name: 'TV Básica',
      channels: '50+ canales',
      price: '$19.900 COP',
      features: [
        'Canales nacionales',
        'Canales internacionales',
        'Guía de programación',
        'Grabación básica'
      ]
    },
    {
      name: 'TV Premium',
      channels: '100+ canales',
      price: '$34.900 COP',
      features: [
        'Canales nacionales',
        'Canales internacionales',
        'Canales premium',
        'Guía de programación',
        'Grabación avanzada',
        'Contenido bajo demanda'
      ]
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de conectividad para hogares y empresas, 
            con planes flexibles que se adaptan a tus necesidades.
          </p>
        </div>

        {/* Internet Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
              Planes de Internet
            </h3>
            <p className="text-lg text-gray-600">
              Conectividad de alta velocidad para todos los usos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-blue-500 shadow-blue-100'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                )}
                
                <div className="mt-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-2">{plan.name}</h4>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">/mes</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.speed}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contacto"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Adquirir Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TV Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
              Planes de Televisión
            </h3>
            <p className="text-lg text-gray-600">
              Entretenimiento de calidad con la mejor programación
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tvPlans.map((plan, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 text-center mb-2">{plan.name}</h4>
                  <p className="text-gray-600 text-center mb-4">{plan.channels}</p>
                  <div className="text-3xl font-bold text-blue-600 text-center mb-6">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">/mes</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contacto"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
                  >
                    Adquirir Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
            Servicios Adicionales
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Soluciones especializadas para empresas y hogares
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Instalación Empresarial</h4>
              <p className="text-gray-600">Soluciones de conectividad para empresas con soporte dedicado.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Seguridad Digital</h4>
              <p className="text-gray-600">Protección avanzada para tu red y dispositivos conectados.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Soporte 24/7</h4>
              <p className="text-gray-600">Asistencia técnica disponible en cualquier momento del día.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 