import SHOP_ACTION_TYPES from "./shop.types";
import {
  firestore,
  convertCollectionsToSnapshotMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errmsg) => ({
  type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_fAILURE,
  payload: errmsg,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart);

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsToSnapshotMap(snapshot);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
