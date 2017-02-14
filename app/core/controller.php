<?php 

class Controller
{
    public function model($model)
    {
        require_once '../app/models/' . $model . '.php';
        return new $model;
    }
    
    public function view($view, $data = Array())
    {
        $view = '../app/views/' . $view . '.php';
        if(!file_exists($view)) $view = '../app/views/layout/error.php';
        require_once '../app/views/layout/main.php';
    }
}