var changeState = function(newState) {
        var State = newState;
        $.ajax({
            type: "POST",
            url: '/changeInput',
            dataType: "json",
            contentType: "application/json",
            data: '{"State":"' + State + '"}',
            success: function(data) {
			document.getElementById('Notification').innerHTML = "Current State : " + State;
			if(State!=='')
			{
			var radio = "#radio-"+State;
			$(radio).prop("checked", true);
			}

  $("#radio-0").prop("checked", true);
              },
            error: function(data) {
                alert("fail");
            }
        });

    }