const initState = {
  currentTheme: 'some'
};

export type ThemeStateType = typeof initState

export const themeReducer = (state: ThemeStateType = initState, action: ActionsTypes): ThemeStateType => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {...state, currentTheme: action.theme}
    }
    default:
      return state;
  }
};

type ActionsTypes = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: string) => ({
  type: "CHANGE_THEME",
  theme
} as const)