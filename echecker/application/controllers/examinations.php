
<?php


class Examinations extends MY_Controller {

    function __contruct(){
        parent::__contruct();
    }

	public function index()
	{
        $this->_view('examination');
	}
    

}
