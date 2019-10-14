import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

export interface User {
  id?: string;
  name: string;
  email: string;
  type: string;
  avatar: string;
  sectors: string[];
  city: string;
  description: string;
  phone1: string;
  phone2: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userCollection: AngularFirestoreCollection<User>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>('users');
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (firebase.auth().currentUser) {
        firebase.auth().signOut()
          .then(() => {
            console.log('LOG Out');
            resolve();
          }).catch((error) => {
            reject();
          });
      }
    });
  }

  getAuthUser() {
    return firebase.auth().currentUser;
  }

  getUser(id: string): Observable<User> {
    return this.userCollection.doc<User>(id).valueChanges().pipe(
      take(1),
      map(user => {
        user.id = id;
        return user;
      })
    );
  }

  getCompanies(): Observable<User[]> {
    return this.afs.collection<User>('users', ref => ref.where('type', '==', 'company')).snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  addUser(user: User, id: string): Promise<void> {
    return this.afs.doc<any>('users/' + id).set(user);
  }

  updateUser(user: User): Promise<void> {
    console.log(user);
    return this.userCollection.doc(user.id).update(user);
  }

  deleteUser(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }

}
