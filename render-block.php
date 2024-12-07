<?php

if (! defined('ABSPATH') ) {
    exit; // Exit if accessed directly
}

$title = $attributes['title'] ?? '';
$description = $attributes['description'] ?? '';
?>

<div class="my-custom-block">
    <h2><?php echo esc_html($title); ?></h2>
    <p><?php echo esc_html($description); ?></p>
    <p>Dynamic Block</p>
</div>
