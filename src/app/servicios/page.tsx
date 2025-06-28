import AnimatedPage from '@/components/ui/AnimatedPage';

export default function ServiciosPage() {
  const mainServices = [
    {
      name: 'Internet por Fibra Óptica',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'Alta velocidad, estabilidad, velocidad simétrica y baja latencia.',
      advantages: ['Alta velocidad', 'Conexión estable', 'Escalabilidad'],
      color: 'blue'
    },
    {
      name: 'Internet Inalámbrico (Radioenlace)',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      description: 'Ideal para zonas rurales, instalación rápida.',
      advantages: ['Cobertura rural', 'Instalación rápida', 'Tecnología de alto alcance'],
      color: 'green'
    },
    {
      name: 'Servicio de Televisión',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Conectividad de alta calidad y entretenimiento en HD.',
      advantages: ['Acceso a canales HD', 'Ahorro en combos', 'Plataforma digital estable'],
      color: 'purple'
    }
  ]

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
    <AnimatedPage>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones completas de conectividad para hogares y empresas, 
              con tecnología de vanguardia y planes flexibles que se adaptan a tus necesidades.
            </p>
          </div>

          {/* Lista de Servicios - Productos Principales */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-4">
                Productos Principales
              </h2>
              <p className="text-lg text-gray-600">
                Tecnologías avanzadas para conectar tu mundo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{service.name}</h3>
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-3">Ventajas:</h4>
                    {service.advantages.map((advantage, advIndex) => (
                      <div key={advIndex} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
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
                    
                    <a
                      href="/contacto"
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors block text-center ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Adquirir Plan
                    </a>
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
                    
                    <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{plan.name}</h4>
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
                    
                    <a
                      href="/contacto"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
                    >
                      Adquirir Plan
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para conectarte?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Elige el plan que mejor se adapte a tus necesidades y comienza a disfrutar de la mejor conectividad
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