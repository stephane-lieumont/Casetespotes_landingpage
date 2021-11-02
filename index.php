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
          <div class="row align-items-center">
            <h2 class="col-12 mt-3 mb-3 text-center">Participe au prochain évènement<br /> Case Ton Pote !</h2>
            <p>
              <strong class="primary-color">Case Ton Pote organise</strong> son jeu inédit dont le principe est un <strong class="primary-color">speed dating revisité</strong> ! Notre évènement vous promet un moment fun et de belles rencontres
              le <strong class="primary-color">jeudi 11 novembre prochain à 19h30 au Dooble à Toulouse – 2B Rue du May.</strong>
            </p>
            <p> 
              En quoi consiste notre jeu ? D'un côté un speed-dating entre "Caseurs" / "Caseuses" qui doivent mettre en avant le·la célibataire qu'ils·elles représentent.
              De l'autre, un speed-dating classique entre célibataires.
            </p>
            <p> 
              A l'issue de ces 2 speed-datings, les "Caseurs" / "Caseuses" votent pour les célibataires qui pourraient correspondre à leur meilleur·e ami·e et les célibataires
              votent pour ceux avec qui ça a fait tilt pendant leur échange.
            </p>
            <p>
              Case Ton Pote compare ensuite les résultats des votes de part et d'autre et vérifie s'il y a "match" pour certains célibataires. Et comme on aime gâter notre communauté, 
              <strong class="primary-color">Case Ton Pote réserve une surprise aux célibataires pour lesquels il y aura eu "match" ! Cerise sur le gâteau, notre évènement est gratuit et on vous offre un verre</strong> &#128521;
            </p>
            <p><strong><i>Attention : nombre de place limité : premier·ères arrivé·es, premier·ères servi·es !</i></strong></p>
            <div class="col-12 text-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZWgPOyVK2OpS0G827vPRkNSojKookzntXXPrfNUs3SR3qrw/viewform?usp=sf_link" class="btn btn-primary my-3" role="button">Je remplis le formulaire</a>
            </div>
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