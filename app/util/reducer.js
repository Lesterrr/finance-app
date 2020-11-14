// Transform Data to reduced form.
export const reducer = (array) => {
  let temp = [];
  // Reduced array -> [{x: "transpo", y: 22}, {x: "savings", y: 2}]
  array.forEach((item) => {
    let index = temp.findIndex((element) => {
      if (element[Object.keys(element)[0]] === item[Object.keys(item)[0]])
        return true;
    });
    if (index === -1) {
      temp.push(item);
    } else {
      temp[index] = {
        [Object.keys(item)[0]]: item[Object.keys(item)[0]],
        [Object.keys(item)[1]]: item[Object.keys(item)[1]] + temp[index].y,
      };
    }
  });
  return temp;
};
