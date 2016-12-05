<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Teacher_Model extends MY_Model {

	protected $table_name = 'ci_sessions';
	protected $default_select      = ''; 
	protected $default_order_by    = ''; 
	
	public function __construct()
	{
		parent::__construct();		
	}
}