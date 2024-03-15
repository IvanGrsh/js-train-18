function getUserData() {
  try {
    const a = 10;

    a = 5;
    // console.log("i");

    //Робить запит до бази данних
  } catch (err) {
    //err - помилка про теб що дані з сервера не можуть бути отриманні
    // console.log(err);
    throw new Error(`Неможливо отримати данні користувача ${userId} `, {
      cause: err,
    });
    // console.log(newError);
  }
  // finally {
  //   console.log("2");
  // }
}
// getUserData(10123);

function updateUserData(id) {
  try {
    const data = getUserData(id);
    data.name = "ivan";
    //....
  } catch (err) {
    const newError = new Error(`Неможливо оновити данні користувача ${id} `, {
      cause: err,
    });
    console.log(newError.toString());
  }
}
updateUserData(31234);
// const ERROR_ID_List = new Map([`NOT_NUMBER`, 10]);

const ERROR_ID_List = {
  NOT_NUMBER: 1,
};

function sumNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    const error = new TypeError("Аргументи не є числами");
    error.name = ERROR_ID_List.NOT_NUMBER;
    throw error;
  }
  return a + b;
}

try {
  sumNum(10, "abc");
} catch (err) {
  if (err.name === ERROR_ID_List.NOT_NUMBER) {
    sumNum(10, 0);
  }
  //   console.log(err.name);
} finally {
}
