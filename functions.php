<?php
defined('ABSPATH') || exit;

function marinze_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
    register_nav_menus(['primary' => __('Primary Navigation', 'marinze-portfolio')]);
}
add_action('after_setup_theme', 'marinze_setup');

function marinze_enqueue() {
    $v = wp_get_theme()->get('Version');

    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800;900&display=swap',
        [],
        null
    );
    wp_enqueue_style('marinze-main', get_template_directory_uri() . '/assets/css/main.css', ['google-fonts'], $v);
    wp_enqueue_script('marinze-main', get_template_directory_uri() . '/assets/js/main.js', [], $v, true);
}
add_action('wp_enqueue_scripts', 'marinze_enqueue');
