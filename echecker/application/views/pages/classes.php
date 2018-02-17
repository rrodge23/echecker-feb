<?php

?>
<button data-toggle='tooltip' data-placement='top' title='Add' class='pull-right btn-add-classes-subject btn btn-success' type='button' name='create' onclick='return false;'>
    <i class='material-icons'>add</i>
</button>
<table id="table-classlist" class="table table-striped">        
    <thead>
        <tr>
            
            <td class="text-center font-roboto color-a2">CLASS NAME</td>
            <td class="text-center font-roboto color-a2">DESCRIPTION</td>
            <td class="text-center font-roboto color-a2">SUBJECT</td>
            <td class="text-center font-roboto color-a2">ROOM</td>
            <td class="text-center font-roboto color-a2">ACTION</td>

        </tr>
    </thead>
    <tbody>
        <?php
            foreach($data as $class){
                $id = $class['idclass'];
                $name = $class['class_name'];
                $description = $class['class_description'];
                $subject_code = $class['subject_code'];
                $room_name =  $class['room_name'];
                ;
            
            echo "
                <tr>
                    
                    <td class='text-center font-roboto color-a2'>$name</td>
                    <td class='text-center font-roboto color-a2'>$description</td>
                    <td class='text-center font-roboto color-a2'>$subject_code</td>
                    <td class='text-center font-roboto color-a2'>$room_name</td>
                    <td class='text-center font-roboto color-a2'>
                        
                        <button data-id='$id' data-toggle='tooltip' data-placement='top' title='Update' class='btn-update-class btn btn-info' type='button' name='update' onclick='return false;'>
                            <i class='material-icons'>update</i>
                        </button>
                        <button href='classes/deleteclasses' data-id='$id' data-toggle='tooltip' data-placement='top' title='Delete' class='btn-delete-class-subject btn btn-danger' type='submit' name='deleteclass' onclick='return false;'>
                            <i class='material-icons'>delete</i>
                        </button>
                    
                    </td>
                </tr>
                ";
            }
        ?>
            
    </tbody>
</table>