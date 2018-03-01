<?php
      require('../Models/HomepageModel.php');

      $homepageModel = new HomepageModel();
      $info = $homepageModel->getInfo();

      $json = file_get_contents('php://input');
      $post = json_decode($json, true);
      $command = $post['command'];

      switch($command) {
            case 'getInfo':
                  echo $info;
                  break;
            case 'calculateGrade':
                  $homepageModel->calculateGrade($post['grade']);
                  break;
      }
?>