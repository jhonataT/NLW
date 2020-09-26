document.querySelector("#add-time")
.addEventListener('click', cloneField)

// Executar uma ação:

function cloneField() {
    // Duplicar os campos:
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos: 

    const fields = newFieldsContainer.querySelectorAll('input')

    // Pegar cada campo:
    fields.forEach(function(field) { //repetição
        // Pegar o field atual e limpa:
        field.value = ""
    })

    // Repetir o formulário:
    document.querySelector('#schedule-item').appendChild(newFieldsContainer)
}