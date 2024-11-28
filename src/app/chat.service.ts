import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ChatbotService {
    // Diccionario de preguntas y respuestas predefinidas
    private rules: { [key: string]: string } = {
        'hola': '¡Hola! ¿En qué puedo ayudarte?',
        '¿cómo puedo registrarme?': 'Para registrarte, ve a la sección de "Registro" en el logín.',
        '¿cuál es el horario de atención?': 'Estamos disponibles las 24 horas, los 7 días de la semana.',
        '¿cómo puedo recuperar mi contraseña?': 'Para recuperar tu contraseña, ve a la sección de "Iniciar sesión" y selecciona "Olvidé mi contraseña".',
        '¿cómo ver los productos disponibles?': 'Puedes ver los productos disponibles en la página principal de la aplicación.',
        '¿dónde puedo encontrar soporte técnico?': 'Puedes encontrar soporte técnico en la sección de "Ayuda" o contactándonos directamente.',
        '¿puedo cancelar un pedido?': 'Sí, puedes cancelar un pedido desde la sección "Mis pedidos", seleccionando la opción de "Cancelar".',
        'gracias': '¡De nada! 😊 Si tienes otra pregunta, no dudes en hacerla.',

    };

    constructor() {}

    // Método para obtener la respuesta según la pregunta
    getResponse(question: string): string {
      const lowerCaseQuestion = question.toLowerCase();
  
      // Reglas basadas en palabras clave
      if (lowerCaseQuestion.includes('registrarme')) {
          return 'Para registrarte, ve a la sección de "Registro" en el logín.';
      } else if (lowerCaseQuestion.includes('horario')) {
          return 'Estamos disponibles las 24 horas, los 7 días de la semana.';
      } else if (lowerCaseQuestion.includes('contraseña')) {
          return 'Para recuperar tu contraseña, selecciona "Olvidé mi contraseña" en la página de inicio de sesión.';
      }
  
      return 'Lo siento, no entiendo tu pregunta. Por favor intenta con algo diferente.';
  }
  
}
