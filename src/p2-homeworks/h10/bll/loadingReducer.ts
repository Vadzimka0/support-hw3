const initState = {
  isLoading: false
}
export type LoadingStateType = typeof initState

export const loadingReducer = (state: LoadingStateType = initState, action: ActionsTypes): LoadingStateType => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {...state, isLoading: action.isLoading}
    }
    default:
      return state
  }
}

type ActionsTypes = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => ({
  type: "SET_LOADING",
  isLoading
} as const)