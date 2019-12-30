window.addEventListener("resize", function () {
    if (document.body.clientWidth < 1024) {
        document.querySelector(".info-block_rate").style.display = "block";
        document.querySelector(".info-block_coins").style.display = "none";
        document.querySelector(".finance__coins-toggler").classList.remove("finance__coins-toggler_active");
        document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled");
        document.querySelector(".finance__rate-toggler a").addEventListener("click", function (e) {
            document.querySelector(".finance__coins-toggler").classList.remove("finance__coins-toggler_active");
            document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled");
            document.querySelector(".info-block_coins").style.display = "none";
            document.querySelector(".info-block_rate").style.display = "block";
        });
        document.querySelector(".finance__coins-toggler a").addEventListener("click", function (e) {
            document.querySelector(".finance__coins-toggler").classList.add("finance__coins-toggler_active");
            document.querySelector(".finance__rate-toggler").classList.add("finance__rate-toggler_disabled");
            document.querySelector(".info-block_rate").style.display = "none";
            document.querySelector(".info-block_coins").style.display = "block";
        })
    }
    else {
        document.querySelector(".info-block_rate").style.display = "block";
        document.querySelector(".info-block_coins").style.display = "block";
        document.querySelector(".finance__coins-toggler").classList.remove("finance__coins-toggler_active");
        document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled");
        document.querySelector(".finance__rate-toggler a").addEventListener("click", function (e) {
            document.querySelector(".finance__coins-toggler").classList.add("finance__coins-toggler_active");
            document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled");
            document.querySelector(".info-block_coins").style.display = "block";
            document.querySelector(".info-block_rate").style.display = "block";
        });
        document.querySelector(".finance__coins-toggler a").addEventListener("click", function (e) {
            document.querySelector(".finance__coins-toggler").classList.add("finance__coins-toggler_active");
            document.querySelector(".finance__rate-toggler").classList.remove("finance__rate-toggler_disabled");
            document.querySelector(".info-block_rate").style.display = "block";
            document.querySelector(".info-block_coins").style.display = "block";
        })
    }
})
