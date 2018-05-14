/**
 * Created by Peter on 5/14/18.
 */

$('#apb-iziModal').iziModal();

$('#productsection, button.product.grid-item#americanprairiebourbon').click(function (event) {
    event.preventDefault();
    $('#apb-iziModal').iziModal('open')
});