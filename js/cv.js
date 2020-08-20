function boxClick(e) {
    $("#form_" + e).hasClass("hidden") ? ($("#form_" + e).removeClass("hidden"), $("#form_" + e + " .bx-b").slideDown(500)) : ($("#form_" + e + " .bx-b").slideUp(500), $("#form_" + e).addClass("hidden"))
}

function removeAdd(e) {
    $("#form_" + e).remove()
}

function seeImg(e, t) {
    $.ajax({
        cache: !1,
        type: "POST",
        url: "site/view_letter",
        data: {
            id: e,
            type: t
        },
        success: function() {}
    });
    var a = document.getElementById("lbx_" + e);
    a.style.display = "block", $("#lbx_" + e + " .close")[0].onclick = function() {
        a.style.display = "none"
    }
}

function check_tk() {
    var e = document.getElementById("warning");
    e.style.display = "block", $("#warning .close")[0].onclick = function() {
        e.style.display = "none"
    }
}

function login(e) {
    $("#boxLog").show(), $("#btn-mb").removeClass("open"), $("#mn-mb > ul").css( "width", "0px" ), $("#btn-shadow").hide(), $("#boxLos").hide(), $("#boxRes").hide(), $(".modal").hide(), null != e ? $("#boxlink").val(e) : $("#boxlink").val(window.location.href)
}

function resg() {
    var e = $("#cv-profile-job").text(),
        t = $("#cv-profile-phone").text(),
        a = $("#cv-profile-email").text(),
        i = $("#cv-profile-address").text(),
        s = $("#cv-profile-fullname").text();
        b = $("#cv-profile-birthday").text();
        n = $("#cv-profile-job").text();

    if ("" != $("#cvid").val()) {
        if ("" == t || "" == a || "" == s || "" == i || "" == n || "" == b ) {
            "" == s && (document.getElementById("cv-profile-fullname").style.outline = "1px dashed red"), "" == t && (document.getElementById("cv-profile-phone").style.outline = "1px dashed red"), "" == a && (document.getElementById("cv-profile-email").style.outline = "1px dashed red"), "" == n && (document.getElementById("cv-profile-job").style.outline = "1px dashed red"),"" == b && (document.getElementById("cv-profile-birthday").style.outline = "1px dashed red"), "" == i && (document.getElementById("cv-profile-address").style.outline = "1px dashed red");
            var l = '<div class="v-modal" style="z-index: 2009;"></div><div tabindex="-1" class="el-message-box__wrapper" style="z-index: 2010;">';
              var text_mis ='';
            if ("" == s) {text_mis +='Họ tên, '}
            if ("" == b) {text_mis +='Ngày sinh, '}
            if ("" == a) {text_mis +='Email, '}
            if ("" == t) {text_mis +='Số điện thoại, '}
            if ("" == i) {text_mis +='Địa chỉ, '}
            if ("" == e) {text_mis +='Công việc mong muốn, '}
                text_mis = text_mis.substring(0, text_mis.length - 2);
            return l += '<div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title">Thông báo</div></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning"></div><div class="el-message-box__message" style="margin-left: 50px;">', l += "Vui lòng nhập đầy đủ thông tin: <span style='color:red'>"+text_mis+"</span> trong khung đỏ trước khi lưu CV</div></div>", l += '<div class="el-message-box__btns">', l += '<button type="button" onclick="hide()" class="el-button el-button--default"><span>Hủy bỏ</span></button>', $("body").append(l), !1
        }
        if (!/^[0-9]+$/.test(t)) return l = '<div class="v-modal" style="z-index: 2009;"></div><div tabindex="-1" class="el-message-box__wrapper" style="z-index: 2010;">', l += '<div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title">Thông báo</div></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning"></div><div class="el-message-box__message" style="margin-left: 50px;">', l += "Số điện thoại không hợp lệ</div></div>", l += '<div class="el-message-box__btns">', l += '<button type="button" onclick="hide()" class="el-button el-button--default"><span>Hủy bỏ</span></button>', $("body").append(l), !1
    }

    $.ajax({
            url:"https://timviec365.vn/service/cv_mail_unset.php",
            type:"POST",
            dataType: 'html',
            data:{email : a, phone: t, name: s},
            success:function(result){
                if(result!=false){
                }
            }
    });

    $("#form_res #birthday").val(b), $("#form_res #email").val(a), $("#form_res #name").val(s), $("#form_res #mobile").val(t), $("#form_res #cv_title").val(e), $("#form_res #diachi").val(i), $("#boxLog").hide(), $("#boxRes").show(), $(".modal").hide(), $("#loadjs").append('<script type="text/javascript">$("#cate-dk").select2({maximumSelectionLength: 3,placeholder: "Chọn ngành nghề bạn mong muốn",allowClear: true});$("#city-selector").select2({maximumSelectionLength: 3,placeholder: "Chọn nơi làm việc bạn mong muốn",allowClear: true});$("#city2").select2();$("#qh2").select2();<\/script>')
}

function resetpass() {
    $("#boxLog").hide(), $("#boxLos").show()
}

function exit() {
    $("#boxLog").hide(), $("#boxRes").hide(), $("#boxLos").hide(), $("#loadjs").empty()
}

function form(e) {
    var t = document.getElementById("form_" + e);
    t.style.display = "block", $("#form_" + e + " .huy")[0].onclick = function() {
        return !(t.style.display = "none")
    }
}

function addMore(e) {
    if ($("#form_" + e).remove(), 11 == e) var t = "Liệt kê các Điểm mạnh của bạn phù hợp với công việc ứng tuyển",
        a = "Điểm mạnh",
        i = "diemmanh";
    13 == e && (t = "Liệt kê các kỹ năng của bạn phù hợp với công việc ứng tuyển", a = "Kỹ năng", i = "kynang");
    var s = '<div class="bx" id="form_' + e + '"><div class="bx-t"><strong>' + a + '<i class="list-icon ico22"></i></strong><a href="javascript:void(0)" onclick="removeAdd(' + e + ')" title="delete"><i class="list-icon ico23"></i></a></div><div class="bx-b"><form accept="" method="post"><textarea name="' + i + '" rows="10" placeholder="' + t + '"></textarea></p><a href="" class="btn3">Cập nhật</a><div class="clr"></div></form></div><a href="javascript:void(0)" onclick="boxClick(' + e + ')" id="btn-hidden"><i class="list-icon ico24"></i></a></div>';
    $("#list-add").append(s)
}

function loadModal() {
    var e = document.getElementById("myModal");
    document.getElementById("imgZoom"), e.style.display = "block", document.getElementsByClassName("close")[0].onclick = function() {
        e.style.display = "none"
    }
}
function loadModal2($id_cv) {
    var e = document.getElementById("myModal"+$id_cv);
    document.getElementById("imgZoom"), e.style.display = "block", document.getElementsByClassName("close")[0].onclick = function() {
        e.style.display = "none"
    }
}
function btnDown(e) {
    var t = $("#ltid").val(),
        a = $("#lttype").val(),
        i = $("#letter-title").text(),
        s = $("#uid_letter").val();
    1 == e ? $.ajax({
        cache: !1,
        type: "POST",
        url: "site/checksave_thu",
        data: {
            id: t
        },
        success: function(e) {
            if ("false" == e) return $("body").append('<div class="v-modal" style="z-index: 2009;"></div><div tabindex="-1" class="el-message-box__wrapper" style="z-index: 2010;"><div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title">Thông báo</div></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning1"></div><div class="el-message-box__message" style="margin-left: 50px;">Lưu thư xin việc trước khi tải về máy!</div></div><div class="el-message-box__btns"><button type="button" onclick="hide()" class="el-button el-button--default el-button--primary "><span>Đồng ý</span></button></div></div></div>'), !1;
            $.ajax({
                cache: !1,
                type: "POST",
                url: "site/download1",
                data: {
                    id: t,
                    type: a
                },
                success: function() {}
            }), "" == i && (i = "dxv_" + s + "_" + t), window.location.href = "download-cvpdf/thu.php?id=" + t + "&uid=" + s + "&cvname=" + i, $("#box_down").hide(), $(".bg-spinner").remove()
        }
    }) : 2 == e ? $.ajax({
        cache: !1,
        type: "POST",
        url: "site/checksave_don",
        data: {
            id: t
        },
        success: function(e) {
            if ("false" == e) return $("body").append('<div class="v-modal" style="z-index: 2009;"></div><div tabindex="-1" class="el-message-box__wrapper" style="z-index: 2010;"><div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title">Thông báo</div></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning1"></div><div class="el-message-box__message" style="margin-left: 50px;">Lưu đơn xin việc trước khi tải về máy!</div></div><div class="el-message-box__btns"><button type="button" onclick="hide()" class="el-button el-button--default el-button--primary "><span>Đồng ý</span></button></div></div></div>'), !1;
            $.ajax({
                cache: !1,
                type: "POST",
                url: "site/download1",
                data: {
                    id: t,
                    type: a
                },
                success: function() {}
            }), "" == i && (i = "dxv_" + s + "_" + t), window.location.href = "download-cvpdf/don.php?id=" + t + "&uid=" + s + "&cvname=" + i, $("#box_down").hide(), $(".bg-spinner").remove()
        }
    }) : $.ajax({
        cache: !1,
        type: "POST",
        url: "site/checksave_hoso",
        data: {
            id: t
        },
        success: function(e) {
            if ("false" == e) return $("body").append('<div class="v-modal" style="z-index: 2009;"></div><div tabindex="-1" class="el-message-box__wrapper" style="z-index: 2010;"><div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title">Thông báo</div></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning1"></div><div class="el-message-box__message" style="margin-left: 50px;">Lưu sơ yếu lý lịch trước khi tải về máy!</div></div><div class="el-message-box__btns"><button type="button" onclick="hide()" class="el-button el-button--default el-button--primary "><span>Đồng ý</span></button></div></div></div>'), !1;
            $.ajax({
                cache: !1,
                type: "POST",
                url: "site/download1",
                data: {
                    id: t,
                    type: a
                },
                success: function() {}
            }), "" == i && (i = "dxv_" + s + "_" + t), $(".bg-spinner").remove(), $("#box_down").hide(), window.location.href = "download-cvpdf/hoso.php?id=" + t + "&uid=" + s + "&cvname=" + i
        }
    })
}

function btnDownCV() {
    var e = $("#cvid").val(),
        t = $("#uid_cv").val(),
        a = $("#cv-title").text();
    "" == a && (a = $("#cv_alias").val()), $.ajax({
        cache: !1,
        type: "POST",
        url: "site/checksave_cv",
        data: {
            id: e
        },
        success: function(i) {
            if ("false" == i) return $("body").append('<div class="v-modal" style="z-index: 2009;"></div><div tabindex="-1" class="el-message-box__wrapper" style="z-index: 2010;"><div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title">Thông báo</div></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning1"></div><div class="el-message-box__message" style="margin-left: 50px;">Lưu CV trước khi tải về máy!</div></div><div class="el-message-box__btns"><button type="button" onclick="hide()" class="el-button el-button--default el-button--primary "><span>Đồng ý</span></button></div></div></div>'), !1;
            $.ajax({
                cache: !1,
                type: "POST",
                url: "site/download",
                data: {
                    id: e
                },
                success: function() {}
            }), "" == a && (a = "cv_" + t + "_" + e), window.location.href = "download-cvpdf/cv.php?cvid=" + e + "&uid=" + t + "&cvname=" + a, $("#box_down").hide()
        }
    })
}

function printImg(e) {
    if ("" == e) return alert("Lưu trước khi in !"), !1;
    var t = window.open("");
    t.document.write('<img src="' + e + '" onload="window.print();window.close()" />'), t.focus()
}

function like(e, t) {
    $.ajax({
        cache: !1,
        type: "POST",
        url: "site/like",
        data: {
            tbl: e,
            id: t
        },
        success: function(e) {
            "true" == e ? alert("Lưu thành công!") : alert("Hủy lưu thành công")
        }
    })
}

function delUser() {
    confirm("Xác nhận trước khi xóa") && $.ajax({
        cache: !1,
        type: "POST",
        url: "site/deluser",
        success: function(e) {
            "true" == e && alert("Tài khoản của bạn đã được xóa!")
        }
    })
}
jQuery(window).scroll(function() {
    jQuery(this).scrollTop() > 160 && 0 == $("#loadjs").hasClass("tawk_add") && ($("#loadjs").append("<script>var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement('script'),s0=document.getElementsByTagName('script')[0];s1.async=true;s1.src='https://embed.tawk.to/597813875dfc8255d623ef26/default';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();<\/script>"), $("#loadjs").addClass("tawk_add"))
}), $(document).ready(function() {
    jQuery(window).scroll(function() {
        300 < jQuery(this).scrollTop() ? jQuery("#backtop").fadeIn(300) : jQuery("#backtop").fadeOut(300)
    }), jQuery($(".bg-image").css("width", $(this).width())), $(window).on("resize", function() {
        jQuery($(".bg-image").css("width", $(this).width()))
    }), jQuery(window).scroll(function() {
        350 < jQuery(this).scrollTop() ? jQuery("#search_cp").show() : jQuery("#search_cp").hide()
    }), jQuery(window).scroll(function() {
        400 < jQuery(this).scrollTop() ? jQuery(".ct-company .cp-head").addClass("fixed") : jQuery(".ct-company .cp-head").removeClass("fixed")
    }), jQuery(window).scroll(function() {
        500 < jQuery(this).scrollTop() ? (jQuery(".module.bar").addClass("fixed"), jQuery(".list-cago").addClass("fixed")) : (jQuery(".module.bar").removeClass("fixed"), jQuery(".list-cago").removeClass("fixed"))
    }), jQuery(window).scroll(function() {
        400 < jQuery(this).scrollTop() ? jQuery(".cv-left").addClass("scroll") : jQuery(".cv-left").removeClass("scroll")
    }), jQuery("#backtop").click(function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    }), jQuery("#box-ef .tit").click(function() {
        $("#ef-" + $(this).attr("data-href") + " .cnt").hasClass("open") ? ($("#ef-" + $(this).attr("data-href") + " .cnt").removeClass("open"), $("#ef-" + $(this).attr("data-href") + " .cnt").slideUp()) : ($("#ef-" + $(this).attr("data-href") + " .cnt").addClass("open"), $("#ef-" + $(this).attr("data-href") + " .cnt").slideDown())
    }),
    $("#btn-shadow").click(function() {
        $("#btn-mb").removeClass("open"), $("#mn-mb > ul").css( "width", "0px" ), $("#btn-shadow").hide()
    }),

    $(".dmm").click(function() {
        $(this).hasClass("show_dmm") ? ($(this).removeClass("show_dmm")):($(this).addClass("show_dmm"),$(".dmm").not(this).removeClass("show_dmm"));
    }),


    $(".name_use").click(function() {
        $('.ttuv').hasClass("active") ? ($('.ttuv').removeClass("active")):($('.ttuv').addClass("active"));
        $('.menu_login').hasClass("active") ? ($('.menu_login').removeClass("active")):($('.menu_login').addClass("active"));

    }),

     $("#box_down .close").click(function() {
        $("#box_down .close").hide();
     }),


    jQuery("#btn-mb").click(function() {
        $(this).hasClass("open") ? ($(this).removeClass("open"), $("#btn-shadow").hide(), $("#mn-mb > ul").css( "width", "0px" )) : ($(this).addClass("open"), $("#btn-shadow").show(), $("#mn-mb > ul").css( "width", "290px" ))
    }),
    jQuery("#bt-share").click(function() {
        jQuery("#bt-share").hasClass("open") ? jQuery("#bt-share").removeClass("open") : jQuery("#bt-share").addClass("open")
    }), jQuery(".menu-user > li#fa").click(function() {
        $(this).hasClass("open") ? (jQuery("#fa").removeClass("open"), jQuery("#fa > a").removeClass("active")) : (jQuery("#fa").addClass("open"), jQuery("#fa > a").addClass("active"))
    }), jQuery(".box-ld #bt-share").click(function() {
        jQuery(this).hasClass("open") ? jQuery(this).removeClass("open") : jQuery(this).addClass("open")
    }), jQuery(".img-thumb a").click(function() {
        var e = $(this).attr("data-href");
        $("#src_img").attr("src", e), $("#src_img1").attr("src", e)
    }), $(".r2.hover").hover(function() {
        $(this).css("width", "430px")
    }, function() {
        $(this).css("width", "130px")
    }), $(".bx-add .hagtag li a").hover(function() {
        var e = $(this).attr("data-href");
        $(".hg").removeClass("open"), $("#" + e).addClass("open")
    });
    var e = 3;

}), $(document).ready(function() {
    var e = $(this);
    $("#form_res").validate({
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0,
                remote: {
                    url: "site/checkmail",
                    type: "post"
                }
            },
            pass: {
                required: !0,
                minlength: 6
            },
            repass: {
                required: !0,
                minlength: 6,
                equalTo: "#password"
            },
            mobile: {
                required: !0
            },
            "category[]": "required",
            "city[]": "required",
            cv_title: "required",
            diachi: "required",
            city_id: "required"
        },
        messages: {
            name: "Vui lòng nhập họ tên",
            email: {
                required: "Vui lòng nhập Email",
                email: "Sai định dạng mail",
                remote: "Email đã được sử dụng!"
            },
            pass: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự"
            },
            repass: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự",
                equalTo: "Không khớp với mật khẩu"
            },
            mobile: {
                required: "Số điện thoại không để trống"
            },
            "category[]": "Vui lòng chọn ngành nghề",
            "city[]": "Vui lòng chọn tỉnh thành",
            cv_title: "Vui lòng nhập công việc mong muốn.",
            diachi: "Vui lòng nhập địa chỉ",
            city_id: "Vui lòng chọn Tỉnh thành"
        },
        submitHandler: function(t) {
            $.ajax({
                url: "site/dangky",
                type: "POST",
                data: $(t).serialize(),
                success: function(e) {
                    var t = $("#cvid").val();
                    "" == t || null == t ? window.location.href = "https://timviec365.vn/cv365/dang-ky-thanh-cong" : save_cv_login(e)
                }
            }), e.submit()
        }
    }), $("#form_log").validate({
        rules: {
            email: {
                required: !0,
                email: !0,
                remote: {
                    url: "site/mailed",
                    type: "post"
                }
            },
            email: {
                remote: {
                    url: "site/mail_actived",
                    type: "post"
                }
            },
            pass: {
                required: !0,
                minlength: 6,
                remote: {
                    url: "site/check_tk",
                    type: "post",
                    data: {
                        email: function() {
                            return $("#log_mail").val()
                        }
                    }
                }
            }
        },
        messages: {
            email: {
                required: "Vui lòng nhập Email",
                email: "Email không hợp lệ",
                remote: "Email chưa được đăng ký!"
            },
            email: {
                remote: "Email chưa đăng ký hoặc chưa kích hoạt"
            },
            pass: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự",
                remote: "Sai email hoặc mật khẩu!"
            }
        },
        submitHandler: function(t) {
            if ($('#cvid').val()) {
                    $.ajax({
                        url: "site/api_dn2",
                        type: "POST",
                        data: $(t).serialize(),
                        success: function(e) {
                            var t = $("#cvid").val();
                            "" == t || null == t ? "" : cv_login_user(e)
                        }
                    }),
                   e.submit();
                }else{
             t.submit()
         }
        }
    }), $("#form_los").validate({
        rules: {
            email: {
                required: !0,
                email: !0,
                remote: {
                    url: "site/mailed",
                    type: "post"
                }
            },
            capcha: {
                required: !0,
                remote: {
                    url: "site/checkcapcha",
                    type: "post"
                }
            }
        },
        messages: {
            email: {
                required: "Email không để trống",
                email: "Email không hợp lệ",
                remote: "Email chưa được đăng ký"
            },
            capcha: {
                required: "Nhập mã bảo vệ",
                remote: "Sai mã bảo vệ"
            }
        },
        submitHandler: function(e) {
            alert("Reset mật khẩu thành công!"), e.submit()
        }
    }), $("#form_changepass").validate({
        rules: {
            oldpass: {
                required: !0,
                remote: {
                    url: "site/passed",
                    type: "post"
                }
            },
            newpass: {
                required: !0,
                minlength: 6
            },
            repass: {
                required: !0,
                minlength: 6,
                equalTo: "#newpass"
            }
        },
        messages: {
            oldpass: {
                required: "Vui lòng nhập mật khẩu cũ",
                remote: "Sai mật khẩu cũ"
            },
            newpass: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự"
            },
            repass: {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu tối thiểu 6 ký tự",
                equalTo: "Không khớp với mật khẩu mới"
            }
        },
        submitHandler: function(e) {
            alert("Thay đổi mật khẩu thành công!"), e.submit()
        }
    })
}), $("document").ready(function() {
    $("#btnSave").click(function() {
        html2canvas($("#form-letter"), {
            onrendered: function(e) {
                var t = e.toDataURL("image/png", 1),
                    a = $("#name_letter").val(),
                    i = $("#uid_letter").val();
                $.ajax({
                    cache: !1,
                    type: "POST",
                    url: "save.php",
                    data: {
                        img_val: t,
                        name: a,
                        uid: i
                    },
                    success: function() {
                        alert("Saved")
                    }
                })
            }
        })
    }), $("#btnDown").click(function() {
        var e = $("#ltid").val(),
            t = $("#lttype").val(),
            a = $("#letter-title").text();
        "" == a && (a = $("#tit_alias").val()), $.ajax({
            cache: !1,
            type: "POST",
            url: "site/download1",
            data: {
                id: e,
                type: t
            },
            success: function() {}
        }), html2canvas($("#form-letter"), {
            onrendered: function(e) {
                $("#img_val").val(e.toDataURL("image/png", 1)), document.getElementById("myForm").submit()
            }
        })
    })
}), $("document").ready(function() {
    $("#btnSaveCV").click(function() {
        html2canvas($("#form-cv"), {
            onrendered: function(e) {
                var t = e.toDataURL("image/jpeg", 1),
                    a = $("#cv-title").text(),
                    i = ($("#cvid").val(), $("#uid_cv").val());
                "" == a && (a = $("#cv_alias").val()), $.ajax({
                    cache: !1,
                    type: "POST",
                    url: "save.php",
                    data: {
                        img_val: t,
                        name: a,
                        uid: i
                    },
                    success: function() {
                        alert("Đã lưu CV dưới dạng ảnh")
                    }
                })
            }
        })
    })
});
var ALERT_TITLE = "Thông báo!",
    ALERT_BUTTON_TEXT = "Ok";

function createCustomAlert(e) {
    d = document, d.getElementById("modalContainer") || (mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div")), mObj.id = "modalContainer", mObj.style.height = d.documentElement.scrollHeight + "px", alertObj = mObj.appendChild(d.createElement("div")), alertObj.id = "alertBox", d.all && !window.opera && (alertObj.style.top = document.documentElement.scrollTop + "px"), alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth) / 2 + "px", alertObj.style.visiblity = "visible", h1 = alertObj.appendChild(d.createElement("h1")), h1.appendChild(d.createTextNode(ALERT_TITLE)), msg = alertObj.appendChild(d.createElement("p")), msg.innerHTML = e, btn = alertObj.appendChild(d.createElement("a")), btn.id = "closeBtn", btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT)), btn.href = "#", btn.focus(), btn.onclick = function() {
        return removeCustomAlert(), location.reload(), !1
    }, alertObj.style.display = "block")
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"))
}

function ful() {
    alert("Alert this pages")
}

function hidemsg() {
    $(".v-modal").remove(), $(".el-message-box__wrapper").remove(), location.reload()
}

function hide() {
    $(".v-modal").remove(), $(".el-message-box__wrapper").remove()
}
document.getElementById && (window.alert = function(e) {
    createCustomAlert(e)
});
