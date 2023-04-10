function fn_login()
       {
            var userName = document.getElementById("ho-ten");
           var _name=document.getElementById("ho-ten1")

           var map = document.getElementById("dia-chi");
           var _map=document.getElementById("dia-chi1")

           var dt = document.getElementById("phone");
           var _dt=document.getElementById("phone1")

           var email = document.getElementById("Email");
           var _email=document.getElementById("Email1")
           
           if(userName.value=='')
           {
               _name.style.display='block'
                userName.focus()
           }
           else{
               _name.style.display='none'
           }

            if(!map.value)
           {
                _map.style.display='block'
               map.focus()
           } 
           else{
                _map.style.display='none'
           }

           if(email.value=='')
           {
               _email.style.display='block'
                email.focus()
           }
           else{
               _email.style.display='none'
           }

           if(dt.value=='')
           {
               _dt.style.display='block'
                dt.focus()
           }
           else{
               _dt.style.display='none'
           }

            if(userName.value && map.value && dt.value && email.value)
            {
               alert("Hoàn tất gửi đi")
            }
       }