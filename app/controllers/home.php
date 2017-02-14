<?php

class Home_Controller extends Controller
{
    public function investor_relations()
    {
        $this->view('home/investor_relations');
    }
    
    public function profile()
    {
        $this->view('home/profile');
    }
    
    public function news()
    {
        $this->view('home/news');
    }
    
    public function reports()
    {
        $this->view('home/reports');
    }
    
    public function shares()
    {
        $this->view('home/shares');
    }
    
    public function contact()
    {
        $this->view('home/contact');
    }
    
    public function disclaimer()
    {
        $this->view('home/disclaimer');
    }
    
    public function terms()
    {
        $this->view('home/terms');
    }
}