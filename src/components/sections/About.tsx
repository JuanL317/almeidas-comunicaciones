const About = () => {
  const stats = [
    {
      number: '500+',
      label: 'Clientes Satisfechos',
      description: 'Familias y empresas que confían en nuestros servicios'
    },
    {
      number: '24/7',
      label: 'Soporte Técnico',
      description: 'Asistencia disponible en cualquier momento'
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
      title: 'Confiabilidad',
      description: 'Ofrecemos servicios estables y confiables que mantienen conectadas a las comunidades.'
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Comunidad',
      description: 'Nos comprometemos con el desarrollo y bienestar de las comunidades que servimos.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
        </svg>
      ),
      title: 'Soporte',
      description: 'Brindamos atención personalizada y soporte técnico especializado a todos nuestros clientes.'
    }
  ]

  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Almeidas Comunicaciones SAS es una empresa comprometida con conectar 
            comunidades a través de tecnología avanzada y servicio de calidad.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nuestra Misión
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Conectar hogares y empresas en zonas urbanas y rurales con servicios 
              de internet y televisión de alta calidad, contribuyendo al desarrollo 
              digital de las comunidades.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Utilizamos tecnología de vanguardia a través de redes alámbricas e 
              inalámbricas para garantizar una conectividad estable y confiable, 
              sin importar la ubicación geográfica de nuestros clientes.
            </p>
            <p className="text-lg text-gray-600">
              Nuestro compromiso es brindar un servicio excepcional con soporte 
              técnico especializado disponible las 24 horas del día.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">Almeidas Comunicaciones SAS</h4>
                  <p className="text-gray-600">Conectando el futuro</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-primary-50 rounded-lg">
                  <span className="font-medium text-gray-700">Cobertura</span>
                  <span className="text-primary-600 font-semibold">Urbana y Rural</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                  <span className="font-medium text-gray-700">Tecnología</span>
                  <span className="text-secondary-600 font-semibold">Alámbrica e Inalámbrica</span>
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
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
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

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h3>
            <p className="text-gray-600">
              Los principios que guían nuestro trabajo y relación con la comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
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

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para conectarte?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Únete a cientos de familias y empresas que ya disfrutan de nuestros servicios
          </p>
          <a 
            href="#contacto"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
          >
            Solicitar Servicio
          </a>
        </div>
      </div>
    </section>
  )
}

export default About 