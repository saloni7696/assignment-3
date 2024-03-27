
const container = document.querySelector('.container');
    
// Dynamically add student info
const studentInfo = document.createElement('p');
const studentID = '200530617';
const studentName = 'Saloni Singh';
// Append student info to container
container.appendChild(studentInfo);

// getting elements from html
const pizzaForm = document.getElementById('pizza-form');

const pizzaDescription = document.createElement('div');
container.appendChild(pizzaDescription); // making a div for adding pizza info to the html page dynamically
const orderButton = document.getElementById('order-button');

    // Pizza class
    class Pizza {
        constructor(size, crust, toppings, sauce , spicyLevel , quantity ) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;  
            this.sauce = sauce;
            this.spicyLevel = spicyLevel;
            this.quantity = quantity;
        }

        describe() {
            return `You ordered ${this.quantity} , ${this.size} pizza with ${this.crust} crust and toppings: ${this.toppings.join(', ')} with ${this.sauce}. Spiciness level: ${this.spicyLevel} on the scale of 1-10.`;
        }
    }
    // Function to create and update the image based on the selected size
function updatePizzaImage(size) {
    // Remove any existing image from the container if already there
    const existingImage = container.querySelector('img');
    if (existingImage) {
        existingImage.remove();
    }

    // Create a new image element
    const image = document.createElement('img');

    // Set the image source based on the selected size
    if (size === 'small') {
        image.setAttribute("src" , "./img/small.png");
    } else if (size === 'medium') {
        image.setAttribute("src" , "./img/medium.png");
    } else if (size === 'large') {
        image.setAttribute("src" , "./img/large.png");
    }

    // Append the image to the container
    container.appendChild(image);
}

    orderButton.addEventListener('click', function () {
    
            const size = pizzaForm.size.value;
            const crust = pizzaForm.crust.value;
            const sauce = pizzaForm.sauce.value;
            const quantity = Number(pizzaForm.quantity.value);
        
            if (!size || !crust || !sauce) {
                alert("Please select one size, one crust, and one sauce.");
                return; // Stop user from submitting the form unless the condition is satisfied
            }

            // Check if at least 3 toppings is selected
            const selectedToppings = Array.from(pizzaForm.toppings.options).filter(option => option.selected).length;
        if (selectedToppings < 3) {
            alert("Please select at least 3 toppings.");
            return; // Stop user from submitting the form unless the condition is satisfied
        }
        if (quantity < 1) {
            alert("Quantity must be at least 1.");
            return; // Stop user from submitting the form unless the condition is satisfied
        }
        // Validate coupon code
        const couponCode = pizzaForm['coupon-code'].value;
            if (couponCode && (couponCode.length !== 6 || !couponCode.match(/[a-zA-Z]{6}/))) {
            alert("Please enter a valid 6-character alphabetic coupon code.");
            return; // Stop user from submitting the form unless the condition is satisfied
            }
        
        // displaying the description
        const toppings = Array.from(pizzaForm.toppings.options).filter(option => option.selected).map(option => option.value);
            const spicyLevel = pizzaForm['spicy-level'].value;
            const pizza = new Pizza(size, crust, toppings, sauce, spicyLevel, quantity);
            pizzaDescription.textContent = pizza.describe();
            studentInfo.textContent = `Student ID: ${studentID}  Name: ${studentName}`;
            
    updatePizzaImage(size);
        });   

