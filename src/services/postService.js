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
export const createPost = async (e, data) => {
  e.preventDefault();

  const url = "http://localhost:5000/post";

  const currentUserId = localStorage.getItem("id");
  const token = getCurrentToken();

  const validate = validator(data.toPost);
  if (!validate) {
    return;
  }

  let objBody = {}; //will be body of request
  setObjBody(objBody, data, currentUserId); //sets body of data based on what form is currently selected

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
    // console.log(res);
  } catch (error) {
    console.log(error);
  }
};

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
  if (data.toPost.instrumentForm) {
    objBody.instrumentForm = true;
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.condition = data.toPost.condition;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
  } else if (data.toPost.ampForm) {
    objBody.ampForm = true;
    objBody.productName = data.toPost.productName;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
    objBody.wattage = data.toPost.wattage;
    objBody.valves = data.toPost.valves;
    objBody.condition = data.toPost.condition;
  } else {
    objBody.otherForm = true;
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
  }
}

function getCurrentToken() {
  return document.cookie.split("token=")[1];
}
