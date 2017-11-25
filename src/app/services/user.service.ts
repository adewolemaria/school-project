import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Student } from '../models/user.model';
import { Mentor } from '../models/user.model';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  studentsCollection: AngularFirestoreCollection<Student>;
  mentorsCollection: AngularFirestoreCollection<Mentor>;
  usersCollection: AngularFirestoreCollection<User>;
  constructor(private firestore: AngularFirestore) {}

  getStudents() {
    this.studentsCollection = this.firestore.collection('users', ref => ref.where('type', '==', 'student'));
    return this.studentsCollection.snapshotChanges()
            .map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as Student;
                const id = a.payload.doc.id;
                return { id, data };
              });
            });
  }

  getMentors() {
    this.mentorsCollection = this.firestore.collection('users', ref => ref.where('type', '==', 'mentor'));
    return this.mentorsCollection.snapshotChanges()
            .map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data() as Mentor;
                const id = a.payload.doc.id;
                return { id, data };
              });
            });
  }

  
}