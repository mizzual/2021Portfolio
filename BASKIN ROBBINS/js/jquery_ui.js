// a href='#' 클릭 무시 스크립트
$(".br-main").ready(function() {
    $('a[href="#"]').click(function(ignore) {
        ignore.preventDefault();
    });
});
