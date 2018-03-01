<?php
      class HomepageModel {
            private $numberOfAssignments = "";
            private $overAllGrade = "";
            private $totalPoints = "";

            public function getInfo() {
                  $string = file_get_contents("../data.json");
                  $info = json_decode($string, true);
                  $this->numberOfAssignments = $info['numberOfAssignments'];
                  $this->overallGrade = $info['overallGrade'];
                  $this->totalPoints = $info['totalPoints'];
                  return $string;
            }

            public function calculateGrade($grade) {
                  try {
                        $this->numberOfAssignments++;
                        $this->totalPoints += $grade;
                        $totalPointsPossible = $this->numberOfAssignments * 3;
                        $percentage = $this->totalPoints / $totalPointsPossible;
                        $this->overallGrade = $this->figureLetterGrade($percentage);
                        $data = array(
                              'numberOfAssignments' => $this->numberOfAssignments,
                              'totalPoints' => $this->totalPoints,
                              'overallGrade' => $this->overallGrade,
                        );
                        $data = json_encode($data);
                        $jsonFile = fopen('../data.json', 'w');
                        fwrite($jsonFile, $data);
                        fclose($jsonFile);
                  }
                  catch (Exception $e) {

                  }
            }

            private function figureLetterGrade($percentage) {
                  if ($percentage >= 0.94 && $percentage <= 1.0) {
                        return 'A';
                  }
                  else if ($percentage >= 0.89 && $percentage < 0.94) {
                        return 'A-';
                  }
                  else if ($percentage >= 0.83 && $percentage < 0.89) {
                        return 'B+';
                  }
                  else if ($percentage >= 0.78 && $percentage < 0.83) {
                        return 'B';
                  }
                  else if ($percentage >= 0.72 && $percentage < 0.78) {
                        return 'B-';
                  }
                  else if ($percentage >= 0.67 && $percentage < 0.72) {
                        return 'C+';
                  }
                  else if ($percentage >= 0.60 && $percentage < 0.67) {
                        return 'C';
                  }
                  else if ($percentage >= 0.53 && $percentage < 0.60) {
                        return 'C-';
                  }
                  else if ($percentage >= 0.47 && $percentage < 0.53) {
                        return 'D+';
                  }
                  else if ($percentage >= 0.40 && $percentage <  0.47) {
                        return 'D';
                  }
                  else if ($percentage >= 0.33 && $percentage < 0.40) {
                        return 'D-';
                  }
                  else if ($percentage >= 0.0 && $percentage < 0.33) {
                        return 'F';
                  }
            }
      }
?>