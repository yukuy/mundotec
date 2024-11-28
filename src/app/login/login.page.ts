import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  correo = '';
  clave = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private toastController: ToastController
  ) {}

  async onSubmit() {
    if (this.correo && this.clave) {
      const { data, error } = await this.supabaseService.loginUser(this.correo, this.clave);

      if (error || !data) {
        this.showToast('Correo o clave incorrectos');
      } else {
        this.showToast('Login exitoso');
        this.router.navigate(['/principal']);  // Redirige a la página principal tras el login
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
