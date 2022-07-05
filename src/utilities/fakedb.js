const getUser = () => {
    const existingUser = sessionStorage.getItem('userkey');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userkey', newUser)
        return newUser;
    }
}


const getDatakey = () => {
    const userkey = getUser();
    return `emaJohn/carts/${userkey}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const datakey = getDatakey();
    const data = localStorage.getItem(datakey) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (key, count) => {
    const currentCart = getDatabaseCart();
    currentCart[key] = count;
    localStorage.setItem(getDatakey(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = key => {
    const currentCart = getDatabaseCart();
    delete currentCart[key];
    localStorage.setItem(getDatakey(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDatakey());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

const sessionStorage = window.sessionStorage || (() => {
  let store = {}
  return {
    getItem(key) {
      return store[key]
    },
    setItem(key, value) {
      store[key] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill