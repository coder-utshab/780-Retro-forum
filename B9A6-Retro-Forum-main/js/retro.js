fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
      .then(response => response.json())
      .then(json => console.log(json))