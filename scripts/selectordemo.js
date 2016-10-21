// selecting my job titles one by one and changing their text from generic "Job 1", "Job 2" ..etc into descriptive job roles

function changeElementText(selectedElement, newText) {
    document.querySelector(selectedElement).innerHTML = newText;
}

changeElementText('#job1', 'System Admin');
changeElementText('#job2', 'Networking Specialist');
changeElementText('#job3', 'IT Manager');
changeElementText('#job4', 'Technical Department Manager');