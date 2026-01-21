// Dados dos jogos com imagens reais
const games = [
    {
        title: "Cyber Warriors",
        genre: "Ação/RPG",
        description: "Entre em um mundo cyberpunk futurista cheio de ação e decisões importantes.",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop"
    },
    {
        title: "Fantasy Quest",
        genre: "RPG/Aventura",
        description: "Explore um vasto mundo de fantasia medieval com dragões e magia.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
    },
    {
        title: "Speed Racing Pro",
        genre: "Corrida",
        description: "Corra em pistas incríveis ao redor do mundo com carros esportivos.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&h=300&fit=crop"
    },
    {
        title: "Space Odyssey",
        genre: "Estratégia/Sci-Fi",
        description: "Construa seu império espacial e explore galáxias distantes.",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&h=300&fit=crop"
    },
    {
        title: "Battle Royale X",
        genre: "FPS/Battle Royale",
        description: "Seja o último sobrevivente nesta intensa batalha em grande escala.",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=300&fit=crop"
    },
    {
        title: "Puzzle Master",
        genre: "Puzzle",
        description: "Desafie sua mente com quebra-cabeças complexos e criativos.",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500&h=300&fit=crop"
    },
    {
        title: "Horror Mansion",
        genre: "Terror/Sobrevivência",
        description: "Sobreviva em uma mansão assombrada cheia de mistérios aterrorizantes.",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&h=300&fit=crop"
    },
    {
        title: "Soccer Champions",
        genre: "Esportes",
        description: "Leve seu time à glória nos campeonatos de futebol mais emocionantes.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop"
    },
    {
        title: "Ninja Shadows",
        genre: "Ação/Aventura",
        description: "Domine as artes ninja e complete missões stealth impossíveis.",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=500&h=300&fit=crop"
    }
];

// Função para renderizar os jogos
function renderGames(gamesToRender = games) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    gamesToRender.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
            </div>
            <div class="game-content">
                <h3 class="game-title">${game.title}</h3>
                <div class="game-genre">${game.genre}</div>
                <p class="game-description">${game.description}</p>
                <div class="game-rating">
                    ⭐ ${game.rating}/5.0
                </div>
            </div>
        `;
        gamesGrid.appendChild(gameCard);
    });
}

// Função de busca
function searchGames() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredGames = games.filter(game => 
        game.title.toLowerCase().includes(searchTerm) ||
        game.genre.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm)
    );
    renderGames(filteredGames);
}

// Permitir busca com Enter
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchGames();
    }
});

// Animar contadores
function animateCounter(id, target) {
    let current = 0;
    const increment = target / 50;
    const element = document.getElementById(id);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 30);
}

// Inicializar página
window.onload = function() {
    renderGames();
    animateCounter('gamesCount', 1243);
    animateCounter('usersCount', 45678);
    animateCounter('reviewsCount', 8912);
};
