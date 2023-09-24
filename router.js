// Get a reference to the main content area
const content = document.querySelector('main');

// Define a function to update the content based on the route
function updateContent(route) {
    // Clear the current content
    content.innerHTML = '';

    // Check the route and render the corresponding content
    switch (route) {
        case 'home':
            content.innerHTML = '<h1>Welcome to My Portfolio</h1><p>Web Year 1 student | Bachelors of Information Technology</p>';
            break;
        case 'experiences':
            content.innerHTML = '<h2>Experiences</h2><p></p>';
            break;
            case 'contact':
                content.innerHTML = `
                    <h1>Contact Information</h1>
                    <table>
                        <tr>
                            <th>Attribute</th>
                            <th>Details</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Muskanpreet Kaur</td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>+61 422953057</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><a href="mailto:muskkann.20@gmail.com">muskkann.20@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td><a href="https://au.linkedin.com/in/muskanpreet-kaur-574381271">LinkedIn Profile</a></td>
                        </tr>
                        <tr>
                            <td>Student ID</td>
                            <td>s223047441</td>
                        </tr>
                    </table>
                `;
                break;
            
        case 'getintouch':
            content.innerHTML = `
                <h2>Get in Touch</h2>
                <section id="contact">
                    <h2>Contact Me</h2>
                    <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
                    <form action="submit_contact.php" method="POST">
                        <div class="form-group">
                            <label for="name">Your Name:</label>
                            <input type="text" id="name" name="name" required>
                        </div>
        
                        <div class="form-group">
                            <label for="email">Your Email:</label>
                            <input type="email" id="email" name="email" required>
                        </div>
        
                        <div class="form-group">
                            <label for="message">Your Message:</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>
        
                        <div class="form-group">
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </section>
            `;
            break;
        default:
            // Handle 404 or other unknown routes here
            content.innerHTML = '<h1>Page Not Found</h1>';
            break;
    }
}

// Listen for changes to the hash part of the URL (e.g., #home)
window.addEventListener('hashchange', () => {
    // Get the current route from the URL hash
    const route = location.hash.slice(1); // Remove the '#' symbol

    // Update the content based on the route
    updateContent(route);
});

// Initial page load: get the route from the URL and update the content
updateContent(location.hash.slice(1));
