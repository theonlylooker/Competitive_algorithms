const roman = (numero) => {
  const elements = ["I", "V", "X", "L", "C", "D", "M"];
  let respuesta = 0;
  try {
    if (numero.length >= 16) {
      throw "Element length is greater than 16";
    }
    for (var i = 0; i < numero.length; i++) {
      if (!elements.includes(numero[i])) {
        throw "One of the characters is not roman";
      }
      switch (numero[i]) {
        case "I":
          if (i + 1 <= numero.length) {
            switch (numero[i + 1]) {
              case "V":
                respuesta += 4;
                i++;
                break;
              case "X":
                respuesta += 9;
                i++;
                break;
              default:
                respuesta += 1;
                break;
            }
          } else {
            respuesta += 1;
          }
          break;
        case "X":
          if (i + 1 <= numero.length) {
            switch (numero[i + 1]) {
              case "L":
                respuesta += 40;
                i++;
                break;
              case "C":
                respuesta += 90;
                i++;
                break;
              default:
                respuesta += 10;
                break;
            }
          } else {
            respuesta += 10;
          }
          break;
        case "C":
          if (i + 1 <= numero.length) {
            switch (numero[i + 1]) {
              case "D":
                respuesta += 400;
                i++;
                break;
              case "M":
                respuesta += 900;
                i++;
                break;
              default:
                respuesta += 100;
                break;
            }
          } else {
            respuesta += 100;
          }
          break;
        default:
          switch (numero[i]) {
            case "V":
              respuesta += 5;
              break;
            case "L":
              respuesta += 50;
              break;
            case "D":
              respuesta += 500;
              break;
            case "M":
              respuesta += 1000;
              break;
          }
          break;
      }
    }
    console.log(respuesta);
  } catch (error) {
    console.log(error);
    return -1;
  }
};

const roman2 = (s) => {
  const dict = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let respuesta = 0;
  try {
    if (s.length >= 16) {
      throw "Element size is greater than 15";
    }
    for (let i = 0; i < s.length; i++) {
      if (!dict[s[i]]) {
        throw "Not a roman number";
      }

      dict[s[i]] < dict[s[i + 1]]
        ? (respuesta -= dict[s[i]])
        : (respuesta += dict[s[i]]);
    }
    console.log(respuesta);
  } catch (error) {
    console.log(error);
    return -1;
  }
};

//roman("MCMXCIV");
roman2("MCMXCIV");
