<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
|--------------------------------------------------------------------------
| HMVC Modules Locations
|--------------------------------------------------------------------------
*/
$config['modules_locations'] = array(
	APPPATH.'modules/' => '../modules/',
);

/*
|--------------------------------------------------------------------------
| Static Site URL
|--------------------------------------------------------------------------
*/
$config['static_url'] = '/static/';

/*
|--------------------------------------------------------------------------
| Default Site Timezone
|--------------------------------------------------------------------------
*/
$config['default_timezone'] = 'Asia/Bangkok';

/*
|--------------------------------------------------------------------------
| Google Cloud Storage
|--------------------------------------------------------------------------
*/
if(ENVIRONMENT === 'development'){
	$config['bucket_name'] = 'gs://my_bucket/';
}else{
	$config['bucket_name'] = 'gs://gospacebar/';
}