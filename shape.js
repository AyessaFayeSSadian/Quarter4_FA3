function number() {
  let num;
  while (true) {
    num = prompt("Please enter a number:");
    if (isNaN(num)) {
      alert("Please enter a number");
    } else {
      break;
    }
  }

  num = parseInt(num); 

  document.write("Number inputted: " + num + "<br><br>"); 

  if (num % 2 === 0) {
    
    for (let i = num; i >= 1; i--) {
      for (let j = 0; j < i; j++) {
        document.write(i + " ");
      }
      document.write("<br>");
    }
  } else {
    
    for (let i = num; i >= 1; i--) {
      for (let j = 0; j < num; j++) {
        document.write(i + " ");
      }
      document.write("<br>");
    }
  }
}

number();