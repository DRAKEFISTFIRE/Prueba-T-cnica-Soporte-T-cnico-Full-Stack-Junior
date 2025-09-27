"use client"; // Indica que este componente se renderizará del lado del cliente (Next.js 13+)

import { useState } from "react"; // Hook de React para manejar estado local

// Definimos el tipo de datos que tendrá nuestro ticket
type Ticket = {
  nombre: string;      // Nombre del cliente
  email: string;       // Correo electrónico del cliente
  descripcion: string; // Descripción del problema
  prioridad: string;   // Prioridad del ticket (P0, P1, P2, P3)
};

// Componente principal de la página /support
export default function SupportPage() {
  // Estado para almacenar la información del ticket
  const [ticket, setTicket] = useState<Ticket>({
    nombre: "",           // Inicialmente vacío
    email: "",            // Inicialmente vacío
    descripcion: "",      // Inicialmente vacío
    prioridad: "P3",      // Valor por defecto
  });

  // Estado para saber si el ticket ya fue enviado
  const [submitted, setSubmitted] = useState(false);

  // Función para manejar cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target; // Obtenemos el nombre y valor del input
    setTicket(prevTicket => ({
      ...prevTicket,       // Copia los valores previos
      [name]: value,       // Actualiza el campo correspondiente
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();     // Evita recargar la página
    setSubmitted(true);     // Cambia el estado para mostrar el resumen
  };

  // Función para reiniciar el formulario y permitir crear otro ticket
  const handleNewTicket = () => {
    setTicket({
      nombre: "",
      email: "",
      descripcion: "",
      prioridad: "P3",
    });
    setSubmitted(false);
  };

return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    {/* Título */}
    <h1 className="text-3xl font-bold text-gray-800 mb-6">
      Formulario de Soporte
    </h1>

    {!submitted ? (
      /* Formulario */
      <form
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {/* Campo Nombre */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Nombre del cliente
          </label>
          <input
            type="text"
            name="nombre"
            value={ticket.nombre}
            onChange={handleChange}
            placeholder="Ej: Juan Pérez"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Campo Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={ticket.email}
            onChange={handleChange}
            placeholder="Ej: correo@dominio.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        {/* Campo Descripción */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Descripción del problema
          </label>
          <textarea
            name="descripcion"
            value={ticket.descripcion}
            onChange={handleChange}
            placeholder="Describe tu problema..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            rows={4}
            required
          />
        </div>

        {/* Selector de Prioridad */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">
            Prioridad
          </label>
          <select
            name="prioridad"
            value={ticket.prioridad}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="P0">P0 (Crítico)</option>
            <option value="P1">P1 (Alto)</option>
            <option value="P2">P2 (Medio)</option>
            <option value="P3">P3 (Bajo)</option>
          </select>
        </div>

        {/* Botón Enviar */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg w-full shadow-md"
        >
          Enviar Ticket
        </button>
      </form>
    ) : (
      /* Resumen del ticket */
      <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Resumen del Ticket
        </h2>
        <p><strong>Nombre:</strong> {ticket.nombre}</p>
        <p><strong>Email:</strong> {ticket.email}</p>
        <p><strong>Descripción:</strong> {ticket.descripcion}</p>
        <p><strong>Prioridad:</strong> {ticket.prioridad}</p>

        {/* Botón para crear otro ticket */}
        <button
          onClick={handleNewTicket}
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg w-full shadow-md"
        >
          Crear otro ticket
        </button>
      </div>
    )}
  </div>
)};
