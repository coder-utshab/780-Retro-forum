const loadData = async () => {
   const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
   const data = await res.json();
   searchPost(data);
}

const bannerSection = document.getElementById('banner-section');

const searchPost = (data) => {
   console.log(data);

   // create a div
   const card = document.createElement('div');
   card.classList = "card w-96 bg-base-100 shadow-xl image-full";

   card.innerHTML = `
     
   `;

   // append card inside banner-section
   bannerSection.appendChild(card);
}

loadData();