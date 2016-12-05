<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| Set Default Timezone
|--------------------------------------------------------------------------
*/
date_default_timezone_set(get_instance()->config->item('default_timezone'));

/*
|--------------------------------------------------------------------------
| Static URL
|--------------------------------------------------------------------------
*/
if ( ! function_exists('static_url'))
{
	function static_url($uri = '')
	{
		return get_instance()->config->item('static_url') . $uri;
	}
}

/*
|--------------------------------------------------------------------------
| Storage URL
|--------------------------------------------------------------------------
*/
if ( ! function_exists('storage_url'))
{
	function storage_url($uri = '')
	{		
		return get_instance()->config->item('bucket_name') . $uri;
	}
}


/*
|--------------------------------------------------------------------------
| Create Slug
|--------------------------------------------------------------------------
*/
if ( ! function_exists('create_slug')){
	function create_slug($string = NULL, $is_random = FALSE) {			
		$string = trim($string);
		$slug = preg_replace('/[^A-Za-z0-9-ก-๙]+/u', '-', $string);	
		$slug = strtolower($slug);
		if($is_random) {
			$slug = $slug.'-'.strtoupper(random_string('alnum',6));
		}else{
			$slug = $slug;
		}
		return $slug;
	}
}