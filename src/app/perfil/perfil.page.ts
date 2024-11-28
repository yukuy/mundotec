import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-perfil',
    templateUrl: './perfil.page.html',
    styleUrls: ['./perfil.page.scss'],
  })
  export class PerfilPage {
    // Cambia el modo oscuro
    toggleDarkMode(event: any): void {
      const isDarkModeEnabled = event.detail.checked; // Estado del toggle
      document.body.classList.toggle('dark', isDarkModeEnabled); // Aplica la clase 'dark' al body
    }
  }

