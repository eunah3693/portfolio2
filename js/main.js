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
        var scTop = $(".main_wrap").scrollTop();
        
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

        var new_photo_title=["애플 쿠키 라떼","아이스 애플 쿠키 라떼", "아이스 블론드 애플 쿠키 라떼", "아이스 블랙 글레이즈드 라떼" , "블론드 애플 쿠키 라떼" , "블랙 글레이즈드 라떼"];
        var new_photo_info=["제철사과와 커피의 달콤 쌉싸름한 만남. 국내산 청송 사과 쿠키가 토핑이된 매력적인 맛의 카페 라떼로 부드럽게 리프레시 해보세요", "제철사과와 커피의 달콤 쌉싸름한 만남.국내산 청송 사과 쿠키가 토핑이된 매력적인 맛의 카페 라떼로 부드럽게 리프레시 해보세요","제철사과와 커피의 달콤 쌉싸름한 만남. 국내산 청송 사과 쿠키가 토핑이된 매력적인 맛의 카페 라떼를 블론드 원두로 즐겨보세요", "진한 커피와 달콤한 글레이즈드 크림의 부드러운 만남. 깊어가는 가을, 다시 돌아온 스타벅스의 아인슈페너를 즐겨보세요", "제철사과와 커피의 달콤 쌉싸름한 만남. 국내산 청송 사과 쿠키가 토핑이된 매력적인 맛의 카페 라떼를 블론드 원두로 즐겨보세요", "진한 커피와 달콤한 글레이즈드 크림의 부드러운 만남. 깊어가는 가을, 다시 돌아온 스타벅스의 아인슈페너를 즐겨보세요"];
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
                    
                    $(".main_wrap").stop().animate({
                        scrollTop: page_mtop[2] + "px"
                    }, 10, "easeInOutQuint");
                    
                }else if(li_idx>=3 && li_idx<=5){
                   console.log("여기");
                    $(".new_wrap_next_mobile.mo2").find(".new_photo").attr("src","images/z"+(li_idx+1)+".png");
                     $(".new_wrap_next_mobile.mo2").fadeIn(500);
                    $(".main_wrap").stop().animate({
                        scrollTop: (page_mtop[2]+win) + "px"
                    }, 10, "easeInOutQuint");
                }
                
                
            }
            
            $(".new_photo_wrap").find("span").text(new_photo_title[li_idx]);
            $(".new_photo_wrap").find("p").text(new_photo_info[li_idx]);
            

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
        
        var co_info_title=["House Blend 250g","Breakfast Blend 250g", "Colombia 250g", "Kenya 250g", "Ethiopia 250g", "Decaf House Blend 250g"];
        var co_info_span=["깔끔하고 균형잡힌 맛이 특징인 중간정도 무게감의 커피 스타벅스에서 가장 인기 있는 커피 입니다. 하우스 블렌드는 중간 정도의 무게감을 가지고 있으며, 깨끗하고 깔끔한 맛과 너트향의 풍미가 잘 조화된 라틴 아메리카 혼합커피입니다.", "가벼운 무게감에 상쾌한 느낌의 아침에 마시기 좋고 밝은 하루를 시작하기 좋은 커피!브렉퍼스트 블렌드는 가볍게 로스팅 되어 아침에 마실 때 깔끔한 느낌이 더욱 살아납니다. 혀 위에서 춤추는 선명한 느낌은 마치 오렌지쥬스를 마실때와 같은 청량감을 느끼게 합니다. 깔끔한 뒷 맛이 일품인 이 커피로 상쾌한 하루를 시작해 보시길 바랍니다.","견과류의 풍미를 간직한 부드럽고 균형잡힌 커피 촉촉한 감촉과 진한 풍미가 있는 이 경이로운 콜롬비아산 커피는 달지 않은 호두 및 부드러운 견과류의 느낌이 살아 있습니다.","열대성 과일의 향기와 신비로움으로 깔끔한 주스와 같은 느낌을 가진 커피케냐 커피는 주로 상큼하고 깔끔한 맛과 함께 자몽과 와인의 풍미를 지니며, 입 안에 꽉 찬 무게감을 가지고 있습니다." , "다크초콜릿의 벨벳 같은 부드러움과 후추 같은 스파이시함, 달콤한 감귤류의 풍미가 특징인 원두에티오피아는 커피의 발상지인 만큼 다양한 커피에 대한 이야기들과 뛰어난 퀄리티의 커피를 생산하는 곳입니다. 매우 아름답고도, 정교한 이 원두는 에티오피아의 풍요로운 유산을 기리는 커피의식에 대한 존경심과 절묘한 조화를 이룹니다.","깔끔하고 균형잡힌 맛이 특징인 중간정도 무게감의 커피스타벅스에서 가장 인기 있는 커피 중 하나인 하우스 블렌드는 중간 정도의 무게감을 가지고 있으며, 깨끗하고 깔끔한 맛과 너트향의 풍미가 잘 조화된 라틴 아메리카 혼합커피입니다."];
        //coffee
        $(".co_list").find("li").click(function (e) {
            e.preventDefault();
            var co_idx = $(this).index();
            
            //console.log(obj);
            if (mob == 1) {
                //console.log(co_idx);
                if(co_idx>=0 && co_idx<3){
                    $(".coffee_wrap_next_mobile.mo1").find(".co_photo2").attr("src", "images/co" + (co_idx + 1) + ".png");
                    $(".coffee_wrap_next_mobile.mo1").fadeIn(500);
                    $(".main_wrap").stop().animate({
                        scrollTop: page_mtop[4] + "px"
                    }, 10, "easeInOutQuint");
                    
                }else if(co_idx>=3 && co_idx<6){
                    $(".coffee_wrap_next_mobile.mo2").find(".co_photo2").attr("src", "images/co" + (co_idx + 1) + ".png");
                    $(".coffee_wrap_next_mobile.mo2").fadeIn(500);
                    $(".main_wrap").stop().animate({
                        scrollTop: (page_mtop[4]+win) + "px"
                    }, 10, "easeInOutQuint");
                }
                
                
            } else if (mob == 2) {
                $(".co_bg_next").find("img").attr("src", "images/co" + (co_idx + 1) + ".png");
            }
            
            $(".co_info").find("h2").text(co_info_title[co_idx]);
            $(".co_info").find("span").text(co_info_span[co_idx]);
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