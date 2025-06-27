import Link from 'next/link'

const Services = () => {
  const internetPlans = [
    {
      name: 'Básico',
      speed: '25 Mbps',
      price: '$45.000',
      features: [
        'Navegación web rápida',
        'Streaming en HD',
        'Juegos online',
        'Soporte técnico incluido'
      ],
      popular: false
    },
    {
      name: 'Estándar',
      speed: '50 Mbps',
      price: '$65.000',
      features: [
        'Todo del plan Básico',
        'Streaming en 4K',
        'Múltiples dispositivos',
        'Instalación gratuita'
      ],
      popular: true
    },
    {
      name: 'Premium',
      speed: '100 Mbps',
      price: '$95.000',
      features: [
        'Todo del plan Estándar',
        'Velocidad ultra rápida',
        'Sin límites de uso',
        'Prioridad en soporte'
      ],
      popular: false
    }
  ]

  const tvPlans = [
    {
      name: 'Básico',
      channels: '50+ Canales',
      price: '$25.000',
      features: [
        'Canales nacionales',
        'Canales de noticias',
        'Canales infantiles',
        'Guía de programación'
      ]
    },
    {
      name: 'Completo',
      channels: '100+ Canales',
      price: '$35.000',
      features: [
        'Todo del plan Básico',
        'Canales deportivos',
        'Canales de películas',
        'Canales premium'
      ]
    }
  ]

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones completas de conectividad para hogares y empresas, 
            con tecnología de vanguardia y soporte técnico especializado.
          </p>
        </div>

        {/* Internet Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Planes de Internet
            </h3>
            <p className="text-gray-600">
              Conectividad de alta velocidad para todas tus necesidades digitales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internetPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-primary-500 shadow-primary-100' 
                    : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h4>
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {plan.price}
                    </div>
                    <div className="text-lg text-gray-600 mb-4">
                      {plan.speed}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="#contacto"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular
                        ? 'bg-primary-600 hover:bg-primary-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Contratar Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TV Plans */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Planes de Televisión
            </h3>
            <p className="text-gray-600">
              Entretenimiento de calidad con la mejor programación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {tvPlans.map((plan, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h4>
                  <div className="text-4xl font-bold text-secondary-600 mb-2">
                    {plan.price}
                  </div>
                  <div className="text-lg text-gray-600 mb-4">
                    {plan.channels}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-secondary-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="#contacto"
                  className="w-full py-3 px-6 bg-secondary-600 hover:bg-secondary-700 text-white rounded-lg font-semibold text-center transition-colors"
                >
                  Contratar Plan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Servicios Adicionales
            </h3>
            <p className="text-gray-600">
              Soluciones especializadas para empresas y necesidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Internet Empresarial
              </h4>
              <p className="text-gray-600">
                Conectividad dedicada con mayor ancho de banda y soporte prioritario
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Instalación Profesional
              </h4>
              <p className="text-gray-600">
                Instalación y configuración por técnicos especializados
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Soporte 24/7
              </h4>
              <p className="text-gray-600">
                Asistencia técnica disponible las 24 horas del día
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 