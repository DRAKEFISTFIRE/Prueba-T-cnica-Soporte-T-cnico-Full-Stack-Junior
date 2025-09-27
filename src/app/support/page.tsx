"use client"; // Indica que este archivo será un componente del lado del cliente (Next.js 13+)

import { useState } from "react"; // Hook para manejar estado en React

// Definimos el tipo de datos de un ticket
type Ticket = {
  nombre: string;        // Nombre del cliente
  email: string;         // Email del cliente
  descripcion: string;   // Descripción del problema
  prioridad: string;     // Prioridad del ticket (P0, P1, P2, P3)
};

export default function SupportPage() {
  // Estado local para almacenar la información del ticket
  const [ticket, setTicket] = useState<Ticket>({
    nombre: "",
    email: "",
    descripcion: "",
    prioridad: "P3", // Valor por defecto
  })};
  //confrmamos que el ticket se ha enviado
  const [submitted, setSubmitted] = useState(false);
