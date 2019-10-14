import { Injectable } from '@angular/core';
import { Offer } from './offer.service';
import { AngularFirestoreCollection, DocumentReference, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

export interface Favorite {
  id?: string;
  userId: string;
  offerId: string;
}

export interface OfferViews {
  id?: string;
  userId: string;
  offerId: string;
}

export interface Follow {
  id?: string;
  userId: string;
  companyId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private afs: AngularFirestore) { }

  // Favorite
  addFavorite(favorite: Favorite) {
    const collection = this.afs.collection<Favorite>('favorites/');
    collection.add(favorite);
  }

  getFavorites(offerId: string): Observable<Favorite[]> {
    console.log('Offer Id ==> ' + offerId);
    return this.afs.collection<Favorite>('favorites', ref =>
      ref.where('offerId', '==', offerId)).snapshotChanges()
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

  getFavoritesByUser(userId: string): Observable<Favorite[]> {
    return this.afs.collection<Favorite>('favorites', ref =>
      ref.where('userId', '==', userId)).snapshotChanges()
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

  isFavorite(userId: string, offerId: string): Observable<Favorite[]> {
    const collection = this.afs.collection<Favorite>('favorites', ref =>
      ref.where('userId', '==', userId).where('offerId', '==', offerId));
    return collection.snapshotChanges()
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

  deleteFavorite(favoriteId: string) {
    this.afs.collection<Favorite>('favorites/').doc(favoriteId).delete();
  }

  // OfferViews
  addOfferViews(view: OfferViews) {
    const collection = this.afs.collection<OfferViews>('offerviews/');
    collection.add(view);
  }

  getOfferViews(offerId: string): Observable<OfferViews[]> {
    return this.afs.collection<OfferViews>('offerviews', ref =>
      ref.where('offerId', '==', offerId)).snapshotChanges()
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

  isOfferViews(userId: string, offerId: string): Observable<OfferViews[]> {
    const collection = this.afs.collection<OfferViews>('offerviews', ref =>
      ref.where('userId', '==', userId).where('offerId', '==', offerId));
    return collection.snapshotChanges()
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

  deleteOfferViews(offerViewId: string) {
    this.afs.collection<OfferViews>('offerviews/').doc(offerViewId).delete();
  }

  // Follow
  addFollow(follow: Follow) {
    this.afs.collection<Follow>('follows/').add(follow);
  }

  isFollow(userId: string, companyId: string): Observable<Follow[]> {
    const collection = this.afs.collection<Follow>('follows', ref =>
      ref.where('userId', '==', userId).where('companyId', '==', companyId));
    return collection.snapshotChanges()
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

  deleteFollow(followId: string) {
    this.afs.collection<Follow>('follows/').doc(followId).delete();
  }

}
