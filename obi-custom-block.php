<?php

/**
 * Plugin Name: Obi Custom Block
 * Plugin URI: https://obijuan.dev/obi-custom-block
 * Description: This is a custom Gutenberg block.
 * Author: Obi Juan
 * Author URI: https://obijuan.dev
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit('You are not allowed in here!');
}

function obi_custom_block()
{
    wp_register_script(
        'obi-custom-block',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js'),
        true
    );


    register_block_type('obi-custom-block/obi-block', array(
        'editor_script' => 'obi-custom-block',
    ));
}

add_action('init', 'obi_custom_block');
