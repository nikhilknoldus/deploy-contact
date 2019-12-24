let GLOBAL_INITIAL_STATE: any;

function saveInitialStateToLocalStorage() {
  const INITIAL_STATE: any = [
    {
      name: "Slava Olenin",
      phone: "6566666007",
      email: "slava@fm.com",
      favourite: false
    },
    {
      name: "Jaye Tan",
      phone: "6760984756",
      email: "jaye@fm.com",
      favourite: false
    },
    {
      name: "Sangwon Park",
      phone: "6555555007",
      email: "park@fm.com",
      favourite: false
    },
    {
      name: "Brett Webb",
      phone: "6500000007",
      email: "brett@fm.com",
      favourite: false
    },
    {
      name: "Jisum Suh",
      phone: "6590909090",
      email: "jisun@gmail.com",
      favourite: false
    },
    {
      name: "Keynes Yeo",
      phone: "5550909876",
      email: "yeo@fm.com",
      favourite: false
    },
    {
      name: "Emmmy Jolly",
      phone: "9999076561",
      email: "emmmy@gmail.com",
      favourite: false
    },
    {
      name: "Harry Gill",
      phone: "7888342920",
      email: "harry@gmail.com",
      favourite: false
    }
  ];
  localStorage.setItem("contacts", JSON.stringify(INITIAL_STATE));
}

function getStateFromLocalStorage() {
  if (!localStorage.getItem("contacts")) {
    saveInitialStateToLocalStorage();
  }
GLOBAL_INITIAL_STATE = localStorage.getItem("contacts");
}

getStateFromLocalStorage();
export { GLOBAL_INITIAL_STATE };

export const ContactReducer = (
  state = JSON.parse(GLOBAL_INITIAL_STATE),
  action: any
) => {
  let index = -1;
  switch (action.type) {
    case "ADD_CONTACT":
      localStorage.setItem(
        "contacts",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    case "FAVOURITE_CONTACT":
      index = getIndex(state, action.payload);
      state[index] = { ...state[index], favourite: action.payload.favourite };
      localStorage.setItem("contacts", JSON.stringify([...state]));
      return [...state];
    case "UPDATE_CONTACT":
      index = getIndex(state, action.payload);
      state[index] = { ...action.payload };
      localStorage.setItem("contacts", JSON.stringify([...state]));
      return [...state];
    default:
      return state;
  }
};

function getIndex(state: any, payload: any) {
  let index = -1;
  for (let i = 0; i < state.length; i++) {
    if (state[i].email.toString() === payload.email.toString()) {
      index = i;
      break;
    }
  }

  return index;
}
