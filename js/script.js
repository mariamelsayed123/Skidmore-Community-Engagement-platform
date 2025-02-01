// script.js
console.log("Hello, Community Engagement Platform!");

// Example: Change the heading text after 2 seconds

// New button for tips
const tipsButton = document.createElement('button');
tipsButton.textContent = 'Show Community Engagement Tips';
document.body.appendChild(tipsButton);

tipsButton.addEventListener('click', () => {
  alert("Tip: Volunteering regularly can help you build valuable skills and connections!");
});

// New: Button Click Functionality
document.getElementById("infoButton").addEventListener("click", () => {
  alert("Thank you for your interest in community engagement!");
});

// New: Form Submission Functionality
document.getElementById("signupForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents page refresh
  const email = document.getElementById("email").value;
  alert(`Thank you for signing up with ${email}!`);
});

// Calendar Functionality
const monthYearElement = document.getElementById("monthYear");
const calendarDaysElement = document.getElementById("calendarDays");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearElement.textContent = currentDate.toLocaleString("default", { month: "long" }) + " " + year;

    // Clear previous days
    calendarDaysElement.innerHTML = "";

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startingDay = firstDay.getDay();

    // Add empty days for the beginning of the month
    for (let i = 0; i < startingDay; i++) {
        const emptyCell = document.createElement("div");
        calendarDaysElement.appendChild(emptyCell);
    }

    // Add days to the calendar
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("calendar-day");
        dayCell.textContent = day;

        // Add events (for example, every 5th day)
        if (day % 5 === 0) {
            dayCell.classList.add("event");
            dayCell.textContent += " - Volunteer Event!";
        }

        calendarDaysElement.appendChild(dayCell);
    }
}

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();
// script.js
const registrationForm = document.getElementById('registrationForm');
const profileSection = document.getElementById('profile');
const registrationSection = document.getElementById('registration');
const welcomeMessage = document.getElementById('welcomeMessage');
const userEmail = document.getElementById('userEmail');
const logoutButton = document.getElementById('logoutButton');

// Handle registration form submission
registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send registration data to the server
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
        const data = await response.json();
        welcomeMessage.textContent = `Welcome, ${data.username}!`;
        userEmail.textContent = data.email;
        registrationSection.style.display = 'none';
        profileSection.style.display = 'block';
    } else {
        alert('Registration failed!');
    }
});

// Handle logout
logoutButton.addEventListener('click', () => {
    registrationSection.style.display = 'block';
    profileSection.style.display = 'none';
});