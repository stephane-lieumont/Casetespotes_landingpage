<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,500;0,700;0,900;1,100;1,200;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="./styles/style.css"  rel="stylesheet">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CaseTonPote - service de rencontres</title>
</head>
<body class="px-5r">
  <?php require './layout/header.php'; ?>
    <div class="body-content row container-lg justify-content-center align-items-start mx-auto">
      <main class="col-12 mb-5 row">
        <section class="col-lg-7 col-md-12">
          <h2>Notre Appli mobile arrive bientôt !</h2>
          <p class="pe-5">
            Le principe ? Mettre en relation les meilleur·es ami·es de célibataires, appelé·es "Caseurs" et "Caseuses", pour qu'ils·elles les aident dans leur quête de l'amour.
            Accompagné·es par notre team, les "Caseurs" et "Caseuses" s'occupent de tout.<br />
          </p>
          <div class="col-12">
              <a href="./informations.php" class="btn btn-primary my-3" role="button">En savoir plus</a>
          </div>
          <div class="row align-items-center">
            <h3 class="col-12 mt-3 mb-3">Participe au prochain évènement Case Ton Pote !</h3>
            <p>
            En attendant l'arrivée de notre appli, nous organisons un jeu le <strong>jeudi 11 novembre prochain</strong> à Toulouse, dont le principe est un speed dating revisité !
            </p>
            <div class="col-12">
              <a href="./inscription_evenement.php" class="btn btn-primary my-3" role="button">Je participe au jeu Case Ton Pote</a>
            </div>
            <h3 class="col-12 mt-3 mb-3">Suis-nous</h3>
            <ul class="row justify-content-start">
              <li class="col-auto pe-1"><a href="https://www.instagram.com/case_ton_pote/"><img height="35" src="./images/follow-instagram.jpg" alt="Google Play" /></a></li>
              <li class="col-auto pe-1"><a href="https://www.facebook.com/CaseTonPote"><img height="35" src="./images/follow-facebook.jpg" alt="Google Play" /></a></li>
            </ul>
          </div>          
        </section>
        <div class="app-mobile-img col-lg-auto col-md-12 mx-auto mt-3 text-center">
          <img width="315" src="./images/app-casetonpote-mobile.png" alt="CaseTonPote - application mobile" />
        </div>
      </main>
      <?php require './layout/footer.php'; ?>
    </div>
</body>
</html>