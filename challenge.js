const counterBox = document.getElementById('counter')
const commentBox = document.getElementById('comment-form')

const decrement = document.getElementById('-').addEventListener("click", ()=> decrementFunction())
const increment = document.getElementById('+').addEventListener("click", ()=> incrementFunction())
const heartButt = document.getElementById('<3').addEventListener("click", ()=> heartFunction())
const comment = document.getElementById('submit').addEventListener("click", ()=>submitComment())
const commentId = document.getElementById('create-form')



const pause = document.getElementById('pause').addEventListener("click", ()=> pauseFunction())

counter()




    function counter() {
       var i = 0;
       // This block will be executed 100 times.
       var interval = setInterval(function(){
           if (i == 100) clearInterval(this);
           counterBox.innerHTML =  i++

           //debugger
       }, 1000);
    } // End


function decrementFunction(){

  i = parseInt(counterBox.innerText)
  // i = i - 1
  counterBox.innerText = --i
  //debugger
}

function incrementFunction(){
  i = parseInt(counterBox.innerText)
  counterBox.innerText = ++i
}

let pTag
let likeTable
let likeObject = {}
let userInput
function heartFunction(){
 // debugger
  i = parseInt(counterBox.innerText)
  if(likeObject[i]){
    likeObject[i] += 1
  } else {
    likeObject[i] = 1
  }
  likeTable = document.getElementsByClassName('likes')[0]
  pTag = document.createElement('li')

  pTag.innerText = "Number " + i + " has been clicked " + likeObject[i] + " times."
  likeTable.appendChild(pTag)
  //debugger

  // i = parseInt(counterBox.innerText)
  // li.innterText = i
  // likeTable.appendChild = innerText.i

}


function submitComment(){

  event.preventDefault();
  //debugger
  userInput = document.querySelector('#create-form').value
  pTag = document.createElement('p')
  pTag.innerText = userInput
  commentBox.appendChild(pTag)
  //event.target.reset()
}


function pauseFunction(){

  clearInterval(1)
}
