  // hidden elemets will be reveled once the user signs in 
  $('#msgbox').hide();
  $('#message').hide();
  $('#onlinediv').hide();
  var socket = io();

  // once the user presses the button
  $('#signin').on('click touchstart', function(e) {
      e.preventDefault();
      // emit the user name to the server
      socket.emit('user', $('#username').val());
      $('#username').val('');
      return false;
  });

  // when the user selects to send the message
  $('#msgbtn').on('click touchstart', function(e) {
      e.preventDefault();
      // emit the message the user is sending 
      socket.emit('chat message', $('#msg').val());
      // clear the message variable once message has been sent
      $('#msg').val('');
      return false;
  });

  socket.on('chat message', (data) => {
      //console.log(data.msg);
      var msgdiv = document.getElementById("messages");
      //console.log(socket);
      //$('#msgwell').css('background','red');
      msgdiv.innerHTML = msgdiv.innerHTML + '<p id="msgwell"><strong><span id="usrnm">' + data.user + '</span></strong>' + ' : ' + data.msg + '</p>';
      $('#msgbox').scrollTop($('#msgbox')[0].scrollHeight);


  });

  socket.on('message', (data) => {
      console.log(data);
      var headDiv = document.getElementById('welcome');
      headDiv.innerHTML = 'Welcome, <b> ' + data + '</b>';
  });

  socket.on('users', (users) => {
      $('#login').hide();
      $('#msgbox').show();
      $('#message').show();
      $('#onlinediv').show();
      var div = document.getElementById('users');
      div.innerHTML = '';
      var str = users.users;
      console.log(str);
      for (var i = 0; i < str.length; i++) {
          var user = str[i].toString();
          //console.log(user);
          //$('#users').text(user);
          div.innerHTML = div.innerHTML + '<b>' + user + '<br>';
      }
      var onCount = document.getElementById('onlinecount');
      onCount.innerHTML = str.length;

  });