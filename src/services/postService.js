const validator = (formType) => {
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

  const validate = validator(data.toPost);
  if (!validate) {
    return;
  }

  let objBody = {}; //will be body of request
  setObjBody(objBody, data); //sets body of data based on what form is currently selected


  // console.log(JSON.stringify(objBody));

  // try {
  //   const req = await fetch(url, {
  //     method: "POST",
  //     headers: {},
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
};

//TODO, create function to fetch current user's ID
//TODO dont send request if any of the fields are invalid

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

function setObjBody(objBody, data) {
  if (data.toPost.instrumentForm) {
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.condition = data.toPost.condition;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
  } else if (data.toPost.ampForm) {
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
    objBody.wattage = data.toPost.wattage;
  } else {
    objBody.productName = data.toPost.productName;
    objBody.description = data.toPost.description;
    objBody.imageUrl = data.toPost.imageUrl;
    objBody.price = data.toPost.price;
  }
}
