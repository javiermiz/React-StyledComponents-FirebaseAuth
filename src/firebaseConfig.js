import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "<YOUR_APIKEY>",
  authDomain: "<YOUR_AUTHDOMAIN>",
  projectId: "<YOUR_PROYECTID",
  storageBucket: "<YOUR_STORAGE_BUCKET",
  messagingSenderId: "<YOUR_MESSAGINGSENDERID>",
  appId: "<YOUR_APPID>"
})

/* Replace api keys, it's safe to have it public, the security rules needs to be configured on firebase side
example:
const app = firebase.initializeApp({
  apiKey: "AIzaLdTqjUC7jR06C7jR0qjg5BZC7jR0yeLdTqj",
  authDomain: "my-react-proyect.firebaseapp.com",
  projectId: "myreactproyect",
  storageBucket: "my-react-proyect.appspot.com",
  messagingSenderId: "12345678901",
  appId: "1:12345678901:web:47cbbc758c1f5f13068bbe"
}) */


export const auth = app.auth()
export default app
