<?php
    $query = "SELECT * FROM users";
    $result = mysqli_query($conn, $query);
    $options_pendidikan = "";
    
    while($row = mysqli_fetch_array($result))
        {
            $options_pendidikan = $options_pendidikan . "<option value='$row[pendidikan]'>$row[pendidikan]</option>";
        }

    $query1 = "SELECT * FROM users_tipe";
    $result1 = mysqli_query($conn, $query1);
    $options_usertipe = "";
    
    while($row1 = mysqli_fetch_array($result1))
        {
            $options_usertipe = $options_usertipe . "<option value='$row1[tipe]'>$row1[tipe]</option>";
        }
?>