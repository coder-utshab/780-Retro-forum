
const retroForm = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
        const data = await res.json();

        displayRetro(data.posts); 
    } catch (error) {
        console.error("Failed to fetch posts:", error);
    }
}

const displayRetro = (posts) => {
    const retroContainer = document.getElementById('retro-container');

    posts.forEach(post => {
        // Create card container
        const retroCard = document.createElement('div');
        retroCard.className = "flex bg-white shadow-md rounded-lg p-4 w-full max-w-2xl";

        retroCard.innerHTML = `
            <figure class="w-24 h-24 mr-4">
                <img src="${post.image}" alt="Post Image" class="w-full h-full object-cover rounded-full" />
            </figure>
            <div class="flex flex-col">
                <h2 class="text-xl font-bold mb-1">${post.title}</h2>
                <p class="text-gray-700 mb-2">${post.description}</p>
                <div class="flex flex-wrap space-x-2 text-sm text-gray-500 mt-auto">
                    <span>Category: ${post.category}</span>
                    <span>Comments: ${post.comment_count}</span>
                </div>
            </div>
        `;

        retroContainer.appendChild(retroCard);
    });
}

retroForm();

