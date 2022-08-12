const validator = (formType) => {
  //validator function that validates fields before sending requests
  let isValid = true;

  if (formType.otherForm) {
    //otherForm fields: productName, description, imageUrl, price
    if (
      !validateName(formType.productName) ||
      !validateDescription(formType.description) ||
      !validateImageField(formType.imageUrl) ||
      !validatePrice(formType.price)
    ) {
      isValid = false;
    }
  } else if (formType.instrumentForm) {
    if (
      !validateName(formType.productName) ||
      !validateDescription(formType.description) ||
      !validateImageField(formType.imageUrl) ||
      !validatePrice(formType.price)
    ) {
      isValid = false;
    }
  } else if (formType.ampForm) {
    if (
      !validateName(formType.productName) ||
      !validateImageField(formType.imageUrl) ||
      !validatePrice(formType.price) ||
      !validateWattage(formType.wattage)
    ) {
      isValid = false;
    }
  }

  return isValid;
};

//POST request function for creating new entries in the DB
export const createPost = async (e, data, navigation) => {
  e.preventDefault();

  const url = "http://localhost:5000/post";

  const authStatus = JSON.parse(localStorage.getItem("authStatus"));
  const currentUserId = authStatus.id;
  const token = authStatus.token;

  const validate = validator(data.toPost);
  if (!validate) {
    return;
  }

  let objBody = {}; //will be body of request

  //function thatsets body of data based on what form is currently selected
  setObjBody(objBody, data, currentUserId);

  try {
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      body: JSON.stringify(objBody),
    });

    const res = await req.json();
    //console.log(res);

    navigation("/catalog");
  } catch (error) {
    console.log(error);
    navigation("/404");
  }
};

export const getAllByCurrentUser = () => {
  //fetch all entries by currently logged-in user
  const url = "http://localhost:5000/post";

  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;
  const token = JSON.parse(localStorage.getItem("authStatus")).token;

  let userInfoObj = { currentUserId, token };

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "X-Auth-Token": JSON.stringify(userInfoObj),
    },
  }).then((res) => res.json());
};

//DELETE request for deleting an entry from the DB
export const deleteOffer = (currentOffer, navigator) => {
  const url = "http://localhost:5000/post/delete";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentOffer),
  }).catch((error) => {
    console.log(error);
    navigator("/404");
  });

  navigator("/catalog"); //return to catalog after deletion
};

//---field validation functions ------------------------------------

function validateName(str) {
  if (str.length < 5 && str.length > 0) {
    return false;
  } else if (str.length == 0) {
    return false;
  } else {
    return true;
  }
}

function validateDescription(str) {
  if (str.length < 8 && str.length > 0) {
    return false;
  } else {
    return true;
  }
}

function validatePrice(num) {
  num = Number(num);
  if (num < 0) {
    return false;
  } else {
    return true;
  }
}

function validateImageField(str) {
  if (str.length > 0) {
    if (str.startsWith("http")) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function validateWattage(num) {
  num = Number(num);
  if (num < 0) {
    return false;
  } else {
    return true;
  }
}

function setObjBody(objBody, data, currentUserId) {
  objBody.ownerId = currentUserId;

  if (data.toPost.edit) {
    objBody.edit = true;
    objBody.currentOffer = data.toPost.currentOffer;
  }

  if (data.toPost.instrumentForm) {
    objBody.type = "Instrument";
    objBody.instrumentForm = true;
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.condition = data.toPost.condition;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
  } else if (data.toPost.ampForm) {
    objBody.type = "Amplifier";
    objBody.ampForm = true;
    objBody.productName = data.toPost.productName;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
    objBody.wattage = data.toPost.wattage;
    objBody.valves = data.toPost.valves;
    objBody.condition = data.toPost.condition;
  } else {
    objBody.type = "Other";
    objBody.otherForm = true;
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
  }
}

export function getCurrentToken() {
  return JSON.parse(localStorage.getItem("authStatus")).token;
}
