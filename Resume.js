$(document).ready(() => {
    $('.menu').on('mouseenter', event => {
      $(event.currentTarget).addClass('menu-change');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('menu-change');
    })

    $('.studio-menu').on('click', () => {
      $('.nav-menu').toggle();
    })
  }); 

