### 1.For firebase
```
npm i firebase
```

### 2.For `p5.js`
```
npm install p5
```

### 3.Add `db.js` to `/src/db.js`
```
import { initializeApp } from 'firebase/app';
import { getDatabase} from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 
  authDomain: 
  databaseURL: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId:
  measurementId: 
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const firedb = getFirestore(firebaseApp)

export { database , firedb};
```
##### add this file to .gitignore before push to github