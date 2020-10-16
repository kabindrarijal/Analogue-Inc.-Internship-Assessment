
var selectedRow = null;

function onFormSubmit() {

        var formData = readformdata();
        console.log(formData);
        if (formData.task === ""){
            alert("please enter task")
        }
        else{
            if (selectedRow == null)
                insertNewRecord(formData);
            else
                updateRecord(formData);

            resetForm();
        }




}

function readformdata() {
    var formData = {};
    formData["task"] = document.getElementById('task').value;
    console.log(formData);
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById('tasklist').getElementsByTagName('tbody')[0];
    var newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.task;
    cell2 = newrow.insertCell(1);
    cell2.innerHTML = '<td><button type="button" class="btn btn-danger" onclick="onDelete(this)">Delete</button></td>';
    cell3 = newrow.insertCell(2);

    cell3.innerHTML = '<td><button type="button" class="btn btn-primary" onclick="onEdit(this)">Edit</button></td>';

}

function resetForm() {
    document.getElementById('task').value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('task').value = selectedRow.cells[0].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.task;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this data?')) {
        row = td.parentElement.parentElement;
        document.getElementById('tasklist').deleteRow(row.rowIndex);
        resetForm();
    }

}

