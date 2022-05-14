import {initializeApp} from 'firebase/app';

import {
    getFirestore , collection , getDocs, doc , updateDoc,onSnapshot
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3H6YqwSqoZgjlsVApdSN_k257A_MosCk",
    authDomain: "pluginstore-c43aa.firebaseapp.com",
    projectId: "pluginstore-c43aa",
    storageBucket: "pluginstore-c43aa.appspot.com",
    messagingSenderId: "856679393245",
    appId: "1:856679393245:web:51dad626213c28a4fab834",
    measurementId: "G-6N4EKZEWK4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();


// updating a document

const updateForm = document.getElementById('download');
updateForm.addEventListener('click',(e) =>{
    // e.preventDefault();

    const db = getFirestore();

    const colRef = collection(db,'download');

    getDocs(colRef)
        .then((snapshot) => {
            let x = snapshot.docs[0].data().count;

            let docRef = doc(db,'download','1');

            let downloadCount = document.getElementById('download-count');
            downloadCount.innerText = x;

            updateDoc(docRef,{
                count : ++x
            }).then(()=>{
                console.log(x);
                })
        })

})

// Real time download count

const colRef = collection(db,'download');

onSnapshot(colRef,(snapshot) => {
    let x = snapshot.docs[0].data().count;

    let downloadCount = document.getElementById('download-count');
    downloadCount.innerText = x.toLocaleString('en-US');
})




