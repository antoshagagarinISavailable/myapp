const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: "0users",
      isFollowed: true,

      place: { city: "city1", country: "country1" },
      status: "visit my profile",
      userpic: "",
      name: "Tony",
    },
    {
      id: "1users",
      isFollowed: false,

      place: { city: "city1", country: "country1" },
      status: "visit my profile too",
      userpic: "",
      name: "Alexa",
    },
    {
      id: "2users",
      isFollowed: true,

      place: { city: "city1", country: "country1" },
      status: "and mine",
      userpic: "",
      name: "John Doe",
    },
    {
      id: "3users",
      isFollowed: false,

      place: { city: "city1", country: "country1" },
      status: "mine too",
      userpic: "",
      name: "Bill",
    },
    {
      id: "4users",
      isFollowed: true,

      place: { city: "city1", country: "country1" },
      status: "",
      userpic: "",
      name: "Elon",
    },
    {
      id: "5users",
      isFollowed: true,

      place: { city: "city1", country: "country1" },
      status: "",
      userpic: "",
      name: "Joseph",
    },
    {
      id: "6users",
      isFollowed: true,

      place: { city: "city1", country: "country1" },
      status: "",
      userpic: "",
      name: "Heather",
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((el) => {
            if (el.id === action.id) {
              return { ...el, isFollowed: true };
            }
            return el;
          }),
        ],
      };

    case UNFOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((el) => {
            if (el.id === action.id) {
              return { ...el, isFollowed: false };
            }
            return el;
          }),
        ],
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (id) => {
  return { type: FOLLOW, id };
};
export const unfollowAC = (id) => {
  return { type: UNFOLLOW, id };
};
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export default usersReducer;
