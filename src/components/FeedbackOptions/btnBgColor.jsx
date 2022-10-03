export const btnBgColorFun = option => {
    let btnBgColor = 'blue';
  
    if (option === 'bad') {
      btnBgColor = 'red';
      // console.log(option);
      return btnBgColor;
    } else if (option === 'neutral') {
      btnBgColor = 'yellow';
      // console.log(option);
      return btnBgColor;
    } else if (option === 'good') {
      btnBgColor = 'green';
      // console.log(option);
      return btnBgColor;
    }
  
    return btnBgColor;
  };