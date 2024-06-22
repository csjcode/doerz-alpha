import { OWNER_ADMIN, OWNER_GROUP } from "@/config/testing";
import { generateShortDateTime } from "@/utils/dates";

export const initialState = {
  makerzFormStep: 2,
  taskIdNameShort: generateShortDateTime(),
  draft: true,
  taskType: "ownership",
  title: "",
  description: "",
  ownerGroup: OWNER_GROUP,
  ownerAdmin: OWNER_ADMIN,
  rewardInDOERZ: "",
  image: "",
};

export type State = typeof initialState;

type Action =
  | { type: "SET_FIELD"; field: keyof State; value: any }
  | { type: "SET_INITIAL_VALUES"; payload: Partial<State> };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_INITIAL_VALUES":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
