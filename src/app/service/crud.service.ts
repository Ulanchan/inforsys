import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  authState: any = null;

  constructor(public fireservice: AngularFirestore, private afu: AngularFireAuth, private router: Router) { }

  simpan_Artikel(Artikel) {
    return this.fireservice.collection('Artikel').add(Artikel);
  }
  panggil_A() {
    return this.fireservice.collection('Artikel').snapshotChanges();
  }
  edit_A(id, rekam) {
    this.fireservice.doc('Artikel/' + id).update(rekam);
  }
  hapus_A(id) {
    this.fireservice.doc('Artikel/' + id).delete();
  }
  kontak_Pesan(pesan) {
    return this.fireservice.collection('Contact-us').add(pesan);
  }
  panggil_P() {
    return this.fireservice.collection('Contact-us').snapshotChanges();
  }
  hapus_P(id) {
    this.fireservice.doc('Contact-us/' + id).delete();
  }

  // all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  loginWithEmail(email: string, password: string) {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signout(): void {
    this.afu.signOut();
    this.router.navigate(['/public/home']);
  }
}
