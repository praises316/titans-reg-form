// REGISTER USER
    document.getElementById("register-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const team_name = document.getElementById("team").value;

      fetch("https://test.blockfuselabs.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          team_name
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          if (response.ok) {
            alert("User registered successfully!");
            console.log("Registration successful:", data);
            localStorage.setItem("registeredUser", JSON.stringify(data));
          } else {
            alert(data.message || "Registration failed.");
            console.error("Registration error:", data);
          }
        })
        .catch((error) => {
          console.error("Network error during registration:", error);
          alert("Network error.");
        });
    });

    // LOGIN USER
    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      fetch("https://test.blockfuselabs.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: JSON.stringify({ email, password })
      })
        .then(async (response) => {
          const data = await response.json();
          if (response.ok) {
            alert("Login successful!");
            console.log("Login response:", data);
            localStorage.setItem("loggedInUser", JSON.stringify(data));
          } else {
            alert(data.message || "Login failed.");
            console.error("Login error:", data);
          }
        })
        .catch((error) => {
          console.error("Network error during login:", error);
          alert("Network error.");
        });
    });


  