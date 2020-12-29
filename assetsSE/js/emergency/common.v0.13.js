function setModalMaxHeight(e) {
    this.$element = $(e), this.$content = this.$element.find(".modal-content");
    var a = this.$content.outerHeight() - this.$content.innerHeight(),
        s = $(window).width() < 768 ? 20 : 60,
        i = $(window).height() - (s + a) - ((this.$element.find(".modal-header").outerHeight() || 0) + (this.$element.find(".modal-footer").outerHeight() || 0));
    this.$content.css({
        overflow: "hidden"
    }), this.$element.find(".modal-body").css({
        "max-height": i,
        "overflow-y": "auto"
    })
}
$(document).ready(function() {
    $(".free-trial-btn-contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#go-to-bottom").offset().top
        }, 3000);
    });
    function e(e, a) {
        e.each(function() {
            var e = $(this),
                s = "animated " + e.data("animation-" + a);
            e.addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                e.removeClass(s)
            })
        })
    }
    $(window).scroll(function() {
        $(this).scrollTop() > 100 ? $(".scroll-to-top").fadeIn() : $(".scroll-to-top").fadeOut()
    }), $(".scroll-to-top").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 600), !1
    }), $("#myCarousel").carousel({
        interval: 4e3
    });
    var a = !1;
    $("#myCarousel").on("click", "#myCarousel ul.nav li a", function() {
        a = !0, $("#myCarousel .nav li").removeClass("active"), $(this).parent().addClass("active")
    }).on("slid.bs.carousel", function(e) {
        if (!a) {
            var s = $("#myCarousel .nav").children().length - 1,
                i = $("#myCarousel .nav li.active");
            i.removeClass("active").next().addClass("active"), s == parseInt(i.data("slide-to")) && $("#myCarousel .nav li").first().addClass("active")
        }
        a = !1
    }), $("#customers-testimonials").owlCarousel({
        loop: !0,
        center: !0,
        items: 1,
        margin: 0,
        nav: !0,
        autoplay: !0,
        dots: !0,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    }), $(".sys-product-slider").owlCarousel({
        loop: !0,
        center: !0,
        items: 1,
        margin: 0,
        nav: !0,
        autoplay: !0,
        dots: 0,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    }), $(".b-value .nav-stacked li:first").addClass("active in"), $(".b-value #tab1").addClass("active in"), setInterval(function() {
        var e = $(".b-value li.active"),
            a = $(".b-value li.active a").attr("href");
        e.is(".b-value .nav-stacked li:last-child") ? (e.removeClass("active in"), $(".b-value .nav-stacked li:first").addClass("active in"), $(".b-value div " + a).removeClass("active in"), $(".b-value div#tab1").addClass("active in")) : (e.removeClass("active in").next().addClass("active in"), $(".b-value div " + a).removeClass("active in").next().addClass("active in"))
    }, 2e4), $(".es-main .nav-tabs li:first").addClass("active in"), $(".es-main #menu1").addClass("active in"), setInterval(function() {
        var e = $(".es-main li.active"),
            a = $(".es-main li.active a").attr("href");
        e.is(".es-main .nav-tabs li:last-child") ? (e.removeClass("active in"), $(".es-main .nav-tabs li:first").addClass("active in"), $(".es-main div " + a).removeClass("active in"), $(".es-main div#menu1").addClass("active in")) : (e.removeClass("active in").next().addClass("active in"), $(".es-main div " + a).removeClass("active in").next().addClass("active in")), $(".es-main .nav-tabs>li.active").prevAll().removeClass("thenga"), $(".es-main .nav-tabs>li.active").prevAll().addClass("thenga")
    }, 5e3), $(".sys-home-slider").owlCarousel({
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 8e3,
        nav: !0,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    var s = $(".sys-home-slider");
    s.on("change.owl.carousel", function(a) {
        e($(".owl-item", s).eq(a.item.index).find("[data-animation-out]"), "out")
    }), s.on("changed.owl.carousel", function(a) {
        e($(".owl-item", s).eq(a.item.index).find("[data-animation-in]"), "in")
    });
    var i = $(".hamburger"),
        t = $(".overlay"),
        o = !1;
    i.click(function() {
        1 == o ? (t.hide(), i.removeClass("is-open"), i.addClass("is-closed"), o = !1) : (t.show(), i.removeClass("is-closed"), i.addClass("is-open"), o = !0)
    }), $('[data-toggle="offcanvas"]').click(function() {
        $("#wrapper").toggleClass("toggled")
    }), $(".blog-single-content-wrapper img").on("click", function() {
        $(".enlargeImageModalSource").attr("src", $(this).attr("src")), $("#enlargeImageModal").modal("show")
    }), $(".add-subject").hide(), $("#onetime-support-selection").on("change", function() {
        "Others" === $(this).val() ? $(".add-subject").show() : $(".add-subject").hide()
    }), $(".select-timezone").hide(), $("#call-optional input[type=checkbox]").click(function() {
        this.checked ? $(".select-timezone").show() : $(".select-timezone").hide()
    }), $(".scroll-inst").click(function() {
        $("html,body").animate({
            scrollTop: $("#plugin-inst").offset().top - 25
        }, "slow")
    }), $(".scroll-features").click(function() {
        $("html,body").animate({
            scrollTop: $("#plugin-features").offset().top - 25
        }, "slow")
    }), $(".scroll-faq").click(function() {
        $("html,body").animate({
            scrollTop: $("#plugin-faq").offset().top - 25
        }, "slow")
    }), $(".panel-collapse").on("show.bs.collapse", function() {
        $(this).siblings(".panel-heading").addClass("active")
    }), $(".panel-collapse").on("hide.bs.collapse", function() {
        $(this).siblings(".panel-heading").removeClass("active")
    }), $("body").hasClass("page-id-157") || ($("#sys-slider").owlCarousel({
        loop: !0,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    }), $("#control-panel").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        dots: !1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1e3: {
                items: 5
            }
        }
    }), $("#testimonial").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    }), $("#server-support").owlCarousel({
        loop: !0,
        margin: 10,
        dots: !1,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1e3: {
                items: 6
            }
        }
    }), $("#cloud").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1e3: {
                items: 6
            }
        }
    }), $("#plugin-slider-1").owlCarousel({
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        margin: 10,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    })), $(".control-panel-click.left-arrow").click(function(e) {
        e.preventDefault(), $("#control-panel.owl-carousel").trigger("next.owl.carousel")
    }), $(".control-panel-click.right-arrow").click(function(e) {
        e.preventDefault(), $("#control-panel.owl-carousel").trigger("prev.owl.carousel")
    }), $(".server-support-click.left-arrow").click(function(e) {
        e.preventDefault(), $("#server-support.owl-carousel").trigger("next.owl.carousel")
    }), $(".server-support-click.right-arrow").click(function(e) {
        e.preventDefault(), $("#server-support.owl-carousel").trigger("prev.owl.carousel")
    }), $("body").on("click", ".sys-left-arrow.control-panel-click", function() {
        $("div#sys-slider.owl-carousel").trigger("prev.owl.carousel")
    }), $("body").on("click", ".sys-right-arrow.control-panel-click", function() {
        $("div#sys-slider.owl-carousel").trigger("next.owl.carousel")
    }), $(".navbar-nav > li.dropdown").hover(function() {
        $("ul.dropdown-menu", this).stop(!0, !0).fadeIn("slow"), $(this).addClass("open")
    }, function() {
        $("ul.dropdown-menu", this).stop(!0, !0).fadeOut("slow"), $(this).removeClass("open")
    }), $("#myModalHome").modal(), $(".modal").on("show.bs.modal", function() {
        $(this).show(), setModalMaxHeight(this)
    }), $(window).resize(function() {
        0 != $(".modal.in").length && setModalMaxHeight($(".modal.in"))
    });
    var n = $(".emergency-grids #accordion .panel-collapse.in").prev().find("a").addClass("actives");
    n.find("a").append('<span class="fa fa-minus-circle pull-right"></span>'), $(".emergency-grids #accordion .panel-heading").not(n).find("a").prepend('<span class="fa fa-plus-circle pull-right"></span>'), $(".emergency-grids #accordion").on("show.bs.collapse", function(e) {
        $(".emergency-grids #accordion .panel-heading.actives").removeClass("actives").find(".fa").toggleClass("fa-plus-circle fa-minus-circle"), $(e.target).prev().find("a").addClass("actives").find(".fa").toggleClass("fa-plus-circle fa-minus-circle")
    }), $(".emergency-grids #accordion").on("hide.bs.collapse", function(e) {
        $(e.target).prev().find("a").removeClass("actives").find(".fa").removeClass("fa-minus-circle").addClass("fa-plus-circle")
    });
    var l = $(".sys-product-slider");
    l.owlCarousel(), $(".ps-left").click(function() {
        l.trigger("next.owl.carousel")
    }), $(".ps-right").click(function() {
        l.trigger("prev.owl.carousel", [300])
    }), $(".sys-mail-sync").owlCarousel({
        loop: !0,
        margin: 10,
        nav: !0,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    }), $(window).width() > 768 && new WOW({
        animateClass: "animated",
        offset: 100,
        mobile: !1,
        duration: 1e3
    }).init(), $(".someSwitchOptionSuccess").on("change", function() {
        var e = $(".sys-plan-header-price .monthly"),
            a = $(".sys-plan-header-price .yearly"),
            s = $(".sys-plan-header-type span"),
            i = $(".sys-cmt"),
            t = $(this).parents(".p-group");
        $(this).is(":checked") ? (t.find(e).removeClass("active"), t.find(a).addClass("active"), t.find(s).text("month"), t.find(i).text("* on annual commitment")) : (t.find(e).addClass("active"), t.find(a).removeClass("active"), t.find(s).text("month"), t.find(i).text(""))
    }), $("#someSwitchOptionSuccess").on("change", function() {
        var e = $(".sys-plan-header-price .monthly"),
            a = $(".sys-plan-header-price .yearly"),
            s = $(".sys-plan-header-type span"),
            i = $(".sys-cmt");
        $(this).is(":checked") ? (e.removeClass("active"), a.addClass("active"), s.text("month"), i.text("* on annual commitment")) : (e.addClass("active"), a.removeClass("active"), s.text("month"), i.text(""))
    }), $(".sys-selected-price ul li").click(function() {
        $(".tab-pane").hide(), $(".tab-pane").eq($(this).val()).show()
    }), $(".main-pricing-wrapper .dropdown").hover(function() {
        $(".dropdown-menu", this).stop(!0, !0).fadeIn("fast"), $(this).toggleClass("open")
    }, function() {
        $(".dropdown-menu", this).stop(!0, !0).fadeOut("fast"), $(this).toggleClass("open")
    }),
    // On Page Scroll
    $(document).on("scroll",function(){

      if ($(window).width() > 950) {  
          if($(document).scrollTop()>240) {
              $('.scroll-nav').slideDown(200);  
          } else {
              $('.scroll-nav').slideUp(200);
          }
      }

    })
});