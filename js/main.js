$(function () {


        // 새로고침시 맨위로 셋팅
        $("html,body").delay(500).animate({
            scrollTop: "0"
        }, 100);
        //변수
        var page_nm = 0;
        var continual = 0;
        var sc_continual = 0;
        var pg = [];
        var win = $(window).height();

        var mob = 0;
        var ww = window.innerWidth;
        var mob_scroll = 400;
        var page_mtop = [];
        
        //모바일구분
        if (ww > 0 && ww <= 500) {
            mob = 1;
            $(".main_wrap").css({
                overflowY: "auto"
            });
            $(".menu_list").hide();
        } else {
            mob = 2;
        }
        //console.log(mob);
        
        //페이지별 top값
        var page_index = $(".page").index();
        $(".page").each(function (page_index, ele) {
            //console.log("page_index"+page_index);
            //console.log("ele"+ele);
            page_mtop[page_index] = $(".page").eq(page_index).offset().top;
            //console.log("page_mtop"+page_mtop[page_index]);
        });
        //console.log($("section").length);
        //for (var i = 0; i < $("section").length; i++) {
        //    pg[i] = $("section").eq(i).offset().top;
            //console.log(pg[i]);
        //}

        //안보이는 기본세팅
        $(".gnb_bg_list_wrap").fadeTo(100, 0);
        $(".new_wrap_bg, .new_title, .new_gallery_wrap").fadeOut();
        $(".reward_info, .bnt_login_wrap").fadeTo(100, 0);
        $(".coffee_area2").find(".menu").fadeOut();
        $(".co_title, .coffee_area_next, .co_list_wrap").fadeOut();
        //$(".gbox, .abtn").fadeTo(100, 0);
        $(".new_wrap_next_mobile").fadeOut();
        $(".reward_wrap_mobile").fadeOut();
        $(".coffee_wrap_next_mobile").fadeOut();
        $(".re_info_next").fadeOut();
        $(".reward_wrap_mobile").fadeOut();
        $(".reward_left_next_mobile.login").fadeOut();
        $(".reward_left_next_mobile.join").fadeOut();
        $(".new_wrap_next_mobile.mo1").fadeOut();
        $(".new_wrap_next_mobile.mo2").fadeOut();
        



        //gnb_bg
        var gnb_bg_list = function () {

            //console.log("사진이동");
            if (mob == 2) {
                tp = -50;
            } else if (mob == 1) {
                //console.log("모바일");
                tp = -50;
            }
            $(".gnb_bg_list.list_2").css({
                top: tp + "%"
            });
            setInterval(
                function () {
                    $(".gnb_bg_list.list_1").animate({
                        top: tp + "%"
                    }, 8000, "linear", function () {
                        $(this).append($(".gnb_bg_list.list_1").find("li").first()).css({
                            top: "0%"
                        })
                    })
                }

                , 8000);
            setInterval(
                function () {
                    $(".gnb_bg_list.list_2").animate({
                        top: "0%"
                    }, 8000, "linear", function () {
                        $(this).prepend($(".gnb_bg_list.list_2").find("li").last()).css({
                            top: tp + "%"
                        });
                    });

                }, 8000);
            setInterval(
                function () {
                    $(".gnb_bg_list.list_3").animate({
                        top: tp + "%"
                    }, 8000, "linear", function () {
                        $(this).append($(".gnb_bg_list.list_3").find("li").first()).css({
                            top: "0%"
                        })
                    })
                }

                , 8000);

        };
        gnb_bg_list();
        //new_show
        var new_show = function () {
            $(".new_gallery_wrap").fadeIn(1500);
            $(".new_title").fadeIn();
            $(".new_title_1").delay(500).animate({
                left: "10vw"
            }, 1000, "easeInOutCubic");
        };
        //reward_show
        var reward_show = function () {
            $(".title_4").animate({
                left: "0"
            }, 1000, "easeInOutCubic", function () {
                $(".reward_info, .bnt_login_wrap").fadeTo(1500, 1);
            });
        };
        //coffee_show
        var coffee_show = function () {

        };
        //reserve_show
        var reserve_show = function () {
            console.log("로딩완료");
            $("#move").draggable({
                axis: "x" //x축 고정
            }).css({
                transition: "all .8s ease-out"
            });


            //mousedown :마우스 누르는 시점 
            //mouseup : 마우스 눌럿다가 땔때 시점
            //mousemove : 마우스 포인터가 움직일때 
            //touchstart : 손가락이 닿을때
            //touchend: 손가락이 화면에서 떨어질때
            //touchmove : 손가락이 움직일때
            var move = $("#move");
            //위치이동한계설정
            //화면한계값 계산 
            var fpt = $(window).width() / 3;
            var lpt = move.width() - (fpt * 2);
            console.log("lpt" + lpt);
            console.log(fpt);
            //화면 위치고정 
            $("html,body").on("mousedown mouseup mousemove touchstart touchend touchmove", function () {
                //#move의 left값구하기 
                var mpos = $("#move").offset().left;
                console.log(mpos);
                //위치고정하기
                if (fpt < mpos) {
                    move.css({
                        left: fpt + "px"
                    })
                } else if (mpos < -lpt) {
                    move.css({
                        left: -lpt + "px"
                    })
                };
            });

        };



        //페이지이동후 
        var idx;
        var afterLoad = function (idx) {
            //console.log("페이지이동후!");

            //console.log("페이지번호" + page_nm);


            if (idx == 1) {
                console.log("2페이지");
                //gnb_flower 

                gnb_bg_list();
                $(".gnb_flower.num1").delay(1500).animate({
                    top: "0%"
                }, 1000, "easeOutCirc", function () {
                    $(this).animate({
                        top: "-35%"
                    }, 800, "easeInExpo").delay(6000).fadeOut();
                });
                $(".gnb_flower.num4").delay(1500).animate({
                    bottom: "0%"
                }, 1000, "easeOutCirc", function () {
                    $(this).animate({
                        bottom: "-35%"
                    }, 800, "easeInExpo").delay(6000).fadeOut();
                });
                $(".gnb_bg").delay(3000).animate({
                    backgroundColor: "transparent"
                }, 500);
                $(".gnb").delay(3000).animate({
                    backgroundColor: "transparent",
                    border: "0"
                }, 500);
                $(".gnb a").delay(2000).css({
                    textShadow: "0 0 2px #555"
                });
                $(".gnb_bg_list_wrap").delay(3000).fadeTo(2000, 1);;

            } else if (idx == 2) {
                //console.log("3페이지");
                $(".new_wrap_bg").fadeIn();
                $(".line_top").delay(1000).animate({
                    left: "0"
                }, 2000);
                $(".line_bottom").delay(1000).animate({
                    left: "0"
                }, 2000);
                $(".line_left").delay(1000).animate({
                    top: "0"
                }, 2000);
                $(".line_right").delay(1000).animate({
                    top: "0"
                }, 2000, new_show);
            } else if (idx == 3) {
                $(".reward_bg").delay(2000).fadeOut(600);
                $(".title_3").delay(1000).animate({
                    left: "0"
                }, 1000, "easeInOutCubic", reward_show);
            } else if (idx == 4) {
                $(".co_flower.num1").addClass("flower_top_show");
                $(".co_flower.num4").addClass("flower_bottom_show");
                $(".coffee_area2").find(".menu").delay(3500).fadeIn(700);
                $(".co_title, .coffee_area_next, .co_list_wrap").delay(3500).fadeIn(1000);
            } else if (idx == 5) {
                //console.log("마지막");
                $("#move").delay(1000).animate({
                    left: 0
                }, 2000, "easeInOutQuint", reserve_show);
                $(".re_info_next").delay(3000).fadeTo(3000, 1);

            }

        };
        name_nm = 0;

        //afterLoad(0);

        //스크롤 이동
        $(document).on("mousewheel DOMMouseScroll", function (e) {


            e = window.event || e;
            var delta = e.detail ? e.detail : e.wheelDelta;

            if (/Firefox/i.test(navigator.userAgent)) {
                delta = -delta;
            }


            $(".name").eq(name_nm).addClass("on");
            name_nm++;

            if (name_nm < 10) return true;

            //console.log(delta);
            if (sc_continual === 1) return true;
            sc_continual = 1;





            if (delta < 0) { //아래방향
                page_nm++;
                if (page_nm > 5) page_nm = 5;
            } else { //윗방향
                page_nm--;
                if (page_nm < 0) page_nm = 0;
            }
            console.log("page_nm/" + page_nm);

            //console.log(page_top);
            if (mob == 2) {//웹

                console.log("스크롤웹");
                $(".main_wrap").stop().animate({
                    scrollTop: page_mtop[page_nm] + "px"
                }, 2000, "easeInOutQuint", afterLoad(page_nm));
                console.log(page_mtop[page_nm]);
                setTimeout(function () {
                    sc_continual = 0;
                }, 3000);

            } else if (mob == 1) {//모바일
                console.log("스크롤모바일");
                $(".main_wrap").smoothWheel();
                var scTop = $(".main_wrap").scrollTop();
                //console.log("scTop"+scTop);

                if (scTop > page_mtop[1] - 500 && scTop < page_mtop[1] + 500) {
                    console.log("1페이지스타트");
                    afterLoad(1);
                }
                if (scTop > page_mtop[2] - 500 && scTop < page_mtop[2] + 500) {
                    console.log("2페이지스타트");
                    afterLoad(2);
                }
                if (scTop > page_mtop[3] - 500 && scTop < page_mtop[3] + 500) {
                    console.log("3페이지스타트");
                    afterLoad(3);
                }
                if (scTop > page_mtop[4] - 500 && scTop < page_mtop[4] + 500) {
                    console.log("4페이지스타트");
                    afterLoad(4);
                }
                if (scTop > page_mtop[5] - 500 && scTop < page_mtop[5] + 500) {
                    console.log("5페이지스타트");
                    afterLoad(5);
                }
                afterLoad(page_nm);
                setTimeout(function () {
                    sc_continual = 0;
                }, 1);
            }





        });

        //터치이동
        var touchs, touche;
        $(document).on("touchstart", function (e) {
            touchs = e.originalEvent.touches[0].screenY;
        });
        $(document).on("touchend", function (e) {
            touche = e.originalEvent.changedTouches[0].screenY;

            if (continual === 1) return true;
            continual = 1;





            var dir = touchs - touche;
            console.log("터치"+dir);

            var click_scroll=0;
            if (dir >= -30 && dir <= 30 && click_scroll==0) { //윗방향
                    return true;
                    setTimeout(function(){
                        click_scroll=1;
                    },100);
                
            } else if (dir > 30) { //아랫방향
                page_nm++;
                if (page_nm > 5) page_nm = 5;

            } else if (dir < -30) {
                page_nm--;
                if (page_nm < 0) page_nm = 0;

            }
            if (mob == 2) {

                console.log("웹");

                $(".main_wrap").stop().animate({
                    scrollTop: page_mtop[page_nm] + "px"
                }, 2000, "easeInOutQuint", afterLoad(page_nm));

                setTimeout(function () {
                    continual = 0;
                }, 3000);

            } else if (mob == 1) {
                console.log("모바일");


                $(".main_wrap").smoothWheel();

                var touchtop = $(".main_wrap").scrollTop();
                //console.log("터치위치는"+touchtop);
                //console.log("페이지1위치는"+page_mtop[1]);

                if (touchtop > page_mtop[1] - 500 && touchtop < page_mtop[1] + 500) {
                    //console.log("1페이지스타트");
                    afterLoad(1);
                }
                if (touchtop > page_mtop[2] - 500 && touchtop < page_mtop[2] + 500) {
                    afterLoad(2);
                }
                if (touchtop > page_mtop[3] - 500 && touchtop < page_mtop[3] + 500) {
                    afterLoad(3);
                }
                if (touchtop > page_mtop[4] - 500 && touchtop < page_mtop[4] + 500) {
                    afterLoad(4);
                }
                if (touchtop > page_mtop[5] - 500 && touchtop < page_mtop[5] + 500) {
                    afterLoad(5);
                }


                setTimeout(function () {
                    continual = 0;
                }, 1);
                //console.log(mob_scroll);
            }
        });
        //menu 클릭시 이동
        $(".menu_list, .gnb").find("li").click(function (e) {
            e.preventDefault();

            var menu_idx = $(this).index() + 2;
            //console.log($(this).parent().is(".gnb"));

            var page_top = $("section").eq(menu_idx).offset().top;
            //console.log("page_top/"+page_top);
            //console.log("menu_idx/"+menu_idx);

            $(".main_wrap").stop().animate({
                scrollTop: page_mtop[menu_idx] + "px"
            }, 2000, "easeInOutQuint", afterLoad(menu_idx));
        });
        //메뉴모바일
        $(".menu_mobile").hover(function () {
            $(".menu_list").slideDown(500);
        }, function () {
            $(".menu_list").slideUp(500);
        });
        $(".menu_mobile").toggle(function () {
            $(".menu_list").slideDown(500);
        }, function () {
            $(".menu_list").slideUp(500);
        });


        //new 
        $(".new_gallery").find("li").find("a").click(function (e) {
            e.preventDefault();
            var li_idx=$(this).parents("li").index();
            if (mob == 2) {
               
                console.log($(this).parents("li").index());
                
                $(".new_photo").fadeTo(10,0);
                $(".new_wrap_next").find(".new_photo").find("img").delay(20).attr("src","images/z"+(li_idx+1)+".png").parents(".new_photo").fadeTo(500,1);
            } else if (mob == 1) {
                
                console.log( $(".new_wrap_next_mobile.mo1").find(".new_photo").attr("src"));
                if(li_idx>=0 && li_idx<=2){
                    $(".new_wrap_next_mobile.mo1").find(".new_photo").attr("src","images/z"+(li_idx+1)+".png");
                     $(".new_wrap_next_mobile.mo1").fadeIn(500);
                    $(".new_wrap_next_mobile.mo1").fadeIn(500);
                }else if(li_idx>=3 && li_idx<=5){
                   console.log("여기");
                    $(".new_wrap_next_mobile.mo2").find(".new_photo").attr("src","images/z"+(li_idx+1)+".png");
                     $(".new_wrap_next_mobile.mo1").fadeIn(500);
                    $(".new_wrap_next_mobile.mo2").fadeIn(500);
                }
                
            }

        });

        $(".new_close").click(function () {
            $(".new_wrap_next_mobile").fadeOut(300);
        })

        //reward
        $(".reward_btn.login").click(function () {
            if (mob == 2) {
                $(".reward_left_next.login").animate({
                    left: "13%"
                }, 1000, "easeOutSine");
            } else if (mob == 1) {
                $(".reward_wrap_mobile").fadeIn();
                $(".reward_left_next_mobile.login").fadeIn(500);
            }
        });
        $(".reward_btn.joinus").click(function () {
            if (mob == 2) {
                $(".reward_left_next.join").animate({
                    left: "0%"
                }, 1000, "easeOutSine");
            } else if (mob == 1) {
                $(".reward_wrap_mobile").fadeIn();
                $(".reward_left_next_mobile.join").fadeIn(500);
            }
        });
        $(".btn_close").click(function () {
            $(".reward_left_next").animate({
                left: "-100%"
            }, 1000, "easeOutSine");
        });
        $(".btn_close.join_mb").click(function () {
            $(".reward_wrap_mobile").fadeOut(0);
            $(".reward_left_next_mobile.join").fadeOut(300);
        });
        $(".btn_login.close").click(function () {
            $(".reward_wrap_mobile").fadeOut(0);
            $(".reward_left_next_mobile.login").fadeOut(0);
            
        });

        //coffee
        $(".co_list").find("li").click(function (e) {
            e.preventDefault();
            var co_idx = $(this).index();
            if (mob == 1) {
                console.log(co_idx);
                if(co_idx>=0 && co_idx<3){
                    $(".coffee_wrap_next_mobile.mo1").find(".co_photo2").attr("src", "images/co" + (co_idx + 1) + ".png");
                    $(".coffee_wrap_next_mobile.mo1").fadeIn(500);
                }else if(co_idx>=3 && co_idx<6){
                    $(".coffee_wrap_next_mobile.mo2").find(".co_photo2").attr("src", "images/co" + (co_idx + 1) + ".png");
                    $(".coffee_wrap_next_mobile.mo2").fadeIn(500);
                }
                
            } else if (mob == 2) {
                $(".co_bg_next").find("img").attr("src", "images/co" + (co_idx + 1) + ".png");
            }
        });

        $(".co_close").click(function () {
            $(".coffee_wrap_next_mobile").fadeOut(300);
        });

        var slide_num;
        if (mob == 2) {
            slide_num = -35
        } else if (mob == 1) {
            slide_num = -110
        }
        //reserve 버벅거림 ??
        $(".lb").click(function (e) {
            e.preventDefault();

            $(".re_list").prepend($(".re_list").find("li").last()).css({
                left: slide_num + "%"
            }).animate({
                left: "0%"
            }, 500, "easeOutSine");
        });
        $(".rb").click(function (e) {
            e.preventDefault();

            $(".re_list").animate({
                left: slide_num + "%"
            }, 500, "easeOutSine", function () {
                $(".re_list").append($(".re_list").find("li").first()).css({
                    left: "0%"
                });
            });

        });
  
});