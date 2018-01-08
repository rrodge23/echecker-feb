<?php
    if($_SESSION['users']['user_level'] == "2"){
?>
    <table id="table-examinationList" class="table table-striped">
        <thead>
            <tr>
                <td class="text-center font-roboto color-a2">ID</td>
                <td class="text-center font-roboto color-a2">DEPARTMENT NAME</td>
                <td class="text-center font-roboto color-a2">DESCRIPTION</td>
                <td class="text-center font-roboto color-a2">ACTION</td>

            </tr>
        </thead>
        <tbody>
            <?php
                foreach($data as $dept){
                    $id = $dept['iddepartment'];
                    $name = $dept['department_name'];
                    $description = $dept['description'];
                    ;
                
                echo "
                    <tr>
                        <td class='text-center font-roboto color-a2'>$id</td>
                        <td class='text-center font-roboto color-a2'>$name</td>
                        <td class='text-center font-roboto color-a2'>$description</td>
                        <td class='text-center font-roboto color-a2'>
                            
                            <button data-id='$id' rel='tooltip' data-original-title='Update' class='btn-update-department btn btn-info' type='button' name='update' onclick='return false;'>
                                <i class='material-icons'>update</i>
                            </button>
                            <button href='departments/deletedepartment' data-id='$id' rel='tooltip' data-original-title='Delete' class='btn-delete-department btn btn-danger' type='submit' name='deletedepartment' onclick='return false;'>
                                <i class='material-icons'>delete</i>
                            </button>
                        
                        </td>
                    </tr>
                    ";
                }
            ?>
                
        </tbody>
    </table>


    <div id="jqxSplitter">
    <div style="overflow: hidden;">
        <div style="border: none;" id="listbox">
        </div>
    </div>
    <div style="overflow: hidden;" id="ContentPanel">
    </div>
</div>

    
<?php
    }
?>
    