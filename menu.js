async function fetchAndDisplayMenu(category) {
    const baseUrl = "http://localhost:8080/merger";
    const response = await fetch(`${baseUrl}${category}`);
    const menuItems = await response.json();

    if (!Array.isArray(menuItems)) {
        console.error('menuItems is not an array', menuItems);
        return;
    }

    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '<h1>Menu</h1>';

    menuItems.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        menuItemElement.innerHTML = `
            <h3 class="item-name">${item.name}</h3>
            <p class="item-description">${item.description}</p>
            <p class="item-price">$${item.price}</p>
        `;
        menuContainer.appendChild(menuItemElement);
    });
}