export function fetchCategoryAction() {
  return {
    type: 'FETCH_VIDEO_CATEGORY'
  }
}

export function fetchVideoListAction(payload) {
  return {
    type: 'FETCH_VIDEO_LIST',
    payload
  }
}
