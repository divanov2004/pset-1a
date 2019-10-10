window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("nav").className = "fixed";
    } else {
        document.getElementById("nav").className = "";
    }
})
