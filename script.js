//what do we want:
//if user inputs a key
//output in the first div box the e.key
//output in the second div box the e.keyCode
//output in the third div box the e.code


//method 1
/* 
const ekeyInput = (e) => {   
    const insert = document.getElementById("insert");
    insert.innerHTML = ` <!-- Press and key to get the keycode -->
    <div class="key" id="div1">
      ${e.key === " " ? "Space" : e.key}
      <small>e.key</small>
    </div>

    <div class="key"  id="div2">
    ${e.keyCode}
      <small>e.keyCode</small>
    </div>

    <div class="key"  id="div3">
    ${e.code}
      <small>e.code</small>
    </div>`;

}
window.addEventListener("keydown", ekeyInput);
*/


//Method 2


function onKeyDown(e){
  const parent = document.getElementById("insert");

  const box1 = document.querySelectorAll("div")[1];
  const box2 = document.querySelectorAll("div")[2];
  const box3 = document.querySelectorAll("div")[3];

  const objSmall1 = box1.querySelector("small").innerHTML;
  const objSmall2 = box2.querySelector("small").innerHTML;
  const objSmall3 = box3.querySelector("small").innerHTML;

  const newBox1 = document.createElement("div");
  const newBox2 = document.createElement("div");
  const newBox3 = document.createElement("div");

  newBox1.className = "key";
  newBox2.className = "key";
  newBox3.className = "key";
  
  newBox1.innerHTML = e.key ===" " ? "Space" : e.key;
  newBox2.innerHTML = e.keyCode;
  newBox3.innerHTML = e.code;

  const small1 = document.createElement("small");
  const small2 = document.createElement("small");
  const small3 = document.createElement("small");

  small1.innerHTML = objSmall1;
  small2.innerHTML = objSmall2;
  small3.innerHTML = objSmall3;

  newBox1.appendChild(small1);
  newBox2.appendChild(small2);
  newBox3.appendChild(small3);

  box1.replaceWith(newBox1);
  box2.replaceWith(newBox2);
  box3.replaceWith(newBox3);
}

window.addEventListener("keydown",onKeyDown);

