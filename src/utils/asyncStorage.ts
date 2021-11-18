import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (keyName: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(keyName, jsonValue);
  } catch (e) {
    throw new Error(`Saving item with ${keyName} key`);
  }
};

export const getData = async (keyName: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(keyName);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw new Error(`Error reading item with ${keyName} key`);
  }
};

export const deleteData = async (keyName: string) => {
  try {
    await AsyncStorage.removeItem(keyName);
  } catch (e) {
    throw new Error(`Error deleting item with ${keyName} key`);
  }
};
