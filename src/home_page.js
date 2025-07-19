import resImg from "./images/restaurant-interior.jpg";
const content=document.querySelector("#content");

function HomePage(){
    const head1=document.createElement("h1");
    head1.textContent="Welcome to La Bella Cucina";
    content.appendChild(head1);

    const img=document.createElement("img");
    img.src=resImg;
    content.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = "Experience Italian Excellence";
    content.appendChild(h2);

    const p1 = document.createElement("p");
    p1.textContent = "Nestled in the heart of the city, La Bella Cucina offers authentic Italian cuisine made with love and tradition. Our master chefs prepare each dish using the finest ingredients, bringing the true taste of Italy to your table.";
    content.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = "Join us for an unforgettable dining experience in our warm and inviting atmosphere.";
    content.appendChild(p2);

    const hoursDiv = document.createElement("div");
    hoursDiv.className = "hours";

    const h3 = document.createElement("h3");
    h3.textContent = "Opening Hours";
    hoursDiv.appendChild(h3);

    const hours1 = document.createElement("p");
    hours1.textContent = "Tuesday - Sunday: 5:00 PM - 10:00 PM";
    hoursDiv.appendChild(hours1);

    const hours2 = document.createElement("p");
    hours2.textContent = "Closed on Mondays";
    hoursDiv.appendChild(hours2);

    content.appendChild(hoursDiv);
}

export {HomePage};