<?php 

namespace App\Helper;

use App\Helper;
/**
 * summary
 */
class ApiResponse
{
	private $status;
	private $message;
	private $data;
    /**
     * summary
     */
    public function __construct($status, $message, $data)
    {
        $this->status = $status;
        $this->message = $message;
        $this->data = $data;
    }

    public function responseData()
    {
    	return response()->json([
    		'status' => $this->status,
    		'message' => $this->message,
    		'data' => $this->data
    	]);
    }
    
}
