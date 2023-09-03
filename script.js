document.addEventListener("DOMContentLoaded", function () {
    const quoteText = document.getElementById("quote-text");
    const newQuoteButton = document.getElementById("new-quote");

    // Fonction pour obtenir une citation aléatoire
    function getRandomQuote() {
        // Remplacez "URL_DE_L_API_DE_CITATIONS" par l'URL réelle de l'API Kaamelott
        fetch('http://localhost/api-kaamelott-master/api_proxy.php') // Utilisez le chemin correct vers votre script PHP
             .then(response => response.json())
             .then(data => {
             // Affichez la citation dans votre page
             quoteText.textContent = data.citation.citation;
             })
    }

    // Écoutez le clic sur le bouton "Nouvelle citation"
    newQuoteButton.addEventListener("click", getRandomQuote);

    // Obtenez une citation aléatoire au chargement de la page
    getRandomQuote();

    //-----------------------------------------------------
    // Écoutez les clics sur les boutons
    document.getElementById("highlight-text").addEventListener("click", function () {
    // Ajoutez une classe CSS pour la mise en évidence
      quoteText.classList.add("highlighted");
    });
  
    document.getElementById("add-emoji").addEventListener("click", function () {
    // Ajoutez un emoji à la citation
      quoteText.textContent += " 😄";
    });
   // systeme de notation 

   // Écoutez les clics sur les étoiles pour la notation
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
      star.addEventListener("click", function () {
      // Enregistrez la note dans la base de données
        const rating = index + 1;
    // Mettez à jour l'affichage pour refléter la note moyenne
      });

      
});

});
