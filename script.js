document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialisation de la carte (Leaflet)
    // Coordonnées centrées sur une ville française (ex: Lyon/Générique)
    const map = L.map('map').setView([46.603354, 1.888334], 6); // Centre de la France

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Ajout de marqueurs fictifs pour la démo
    const projects = [
        { lat: 48.8566, lng: 2.3522, title: "Jardin Partagé" },
        { lat: 45.7640, lng: 4.8357, title: "Café Associatif" },
        { lat: 43.6047, lng: 1.4442, title: "Rénovation Épicerie" }
    ];

    projects.forEach(project => {
        L.marker([project.lat, project.lng])
            .addTo(map)
            .bindPopup(`<b>${project.title}</b><br>Projet financé.`);
    });

    // 2. Gestion des filtres
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Gestion de la classe active
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Petite animation d'apparition
                    card.style.opacity = '0';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Gestion du formulaire (Simulation)
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Merci ! Votre signalement a bien été enregistré sur le tableau de bord local.");
        form.reset();
    });
    
});