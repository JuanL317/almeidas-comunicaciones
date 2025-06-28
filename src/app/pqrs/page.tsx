"use client";
import AnimatedPage from '@/components/ui/AnimatedPage';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

export default function PqrsPage() {
  const [formData, setFormData] = useState({
    tipoSolicitud: '',
    nombreCompleto: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correoElectronico: '',
    telefono: '',
    direccionFisica: '',
    medioNotificacion: '',
    horarioContacto: '',
    detallesSolicitud: '',
    adjuntos: null as File | null,
    aceptacionDatos: false
  });
  
  const [errors, setErrors] = useState({
    tipoSolicitud: '',
    nombreCompleto: '',
    tipoDocumento: '',
    numeroDocumento: '',
    correoElectronico: '',
    telefono: '',
    direccionFisica: '',
    medioNotificacion: '',
    horarioContacto: '',
    detallesSolicitud: '',
    adjuntos: '',
    aceptacionDatos: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTimeCard, setShowTimeCard] = useState(false);

  useEffect(() => {
    // Mostrar la tarjeta de tiempo después de un delay
    const timer = setTimeout(() => {
      setShowTimeCard(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      adjuntos: file
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { 
      tipoSolicitud: '', nombreCompleto: '', tipoDocumento: '', numeroDocumento: '', 
      correoElectronico: '', telefono: '', direccionFisica: '', medioNotificacion: '', 
      horarioContacto: '', detallesSolicitud: '', adjuntos: '', aceptacionDatos: '' 
    };

    if (!formData.tipoSolicitud) {
      newErrors.tipoSolicitud = 'Selecciona el tipo de solicitud';
      valid = false;
    }
    if (!formData.nombreCompleto || formData.nombreCompleto.trim().length < 3) {
      newErrors.nombreCompleto = 'El nombre completo es obligatorio (mínimo 3 caracteres)';
      valid = false;
    }
    if (!formData.tipoDocumento) {
      newErrors.tipoDocumento = 'Selecciona el tipo de documento';
      valid = false;
    }
    if (!formData.numeroDocumento || formData.numeroDocumento.trim().length < 5) {
      newErrors.numeroDocumento = 'El número de documento es obligatorio';
      valid = false;
    }
    if (!formData.correoElectronico || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.correoElectronico)) {
      newErrors.correoElectronico = 'Ingresa un correo electrónico válido';
      valid = false;
    }
    if (!formData.telefono || formData.telefono.trim().length < 7) {
      newErrors.telefono = 'El teléfono es obligatorio';
      valid = false;
    }
    if (!formData.medioNotificacion) {
      newErrors.medioNotificacion = 'Selecciona el medio de notificación preferido';
      valid = false;
    }
    if (!formData.horarioContacto) {
      newErrors.horarioContacto = 'Selecciona el horario de contacto preferido';
      valid = false;
    }
    if (!formData.detallesSolicitud || formData.detallesSolicitud.trim().length < 20) {
      newErrors.detallesSolicitud = 'Los detalles de la solicitud deben tener al menos 20 caracteres';
      valid = false;
    }
    if (!formData.aceptacionDatos) {
      newErrors.aceptacionDatos = 'Debes aceptar el tratamiento de datos personales';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ 
      tipoSolicitud: '', nombreCompleto: '', tipoDocumento: '', numeroDocumento: '', 
      correoElectronico: '', telefono: '', direccionFisica: '', medioNotificacion: '', 
      horarioContacto: '', detallesSolicitud: '', adjuntos: null, aceptacionDatos: false 
    });
    setErrors({ 
      tipoSolicitud: '', nombreCompleto: '', tipoDocumento: '', numeroDocumento: '', 
      correoElectronico: '', telefono: '', direccionFisica: '', medioNotificacion: '', 
      horarioContacto: '', detallesSolicitud: '', adjuntos: '', aceptacionDatos: '' 
    });
  };

  return (
    <AnimatedPage>
      <section className="py-24 bg-white min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-4">
              FORMULARIO PQRS
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              ¿Tienes una petición, queja, reclamo o sugerencia? Por favor, completa el siguiente formulario y nuestro equipo te responderá lo antes posible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-lg p-8 space-y-6 animate-slide-up">
            {/* Tipo de solicitud */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <label htmlFor="tipoSolicitud" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de solicitud *
              </label>
              <select
                id="tipoSolicitud"
                name="tipoSolicitud"
                value={formData.tipoSolicitud}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Petición">Petición</option>
                <option value="Queja">Queja</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Sugerencia">Sugerencia</option>
              </select>
              {errors.tipoSolicitud && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.tipoSolicitud}</p>}
            </div>

            {/* Nombre completo */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <label htmlFor="nombreCompleto" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                placeholder="Tu nombre completo"
                required
              />
              {errors.nombreCompleto && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.nombreCompleto}</p>}
            </div>

            {/* Tipo y número de documento */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de documento *
                </label>
                <select
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                  <option value="Cédula de Extranjería">Cédula de Extranjería</option>
                  <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="NIT">NIT</option>
                </select>
                {errors.tipoDocumento && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.tipoDocumento}</p>}
              </div>
              
              <div>
                <label htmlFor="numeroDocumento" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de documento *
                </label>
                <input
                  type="text"
                  id="numeroDocumento"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                  placeholder="Número de documento"
                  required
                />
                {errors.numeroDocumento && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.numeroDocumento}</p>}
              </div>
            </div>

            {/* Correo electrónico y teléfono */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <label htmlFor="correoElectronico" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="correoElectronico"
                  name="correoElectronico"
                  value={formData.correoElectronico}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                  placeholder="tu@email.com"
                  required
                />
                {errors.correoElectronico && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.correoElectronico}</p>}
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                  placeholder="Tu número de teléfono"
                  required
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.telefono}</p>}
              </div>
            </div>

            {/* Dirección física */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <label htmlFor="direccionFisica" className="block text-sm font-medium text-gray-700 mb-2">
                Dirección física
              </label>
              <input
                type="text"
                id="direccionFisica"
                name="direccionFisica"
                value={formData.direccionFisica}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                placeholder="Tu dirección física (opcional)"
              />
              {errors.direccionFisica && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.direccionFisica}</p>}
            </div>

            {/* Medio de notificación y horario de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div>
                <label htmlFor="medioNotificacion" className="block text-sm font-medium text-gray-700 mb-2">
                  Medio preferido de notificación *
                </label>
                <select
                  id="medioNotificacion"
                  name="medioNotificacion"
                  value={formData.medioNotificacion}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="Correo electrónico">Correo electrónico</option>
                  <option value="Teléfono">Teléfono</option>
                  <option value="SMS">SMS</option>
                  <option value="Correo físico">Correo físico</option>
                </select>
                {errors.medioNotificacion && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.medioNotificacion}</p>}
              </div>
              
              <div>
                <label htmlFor="horarioContacto" className="block text-sm font-medium text-gray-700 mb-2">
                  Horario de contacto preferido *
                </label>
                <select
                  id="horarioContacto"
                  name="horarioContacto"
                  value={formData.horarioContacto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="Mañana (8:00 AM - 12:00 PM)">Mañana (8:00 AM - 12:00 PM)</option>
                  <option value="Tarde (2:00 PM - 6:00 PM)">Tarde (2:00 PM - 6:00 PM)</option>
                  <option value="Noche (6:00 PM - 9:00 PM)">Noche (6:00 PM - 9:00 PM)</option>
                  <option value="Cualquier horario">Cualquier horario</option>
                </select>
                {errors.horarioContacto && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.horarioContacto}</p>}
              </div>
            </div>

            {/* Detalles de la solicitud */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <label htmlFor="detallesSolicitud" className="block text-sm font-medium text-gray-700 mb-2">
                Detalles de la solicitud *
              </label>
              <textarea
                id="detallesSolicitud"
                name="detallesSolicitud"
                value={formData.detallesSolicitud}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                placeholder="Describe detalladamente tu solicitud, queja, reclamo o sugerencia..."
                required
              />
              {errors.detallesSolicitud && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.detallesSolicitud}</p>}
            </div>

            {/* Adjuntos */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <label htmlFor="adjuntos" className="block text-sm font-medium text-gray-700 mb-2">
                Adjuntos (imagen, documento, PDF)
              </label>
              <input
                type="file"
                id="adjuntos"
                name="adjuntos"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 focus:scale-[1.02] focus:shadow-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-sm text-gray-500 mt-1">Formatos permitidos: PDF, DOC, DOCX, JPG, JPEG, PNG (máximo 5MB)</p>
              {errors.adjuntos && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.adjuntos}</p>}
            </div>

            {/* Casilla de aceptación */}
            <div className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <input
                type="checkbox"
                id="aceptacionDatos"
                name="aceptacionDatos"
                checked={formData.aceptacionDatos}
                onChange={handleChange}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-all duration-300 focus:scale-110"
                required
              />
              <label htmlFor="aceptacionDatos" className="text-sm text-gray-700">
                Acepto el tratamiento de mis datos personales conforme a la política de privacidad de Almeidas Comunicaciones y autorizo el uso de la información suministrada para dar respuesta a mi solicitud. *
              </label>
            </div>
            {errors.aceptacionDatos && <p className="text-red-500 text-sm mt-1 animate-shake">{errors.aceptacionDatos}</p>}

            {/* Botón de envío */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'
                } text-white shadow-lg hover:shadow-xl`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  'Enviar PQRS'
                )}
              </button>
            </div>
            
            {submitted && (
              <div className="text-center animate-bounce-in">
                <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">¡Tu PQRS ha sido enviada correctamente!</span>
                </div>
              </div>
            )}
          </form>

          {/* Tarjeta de tiempo de respuesta */}
          <div className={`bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6 mt-8 transition-all duration-1000 ${
            showTimeCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex items-center justify-center space-x-3">
              <div className="flex-shrink-0">
                <svg className={`w-8 h-8 text-blue-600 transition-transform duration-1000 ${showTimeCard ? 'rotate-12' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Tiempo de Respuesta
                </h3>
                <p className="text-gray-600">
                  <span className="font-medium text-blue-600">10 días hábiles</span> para dar respuesta a tu solicitud
                </p>
              </div>
            </div>
          </div>

          {/* Tarjetas de Derechos y Garantías */}
          <div className="mt-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-2">Tus Derechos y Garantías</h2>
            <p className="text-center text-gray-600 mb-6">En Almeidas Comunicaciones respetamos y cumplimos con toda la normatividad vigente para proteger tus derechos como usuario.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Tarjeta 1 */}
              <div className="flex-1 bg-white border-2 border-blue-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-blue-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l3-1 3 1-.75-3M12 3v1m0 0a9 9 0 100 18 9 9 0 000-18zm0 0V3" />
                  </svg>
                  <span className="font-semibold text-blue-700">Régimen de Protección al Usuario</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mt-2">
                  <p className="text-sm text-gray-700 mb-1">Resolución 3066 de 2011 - Artículo 42, Inciso 4</p>
                  <p className="text-sm text-blue-900"><span className="font-bold">Importante:</span> Las peticiones o quejas relacionadas con facturación pueden presentarse máximo dentro de los <span className="font-bold">6 meses siguientes</span> contados desde el vencimiento del pago oportuno de la factura.</p>
                </div>
              </div>
              {/* Tarjeta 2 */}
              <div className="flex-1 bg-white border-2 border-green-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-2">
                  <svg className="w-6 h-6 text-green-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-green-700">Derecho de Recurso y Apelación</span>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mt-2">
                  <p className="text-sm text-gray-700 mb-1">Tienes <span className="font-bold">10 días hábiles</span> después de recibir nuestra respuesta</p>
                  <p className="text-sm text-green-900">Puedes presentar <span className="font-bold">recurso de reposición</span> si no estás conforme con nuestra decisión, y solicitar que tu caso sea revisado por la <span className="font-bold">Superintendencia de Industria y Comercio (SIC)</span>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Compromiso con la Transparencia */}
          <div className="mt-12 border-2 border-blue-200 rounded-2xl bg-blue-50 p-6 max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center text-blue-800 mb-6">Compromiso con la Transparencia</h3>
            <div className="bg-white rounded-xl p-4 mb-6">
              <div className="flex items-center mb-2">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-blue-700">Proceso de Recurso de Apelación</span>
              </div>
              <ul className="mt-2 space-y-1 text-sm text-blue-900">
                <li className="flex items-start"><span className="mr-2">📄</span> <span><b>Presentación:</b> Puedes manifestar tu inconformidad de forma verbal o escrita a través de nuestras oficinas físicas o líneas de atención.</span></li>
                <li className="flex items-start"><span className="mr-2">🖥️</span> <span><b>Doble recurso:</b> Recurso de reposición (revisión interna) y en subsidio de apelación (revisión por la autoridad competente).</span></li>
                <li className="flex items-start"><span className="mr-2">⚖️</span> <span><b>Autoridad competente:</b> La SIC revisará y resolverá tu caso si confirman o modifican nuestra decisión de manera desfavorable.</span></li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-blue-200 rounded-xl p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-pink-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 4v4m0 4h.01" />
                  </svg>
                  <span className="font-semibold text-pink-700">Contacto SIC</span>
                </div>
                <span className="text-sm text-gray-700">Web: sic.gov.co</span>
                <span className="text-sm text-gray-700">Email: info@sic.gov.co</span>
                <span className="text-sm text-gray-700">Oficinas físicas: Disponibles nacionalmente</span>
              </div>
              <div className="bg-white border border-blue-200 rounded-xl p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2zm0 0V7m0 4v4m0 4h.01" />
                  </svg>
                  <span className="font-semibold text-blue-700">Nuestro Compromiso</span>
                </div>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Respuesta oportuna y clara</li>
                  <li>Cumplimiento normativo total</li>
                  <li>Protección de tus derechos</li>
                  <li>Atención personalizada y transparente</li>
                </ul>
              </div>
            </div>
            <p className="italic text-center text-gray-500 text-sm">&quot;En Almeidas Comunicaciones creemos que la transparencia y el cumplimiento normativo son fundamentales para construir relaciones de confianza con nuestros usuarios.&quot;</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05); 
          }
          70% { 
            transform: scale(0.9); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </AnimatedPage>
  );
} 