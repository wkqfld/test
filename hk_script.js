//const btn1 = document.getElementById('one');
// const btn2 = document.getElementById("two")
// const btn3 = document.getElementById("three")

// const handleClick = function(event_object){
//     console.log(event_object.target)
// }

//btn1.addEventListener('click', change);
// btn2.addEventListener('click', handleClick)
// btn3.addEventListener('click', handleClick)

document.getElementById('one').addEventListener('click', (event_obj) => {
  //event_obj.target.style.color = "red"

  const me = (document.getElementById('one').style.color = 'red');

  const dds = document.getElementsByClassName('dd');
  for (let i = 0; i < dds.length; i++) {
    const dd = dds[i];
    dd.innerHTML = "<p>i'm in p tag</p>";
  }
});

let x = 3;
let y = 5;

x = y;

const handleClick = function () {
  console.log('I love you');
};

function funcName(param) {
  //do something
}

let xasdf = funcName;

funcB(funcName);

{
}
