<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class SP_Model extends CI_Model {

	private $table_name          = ''; 
	private $default_select      = ''; 
	private $default_order_by    = ''; 
	private $default_limit_start = 0; 
	private $default_limit_end   = 100; 

	public function __construct()
	{
		parent::__construct();
	}

	public function insert($data = NULL)
	{
		$result = $this->db->insert($this->table_name, $data);
		if($result == 1){
			$id = $this->db->insert_id();
			return $id;
		}
		return FALSE;
	}

	public function update($where = NULL, $data = NULL) {				
		if($this->db->field_exists('updated_at', $this->table_name)) {
			$data['updated_at'] = date('Y-m-d H:i:s');
		}
		$this->db->where($where);
		$result = $this->db->update($this->table_name,$data);
		if($result == 1){
			return TRUE;
		}else{
			return FALSE;
		}
	}

	public function delete($where = NULL) {
		if($where !== NULL)
			$this->db->where($where);		
		$result = $this->db->delete($this->table_name);
		if($result == 1){
			return TRUE;
		}else{
			return FALSE;
		}
	}

	public function all($select = NULL, $start = NULL, $end = NULL, $order_by = NULL)
	{
		if($select !== NULL){
			$this->db->select($select);
		}else{
			$this->db->select($this->default_select);
		}
		$this->db->from($this->table_name);
		
		if($order_by !== NULL)
			$this->db->order_by($order_by);
		else
			$this->db->order_by($this->default_order_by);

		if($start !== NULL && $end !== NULL)
			$this->db->limit($end, $start);
		else
			$this->db->limit($this->default_limit_end, $this->default_limit_start);
		
		$records = $this->db->get();

		if($records->num_rows() > 0){
			return $records->result();
		}else{
			return NULL;
		}
	}

	public function find($where = NULL, $select = NULL, $start = NULL, $end = NULL, $order_by = NULL)
	{
		if($select !== NULL){
			$this->db->select($select);
		}else{
			$this->db->select($this->default_select);
		}
		$this->db->from($this->table_name);
		
		if($where !== NULL)
			$this->db->where($where);

		if($order_by !== NULL)
			$this->db->order_by($order_by);
		else
			$this->db->order_by($this->default_order_by);

		if($start !== NULL && $end !== NULL)
			$this->db->limit($end, $start);
		else
			$this->db->limit($this->default_limit_end, $this->default_limit_start);
		
		$records = $this->db->get();

		if($records->num_rows() > 0){
			return $records->result();
		}else{
			return NULL;
		}
	}

	public function get($where = NULL, $select = NULL)
	{
		if($select !== NULL){
			$this->db->select($select);
		}else{
			$this->db->select($this->default_select);
		}
		$this->db->from($this->table_name);
		
		if($where !== NULL)
			$this->db->where($where);
		else 
			return NULL;

		$this->db->limit(1);
		
		$record = $this->db->get();

		if($record->num_rows() > 0){
			return $record->row();
		}else{
			return NULL;
		}
	}

	public function existing($where = NULL){
		$this->db->select('id');
		$this->db->from($this->table_name);
		
		if($where !== NULL)
			$this->db->where($where);
		else 
			return FALSE;

		$this->db->limit(1);

		$record = $this->db->get();

		if($record->num_rows() > 0){
			return TRUE;
		}else{
			return FALSE;
		}
	}

	public function count($where = NULL)
	{
		if($where !== NULL)
			$this->db->where($where);
		$count = $this->db->count_all_results($this->table_name);
		return $count;
	}
}