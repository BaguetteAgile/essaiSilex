

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-page-1","displayName":"Page 1","link":{"linkType":"LinkTypePage","href":"#!page-page-1"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-horizontal-scroll","displayName":"Horizontal scroll","link":{"linkType":"LinkTypePage","href":"#!page-horizontal-scroll"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
$(window).load(function () {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});