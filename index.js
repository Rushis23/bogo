const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {

  box.addEventListener('click', () => {
    //Displaying price of selected box 
    const currPrice = box.querySelector('.price').innerHTML;
    document.querySelector('.total').innerHTML = currPrice;

    //
    boxes.forEach(otherBox => {
      if (otherBox !== box) {
        otherBox.classList.remove('expanded');
      }
    });

    box.classList.add('expanded');
    box.querySelector('input[type="radio"]').checked = box.classList.contains('expanded');
  });
});