import { firestore } from "../firebase/initFirebase";

const getSkills = async () => {
  const snapshoot = await firestore
    .collection("Skills")
    .onSnapshot(function (doc) {
      console.log(doc);
    });
  // snapshoot.docs.forEach((doc) => console.log(doc.data()));
  //console.log(snapshoot.data());
};
export { getSkills };
