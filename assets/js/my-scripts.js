$(document).ready(function () {
    // catalog function
    
    if (window.screen.width < 768) {
        $('body').on('click', '.clickCatalogOpenClose', function () {
            $(this).parent().toggleClass('active');
            $('.clickCatalogName').removeClass('active');
            $('.catalogSubMenu').removeClass('open');
            $('.headerCatalog').toggle();
            $('.arrowBackToCategories').hide();
            $('.select-zone__nameCatalog').text('Բաժիններ');
        });
        $('body').on('click', '.arrowBackToCategories', function () {
            $(this).hide();
            $('.catalogSubMenu').removeClass('open');
            $('.clickCatalogName').removeClass('active');
            $('.select-zone__nameCatalog').text('Բաժիններ');
        });
    }

    $("body").on('mouseover', '.clickCatalogName', function () {
        let catalogList = $(this).parent();
        let catalogItem = $(catalogList).parent();
        let catalogItemOpen = $(catalogItem).find('.catalogSubMenu');
        let catalogName = $(this).parent();
        let subMenu = $(catalogName).find('.catalogSubMenu');
        if ($(catalogItemOpen).hasClass('open')) {
            $(catalogItemOpen).removeClass('open');
        }
        $(subMenu).addClass('open');

        if (window.screen.width < 768) {
            let child_select_name = $('body').find('.select-zone__nameCatalog');
            let select_text = $(this).find('span').text();
            console.log(select_text)
            $(child_select_name).text(select_text);
            $('.arrowBackToCategories').show();
        }
    });
    $("body").on('mouseover', '.change_activeCatalog', function () {
        let this_active = $('.change_activeCatalog');
        $(this_active).removeClass('active');
        $(this).addClass('active');
    });
});