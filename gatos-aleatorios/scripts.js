const GATO_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');

async function getCats() {
  try {
    const data = await fetch(GATO_URL);
    const info = await data.json();

    return info[0].url;


  } catch (e) {
    console.log(e.message);
  }
}

async function loadImg() {
  const catImg = document.getElementById('cat');
  catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();