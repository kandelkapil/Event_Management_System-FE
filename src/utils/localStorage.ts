// Utility function to set a key in local storage
export const setLocalStorageKey = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Utility function to get a key from local storage
export const getLocalStorageKey = (key: string) => {
  const storedValue = localStorage.getItem(key);

  return storedValue ? JSON.parse(storedValue) : null;
};

// Utility function to remove key from local storage
export const removeItemFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
