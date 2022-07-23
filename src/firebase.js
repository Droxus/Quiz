import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get  } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    databaseURL: "https://quiz-ef7f5-default-rtdb.europe-west1.firebasedatabase.app/",
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());


    export default {
        data(){
          return {
            setData: function(path, obj){
                console.log('start')
                set(ref(database, path), obj)
                .then(() => {console.log('fifnish')})
            },
            getData: async function(){
              get(child(dbRef, 'packs/')).then((snapshot) => {
                if (snapshot.exists()) {
                  return snapshot.val();
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
            }
          }
        }
      }