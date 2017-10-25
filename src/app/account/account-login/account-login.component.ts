import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabase} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {
   user: Observable<firebase.User>;
   info:any;
  //items: FirebaseListObservable<any[]>;
  constructor(public afAuth: AngularFireAuth,public db: AngularFireDatabase) {
    this.user = afAuth.authState;
  
    //this.info= this.afAuth.auth.currentUser.email;
    //this.items = db.list('items');
  }

  ngOnInit() {
      console.log(this.afAuth.authState);
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
  }
  logout() {
     this.afAuth.auth.signOut();

  }
}
