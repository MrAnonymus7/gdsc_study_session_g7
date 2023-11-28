function calc(){
    const mass = prompt("This is body mass intensity calculator.\n please enter your mass: " );
    const height = prompt("please enter your height: " );
    const BMI = mass/(height*height);
    console.log(BMI);
}
calc()