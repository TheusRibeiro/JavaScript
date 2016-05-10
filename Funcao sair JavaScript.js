function sair() {
  var x;
  var r=confirm("Tem certeza que deseja sair ?");
  if (r==true)
  {
    location.href="login.php?logout=true";
  }
  else
  {
    return true;
  }
  document.cadastro.submit();
}
