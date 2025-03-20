        // Function to load external HTML files
        function loadComponent(id, file) {
            fetch(file)
                .then(response => response.text())
                .then(data => document.getElementById(id).innerHTML = data)
                .catch(error => console.error('Error loading ' + file, error));
        }

        // Load header and footer dynamically
        loadComponent("header", "header.html");
        loadComponent("footer", "footer.html");