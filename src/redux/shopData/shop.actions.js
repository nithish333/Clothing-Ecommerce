import SHOP_ACTION_TYPES from "./shop.types";

export const updateCollection = (collectionMap) => ({
  type: SHOP_ACTION_TYPES.UPDATE_COLLECTION,
  payload: collectionMap,
});
