import { Component } from '@angular/core';
import { ChatbotService } from '../chat.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
    userMessage: string = ''; // Almacena el mensaje del usuario
    messages: { sender: string; text: string }[] = []; // Historial del chat

    constructor(private chatbotService: ChatbotService) {}

    // Enviar el mensaje del usuario y obtener la respuesta del bot
    sendMessage() {
        if (this.userMessage.trim() === '') return;

        // Agregar el mensaje del usuario al historial
        this.messages.push({ sender: 'user', text: this.userMessage });

        // Obtener respuesta del bot a través del servicio
        const botResponse = this.chatbotService.getResponse(this.userMessage);

        // Agregar la respuesta del bot al historial
        this.messages.push({ sender: 'bot', text: botResponse });

        // Limpiar el campo de entrada del usuario
        this.userMessage = '';
    }
}
