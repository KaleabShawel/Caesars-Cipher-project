const text = document.querySelector('#fn');
const button = document.querySelector('#btn_convert');
const display = document.querySelector('#display');

button.addEventListener('click', (e) => {

  e.target.focus(); // set focus on the clicked element

  // Get the text value directly from the element
  let txt = text.value;

  // Check for empty input
  if (txt === '') {
    alert("Please enter a word or sentence");
    return;
  }

  const convertedText = rot13(txt);
  display.innerHTML = `Result : ${convertedText}`;
         console.log(convertedText);
  
  setTimeout(() => {
      display.innerHTML= ``;
  }, 10000)


});

const rot13 = (text) => {

  if (text === '') { // Check for empty input again (redundant with click event handler)
    alert("Please enter a word or sentence");
    return;
  }

  let regexReplace = /[A-Za-z]/g;
  let cipher = text.replace(regexReplace, (letter) => {

    let ascii = letter.charCodeAt(0);

    if ((ascii >= 65 && ascii < 78) || (ascii >= 97 && ascii < 110)) {
      return String.fromCharCode(ascii + 13);
    } else if ((ascii >= 78 && ascii <= 90) || (ascii >= 110 && ascii <= 122)) {
      return String.fromCharCode(ascii - 13);
    }

  });

  return cipher;

};



