<?php
const MAIL_DESTINATAIRE = 'contact@casetespotes.com';

session_start();
sendMail();

function Prepare_mail($firstname, $lastname, $email, $sujet, $message){
    $mess = get_email($firstname, $lastname, $email, $sujet, $message);
    $headers_mail  = 'MIME-Version: 1.0'                           ."\r\n";
    $headers_mail .= 'Content-type: text/html; charset=utf-8'      ."\r\n";
    $headers_mail .= 'From:contact@castespotes.com';
    // Envoi du mail
    try {
      mail(MAIL_DESTINATAIRE, 'Nouveau message de '.$firstname.' '.$lastname, $mess, $headers_mail);
      return true;
    } catch (Exception $e) {
      return false;
    }
}

function get_email($firstname, $lastname, $email, $sujet, $message){
  ob_start();
  include "_mail_contact.php";
  return ob_get_clean();
}

function isAjax(){
	return !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}

function sendMail() { 
  if(isAjax()){
    header('Content-Type: application/json');  
    $success = Prepare_mail($_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['subject'], nl2br($_POST['message']));
    if ($success) {
      $data = 'send';
    } else {
      $data = 'error';
    }
    echo json_encode([
      'success' => $data
    ]);
    die();
  }
  
  $success = Prepare_mail($_POST['firstname'], $_POST['lastname'], $_POST['email'], $_POST['subject'], nl2br($_POST['message']));
  if ($success) {
    $_SESSION['success'] = 'send';
  } else {
    $_SESSION['success'] = 'error';
  }  

  header('location: index.php#contact__form');
}	

?>