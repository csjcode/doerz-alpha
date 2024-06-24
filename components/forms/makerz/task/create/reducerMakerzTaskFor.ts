import {
  OWNER_USER,
  OWNER_GROUP,
  OWNER_ADMIN,
  OWNER_ORG,
  getInitialValues,
} from "./initialConfig";
import { generateShortDateTime } from "@/utils/dates";

export const initialState = {
  makerzFormStep: 2,
  taskIdNameShort: generateShortDateTime(),
  draft: true,
  taskType: "ownership",
  ownershipTokenAddress: "",
  ownershipTokenName: "",
  ownershipTokenSymbol: "",
  ownershipTokenAmount: 1,
  title: "",
  description: "",
  ownerGroup: OWNER_GROUP,
  ownerAdmin: OWNER_ADMIN,
  rewardInDOERZ: "",
  image: "",
  instructions: [] as string[],  // Add instructions to the state
};

export type State = typeof initialState;

export type Action =
  | { type: "SET_FIELD"; field: keyof State; value: any }
  | { type: "SET_INITIAL_VALUES"; payload: Partial<State> }
  | { type: "ADD_INSTRUCTION"; instruction: string }
  | { type: "REMOVE_INSTRUCTION"; index: number };

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
    case "ADD_INSTRUCTION":
      if (state.instructions.length < 10) {
        return {
          ...state,
          instructions: [...state.instructions, action.instruction],
        };
      }
      return state;
    case "REMOVE_INSTRUCTION":
      return {
        ...state,
        instructions: state.instructions.filter(
          (_, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
};
