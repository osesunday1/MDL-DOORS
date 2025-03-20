<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo isset($title) ? $title : 'My Website'; ?></title>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
  <?php wp_head(); // Required for WordPress, can be left in as you transition ?>
</head>
<body>
  <div class="navbar2">
    <div class="nav-bar">
      <!-- Top Navigation -->
      <nav class="navTop">
        <ul class="upper-menu">
          <li class="menu-top"><a href="#">1-844-MDL-DOOR</a></li>
          <li class="menu-top"><a href="#">Get a Quote</a></li>
          <li class="menu-top"><a href="#">Dealer Login</a></li>
        </ul>
      </nav>
      
      <!-- Main Navigation -->
      <div class="navBottom">
        <div class="nav">
          <ul class="upper-menu">
            <li class="menu-item"><a href="#"><i class="uil uil-home"></i> Home</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-info-circle"></i> About</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-envelope"></i> Contact</a></li>
          </ul>
          <!-- Centered Logos -->
          <img class="bigLogo" src="images/logo.png" alt="MDL Logo">
          <img class="mobileLogo" src="images/logo.png" alt="MDL Logo" onclick="toggleMenu()">
          <ul class="upper-menu">
            <li class="menu-item menu-item-has-children">
              <a href="#"><i class="uil uil-compass"></i> Doors</a>
              <ul class="sub-menu">
                <li class="menu-item"><a href="#">Fiberglass</a></li>
                <li class="menu-item"><a href="#">Steel Doors</a></li>
              </ul>
            </li>
            <li class="menu-item"><a href="#"><i class="uil uil-store"></i> Brochures</a></li>
            <li class="menu-item menu-item-has-children">
              <a href="#"><i class="uil uil-compass"></i> Custom</a>
              <ul class="sub-menu">
                <li class="menu-item"><a href="#">Plant Tours</a></li>
                <li class="menu-item"><a href="#">Design Your Own Door</a></li>
                <li class="menu-item"><a href="#">Dealer Locator</a></li>
              </ul>
            </li>
          </ul>
        </div>
    
        <!-- Dropdown Menu (Hidden by Default) -->
        <div class="mobile-dropdown" id="mobileDropdown">
          <ul class="mobile-menu">
            <li class="menu-item"><a href="#"><i class="uil uil-home"></i> Home</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-info-circle"></i> About</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-envelope"></i> Fiberglass</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-envelope"></i> Steel Doors</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-store"></i> Brochures</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-compass"></i> Plant Tours</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-compass"></i> Design Your Own Door</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-compass"></i> Dealer Locator</a></li>
            <li class="menu-item"><a href="#"><i class="uil uil-envelope"></i> Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>