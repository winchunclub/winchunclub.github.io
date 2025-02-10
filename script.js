// Animazione click per i link normali
document.querySelectorAll('.link-card:not(.main-link)').forEach(link => {
    link.addEventListener('click', function(e) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Gestione di tutti i menu a tendina
document.querySelectorAll('.link-group').forEach(group => {
    const mainLink = group.querySelector('.main-link');
    const subLinks = group.querySelector('.sub-links');
    const arrow = mainLink.querySelector('.arrow');
    
    mainLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Chiudi tutti gli altri submenu
        document.querySelectorAll('.sub-links').forEach(menu => {
            if (menu !== subLinks) {
                menu.style.display = 'none';
                menu.parentElement.querySelector('.arrow').style.transform = 'rotate(0)';
            }
        });

        // Toggle del submenu corrente
        if (subLinks.style.display === 'none' || !subLinks.style.display) {
            subLinks.style.display = 'flex';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            subLinks.style.display = 'none';
            arrow.style.transform = 'rotate(0)';
        }
    });
});

// Gestione dei click sui sottomenu di "Wing Chun"
document.querySelector('.link-group:nth-child(1) .sub-link:nth-child(1)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('legendModal').style.display = 'block';
});

document.querySelector('.link-group:nth-child(1) .sub-link:nth-child(2)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('whatIsModal').style.display = 'block';
});

document.querySelector('.link-group:nth-child(1) .sub-link:nth-child(3)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('ipManModal').style.display = 'block';
});

// Gestione dei click sui sottomenu di "Chi Siamo"
document.querySelector('.link-group:nth-child(2) .sub-link:nth-child(1)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('founderModal').style.display = 'block';
});

document.querySelector('.link-group:nth-child(2) .sub-link:nth-child(2)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('programModal').style.display = 'block';
});

document.querySelector('.link-group:nth-child(2) .sub-link:nth-child(3)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('schoolHistoryModal').style.display = 'block';
});

// Gestione dei click sui sottomenu di "Gli Istruttori"
document.querySelector('.link-group:nth-child(3) .sub-link:nth-child(1)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cheliModal').style.display = 'block';
});

document.querySelector('.link-group:nth-child(3) .sub-link:nth-child(2)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('quaratesiModal').style.display = 'block';
});

document.querySelector('.link-group:nth-child(3) .sub-link:nth-child(3)').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('orlandiModal').style.display = 'block';
});

// Gestione della chiusura dei modali
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// Gestione dei link principali
const links = document.querySelectorAll('.links > a.link-card');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent.trim() === 'Dove Trovarci') {
            document.getElementById('locationModal').style.display = 'block';
        } else if (this.textContent.trim() === 'Social') {
            document.getElementById('socialModal').style.display = 'block';
        } else if (this.textContent.trim() === 'Contatti') {
            document.getElementById('contactsModal').style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Aggiungi un listener per il bottone "Eventi"
    const eventButton = document.querySelector('.event-button');
    eventButton.addEventListener('click', function() {
        // Mostra il modale dell'elenco degli eventi
        document.getElementById('eventsListModal').style.display = 'block';
    });

    // Gestione della chiusura del modale dell'elenco degli eventi
    const closeEventsListModal = document.querySelector('#eventsListModal .close');
    closeEventsListModal.addEventListener('click', function() {
        document.getElementById('eventsListModal').style.display = 'none';
    });

    // Gestione della chiusura del modale dei dettagli dell'evento
    const closeEventDetailModal = document.querySelector('#eventDetailModal .close');
    closeEventDetailModal.addEventListener('click', function() {
        document.getElementById('eventDetailModal').style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Aggiungi listener per i link degli eventi
    document.querySelectorAll('.event-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const eventId = this.getAttribute('data-event');
            showEventDetails(eventId);
        });
    });

    // Funzione per mostrare i dettagli dell'evento
    function showEventDetails(eventId) {
        const eventDetailModal = document.getElementById('eventDetailModal');
        const eventTitle = document.getElementById('eventTitle');
        const eventDescription = document.getElementById('eventDescription');

        if (eventId === 'seminario1') {
            eventTitle.textContent = 'Seminario di Wing Chun sulla violenza sulle donne - 9 marzo 2025';
            eventDescription.innerHTML = `
                <img src="images/seminariodonne.jpg" alt="Seminario sulla violenza sulle donne" style="width:100%; height:auto;">
                <p>Questo evento è un'opportunità fantastica per imparare tecniche pratiche e utili per la tua sicurezza personale. Durante il seminario, avrai la possibilità di apprendere come difenderti da situazioni di pericolo, inclusi attacchi da terra e varie prese al collo e strangolamenti.</p>
                <p>Non solo potrai acquisire competenze preziose, ma al termine del seminario riceverai anche un attestato di partecipazione dalla scuola Wing Chun Club, che è un ottimo modo per certificare le tue nuove abilità! È un'occasione imperdibile per sentirti più sicuro e preparato. Non vediamo l'ora di vederti lì!</p>
            `;
        } else if (eventId === 'seminario2') {
            eventTitle.textContent = 'Seminario Uso del Coltello';
            eventDescription.innerHTML = `
                <p>Descrizione per il seminario sull'uso del coltello.</p>
            `;
        }

        // Mostra il modale dei dettagli dell'evento
        eventDetailModal.style.display = 'block';
    }
}); 