<?php
	$config['page_query_string']    = TRUE;
	$config['allow_get_array']      = TRUE;
	$config['query_string_segment'] = 'page';
	$config['use_page_numbers']     = TRUE;
	$config['full_tag_open']        = '<nav class="navigation"><ul class="page-numbers">';
	$config['full_tag_close']       = '</ul></nav>';
	$config['cur_tag_open']         = '<li><span class="current">';
	$config['cur_tag_close']        = '</span></li>';
	$config['num_tag_open']         = '<li><span class="">';
	$config['num_tag_close']        = '</span></li>';
	$config['next_tag_open']        = '<li>';
	$config['prev_link']            = '<i class="fa fa-long-arrow-left"></i>';
	$config['prev_tag_close']       = '</li>';
	$config['prev_tag_open']        = '<li>';
	$config['next_link']            = '<i class="fa fa-long-arrow-right"></i>';
	$config['next_tag_close']       = '</li>';
	$config['first_tag_open']       = '<li><span class="">';
	$config['first_tag_close']      = '</li>';
	$config['first_url']            = '?page=1';
	$config['last_tag_open']        = '<li><span class="">';
	$config['last_tag_close']       = '</li>';
?>