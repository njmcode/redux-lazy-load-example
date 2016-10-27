const CHANGE_LOADER_STATUS = 'CHANGE_LOADER_STATUS'

const initialState = {
  active: false,
}

export function changeLoaderStatus (active) {
  return {
    type: CHANGE_LOADER_STATUS,
    active,
  }
}

export default function Loader (state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOADER_STATUS:
      return {
        ...state,
        active: state.active,
      }
    default:
      return state
  }
}
