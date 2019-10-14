import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';

export interface Offer {
  id?: string;
  companyId: string;
  companyName: string;
  companyAvatar: string;
  description: string;
  sectors: string[];
  media: string[];
  timestamp: any;
}

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private offers: Observable<Offer[]>;
  private offerCollection: AngularFirestoreCollection<Offer>;

  constructor(private afs: AngularFirestore) {
    this.offerCollection = afs.collection<Offer>('offers');
    this.offers = this.offerCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getOffers(): Observable<Offer[]> {
    return this.offers;
  }

  getOffersByCompany(companyId: string): Observable<Offer[]> {
    const collection = this.afs.collection<Offer>('offers/', ref => ref.where('companyId', '==', companyId));
    return collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }));
  }

  getOffer(id: string): Observable<Offer> {
    return this.offerCollection.doc<Offer>(id).valueChanges().pipe(
      take(1),
      map(offer => {
        offer.id = id;
        return offer;
      })
    );
  }

  addOffer(offer: Offer): Promise<DocumentReference> {
    return this.offerCollection.add(offer);
  }

  updateOffer(offer: Offer): Promise<void> {
    return this.offerCollection.doc(offer.id).update(offer);
  }

  deleteOffer(id: string): Promise<void> {
    return this.offerCollection.doc(id).delete();
  }
}
