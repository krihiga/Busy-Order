document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
//***navigation Home page Scroll***//

//***Home Index Page Re-direct***//
document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("homeLink");
    if (homeLink) {
        homeLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "index.html"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//***Home home Page Re-direct***//
document.addEventListener("DOMContentLoaded", function() {
    const homehome = document.getElementById("homehome");
    if (homehome) {
        homehome.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "home.html"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//***Service Page Re-direct***//
function goToServiceSection() {
    window.location.href = "index.html#servicesec";
}
//***Blog Page Re-direct***//
function goToBlogSection() {
    window.location.href = "index.html#blogsec";
}
//***Contact Page Re-direct***//
function goToContactSection() {
    window.location.href = "index.html#consec";
}
//***About Page Re-direct***//
function goToAboutSection() {
    window.location.href = "index.html#aboutsec";
}

//** index service Section**//
function goToSigninpage() {
    window.location.href = "signin.html";
}
//** Service Custom **//
document.addEventListener("DOMContentLoaded", function() {
    const sersec = document.getElementById("sersec");
    if (sersec) {
        sersec.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "home.html#servicesec"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//** blog Custom **//
document.addEventListener("DOMContentLoaded", function() {
    const blogsec = document.getElementById("blogsec");
    if (blogsec) {
        blogsec.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "home.html#blogsec"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//** Contact Custom **//
document.addEventListener("DOMContentLoaded", function() {
    const contsec = document.getElementById("contsec");
    if (contsec) {
        contsec.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "home.html#consec"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//** About Custom **//
document.addEventListener("DOMContentLoaded", function() {
    const aboutsec = document.getElementById("aboutsec");
    if (aboutsec) {
        aboutsec.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "home.html#aboutsec"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//***service Start***//
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("customDesign");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "custom.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("UIDesign");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "UI Design.html";
        });
    } else {
        console.log("UI Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("webDesign");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "website.html";
        });
    } else {
        console.log("Website Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("mobileDesign");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "mobile.html"; 
        });
    } else {
        console.log("Mobile Design section not found.");
    }
});
//***service End***//
//** Blog Read**//
document.addEventListener("DOMContentLoaded", function() {
    const bread = document.getElementById("bread");
    if (bread) {
        bread.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "https://journeyearning.blogspot.com"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//** Blog Read index**//
document.addEventListener("DOMContentLoaded", function() {
    const breadindex = document.getElementById("breadindex");
    if (breadindex) {
        breadindex.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "https://journeyearning.blogspot.com"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});
//** blog Custom **//
document.addEventListener("DOMContentLoaded", function() {
    const blogsecindex = document.getElementById("blogsecindex");
    if (blogsecindex) {
        blogsecindex.addEventListener("click", function(event) {
            event.preventDefault(); 
            window.location.href = "index.html#blogsec"; 
        });
    } else {
        console.log("Home link not found."); 
    }
});



//username display
    document.addEventListener('DOMContentLoaded', () => {
            const username = sessionStorage.getItem("username");
            if (username) {
                document.getElementById('usernameDisplay').textContent = username;
            } else {
                document.getElementById('usernameDisplay').textContent = "";
            }
        });

document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    const saveProfileBtn = document.getElementById('saveProfile');
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            // Your save logic
        });
    }
});

  

document.addEventListener('DOMContentLoaded', () => {
    const profilePicInput = sessionStorage.getItem("profilepic");
    if (profilePicInput) {
        const profilePicElement = document.getElementById('profilePicInput');
        if (profilePicElement) {
            profilePicElement.src = profilePicInput; 
        } else {
            console.error('Element with ID "profilePicInput" not found');
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("logo");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("menu");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("id");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("resume");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("thumbnail");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("photo");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("video");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("banner");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("invitation");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("poster");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("pintrest");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("t-shirt");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("card");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("certificate");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("flyer");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const customDesignBox = document.getElementById("brochure");
    if (customDesignBox) {
        customDesignBox.addEventListener("click", function() {
            window.location.href = "customdesign.html";
        });
    } else {
        console.log("Customize Design section not found.");
    }
});

console.log('Form submitted');

document.getElementById('logoOrderForm').addEventListener('submit', function(e) {
    e.preventDefault();

                const email = document.getElementById('email').value;
                const name = document.getElementById('name').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const businessName = document.getElementById('businessName').value.trim();
                const style = document.getElementById('style').value.trim();
                const colors = document.getElementById('colors').value.trim();
                const message = document.getElementById('description').value.trim();
                const fileInput = document.getElementById('file');
                const files = fileInput.files;

                if (!subject || !name || !message) {
                    alert('Please fill in all required fields.');
                    return;
                }

                const formData = new FormData();
                formData.append('email', email);
                formData.append('name', name);
                formData.append('phone', phone);
                formData.append('businessName', businessName);
                formData.append('style', style);
                formData.append('colors', colors);
                formData.append('description', message);

                for (let i = 0; i < files.length; i++) {
                    formData.append('attachments', files[i]);
                }

                // Send the form data to your backend
    fetch('https://busy-order.vercel.app/api/sendMail', { // Replace with your deployed Vercel URL
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send email');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message || 'Email sent successfully!');
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('Error sending email: ' + error.message);
    });
})    



/*Edit Profile
    document.addEventListener('DOMContentLoaded', () => {
    const editProfileLink = document.getElementById('editProfileLink');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeModal = document.getElementById('closeModal');
    const profilePicInput = document.getElementById('profilePicInput');
    const previewImage = document.getElementById('previewImage');
    const saveProfileBtn = document.getElementById('saveProfile');

    // Open modal
    editProfileLink.addEventListener('click', (event) => {
        event.preventDefault();
        editProfileModal.style.display = 'block';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        editProfileModal.style.display = 'none';
    });

    // Preview selected image
    profilePicInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                previewImage.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Save profile changes
    saveProfileBtn.addEventListener('click', () => {
        const newProfilePic = previewImage.src;
        const newDisplayName = document.getElementById('displayName').value;

        // Save data to sessionStorage or your preferred method
        const userCreds = {
            displayName: newDisplayName,
            profilePic: newProfilePic
        };

        sessionStorage.setItem("user-creds", JSON.stringify(userCreds));
        alert("Profile updated successfully!");

        // Update displayed profile picture (optional)
        document.getElementById('profilePic').src = newProfilePic;

        // Close modal after saving
        editProfileModal.style.display = 'none';
    });
});
*/