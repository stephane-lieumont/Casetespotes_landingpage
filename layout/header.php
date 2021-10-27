<?php $activePage = basename($_SERVER['PHP_SELF'], ".php"); ?>
<div class="background-circle col-lg-auto col-md-2">
  <img class="img-fluid" src="./images/background-casetonpote-bubble.jpg" alt="background-casetonpote"/>
</div>
<header>
  <div class="container-xl">
    <div class="row justify-content-between align-items-center flex-nowrap">
      <h1 class="col">
        <a href="./index.php" class="logo-img">
          <img src="./images/Logo_case_ton_pote_service_de_rencontre_240-120_light.png" alt="CaseTonPote - l'amité au coeur de l'amour" />
        </a>
      </h1>
      <nav class="col-auto">
        <ol class="row">
          <li class="col-auto">
            <a class="<?php if ($activePage=="" || $activePage=="index") { echo "active"; } ?>" href="./index.php">
              <span class="material-icons col-auto">home</span>Accueil
            </a>
          </li>
          <li class="col-auto">
            <a class="<?php if ($activePage=="" || $activePage=="informations") { echo "active"; } ?>" href="./informations.php">
              <span class="material-icons">help</span>Comment ?
            </a>
          </li>
          <li class="col-auto">
            <a class="<?php if ($activePage=="inscription_evenement") { echo "active"; } ?>" href="./inscription_evenement.php">
              <span class="material-icons col-auto">event</span>Evenement
            </a>
          </li>
          <li class="col-auto">
            <a class="<?php if ($activePage=="contact") { echo "active"; } ?>" href="./contact.php">
              <span class="material-icons col-auto">local_phone</span>Nous contacter
            </a>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</header>