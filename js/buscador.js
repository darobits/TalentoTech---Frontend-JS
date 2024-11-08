const searchInput = document.querySelector('.form-control'); 
const productCards = document.querySelectorAll('.producto-card'); 


function filtrarProductos() {
    const searchText = searchInput.value.toLowerCase(); 
    productCards.forEach(card => {
       
        const productName = card.querySelector('h3').textContent.toLowerCase();
        const productDescription = card.querySelector('p').textContent.toLowerCase();
        
        
        if (productName.includes(searchText) || productDescription.includes(searchText)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}


searchInput.addEventListener('input', filtrarProductos);
