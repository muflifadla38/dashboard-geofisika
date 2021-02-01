<?php
  include('includes/dbconnect.php');
  session_start();

  if (isset($_POST['login'])) {
    $uname = $_POST['username'];
    $pass = $_POST['password'];

    $warning = '';

    if ($uname != '' && $pass != '') {
      $sql = "SELECT count(*) as cntUser FROM users WHERE username='$uname' AND password='$pass'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_array($result);

      $count = $row['cntUser'];

      if($count > 0){
        $_SESSION['uname'] = $uname;
        $warning='Berhasil Login';
        header('Location: index.html');
      } else{
        $warning='Invalid username and password';
      }

    } else{
        $warning='Username atau password kosong';
    }
  }
?>

<!DOCTYPE html>
<html>
<head>
  <title>Dashboard Geofisika</title>
  <link rel="icon" type="image/png" href="assets/img/maskable-icon-192.png">

  <link rel="stylesheet" href="assets/css/main.css">

  <script src="assets/js/core/jquery.min.js"></script>
  <script src="assets/js/core/bootstrap.min.js"></script>
</head>
<body class="display-flex body-login">
  <?php
    if (isset($warning)) {
  ?>
    <div class="alert alert-dark alert-dismissible fade show" role="alert">
      <strong>Warning!</strong> <?= $warning ?>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    
  <?php }; ?>
  <div class="container" id="container">
    
    <div class="form-container sign-up-container">
      <form class="form-login" action="#" method = "post">
        <h1>Register</h1>
        <p class="p-contact">Hubungi CP</p>
        <a href="tel:+6285255132466" style="margin: 15px 0;">+6285255132466</a>
        <button name="signup">Sign Up</button>
      </form>
    </div>
    
    <div class="form-container sign-in-container">
      <form class="form-login" action="#" method = "post">
        <h1>Sign in</h1>
        <input class="margin-input" name="username" type="username" placeholder="Username" require/>
        <input class="margin-input" name="password" type="password" placeholder="Password" require/>
        <a href="#" style="margin: 15px 0;">Lupa Password?</a>
        <button name="login">Sign In</button>
      </form>
    </div>
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p class="font-14">To keep connected with us please login with your personal info</p>
          <button class="ghost" id="signIn">Sign In</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p class="font-14">Enter your personal details and start journey with us</p>
          <button class="ghost" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  
  <script type="text/javascript" src="assets/js/main.js"></script>
</body>
</html>
  