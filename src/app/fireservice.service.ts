import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {
  
  constructor(
    private auth:AngularFireAuth,
    private firestore:AngularFirestore,
    private firebaseDB: AngularFireDatabase
    
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
    async resetPassword(email:string):Promise<void>{
      try{
        return this.auth.sendPasswordResetEmail(email);
      }
      catch(error){console.log(error)}
    }

    async signOut() {
      try {
        await this.auth.signOut();
      } catch (error) {
        console.error('Error al cerrar la sesión:', error);
        throw error;
      }
    }
     // obtiene datos del usuario
  async getProfile(){
    const user = await this.auth.currentUser;
    return user.uid;
  }
}