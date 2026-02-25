const retroForm = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();

    displayRetro(data.posts); 
}

const displayRetro = (posts) => {
//step number 1
const retroContainer = document.getElementById('retro-container');


    posts.forEach(post => {
        console.log(post);
        //create a div step number 2
        const retroCard = document.createElement('div');
      //   retroCard.classList = `ml-0 shadow-lg p-5 w-96 `;
     retroCard.className = "ml-0 shadow-lg p-8 w-[600px] bg-gray-200 space-y-8 rounded-2xl";

      //   step  number 3 
       retroCard.innerHTML = `
       <figure><img src=" ${posts.image}" alt="${posts.author}" /></figure>
   <div class="card-body">
    <h2 class="card-title">Card title!</h2>
    <p>${post.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
`;

//step number 4
retroContainer.appendChild(retroCard);

    })

}

retroForm();



