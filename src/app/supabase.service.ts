// Importa Injectable y otros elementos necesarios
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://abeaaemxaimrhrkscufh.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZWFhZW14YWltcmhya3NjdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NDA5MjksImV4cCI6MjA0NzAxNjkyOX0.2zSO2hFlIt0nHn35kMtM4vJcTu5RQHuQLy0uG7fYxhc'
    );
  }

  // Método de prueba de conexión
  async probarConexion() {
    try {
      const { data, error } = await this.supabase.from('libros').select('*').limit(1);
      
      if (error) {
        console.error('Error en la conexión a Supabase:', error);
        return { success: false, message: 'Error en la conexión a Supabase', error };
      }
      
      console.log('Conexión exitosa. Datos recibidos:', data);
      return { success: true, data };
    } catch (error) {
      console.error('Error en la prueba de conexión a Supabase:', error);
      return { success: false, error };
    }
  }

    // Función para registrar usuario en Supabase
    async registerUser(nombre: string, correo: string, clave: string) {
      const { data, error } = await this.supabase.from('usuario').insert([
        { nombre, correo, clave }
      ]);
      return { data, error };
    }

    // Función para loguear usuario
    async loginUser(correo: string, clave: string) {
      const { data, error } = await this.supabase
        .from('usuario')
        .select('*')
        .eq('correo', correo)
        .eq('clave', clave)
        .single();
  
      return { data, error };
    }
}