<?php get_header(); ?>
<main id="main" class="container" style="padding-top:120px; padding-bottom:80px;">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article>
      <h1><?php the_title(); ?></h1>
      <div><?php the_content(); ?></div>
    </article>
  <?php endwhile; else : ?>
    <p>Nothing found.</p>
  <?php endif; ?>
</main>
<?php get_footer(); ?>
