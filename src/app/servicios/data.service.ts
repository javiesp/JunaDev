import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private isStorageReady = false;
  private modoNocturnoSubject = new BehaviorSubject<boolean>(false);

  getModoNocturnoObservable(): Observable<boolean> {
    return this.modoNocturnoSubject.asObservable();
  }

  getModoNocturno(): boolean {
    return this.modoNocturnoSubject.value;
  }

  setModoNocturno(modoNocturno: boolean): void {
    this.modoNocturnoSubject.next(modoNocturno);
  }


  constructor(private storage: Storage) {
    this.initStorage();
  }

  // Inicializa el almacenamiento local
  private async initStorage() {
    // Usa el método create() para asegurarte de que la base de datos está lista
    this.storage = await this.storage.create();
    this.isStorageReady = true;
  }
// Guardar información del usuario en el almacenamiento local
  async guardarUsuario(usuario: any): Promise<void> {
    // Verifica si el almacenamiento está listo antes de intentar guardar
    if (!this.isStorageReady) {
      await this.initStorage();
    }

    await this.storage.set('usuario', JSON.stringify(usuario));
  }

  // Obtener información del usuario desde el almacenamiento local
  async obtenerUsuario(): Promise<any | null> {
    // Verifica si el almacenamiento está listo antes de intentar obtener
    if (!this.isStorageReady) {
      await this.initStorage();
    }

    const usuario = await this.storage.get('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  // Limpiar la información del usuario al cerrar sesión
  async cerrarSesion(): Promise<void> {
    // Verifica si el almacenamiento está listo antes de intentar eliminar
    if (!this.isStorageReady) {
      await this.initStorage();
    }

    await this.storage.remove('usuario');
  }
}