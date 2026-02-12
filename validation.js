// ========================================
// FORM VALIDATION FUNCTIONS
// ========================================

// Validation function to check if field is empty (considering spaces as empty)
function isEmpty(value) {
    return value.trim() === '';
}

// Validate phone number - must be numeric and exactly 10 digits
function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

// Validate password - at least 7 characters, one capital letter, one digit, one special character (&,$,#,@)
function validatePassword(password) {
    if (password.length < 7) {
        return false;
    }
    
    const hasCapital = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecial = /[&$#@]/.test(password);
    
    return hasCapital && hasDigit && hasSpecial;
}

// Validate email - must have few letters before @, three letters between @ and ., and 2-3 letters after .
function validateEmail(email) {
    // Pattern: at least 1 letter before @, exactly 3 letters between @ and ., and 2-3 letters after .
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    return emailRegex.test(email);
}

// ========================================
// DOM ELEMENT ACCESS - Multiple Methods
// ========================================

// Using getElementById
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const messageBox = document.getElementById('messageBox');
const mainHeading = document.getElementById('mainHeading');
const demoImage = document.getElementById('demoImage');

// Using getElementsByClassName
const formInputs = document.getElementsByClassName('form-input');
const errorMessages = document.getElementsByClassName('error-message');

// Using getElementsByTagName
const allButtons = document.getElementsByTagName('button');
const allLabels = document.getElementsByTagName('label');

// ========================================
// FORM VALIDATION AND SUBMISSION
// ========================================

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous error messages
    for (let error of errorMessages) {
        error.innerHTML = '';
    }
    
    let isValid = true;
    
    // Validate Username
    if (isEmpty(usernameInput.value)) {
        document.getElementById('usernameError').innerHTML = 'Username cannot be empty';
        isValid = false;
    }
    
    // Validate Email
    if (isEmpty(emailInput.value)) {
        document.getElementById('emailError').innerHTML = 'Email cannot be empty';
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        document.getElementById('emailError').innerHTML = 'Invalid email format (e.g., user@dom.com)';
        isValid = false;
    }
    
    // Validate Phone
    if (isEmpty(phoneInput.value)) {
        document.getElementById('phoneError').innerHTML = 'Phone number cannot be empty';
        isValid = false;
    } else if (!validatePhone(phoneInput.value)) {
        document.getElementById('phoneError').innerHTML = 'Phone must be 10 numeric digits';
        isValid = false;
    }
    
    // Validate Password
    if (isEmpty(passwordInput.value)) {
        document.getElementById('passwordError').innerHTML = 'Password cannot be empty';
        isValid = false;
    } else if (!validatePassword(passwordInput.value)) {
        document.getElementById('passwordError').innerHTML = 'Password must be 7+ chars with 1 capital, 1 digit, 1 special char (&,$,#,@)';
        isValid = false;
    }
    
    // Validate Confirm Password
    if (isEmpty(confirmPasswordInput.value)) {
        document.getElementById('confirmPasswordError').innerHTML = 'Please confirm your password';
        isValid = false;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
        isValid = false;
    }
    
    // Display result using innerHTML property
    if (isValid) {
        messageBox.className = 'message-box success';
        messageBox.innerHTML = '✓ Registration Successful! Welcome, ' + usernameInput.value + '!';
        form.reset();
    } else {
        messageBox.className = 'message-box error';
        messageBox.innerHTML = '✗ Please fix the errors above';
    }
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', function() {
    form.reset();
    messageBox.style.display = 'none';
    
    // Clear all error messages
    for (let error of errorMessages) {
        error.innerHTML = '';
    }
});

// ========================================
// DOM MANIPULATION DEMOS
// ========================================

// Change text using innerHTML property
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const headings = ['Student Registration Portal', 'Welcome to Registration', 'Sign Up Here!', 'Student Enrollment Form'];
    const randomHeading = headings[Math.floor(Math.random() * headings.length)];
    mainHeading.innerHTML = randomHeading;
});

// Change CSS properties (color, position)
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change color
    for (let input of formInputs) {
        input.style.borderColor = randomColor;
    }
    
    // Change position of heading
    if (!mainHeading.classList.contains('moved')) {
        mainHeading.classList.add('moved');
    } else {
        mainHeading.classList.remove('moved');
    }
});

// Change image source after clicking button
let imageToggle = false;
document.getElementById('changeImageBtn').addEventListener('click', function() {
    if (!imageToggle) {
        demoImage.src = 'https://via.placeholder.com/300x200/e74c3c/white?text=Welcome+Students';
        imageToggle = true;
    } else {
        demoImage.src = 'https://via.placeholder.com/300x200/4CAF50/white?text=Student+Portal';
        imageToggle = false;
    }
});

// Add a text node and attach it to a parent node
let nodeCounter = 0;
document.getElementById('addNodeBtn').addEventListener('click', function() {
    nodeCounter++;
    
    // Create a new div element
    const newDiv = document.createElement('div');
    newDiv.className = 'info-node';
    newDiv.id = 'infoNode' + nodeCounter;
    
    // Create text node
    const textNode = document.createTextNode('Info Node #' + nodeCounter + ': This node was dynamically added to the DOM!');
    
    // Attach text node to div
    newDiv.appendChild(textNode);
    
    // Attach div to parent container
    const infoContainer = document.getElementById('infoContainer');
    infoContainer.appendChild(newDiv);
});

// Delete a node
document.getElementById('deleteNodeBtn').addEventListener('click', function() {
    const infoContainer = document.getElementById('infoContainer');
    
    if (infoContainer.lastChild) {
        infoContainer.removeChild(infoContainer.lastChild);
        nodeCounter--;
    } else {
        alert('No nodes to delete!');
    }
});

// ========================================
// JQUERY OPERATIONS
// ========================================

$(document).ready(function() {
    
    // Change button text using jQuery
    $('#jqueryTextBtn').click(function() {
        const currentText = $(this).text();
        if (currentText.includes('Change')) {
            $(this).text('✓ Text Changed!');
        } else {
            $(this).text('jQuery: Change Button Text');
        }
    });
    
    // Set background-image using jQuery CSS property
    $('#jqueryBgBtn').click(function() {
        $('body').css({
            'background-image': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'transition': 'all 0.5s'
        });
        
        setTimeout(function() {
            $('body').css('background-image', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
        }, 2000);
    });
    
    // Access HTML form data using jQuery
    $('#registrationForm').on('submit', function() {
        // jQuery form data access
        const formData = {
            username: $('#username').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        };
        
        console.log('Form Data accessed via jQuery:', formData);
    });
    
    // Add attribute using jQuery
    $('.form-input').each(function(index) {
        $(this).attr('data-field-number', index + 1);
        $(this).attr('placeholder', 'Enter ' + $(this).prev('label').text().replace(':', ''));
    });
    
    // Hover effects using jQuery
    $('.demo-btn').hover(
        function() {
            $(this).css('box-shadow', '0 4px 15px rgba(0,0,0,0.3)');
        },
        function() {
            $(this).css('box-shadow', 'none');
        }
    );
    
});

// ========================================
// ADDITIONAL DOM DEMONSTRATIONS
// ========================================

// Demonstrate accessing elements by tag name
console.log('Total number of buttons on page:', allButtons.length);
console.log('Total number of labels on page:', allLabels.length);

// Demonstrate accessing elements by class name
console.log('Total form inputs:', formInputs.length);

// Add event listeners to all form inputs
for (let input of formInputs) {
    input.addEventListener('focus', function() {
        this.classList.add('highlight');
    });
    
    input.addEventListener('blur', function() {
        this.classList.remove('highlight');
    });
}
