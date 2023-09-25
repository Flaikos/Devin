// ... (le reste du code reste inchangé)

// Événement au clic sur le bouton "Jouer" (anciennement "Valider")
validerButton.addEventListener("click", () => {
    // Incrémenter le nombre de tentatives
    tentatives++;

    // Récupérer la valeur saisie par le joueur et la convertir en entier
    const valeurSaisie = parseInt(input.value);

    // Vérifier si la valeur saisie est valide
    if (isNaN(valeurSaisie) || valeurSaisie < 1 || valeurSaisie > 100) {
        message.textContent = "Veuillez entrer un nombre entre 1 et 100.";
    } else {
        // Comparer la valeur saisie avec le nombre mystère
        if (valeurSaisie === nombreMystere) {
            // Le joueur a deviné le nombre mystère
            message.style.color = "green";
            message.textContent = "Gagné ! Le nombre mystère était " + nombreMystere;
            validerButton.textContent = "Rejouer ?";
            validerButton.disabled = false;
        } else if (tentatives === 6) {
            // Le joueur a épuisé ses 6 tentatives
            message.style.color = "red";
            message.textContent = "Perdu ! Le nombre mystère était " + nombreMystere;
            validerButton.textContent = "Rejouer ?";
            validerButton.disabled = false;
        } else {
            // Le joueur n'a pas deviné le nombre mystère
            if (valeurSaisie < nombreMystere) {
                message.style.color = "blue";
                message.textContent = "Trop Petit !";
            } else {
                message.style.color = "blue";
                message.textContent = "Trop Grand !";
            }
        }
    }

    // Effacer le champ de saisie
    input.value = "";
});
