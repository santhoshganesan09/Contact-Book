 
      document.addEventListener("DOMContentLoaded", function() {
        const contactForm = document.getElementById("contactForm");
        const contactList = document.getElementById("contactList");
      
        contactForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const name = document.getElementById("name").value;
          const phone = document.getElementById("phone").value;
      
          if (name && phone) {
            addContact(name, phone);
            clearForm();
          }
        });
      
        function addContact(name, phone) {
          const li = document.createElement("li");
          li.innerHTML = `
            <span>${name}</span>
            <span>${phone}</span>
            <button class="delete">Delete</button>
          `;
      
          li.querySelector(".delete").addEventListener("click", function() {
            contactList.removeChild(li);
          });
      
          contactList.appendChild(li);
        }
      
        function clearForm() {
          document.getElementById("name").value = "";
          document.getElementById("phone").value = "";
        }
      });