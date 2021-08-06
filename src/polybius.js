const polybiusModule = (function () {

 function polybius(input, encode = true) {    
    let polibiusSquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
   if(encode) {
      let inputStringArray = input.split("");
      let replacedInputArray = inputStringArray.map((letter) => {
        let lowerCase = letter.toLowerCase();
        if (lowerCase === "i" || lowerCase === "j") {
          return "(i/j)";
        }
        return lowerCase;
      })
      let xCoordinate = [];
      let yCoordinate = replacedInputArray.map((letter) => {
        for (let i = 0; i < polibiusSquare.length; i++) {
          const row = polibiusSquare[i];
          if (row.find((alpha) => alpha === letter)) {
            xCoordinate.push(i + 1);
            return row.indexOf(letter) + 1;
          }
        }
      });
     
      let result = [];
      for (let i = 0; i < xCoordinate.length; i++) {
        // same as `${yCordinate[index]}${current}`;
        let pair = `${yCoordinate[i]}${xCoordinate[i]}`;
        if (pair === "65") {
          pair = " ";
        }
        result.push(pair)
      }
      return result.join('')
      
    } else {
    let spacesConverted = input.replace(" ", 65);
    if (spacesConverted.length % 2 !== 0) return false;
    let coordinates = spacesConverted.match(/..?/g);
    result = coordinates.map((cordinate) => {
      let rowIndex = cordinate.split("")[1] - 1;
      let columnIndex = cordinate.split("")[0] - 1;
      return polibiusSquare[rowIndex][columnIndex];
    });
    }
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
