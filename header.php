<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo('charset'); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Marinze – Website Developer, Web Designer, SEO & GEO Specialist. Building modern websites that help businesses grow online.">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="site-header" role="banner">
  <div class="container">
    <nav class="nav-inner" aria-label="Primary navigation">
      <a class="nav-logo" href="<?php echo esc_url(home_url('/')); ?>">
        Marinze<span>.</span>
      </a>

      <ul class="nav-links" role="list">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#why">Why Me</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#contact" class="nav-cta">Let's Talk</a></li>
      </ul>

      <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
        <span></span><span></span><span></span>
      </button>
    </nav>
  </div>
</header>
