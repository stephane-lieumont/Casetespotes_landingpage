<?php $activePage = basename($_SERVER['PHP_SELF'], ".php"); ?>
<footer class="row py-2 px-0 justify-content-end align-self-end align-content-center">
  <nav class="col align-self-center">
    <ol class="row">
      <li class="col-auto ">
        <a class="<?php if ($activePage=="" || $activePage=="informations") { echo "active"; } ?>" href="./informations.php">
          <span class="material-icons">help</span>Qui sommes nous ?
        </a>
      </li>
      <li class="col">
        <a class="<?php if ($activePage=="contact") { echo "active"; } ?>" href="./contact.php">
          <span class="material-icons col-auto">local_phone</span>Nous contacter
        </a>
      </li>
      <li class="col social-nav social-link--instagram">
        <a href="https://www.instagram.com/case_ton_pote">Instagram</a>
      </li>
      <li class="col social-nav social-link--facebook">
        <a href="https://www.facebook.com/CaseTonPote">Facebook</a>
      </li>
    </ol>
  </nav>
  <div class="col align-self-center">
    <p class="text-end">copyright © CaseTonPote 2021</p>
  </div>  
  <div class="col-auto">
    <ul class="row justify-content-start align-items-center">
      <li class="col-auto px-1"><a class="social-link social-link--instagram" href="https://www.instagram.com/case_ton_pote/"></a></li>
      <li class="col-auto px-1"><a class="social-link social-link--facebook" href="https://www.facebook.com/CaseTonPote"></a></li>
    </ul>
  </div>
</footer>
<script type="text/javascript" src="main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>