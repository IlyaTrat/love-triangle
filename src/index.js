/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for (let index = 0; index < preferences.length; index++) {
    let bIndex = preferences[index] - 1;
    let cIndex = preferences[bIndex] - 1;
    let aIndex = preferences[cIndex] - 1;
    if(aIndex == index && !(bIndex == cIndex || bIndex == aIndex)) {
      count ++;
    }
  }
  return count / 3;
};