import instance from ".";
import jwtDecode from "jwt-decode";
const login = async (userInfo) => {
  try {
    const { data } = await instance.post("/auth/login", userInfo);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);

    const { data } = await instance.post("/auth/register", formData);
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const me = async () => {
  try {
    const { data } = await instance.get("/auth/me");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async () => {
  try {
    const { data } = await instance.get("/auth/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const storeToken = () => {
  const token = localStorage.getItem("token");
  console.log(`token value is ${token}`);
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    console.log(`current time value is ${currentTime}`);
    console.log(`decode exp time is ${decode.exp}`);
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};
const logout = () => {
  localStorage.removeItem("token");
};
export { login, register, me, getAllUsers, storeToken, logout };
