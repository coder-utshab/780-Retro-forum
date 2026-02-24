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
      <figure>
         <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa" />
      </figure>
      <div class="card-body">
         <h2 class="card-title">Shoes!</h2>
         <p>Example Card</p>
         <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
         </div>
      </div>
   `;

   // append card inside banner-section
   bannerSection.appendChild(card);
}

loadData();