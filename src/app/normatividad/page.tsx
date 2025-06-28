"use client";

const normatividad = [
  {
    categoria: "Resoluciones CRC",
    color: "blue",
    docs: [
      { nombre: "Resolución CRC 5397 de 2018 - Regulaciones Complementarias", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5397-2018-regulaciones-complementarias.pdf" },
      { nombre: "Resolución CRC 5344 de 2018 - Regulaciones Adicionales", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5344-2018-regulaciones-adicionales.pdf" },
      { nombre: "Resolución CRC 5337 de 2018 - Atención Usuario", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5337-2018-atencion-usuario.pdf" },
      { nombre: "Resolución CRC 5322 de 2018 - Publicidad", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5322-2018-publicidad.pdf" },
      { nombre: "Resolución CRC 5321 de 2018 - Normatividad Técnica", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5321-2018-normatividad-tecnica.pdf" },
      { nombre: "Resolución CRC 5300 de 2018 - Medición Calidad", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5300-2018-medicion-calidad.pdf" },
      { nombre: "Resolución CRC 5299 de 2018 - Calidad Servicio", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-5299-2018-calidad-servicio.pdf" },
      { nombre: "Resolución CRC 4776 de 2015 - Condiciones Calidad", archivo: "/documentos-normativos/resoluciones-crc/resolucion-crc-4776-2015-condiciones-calidad.pdf" },
    ],
  },
  {
    categoria: "Leyes",
    color: "green",
    docs: [
      { nombre: "Ley 679 de 2001 - Prevención Explotación Infantil", archivo: "/documentos-normativos/leyes/ley-679-2001-prevencion-explotacion-infantil.pdf" },
      { nombre: "Ley 1480 de 2011 - Estatuto Consumidor", archivo: "/documentos-normativos/leyes/ley-1480-2011-estatuto-consumidor.pdf" },
      // El archivo .docx no se muestra porque no es PDF
    ],
  },
  {
    categoria: "Decretos",
    color: "orange",
    docs: [
      { nombre: "Decreto 90 de 2018 - Disposiciones Generales", archivo: "/documentos-normativos/decretos/decreto-90-2018-disposiciones-generales.pdf" },
    ],
  },
  {
    categoria: "Acuerdos",
    color: "purple",
    docs: [
      { nombre: "Acuerdo 011 de 2006 - Normas Técnicas y Procedimientos", archivo: "/documentos-normativos/acuerdos/acuerdo-011-2006-normas-tecnicas-procedimientos.pdf" },
    ],
  },
  {
    categoria: "Políticas",
    color: "gray",
    docs: [
      { nombre: "Política de Protección de Datos Personales", archivo: "/documentos-normativos/politicas-proteccion/politica-proteccion-datos-personales.pdf" },
    ],
  },
];

export default function NormatividadPage() {
  return (
    <main className="min-h-[70vh] py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-4 text-center break-words leading-tight px-2 max-w-3xl mx-auto">
          Normatividad y Cumplimiento Regulatorio
        </h1>
        <p className="text-lg text-gray-700 text-center mb-1">
          Accede a toda la documentación normativa que rige nuestros servicios de telecomunicaciones.
        </p>
        <p className="text-lg text-gray-500 text-center mb-10">
          En Almeidas Comunicaciones cumplimos estrictamente con todas las disposiciones legales y normativas vigentes.
        </p>
        <div className="space-y-10 mt-10">
          {normatividad.map((cat) => (
            <section key={cat.categoria}>
              <h2 className={`text-2xl font-semibold mb-4 text-${cat.color}-700`}>{cat.categoria}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.docs.map((doc) => (
                  <a
                    key={doc.archivo}
                    href={doc.archivo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition p-4 bg-white group min-h-[90px]"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3A2.25 2.25 0 0 0 4.5 5.25v13.5A2.25 2.25 0 0 0 6.75 21h10.5A2.25 2.25 0 0 0 19.5 18.75V8.372a2.25 2.25 0 0 0-.659-1.591l-4.122-4.122A2.25 2.25 0 0 0 13.128 3H6.75z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11.25v3.75m0 0l-1.5-1.5m1.5 1.5l1.5-1.5" />
                      </svg>
                    </span>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-medium text-gray-800 text-base line-clamp-2 group-hover:text-blue-600 transition">{doc.nombre}</span>
                      <span className="text-xs text-blue-500 mt-1 font-semibold group-hover:underline self-start">Ver PDF</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
} 