$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="刘小玲" &&  pwd=="0318"){ 
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}
	else{
		alert("傻瓜，再好好想想呢😕");
	}
});
