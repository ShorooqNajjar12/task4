document.addEventListener('DOMContentLoaded', function () {
    var selects = document.querySelectorAll('select');

    selects.forEach(function (select) {
        select.addEventListener('change', function () {
            select.style.backgroundColor = '';
            select.style.color = '';

            var selectedOption = select.options[select.selectedIndex];

            switch (selectedOption.value) {
                case 'approved':
                    select.style.backgroundColor = '#00ff00'; 
                    select.style.color = '#fff'; 
                    break;
                case 'in-progress':
                    select.style.backgroundColor = '#800080'; 
                    select.style.color = '#fff'; 
                    break;
                case 'in-review':
                    select.style.backgroundColor = '#ffc0cb'; 
                    select.style.color = '#fff';
                    break;
                default:
                    break;
            }
        });
    });
});