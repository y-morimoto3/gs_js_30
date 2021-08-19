
    
// 大槻
// マウスオーバーでサイコロ回る
$('#form_1').mouseover(function () { 



        //候補を配列で設定
        let aryList = ['img/dice_1.png','img/dice_1.png','img/dice_2.png','img/dice_3.png','img/dice_4.png','img/dice_5.png','img/dice_6.png'];
        
        //グローバル変数
        let key = 0;
        let max_len = aryList.length - 1;
        let randStart;
        let speed = 50; //シャッフルスピード
        
        //シャッフル関数
        let randShuffle= function(){
            if(key > max_len) key = 0;
            $('#sai_1').attr('src',aryList[key]);
            $('#sai_2').attr('src',aryList[key]);
            $('#sai_3').attr('src',aryList[key]);
            key++;
        }
        //シャッフル開始
        randStart = setInterval(randShuffle, speed);


        $('.zawa1').attr('src','img/zawa.png').fadeToggle(1000);
        $('.zawa2').attr('src','img/zawa.png').fadeToggle(700);


        //シャッフル停止
        $("#form_1").click(function(){
        clearInterval(randStart);


        $('.zawa1').attr('src','');
        $('.zawa2').attr('src','');

        });



});


        // ボタンを押して目を出す
        $(function ootuki(){
            $("#form_1").click(function(){


        
        // 賭け金を抜く

            let kakekin = $('input[value]').val();
            console.log(kakekin);

        // 賭け金を引く
            let ookin = $("#perica_o").text();
            console.log(ookin);

            let keisano = ookin - kakekin ;
            console.log(keisano * 2 ) ;

            let modosio = $("#perica_o").text(keisano);

            let kkin = $("#perica_k").text();
            console.log(kkin);

            let keisank = kkin - kakekin ;
            console.log(keisank * 2) ;

            let modosiok = $("#perica_k").text(keisank);



        // サイコロの数字
            let sai_1 = Math.floor(Math.random() *6) +1;
            console.log(sai_1);
            
            let sai_2 = Math.floor(Math.random() *6) +1;
            console.log(sai_2);
            
            let sai_3 = Math.floor(Math.random() *6) +1;
            console.log(sai_3);


        // サイコロを降った結果を画像名に変更
            let kekka1 = ("img/dice_" + sai_1 +".png");
            console.log(kekka1);

            let kekka2 = ("img/dice_" + sai_2 +".png");
            console.log(kekka2);

            let kekka3 = ("img/dice_" + sai_3 +".png");
            console.log(kekka3);

        // 画像を変換
            let img_1 = document.getElementById("sai_1");
            let src_1 = img_1.getAttribute('src');
            console.log(src_1);
            img_1.setAttribute('src', kekka1);

            let img_2 = document.getElementById("sai_2");
            let src_2 = img_2.getAttribute('src');
            console.log(src_2);
            img_2.setAttribute('src', kekka2);

            let img_3 = document.getElementById("sai_3");
            let src_3 = img_3.getAttribute('src');
            console.log(src_2);
            img_3.setAttribute('src', kekka3);
            

        // 出目の確認と役名

            let teki = (""+ sai_1 + sai_2 +sai_3);
            console.log(teki);

            // let point = (funtion(){

            if (sai_1 === sai_2 && sai_2 === sai_3){
                console.log(sai_2 + "のゾロ目");
                let x = document.getElementById("yakumei");
                x.innerHTML = sai_2 + "のゾロ目";

            }else if (teki === '123' || teki ==='132' || teki ==='231' || teki ==='213' || teki ==='321' || teki ==='312'){
                    console.log("ヒフミ");
                let x = document.getElementById("yakumei");
                x.innerHTML = "ヒフミ";

            }else if (teki === '456' || teki ==='465' || teki ==='564' || teki ==='546' || teki ==='645' || teki ==='654'){
                    console.log("ジゴロ");
                let x = document.getElementById("yakumei");
                x.innerHTML = "ジゴロ";

            }else if (teki === '111' ){
                    console.log("ピンゾロ");
                let x = document.getElementById("yakumei");
                x.innerHTML = "ピンゾロ";

            }else if (sai_1 === sai_2 && sai_2 !== sai_3){
                    console.log(sai_3+"の目");
                let x = document.getElementById("yakumei");
                x.innerHTML = sai_3+"の目";

            }else if (sai_2 === sai_3 && sai_3 !== sai_1){
                    console.log(sai_1+"の目");
                let x = document.getElementById("yakumei");
                x.innerHTML = sai_1+"の目";

            }else if (sai_1 === sai_3 && sai_3 !== sai_2){
                    console.log(sai_2+"の目");
                let x = document.getElementById("yakumei");
                x.innerHTML = sai_2+"の目";

            }else if (sai_1 !== sai_2 && sai_2 !== sai_3){
                    console.log("目なし");
                let x = document.getElementById("yakumei");
                x.innerHTML = "目なし";
            }

        })

});



        // カイジ
        // マウスオーバーでサイコロ回る
        $('#form_2').mouseover(function () { 
            
        
            //候補を配列で設定
            let aryList = ['img/dice_1.png','img/dice_1.png','img/dice_2.png','img/dice_3.png','img/dice_4.png','img/dice_5.png','img/dice_6.png'];
            
            //グローバル変数
            let key = 0;
            let max_len = aryList.length - 1;
            let randStart;
            let speed = 50; //シャッフルスピード
            
            //シャッフル関数
            
            let randShuffle= function(){
                if(key > max_len) key = 0;
                $('#sai_4').attr('src',aryList[key]);
                $('#sai_5').attr('src',aryList[key]);
                $('#sai_6').attr('src',aryList[key]);
                key++;
            }
           //シャッフル開始
        randStart = setInterval(randShuffle, speed);


        $('.zawa1').attr('src','img/zawa.png').fadeToggle(1000);
        $('.zawa2').attr('src','img/zawa.png').fadeToggle(700);


        //シャッフル停止
        $("#form_2").click(function(){
        clearInterval(randStart);


        $('.zawa1').attr('src','');
        $('.zawa2').attr('src','');

        });
        });




        // ボタンを押して数字を出す
        $(function kaiji(){
            $("#form_2").click(function(){
        
            let sai_4 = Math.floor(Math.random() *6) +1;
            console.log(sai_4);
            
            let sai_5 = Math.floor(Math.random() *6) +1;
            console.log(sai_5);
            
            let sai_6 = Math.floor(Math.random() *6) +1;
            console.log(sai_6);

        // サイコロを降った結果を画像名に変更
            let kekka4 = ("img/dice_" + sai_4 +".png");
            console.log(kekka4);

            let kekka5 = ("img/dice_" + sai_5 +".png");
            console.log(kekka5);

            let kekka6 = ("img/dice_" + sai_6 +".png");
            console.log(kekka6);

        // 画像を変換
            let img_4 = document.getElementById("sai_4");
            let src_4 = img_4.getAttribute('src');
            console.log(src_4);
            img_4.setAttribute('src', kekka4);

            let img_5 = document.getElementById("sai_5");
            let src_5 = img_5.getAttribute('src');
            console.log(src_5);
            img_5.setAttribute('src', kekka5);

            let img_6 = document.getElementById("sai_6");
            let src_6 = img_6.getAttribute('src');
            console.log(src_6);
            img_6.setAttribute('src', kekka6);
            

        // 出目の確認と役名
            let kaiji = (""+ sai_4 + sai_5 +sai_6);
            console.log(kaiji);

            if (sai_4 === sai_5 && sai_5 === sai_6){
                console.log(sai_5 + "のゾロ目");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = sai_5 + "のゾロ目";
                

            }else if (kaiji === '123' || kaiji ==='132' || kaiji ==='231' || kaiji ==='213' || kaiji ==='321' || kaiji ==='312'){
                    console.log("ヒフミ");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = "ヒフミ";

            }else if (kaiji === '456' || kaiji ==='465' || kaiji ==='564' || kaiji ==='546' || kaiji ==='645' || kaiji ==='654'){
                    console.log("ジゴロ");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = "ジゴロ";

            }else if (kaiji === '111' ){
                    console.log("ピンゾロ");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = "ピンゾロ";

            }else if (sai_4 === sai_5 && sai_5 !== sai_6){
                    console.log(sai_6+"の目");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = sai_6+"の目";

            }else if (sai_5 === sai_6 && sai_6 !== sai_4){
                    console.log(sai_4+"の目");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = sai_4+"の目";

            }else if (sai_4 === sai_6 && sai_6 !== sai_5){
                    console.log(sai_5+"の目");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = sai_5+"の目";

            }else if (sai_4 !== sai_5 && sai_5 !== sai_6){
                    console.log("目なし");
                let x = document.getElementById("yakumei_2");
                x.innerHTML = "目なし";
            }

                // 役名を点数化

                let ootukitensu = yakumei.innerText
                // let tensu = document.getElementById("yakumei");
                console.log(ootukitensu);

                let kaijitensu = yakumei_2.innerText
                // let tensu = document.getElementById("yakumei_2");
                console.log(kaijitensu);

                    let yaku = {
                        "ヒフミ":1,
                        "目なし":2,
                        "1の目":3,
                        "2の目":4,
                        "3の目":5,
                        "4の目":6,
                        "5の目":7,
                        "6の目":8,
                        "ジゴロ":9,
                        "2のゾロ目":10,
                        "3のゾロ目":11,
                        "4のゾロ目":12,
                        "5のゾロ目":13,
                        "6のゾロ目":14,
                        "ピンゾロ":15
                    };
            
                    console.log(yaku[ootukitensu]);
                    console.log(yaku[kaijitensu]);
            
                    let ootukipoint = (yaku[ootukitensu]);
            
                    console.log(ootukipoint);

                    let kaijipoint = (yaku[kaijitensu]);

                    console.log(kaijipoint);



                // 大槻とカイジの得点を比較_勝負判定

                    if (ootukipoint === kaijipoint){
                        console.log("引き分け");
                        let syouhai = document.getElementById("kekka");
                        syouhai.innerHTML ="引き分け";

                    }else if(ootukipoint < kaijipoint){
                        console.log("勝利");
                        let syouhai = document.getElementById("kekka");
                        syouhai.innerHTML ="勝利";

                    }else if(ootukipoint > kaijipoint){
                        console.log("敗北");
                        let syouhai = document.getElementById("kekka");
                        syouhai.innerHTML ="敗北";
                    }

                    
                //賭け金を計算して戻す
                // 
                let deme = {
                    "ヒフミ":-2,
                    "目なし":1,
                    "1の目":1,
                    "2の目":1,
                    "3の目":1,
                    "4の目":1,
                    "5の目":1,
                    "6の目":1,
                    "ジゴロ":2,
                    "2のゾロ目":3,
                    "3のゾロ目":3,
                    "4のゾロ目":3,
                    "5のゾロ目":3,
                    "6のゾロ目":3,
                    "ピンゾロ":5
                };

                console.log(deme[kaijitensu])
                console.log(deme[ootukitensu])


                // 勝利の時：賭け金にdemeの金額掛けて、カイジにプラス、大槻からマイナス
                let a =$("#kekka").text();
                console.log(a);

                let kakekin2 = $('input[value]').val();
                console.log(kakekin2);

                let haito = (kakekin2 * deme[kaijitensu]);
                console.log(haito);

                let ookin2 = $("#perica_o").text();
                console.log(ookin2 * 2 );

                let kkin2 = $("#perica_k").text();
                console.log(kkin2 * 2 );

                num1 = parseInt(kkin2);
                num2 = parseInt(ookin2);
                num3 = parseInt(haito);
                num4 = parseInt(kakekin2);


                if (a === "勝利"){

                    let keisano2 = num2 - num3 + num4 ;
                    console.log(keisano2) ;

                    let modosio2 = $("#perica_o").text(keisano2);

                    let keisank2 = num1 + num3 + num4 ;
                    console.log(keisank2) ;

                    let modosiok2 = $("#perica_k").text(keisank2);


                }else if (a === "敗北") {

                    let keisano2 = num2 + num3 + num4 ;
                    console.log(keisano2) ;

                    let modosio2 = $("#perica_o").text(keisano2);

                    let keisank2 = num1 - num3 + num4 ;
                    console.log(keisank2) ;

                    let modosiok2 = $("#perica_k").text(keisank2);
                    
                }else if (a === "引き分け"){

                    let keisano2 = num2 + num4 ;
                    console.log(keisano2) ;

                    let modosio2 = $("#perica_o").text(keisano2);

                    let keisank2 = num1 + num4 ;
                    console.log(keisank2) ;

                    let modosiok2 = $("#perica_k").text(keisank2);

                }


                // 持ち金がゼロになったら

                let ookin3 = $("#perica_o").text();
                let kkin3 = $("#perica_k").text();


                if (ookin3 <= 0) {
                    $("#kekka").text("圧倒的勝利");
                    $("#gazo1").attr('src',"img/ookachi.jpeg");
                    
                }else if (kkin3 <= 0){
                    $("#kekka").text("強制労働");
                    $("#gazo1").attr('src',"img/roudou.jpg");
                }


        })

        });

            // もう一度ボタン
            $("#form_3").click(function(){
                window.location.reload();
            })



