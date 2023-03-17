// var themeD = [];

// function mudaTema(themeD){
//   let buttonText = document.getElementById("mode");

//   if (themeD[0] == true) {
//     buttonText.innerHTML = 'Dark Mode';
//     document.body.classList.toggle("dark"); 
//     console.log(' true para theme dark false ' + themeD);
//     themeD[0] = false;
//   }else{
//     buttonText.innerHTML = 'Light Mode';
//     document.body.classList.toggle("dark");
//     console.log(' emptty para theme dark true ' + themeD);
//     themeD[0] = true;
//     }
//     console.log(themeD)
//     return themeD
//   }

 

function mudaTema(){
  document.body.classList.toggle("dark") 
  let buttonText = document.getElementById("mode");
  (buttonText.textContent == 'Dark Mode')? buttonText.innerHTML = 'Light Mode':
  buttonText.innerHTML = 'Dark Mode';
}