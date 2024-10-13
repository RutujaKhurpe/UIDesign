function showTable(tableId) {
    // Hide all tables
    document.getElementById('onePairTable').style.display = 'none';
    document.getElementById('secondPairTable').style.display = 'none';
    document.getElementById('threePairTable').style.display = 'none';

    // Show the selected table
    document.getElementById(tableId).style.display = 'table';
}

// Initially display the onePairTable
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('onePairTable').style.display = 'table';
});
