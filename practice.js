$(document).ready(function () {
    const cartItems = [];

    // Function to toggle the cart
    window.toggleCart = function () {
      $('.cart').toggleClass('show');
    };


    // Function to update the cart UI
    function updateCartUI() {
      $('#cart-items').empty();

      cartItems.forEach((item, index) => {
        const cartItemElement = $('<li></li>').text(`${item.name} - ${item.price}`);
        const removeButton = $('<button class="remove-from-cart-button">Remove</button>').data('index', index);
        cartItemElement.append(removeButton);
        $('#cart-items').append(cartItemElement);
      });

      const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
      $('#total-price').text('$' + totalPrice.toFixed(2));

      // Update the cart counter in the menu bar
      $('#cart-item-count').text(cartItems.length);
    }

    // Function to add a product to the cart
    function addToCart(product) {
      cartItems.push(product);
      updateCartUI();
    }

  // Click event for the "Add to Cart" button
  $(document).on('click', '.add-to-cart-button', function () {
    const productName = $(this).siblings('.product-name').text();
    const productPrice = $(this).siblings('.product-price').text();
    addToCart({ name: productName, price: productPrice });
  });

  // Event listener for removing items from the cart
  $(document).on('click', '.remove-from-cart-button', function () {
    const index = $(this).data('index');
    cartItems.splice(index, 1);
    updateCartUI();
  });

 
  // Example: Removing cart items
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
    });
  }

  /*Submit for the contact */
  document.getElementById('SubmitMessage').addEventListener("submit",function(event){
    event.preventDefault();
    alert("Thank You for Contacting Us!!");
  });

  $(document).ready(function () {
      $(document).ready(function () {
        $(document).ready(function(){
            $('#pagination a').click(function(e){
              e.preventDefault();
              var page=$(this).attr('href');
              loadPage(page);
          });
  
          function loadPage(page){
            $.ajax({
              url: 'data.php?page=' + page,
              success: function(data){
                $('#content').html(data);
              }
            });
          }
        }
        )
      });

  // Example: Product data
  const products = [
    { name: 'Product 1', image: 'container1.jpg', price: '$19.99' },
    // Add more products as needed
  ];

  // Your search functionality
  

  // Your rendering function
  function renderProducts(products) {
    $('#content').empty();

    products.forEach(product => {
      const productElement = $('<div class="product"></div>');
      productElement.append(`<img class="product-image" src="${product.image}" alt="${product.name}">`);
      productElement.append(`<div class="product-name">${product.name}</div>`);
      productElement.append(`<div class="product-price">${product.price}</div>`);
      productElement.append('<button class="add-to-cart-button">Add to Cart</button>');

      $('#content').append(productElement);
    });
  }
});
});




$(document).ready(function () {
  $('#search-button').click(function () {
    const searchTerm = $('#search-input').val().toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(filteredProducts);
  });
 });