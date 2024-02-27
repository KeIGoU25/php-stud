$(document).ready(function() {

    function displayStudentList() {
        $('#studentList').empty();
        $.ajax({
            url: 'get_students.php', // PHP script to retrieve students
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Handle success response
                $.each(data, function(index, student) {
                    $('#studentList').append(
                        '<tr>' +
                        '<td>' + student.studNumber + '</td>' +
                        '<td>' + student.name + '</td>' +
                        '<td>' + student.age + '</td>' +
                        '<td>' + student.email + '</td>' +
                        '<td>' + student.contact + '</td>' +
                        '<td class="btn">' +
                        '<button class="editBtn" data-id="'+ student.id +'">Edit</button>' +
                        '<button class="deleteBtn" data-id="'+ student.id +'">Delete</button>' +
                        '</td>' +
                        '</tr>'
                    );
                });
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error('Error fetching students:', error);
            }
        });
    }

    function clearFields() {
        $('#studNumber').val('');
        $('#name').val('');
        $('#age').val('');
        $('#email').val('');
        $('#contact').val('');
    }

    displayStudentList();

    $(document).on('click', '#addStudentBtn', function(){
        $('#addStudentModal').show();
    });

    $(document).on('click', '.editBtn', function(){
        let studentId = $(this).data('id');
        $.ajax({
            url: 'get_student.php', // PHP script to retrieve student data
            type: 'GET',
            data: {primary_id: studentId}, // Send primary_id as data
            dataType: 'json',
            success: function(student) {
                // Populate edit form fields with retrieved student data
                $('#primary_id').val(student.id);
                $('#editStudNumber').val(student.studNumber);
                $('#editName').val(student.name);
                $('#editAge').val(student.age);
                $('#editEmail').val(student.email);
                $('#editContact').val(student.contact);
                $('#editStudentModal').show();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error('Error fetching student:', error);
            }
        });
    });
    

    $(document).on('click', '.deleteBtn', function(){
        let studentId = $(this).data('id');
        $('#confirmDelete').data('id', studentId);
        $('#deleteStudentModal').show();
    });
    
    $(document).on('click', '#confirmDelete', function(){
        let studentId = $(this).data('id');
        $.ajax({
            url: 'delete_student.php',
            type: 'POST',
            data: { id: studentId },
            success: function(response) {
                // Handle success response
                displayStudentList(); // Assuming you have a function to refresh the student list
                $('#deleteStudentModal').hide();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    });
    
    $(document).on('click', '.close', function(){
        $('.modal').hide();
    });

    $(document).on('submit', '#addStudentForm', function(e){
        e.preventDefault();
        let formData = $(this).serialize(); // Serialize form data
        $.ajax({
            url: 'add_student.php', // PHP script to handle saving
            type: 'POST',
            data: formData, // Send form data
            success: function(response) {
                // Handle success response
                console.log('Student added successfully');
                // Optionally, you can update the UI or perform other actions
                displayStudentList();
                clearFields();
                $('#addStudentModal').hide();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error('Error adding student:', error);
            }
        });
    });

    $(document).on('submit', '#editStudentForm', function(e){
        e.preventDefault();
        let formData = $(this).serialize(); // Serialize form data
        $.ajax({
            url: 'edit_student.php', // PHP script to handle editing
            type: 'POST',
            data: formData, // Send form data
            success: function(response) {
                // Handle success response
                console.log('Student updated successfully');
                // Optionally, you can update the UI or perform other actions
                displayStudentList();
                clearFields();
                $('#editStudentModal').hide();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error('Error updating student:', error);
            }
        });
    });
});