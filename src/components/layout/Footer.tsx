import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-teal-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0">
          {/* Logo y nombre */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className="flex items-center mb-3">
              <Image
                src="/images/ALMEIDAS LOGO FINAL.png"
                alt="Logo Almeidas Comunicaciones"
                width={40}
                height={40}
                className="rounded-lg bg-white"
              />
              <span className="ml-3 text-xl font-extrabold uppercase bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent tracking-widest drop-shadow">
                ALMEIDAS
              </span>
            </div>
            <span className="text-sm text-teal-200 font-semibold mb-2">Comunicaciones SAS</span>
            <p className="text-gray-300 text-center md:text-left max-w-xs text-sm">
              Conectamos comunidades con tecnología avanzada. Servicios de internet y televisión de alta calidad para hogares y empresas.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-teal-200">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-teal-300 transition-colors">Inicio</Link></li>
              <li><Link href="/servicios" className="hover:text-teal-300 transition-colors">Servicios</Link></li>
              <li><Link href="/nosotros" className="hover:text-teal-300 transition-colors">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-teal-300 transition-colors">Contacto</Link></li>
              <li><Link href="/pqrs" className="hover:text-teal-300 transition-colors">PQRS</Link></li>
            </ul>
          </div>

          {/* Contacto y redes */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-teal-200 text-left w-full">Contacto</h3>
            <div className="space-y-2 text-gray-200 text-sm mb-4">
              <div className="flex items-center"><svg className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>322 218 8772</div>
              <div className="flex items-center"><svg className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>almeidascomunicaciones@hotmail.com</div>
              <div className="flex items-center"><svg className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>Sesquile Cundinamarca - Cr 6 # 3 - 40</div>
              <div className="flex items-center"><svg className="h-5 w-5 mr-2 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Lun-Vie: 08:00 a 17:00</div>
            </div>
            <div className="flex space-x-4 mb-2">
              <a href="https://www.facebook.com/AlmeidasComunicaciones" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition-colors transform hover:scale-110">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Puedes agregar más redes aquí */}
            </div>
            <Link href="/contacto" className="text-teal-300 hover:text-white font-medium text-sm transition-colors">Enviar Mensaje →</Link>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-teal-800 mt-10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-gray-400 text-xs text-center md:text-left">© 2024 Almeidas Comunicaciones SAS. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link href="#" className="text-gray-400 hover:text-teal-300 text-xs transition-colors">Política de Privacidad</Link>
            <Link href="#" className="text-gray-400 hover:text-teal-300 text-xs transition-colors">Términos de Servicio</Link>
            <Link href="#" className="text-gray-400 hover:text-teal-300 text-xs transition-colors">Soporte Técnico</Link>
          </div>
        </div>

        {/* Botón flotante de WhatsApp */}
        <div>
          <a
            href="https://wa.me/573222188772?text=Hola%20quiero%20adquirir%20un%20plan"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-2 flex items-center justify-center transition-colors"
            aria-label="WhatsApp"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 