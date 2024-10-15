<?php

if(isset($_POST['enviar'])){
    if (!empty($_POST['nombre']) && !empty($_POST['phone']) && !empty($_POST['email']) && !empty($_POST['message'])) {
        $name = $_POST['nombre'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $message = $_POST['message'];
    }
}