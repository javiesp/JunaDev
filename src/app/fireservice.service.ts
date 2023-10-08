import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  

  constructor(
    private auth:AngularFireAuth,
    private firestore:AngularFirestore

  ) { }
    loginWithEmail(data){
      return this.auth.signInWithEmailAndPassword(data.email,data.password);
    }
    signup(data){
      return this.auth.createUserWithEmailAndPassword(data.email,data.password);
    }
    saveDetails(data){
      return this.firestore.collection("users").doc(data.uid).set(data);
    }
    getDetails(data){
      return this.firestore.collection("users").doc(data.uid).valueChanges();
    }

    async signOut() {
      try {
        await this.auth.signOut();
      } catch (error) {
        console.error('Error al cerrar la sesión:', error);
        throw error;
      }
    }
}
