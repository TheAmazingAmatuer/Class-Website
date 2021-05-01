var client = new XMLHttpRequest();
        client.open('GET', '/beginnerContent.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                document.getElementById("h1").innerHTML = txt[0];
                document.getElementById("txt1").innerHTML = txt[1];
                document.getElementById("h2").innerHTML = txt[2];
               
            }
        }
        client.send();
