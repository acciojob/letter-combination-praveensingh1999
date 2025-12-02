function letterCombinations(input_digit) {
  if (!input_digit || input_digit.length === 0) return [];

  const map = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  let result = [""];

  for (let digit of input_digit) {
    const letters = map[digit];
    const temp = [];

    for (let combo of result) {
      for (let ch of letters) {
        temp.push(combo + ch);
      }
    }

    result = temp;
  }

  return result.sort();
}

module.exports = letterCombinations;
