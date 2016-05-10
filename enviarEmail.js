function onFormSubmit(e) {
    var toAddress = "destino@servidor.com.br";
    var timestamp = e.values[0];
    var answer = e.values[1];
    var subject = "New answer";
    var emailBody = "Corpo do Email, blahblah..." + "\n\n" +
                    "A resposta é: " + answer + "\n\n" +
                    "Hora de envio: " + timestamp;
    MailApp.sendEmail(toAddress, subject, emailBody);
}