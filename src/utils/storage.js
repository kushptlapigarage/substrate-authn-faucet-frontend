export const addToStorage = async (storage, options) => storage.setItem(options.name, JSON.stringify(options.data));
export const readFromStorage = (storage, field) => storage.getItem(field);
