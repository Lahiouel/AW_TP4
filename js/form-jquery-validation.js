$( document ).ready(function() {
  var contactStore = (function () {
    
  // variable privée
  var contactList = [];

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    add: function(_name, _firsname, _date, _adress, _mail) {
      var contact = { name: _name,
                      firstname: _firsname,
                      date: _date,
                      adress: _adress,
                      mail: _mail
      };
      // ajout du contact à la liste
      contactList.push(contact);
        
      return contactList;
    },

    getList: function() {
      return contactList;
    }
  }
})();

   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log( "DOM ready!" );
    
    // Y mettre le code jQuery pour valider tous les champs du formulaire
	
	
	
	$("#validate").on("click",function(event) {
	event.preventDefault();
	    //alert($("#nom").val().length);
	   if ($("#nom").val().length < 5 || $("#prenom").val().length < 5 || $("#dateN").val().length < 5 || $("#adr").val().length < 5 || $("#mail").val().length < 5 )
    {
	   $('#myModal').modal("show");
	   
	}
	
	else
	{	   
	    $('#titre').html("Bienvenue " + $("#nom").val());
	    $('#text').html("Vous etes né le " + $("#dateN").val());
            $('.modal-body').append("<img src='https://maps.googleapis.com/maps/api/staticmap?markers="+$("#adr").val()+"&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");	
	    $('#myModal').modal("show");
	}
	
	
	
	});
	
	
	
	$("#gps").on("click",function(event) {
	    event.preventDefault();
		getLocation();
	});
	
	$("#nom").keydown(function() {
	    var l = $(this).val().length;   
	    $("#lenN").html(l +" caractère(s)");
	});
	
	$("#prenom").keydown(function() {
	    var l = $(this).val().length;   
	    $("#lenP").html(l +" caractère(s)");
	});
	
	$("#adr").keydown(function() {
	    var l = $(this).val().length;   
	    $("#lenA").html(l +" caractère(s)");
	});
	
	$("#mail").keydown(function() {
	    var l = $(this).val().length;   
	    $("#lenM").html(l +" caractère(s)");
	});
	
	
    
	
	$("#ajouter").on("click",function(event) {
	    event.preventDefault();
		
		//contactStore.add("qsdqsd","qsdqsd","dsqfsdf","dsfsdfsdf","dsfsdfsdf");
		contactStore.add($("#nom").val(),$("#prenom").val(),$("#adr").val(),$("#dateN").val(),$("#mail").val());
		contactList = contactStore.getList();
		$("tbody").html('');
		for(var index in contactList){
			$("tbody").append('<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>');
         }
		 
		  
		
	});
	
	
	
});
