"use client";
import AnimatedPage from '@/components/ui/AnimatedPage';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function PqrsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    type: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', type: '', message: '' };
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = 'El nombre es obligatorio (mínimo 3 caracteres)';
      valid = false;
    }
    if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
      valid = false;
    }
    if (!formData.type) {
      newErrors.type = 'Selecciona el tipo de PQRS';
      valid = false;
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', type: '', message: '' });
    setErrors({ name: '', email: '', type: '', message: '' });
  };

  return (
    <AnimatedPage>
      <section className="py-24 bg-white min-h-[70vh]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-4">
              PQRS
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              ¿Tienes una petición, queja, reclamo o sugerencia? Por favor, completa el siguiente formulario y nuestro equipo te responderá lo antes posible.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Tu nombre completo"
                required
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="tu@email.com"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">Tipo de PQRS *</label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="Petición">Petición</option>
                <option value="Queja">Queja</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Sugerencia">Sugerencia</option>
              </select>
              {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Escribe tu mensaje..."
                required
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Enviar PQRS
            </button>
            {submitted && (
              <p className="text-green-600 text-center font-medium mt-4">¡Tu PQRS ha sido enviada correctamente!</p>
            )}
          </form>
        </div>
      </section>
    </AnimatedPage>
  );
} 