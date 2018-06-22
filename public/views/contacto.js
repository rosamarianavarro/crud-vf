$('document').ready(() => {

    //inicializar el check de formulario
    $.validate({
        lang: 'es'
    });

    $('#btnEnviar').click(() =>{
        //recoger todos los valores de los inputs
        let name = $('#name').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let address = $('#address').val();
        let date = $('#date').val();  

        //crear una nueva persona con los valores recogidos:
        let person = { name, phone, email, address, date }//person
        
        $.post('http://localhost:3000/addPerson', person , () =>{

        })
    });

});//document ready



