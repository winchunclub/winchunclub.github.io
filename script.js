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