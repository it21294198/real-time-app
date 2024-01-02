### 0.Start
```bash
npm run dev
```
### 1.For firebase
```bash
npm i firebase
```

### 2.For `p5.js`
```bash
npm install p5
```

### 3.Firestroe vs Cloudinary
```bash
npm i @cloudinary/url-gen @cloudinary/react
```
[About more](https://cloudinary.com/documentation/react_image_and_video_upload)

### 4.Add `db.js` to `/src/db.js`
```js
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

### 5. Add Image Storeage to `imgStore.js` to `/src/imgStroe.js`
```js
const cloudinaryConfig = {
    cloudName:"dtf8ixgxe",
    uploadPreset:"v9zvvyrr",
}

export default cloudinaryConfig;
```
##### add this files to .gitignore before push to github
```bash
# config files
/src/db.js
/src/imgStore.j
```