<?php
// Inclure le fichier de configuration de la base de données
include 'config.template.php';

// Définir les en-têtes CORS pour permettre les requêtes depuis n'importe quelle origine
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Votre script PHP peut maintenant effectuer une requête à l'API Kaamelott
// Par exemple, pour obtenir une citation aléatoire
$url = 'https://kaamelott.chaudie.re/api/random';
$response = file_get_contents($url);

// Vous pouvez traiter les données si nécessaire
$data = json_decode($response, true);

// Envoyer la réponse JSON à votre page web
echo json_encode($data);
?>
