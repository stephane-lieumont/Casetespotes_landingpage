<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,500;0,700;0,900;1,100;1,200;1,500;1,700;1,900&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="./styles/style.css"  rel="stylesheet">  
  <title>CaseTonPote - service de rencontres</title>
</head>
<body class="px-5r">
  <?php require './layout/header.php'; ?>
    <div class="body-content row container-lg justify-content-center align-items-start mx-auto">
      <main class="col-12 mb-5 row">
        <section class="col-lg-7 col-md-12">
          <h2>Nous contacter</h2>
          <ul>
            <li><h4 class="row align-items-center"><span class="material-icons col-auto">local_phone</span><span class="col-auto">06.37.35.35.79</span></h4></li>
            <li><h4 class="row align-items-center"><span class="material-icons col-auto">mail</span><span class="col-auto">contact@casetonpote.com</span></h4></li>
          </ul>
          <h3>Ou sommes nous ?</h3>
          <div class="gmap mb-5">
            <iframe width="600" height="240" src="https://maps.google.fr/maps?width=700&amp;height=440&amp;hl=fr&amp;q=1%20Rue%20Dalayrac%2C%2031000%20Toulouse+(Titre)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>          
        </section>
        <div class="app-mobile-img col-lg-auto col-md-12 mx-auto mt-3 text-center">
          <img src="./images/app-casetonpote-mobile.png" alt="CaseTonPote - application mobile" />
        </div>
      </main>
      <?php require './layout/footer.php'; ?>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>