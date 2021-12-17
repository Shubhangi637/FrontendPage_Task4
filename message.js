function login(e)
	{
		const uname = document.getElementById("email").value;
		const pwd = document.getElementById("pwd1").value;
		const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		const pswdCondition = new RegExp(
			"^(?=.*[A-Z])(?=.*\\d).+$"
		  );
		  const pswdCondition2 = new RegExp(
			"^(?=.*[-+_!#$%^&*.,?]).+$"
		  );
		if(uname =='')
		{
			alert("please enter user name.");
			e.preventDefault();
		}
		else if(pwd=='')
		{
        	alert("enter the password");
			e.preventDefault();

		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
			e.preventDefault();

		}
		else if(!pswdCondition.test(pwd))
		{
			alert("Password must have one uppercase letter and a number");
			e.preventDefault();
		    
		}
		else if(pswdCondition2.test(pwd))
		{
			alert("Password can have only @, no other special character is allowed");
			e.preventDefault();
		    
		}
		else if(!(pwd=="SmartServTest@123"))
		{
			alert('Wrong Password!!!..');
			e.preventDefault();
			
		}
		else
		{
			alert('Thank You for Login & You are Redirecting to official Website');
	   		window.location.replace('https://www.smartserv.io');
		}
	}
    // function clearFunc()
	// {
	// 	document.getElementById("email").value="";
	// 	document.getElementById("pwd1").value="";
	// }

const loginBtn = document.querySelector('.form__button');
loginBtn.addEventListener('click',login);
        			    