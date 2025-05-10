var contactList = [];

    function addButton() {
      var name = document.getElementById("contact").value.trim(); 
      if (name === "") return; 

      if (contactList.length >= 7) {
        contactList.shift();
      }

      contactList.push(name); 
      document.getElementById("contact").value = ""; 
      displayContacts();
    }

    function removeButton() {
      contactList.pop(); 
      displayContacts();
    }

    function displayContacts() {
      document.getElementById("demo").innerHTML = contactList.join(", ");
    }