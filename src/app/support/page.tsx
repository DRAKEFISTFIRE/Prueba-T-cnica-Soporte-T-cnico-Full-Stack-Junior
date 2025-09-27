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
    } as Ticket));         // Indicamos el tipo Ticket para TypeScript
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();     // Evita recargar la página
    setSubmitted(true);     // Cambia el estado para mostrar el resumen
  };

  