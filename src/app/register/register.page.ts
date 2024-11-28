import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {
  nombre = '';
  correo = '';
  clave = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async onSubmit() {
    if (this.nombre && this.correo && this.clave) {
      const { data, error } = await this.supabaseService.registerUser(this.nombre, this.correo, this.clave);

      if (error) {
        this.showToast('Error al registrar: ' + error.message);
      } else {
        this.showToast('Registro exitoso');
        this.router.navigate(['/login']);  // Redirige al login después del registro
      }
    } else {
      this.showToast('Por favor, completa todos los campos');
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}


