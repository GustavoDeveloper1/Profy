//procurar botão
 document.querySelector('#add-time');

addEventListener('click', cloneField)

function cloneField(){

    const newfieldsContainer = document.querySelector('.schedule-item').cloneNode()

    const fields = newfieldsContainer.querySelectorAll('input')
    fields.forEach(function(fields)  {
        console.log(fields)
    });

    document.querySelector('#schedule-items').appendChild(newfieldsContainer)
}
