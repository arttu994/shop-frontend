const initialState = {
  username: "",
  password: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
