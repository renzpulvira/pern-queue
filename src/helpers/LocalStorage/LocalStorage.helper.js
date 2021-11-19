const initNavbarStorage = () => {
  localStorage.setItem("currPage", 1);
};

const initThemeStorage = () => {
  localStorage.setItem("currTheme", false);
};

export const getCurrPage = () => {
  return localStorage.getItem("currPage");
};

export const getCurrTheme = () => {
  return localStorage.getItem("currTheme");
};

export const setLocalStorage = (key, val) => {
  if (!localStorage.getItem(key)) initNavbarStorage();

  localStorage.setItem(key, val);
};

export const nukePages = () => {
  localStorage.clear();
};
