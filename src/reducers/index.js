function category(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return action.listData.slice(0);
    default:
      return state;
  }
}

const reducers = {
  category,
};

export default reducers
