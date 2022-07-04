const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser; 
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataid = () => {
    const userId = getUser();
    return `emaJohn/carts/${userId}`
}

// push to local storage: a temporary place for database
const getDatabaseCart = () => {
    const dataid = getDataid();
    const data = localStorage.getItem(dataid) || "{}";
    return JSON.parse(data);
}

const addToDatabaseCart = (id, count) => {
    const currentCart = getDatabaseCart();
    currentCart[id] = count;
    localStorage.setItem(getDataid(), JSON.stringify(currentCart));
}

const removeFromDatabaseCart = id => {
    const currentCart = getDatabaseCart();
    delete currentCart[id];
    localStorage.setItem(getDataid(), JSON.stringify(currentCart));
}

const processOrder = (cart) => {
    localStorage.removeItem(getDataid());
}


export { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
  let store = {}
  return {
    getItem(id) {
      return store[id]
    },
    setItem(id, value) {
      store[id] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()

const sessionStorage = window.sessionStorage || (() => {
  let store = {}
  return {
    getItem(id) {
      return store[id]
    },
    setItem(id, value) {
      store[id] = value.toString()
    },
    clear() {
      store = {}
    }
  };
})()
// end of poly fill