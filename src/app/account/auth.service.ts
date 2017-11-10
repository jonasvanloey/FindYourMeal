import * as firebase from 'firebase';
import {Subject} from "rxjs";
export class AuthService {
  token: string;
// title: any;


  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );

  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      );



  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  LogOut() {
    firebase.auth().signOut();
    this.token = null;
  }

  storefavorite(title:string, id:number){
    var userId=firebase.auth().currentUser.uid;
    firebase.database().ref('favorites/'+userId ).set({
      title: title,
      id : id
    });
  }
  // getfavorites(){
  //   var userId = firebase.auth().currentUser.uid;
  //   return firebase.database().ref('favorites/' + userId).once('value').then(function(snapshot) {
  //     this.title = (snapshot.val() && snapshot.val().title) || 'Anonymous';
  //     console.log(this.title);
  //   });
  // }
}
