const content=document.querySelector("#content");

function AboutPage(){
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About La Bella Cucina";
    aboutTitle.className = "about-title";
    content.appendChild(aboutTitle);

    const aboutDesc = document.createElement("p");
    aboutDesc.textContent = "La Bella Cucina is a family-owned Italian restaurant dedicated to bringing the flavors of Italy to your table. Established in 1998, our passion for authentic cuisine and warm hospitality has made us a beloved destination for food lovers.";
    content.appendChild(aboutDesc);

    const teamSection = document.createElement("div");
    teamSection.className = "about-team";

    const teamTitle = document.createElement("h2");
    teamTitle.textContent = "Meet Our Team";
    teamSection.appendChild(teamTitle);

    const chef = document.createElement("p");
    chef.textContent = "Chef Giovanni Rossi: With over 30 years of experience, Chef Giovanni crafts each dish with love and tradition.";
    teamSection.appendChild(chef);

    const manager = document.createElement("p");
    manager.textContent = "Manager Sofia Bianchi: Sofia ensures every guest feels at home and enjoys an unforgettable dining experience.";
    teamSection.appendChild(manager);

    content.appendChild(teamSection);
}

export {AboutPage};