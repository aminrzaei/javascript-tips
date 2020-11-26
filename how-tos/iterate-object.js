// QuerySelector support .forEach by default

const articles = [].slice.call(document.querySelectorAll('article'));

// or

const articles = [...document.querySelectorAll('article')];

// or

const articles = Array.from(document.querySelectorAll('article'));

articles.forEach((a) => {
  a.style.fontFamily = 'Comic Sans MS';
});

const articles = document.querySelectorAll('article');

for (let i = 0; i < articles.length; i++) {
  articles[i].style.fontFamily = 'Comic Sans MS';
}

const articles = document.querySelectorAll('article');

for (let a of articles) {
  a.style.fontFamily = 'Comic Sans MS';
}
