words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// newWords = words.filter(element => element.length > 6);
function myFilter(origin, callback) {
  var result = [];
  for (var i = 0; i < origin.length; i++) {
    var current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }

  return result;
}

newWords = myFilter(words, (element) => element.length > 6);
console.log(newWords);
