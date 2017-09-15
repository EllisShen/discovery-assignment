function category(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATEGORY_SUCCESS':
      return action.listData.slice(0);
    default:
      return state;
  }
}

function videoList(state = {}, action) {
  switch (action.type) {
    case 'FETCH_VIDEO_LIST_SUCCESS':
      return { ... action.data }

    default:
      return state;
  }
}

const reducers = {
  category,
  videoList,
};

export default reducers
