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
  <div class="bg-gray-100 p-6 rounded-2xl flex gap-6 items-start">

    <!-- Left Image + Status -->
    <div class="relative">
      <img class="w-20 h-20 rounded-xl object-cover"
           src="${post.image}"
           alt="${post.title}">
           
      <!-- Active Dot -->
      <span class="absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white 
      ${post.isActive ? 'bg-green-500' : 'bg-red-500'}"></span>
    </div>

    <!-- Content -->
    <div class="flex-1">

      <!-- Category + Author -->
      <p class="text-sm text-gray-500 mb-1">
        ${post.category} • Author: ${post.author.name}
      </p>

      <!-- Title -->
      <h2 class="text-lg font-bold mb-2">
        ${post.title}
      </h2>

      <!-- Description -->
      <p class="text-gray-600 text-sm mb-4">
        ${post.description}
      </p>

      <!-- Bottom Info -->
      <div class="flex gap-6 text-sm text-gray-500">
        <span>💬 ${post.comment_count}</span>
        <span>👁 ${post.view_count}</span>
        <span>⏱ ${post.posted_time} min</span>
      </div>

    </div>

  </div>
`;

//step number 4
retroContainer.appendChild(retroCard);

    })

}

retroForm();



