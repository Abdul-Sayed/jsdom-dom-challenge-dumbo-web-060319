

document.addEventListener("DOMContentLoaded", function () {

  const counter = document.querySelector('#counter')
  const plusButton = document.querySelector('#plus')
  const minusButton = document.querySelector('#minus')
  const likeButton = document.querySelector('#heart')
  const likesList = document.querySelector('.likes')
  const pauseButton = document.querySelector('#pause')
  const commentList = document.querySelector('#list');
  const form = document.querySelector('#comment-form');
  const input = document.querySelector('#comment-form input');
  const inputButton = document.querySelector('#comment-form button#submit');


  // As a user, I should see the timer increment every second once the page has loaded.

  function increment() {
    counter.textContent = (parseInt(counter.textContent) + 1).toString();
  }

  let timer = setInterval(increment, 1000)



  // As a user, I can manually increment and decrement the counter as I like.

  minusButton.addEventListener('click', function (e) {
    e.preventDefault();
    counter.textContent = (parseInt(counter.textContent) - 1).toString();
  })

  plusButton.addEventListener('click', function (e) {
    e.preventDefault();
    counter.textContent = (parseInt(counter.textContent) + 1).toString();
  })

  // As a user, I can like an individual number of the counter.I should see the appropriate number of likes associated with that particular number.

  let likesArr = [];

  function likesCount(likesArr) {
    let likeCounts = {};
    for (let i = 0; i < likesArr.length; i++) {
      likeCounts[likesArr[i]] = 1 + (likeCounts[likesArr[i]] || 0);
    }
    return likeCounts
  }

  likeButton.addEventListener('click', function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    let currentNumber = counter.textContent;
    likesArr.push(parseInt(currentNumber));
    li.innerHTML = `<p>You liked ${currentNumber}, ${likesCount(likesArr)[currentNumber]} times</p>`

    likesList.querySelectorAll('li').forEach(function (li) {

      if (li.innerHTML == `<p>You liked ${currentNumber}, ${likesCount(likesArr)[currentNumber] - 1} times</p>`) {
        li.remove();
        li.innerHTML = `<p>You liked ${currentNumber}, ${likesCount(likesArr)[currentNumber]} times</p>`
      }

    });

    likesList.append(li);
  })



  // As a user, I can pause the game, which should disable all buttons except the pause button.The pause button should then show the text "resume."

  pauseButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(timer)
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.textContent = "resume";
  })


  // As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

  inputButton.addEventListener('click', function (e) {
    e.preventDefault();
    const comment = document.createElement('p')
    comment.innerHTML = `<p>${input.value}</p>`
    commentList.append(comment);
    form.reset();
  })

})



