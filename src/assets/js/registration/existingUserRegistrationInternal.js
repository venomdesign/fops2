// When the browser is ready...
var accountValidated = false;

$(document).ready(function() {

	$("input[name='mfa_input']").hide();
	$("input[name='mfaEnable']").click(function () {
		if ($("input[name='mfaEnable']:checked").val() === '0') {
			$("#mfa_input").hide();
		} else {
			$("#mfa_input").show();
		}
	});
	
	$("#password").keyup(function() {
		if ($("#password").val().length === 0) {
			$("span[id$='acctVerify']").text('');
		}

	});

    $("#password").blur(function () {
        var username = $("#email").val();
        var password = $(this).val()
        if(password.length > 0){
        $("#acctVerify").html("validating account....")

        $.ajax({
            url: "/register/api/verify",
            type: "POST",
            data: "username=" + encodeURI(username) + "&password=" + encodeURI(password),

            success: function (data) {
                $("#acctVerify").removeClass("acctVerifyFailed");
                $("#acctVerify").addClass("acctVerifySuccess");
                $("#acctVerify").html("Confirmed")
                accountValidated = true
            },
            error: function (e) {
                $("#acctVerify").removeClass("acctVerifySuccess");
                $("#acctVerify").addClass("acctVerifyFailed");
                $("#acctVerify").html("Confirmation Failed");
                accountValidated = false


            }
        });
        }

    });

	$("#phone").blur(function() {
		var phoneLength = $("#phone").val().length;
		if (phoneLength > 0 && phoneLength < 12) {
			$('span[for="phoneNumber"][class="error"]').show();
			$("#phone").addClass("error");
		} else {
			$('span[for="phoneNumber"][class="error"]').hide();
			$("#phone").removeClass("error");
		}
	});
	$("#phone").keyup(function() {
		if ($("#phone").val().length === 0) {
			$('span[for="phoneNumber"][class="error"]').hide();
		}

	});

	// Setup form validation on the #register-form element
	$("#registration").validate({

		// Specify the validation rules
		rules : {
			firstName : "required",
			lastName : "required",
			phoneNumber : "required",
			password:"required",
			email : {
				required : true,
				pattern: /^[_A-Za-z0-9-+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/
			}
		},

		// Specify the validation error messages
		messages : {
			firstName : "Required field",
			lastName : "Required field",
			email : "Required field",
			phoneNumber : "Required field",
			password: "Required field"

		},
		submitHandler : function(form) {
			if (!accountValidated){
				$("#password").focus()
				return false;
			}

			var phoneLength = $("#phone").val().length;
			if (phoneLength > 0 && phoneLength < 12) {
				$('span[for="phoneNumber"][class="error"]').show();
				$("#phone").addClass("error");
				return false;
			}

			var smsPhoneLength = $("#smsphone").val().length;

			if ($('#smsphone').is(':visible') && smsPhoneLength < 12) {
				$('span[for="smsphone"][class="error"]').show();
				$("#smsphone").addClass("error");
				return false;
			}
			$('input:hidden').attr("disabled", true);
			$("#registrationType").removeAttr('disabled');
			$("#traxUser").removeAttr('disabled');			
			form.submit();

		}
	});
	$("#extension").keypress(function(e) {
		//if the letter is not digit then don't type anything
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
			return false;
		}
	});

});

// MFA functionality from finish-internal
$(document).ready(function() {
	showMfaPopup();

	$("#smsphone").blur(function() {
		var phoneLength = $("#smsphone").val().length;
		if (phoneLength > 0 && phoneLength < 12) {
			$('span[for="smsphone"][class="error"]').show();
			$("#smsphone").addClass("error");
		} else {
			$('span[for="smsphone"][class="error"]').hide();
			$("#smsphone").removeClass("error");
		}
	});
	$("#smsphone").keyup(function() {
		if ($("#smsphone").val().length === 0) {
			$('span[for="smsphone"][class="error"]').hide();
		}

	});
	
});

$(document).on("click", ".popover .mfaclose", function() {
	$('#mfaPopover[data-toggle="popover"]').popover("hide");

});

function showMfaPopup() {
	$('#mfaPopover[data-toggle="popover"]')
			.popover(
					{
						placement : 'auto',
						html : true,
						content : 'Multi-Factor Authentication <span class="mfaclose" >X</span><hr/><p>Multi-factor authentication is commonly referred to as two-factor authentication.  When used, multi-factor authentication adds an additional layer of security to the authentication process.  The first authentication factor is normally something you know such as a username and password.  The second authentication factor requires you to physically have something such as a phone.</p><p>When enabled, you simply enter your username and password and the website will send you an additional password or code to your registered phone number or email address.  Once this password or code is entered on the screen, access to the site is granted.  This process will happen EVERY time you log in to the website.  Each time you log in, you will be sent a different one-time password or code to use.</p><p>Once enabled, you can disable this option by entering the User Preferences Page.</p>'
					}).on("mouseenter", function () {
		                var _this = this;
		                $(this).popover("show");
		                $(".popover").on("mouseleave", function () {
		                    $(_this).popover('hide');
		                });
		            }).on("mouseleave", function () {
		                var _this = this;
		                setTimeout(function () {
		                    if (!$(".popover:hover").length) {
		                        $(_this).popover("hide");
		                    }
		                }, 300);
		        });
}
