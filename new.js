document.getElementById("contactForm").addEventListener("submit", async function (event) {
            event.preventDefault();
            let form = event.target;
            let status = document.getElementById("formStatus");

            let data = new FormData(form);
            let response = await fetch(form.action, {
              method: form.method,
              body: data,
              headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
              status.textContent = "✅ Your message has been sent!";
              status.style.color = "green";
              form.reset();
            } else {
              status.textContent = "❌ Oops! Something went wrong. Please try again.";
              status.style.color = "red";
            }
          });
          <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>