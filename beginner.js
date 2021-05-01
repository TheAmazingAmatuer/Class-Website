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
                document.getElementById("txt2").innerHTML = txt[3];
                document.getElementById("h3").innerHTML = txt[4];
                document.getElementById("txt3").innerHTML = txt[5];
            }
        }
        client.send();