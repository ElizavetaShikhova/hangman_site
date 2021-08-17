window.onload = init;

function init(){
    canvas = document.getElementById("hangman");
    ctx = canvas.getContext('2d');

    button1 = document.getElementById("а");
    button1.onclick = But1;

    button2 = document.getElementById("б");
    button2.onclick = But2;

    button3 = document.getElementById("в");
    button3.onclick = But3;

    button4 = document.getElementById("г");
    button4.onclick = But4;

    button5 = document.getElementById("д");
    button5.onclick = But5;

    button6 = document.getElementById("е");
    button6.onclick = But6;

    button7 = document.getElementById("ё");
    button7.onclick = But7;

    button8 = document.getElementById("ж");
    button8.onclick = But8;

    button9 = document.getElementById("з")
    button9.onclick = But9;

    button10 = document.getElementById("и")
    button10.onclick = But10;

    button11 = document.getElementById("й")
    button11.onclick = But11;

    button12 = document.getElementById("к")
    button12.onclick = But12;

    button13 = document.getElementById("л")
    button13.onclick = But13;

    button14 = document.getElementById("м")
    button14.onclick = But14;

    button15 = document.getElementById("н")
    button15.onclick = But15;

    button16 = document.getElementById("о")
    button16.onclick = But16;

    button17 = document.getElementById("п")
    button17.onclick = But17;

    button18 = document.getElementById("р")
    button18.onclick = But18;

    button19 = document.getElementById("с")
    button19.onclick = But19;

    button20 = document.getElementById("т")
    button20.onclick = But20;

    button21 = document.getElementById("у")
    button21.onclick = But21;

    button22 = document.getElementById("ф")
    button22.onclick = But22;

    button23 = document.getElementById("х")
    button23.onclick = But23;

    button24 = document.getElementById("ц")
    button24.onclick = But24;

    button25 = document.getElementById("ч")
    button25.onclick = But25;

    button26 = document.getElementById("ш")
    button26.onclick = But26;

    button27 = document.getElementById("щ")
    button27.onclick = But27;

    button28 = document.getElementById("ъ")
    button28.onclick = But28;

    button29 = document.getElementById("ы")
    button29.onclick = But29;

    button30 = document.getElementById("ь")
    button30.onclick = But30;

    button31 = document.getElementById("э")
    button31.onclick = But31;

    button32 = document.getElementById("ю")
    button32.onclick = But32;

    button33 = document.getElementById("я")
    button33.onclick = But33;

    reset()
}

function But1(){
    if (flag){
        checkLetter('а');
        button1.setAttribute('disabled', true);}
}

function But2(){
    if (flag){
        checkLetter('б');
        button2.setAttribute('disabled', true);}
}

function But3(){
    if (flag){
    checkLetter('в');
    button3.setAttribute('disabled', true);}
}

function But4(){
    if (flag){
    checkLetter('г');
    button4.setAttribute('disabled', true);}
}

function But5(){
    if (flag){
    checkLetter('д');
    button5.setAttribute('disabled', true);}
}

function But6(){
    if (flag){
    checkLetter('е');
    button6.setAttribute('disabled', true);}
}

function But7(){
    if (flag){
    checkLetter('ё');
    button7.setAttribute('disabled', true);}
}

function But8(){
    if (flag){
    checkLetter('ж');
    button8.setAttribute('disabled', true);}
}

function But9(){
    if (flag){
    checkLetter('з');
    button9.setAttribute('disabled', true);}
}

function But10(){
    if (flag){
    checkLetter('и');
    button10.setAttribute('disabled', true);}
}

function But11(){
    if (flag){
    checkLetter('й');
    button11.setAttribute('disabled', true);}
}

function But12(){
    if (flag){
    checkLetter('к');
    button12.setAttribute('disabled', true);}
}

function But13(){
    if (flag){
    checkLetter('л');
    button13.setAttribute('disabled', true);}
}

function But14(){
    if (flag){
    checkLetter('м');
    button14.setAttribute('disabled', true);}
}

function But15(){
    if (flag){
    checkLetter('н');
    button15.setAttribute('disabled', true);}
}

function But16(){
    if (flag){
    checkLetter('о');
    button16.setAttribute('disabled', true);}
}

function But17(){
    if (flag){
    checkLetter('п');
    button17.setAttribute('disabled', true);}
}

function But18(){
    if (flag){
    checkLetter('р');
    button18.setAttribute('disabled', true);}
}

function But19(){
    if (flag){
    checkLetter('с');
    button19.setAttribute('disabled', true);}
}

function But20(){
    if (flag){
    checkLetter('т');
    button20.setAttribute('disabled', true);}
}

function But21(){
    if (flag){
    checkLetter('у');
    button21.setAttribute('disabled', true);}
}

function But22(){
    if (flag){
    checkLetter('ф');
    button22.setAttribute('disabled', true);}
}

function But23(){
    if (flag){
    checkLetter('х');
    button23.setAttribute('disabled', true);}
}

function But24(){
    if (flag){
    checkLetter('ц');
    button24.setAttribute('disabled', true);}
}

function But25(){
    if (flag){
    checkLetter('ч');
    button25.setAttribute('disabled', true);}
}

function But26(){
    if (flag){
    checkLetter('ш');
    button26.setAttribute('disabled', true);}
}

function But27(){
    if (flag){
    checkLetter('щ');
    button27.setAttribute('disabled', true);}
}

function But28(){
    if (flag){
    checkLetter('ъ');
    button28.setAttribute('disabled', true);}
}

function But29(){
    if (flag){
    checkLetter('ы');
    button29.setAttribute('disabled', true);}
}

function But30(){
    if (flag){
    checkLetter('ь');
    button30.setAttribute('disabled', true);}
}

function But31(){
    if (flag){
    checkLetter('э');
    button31.setAttribute('disabled', true);}
}

function But32(){
    if (flag){
    checkLetter('ю');
    button32.setAttribute('disabled', true);}
}

function But33(){
    if (flag){
    checkLetter('я');
    button33.setAttribute('disabled', true);}
}


function checkLetter(letter){
    if (player.secretword.indexOf(letter) >-1 && lifes > 0){
        for (let i = 0; i < player.secretword.length;i++){
            if (player.secretword[i] == letter){
                guestword[i] = letter
            }
        }
    } else if (lifes > 1){
        lifes--;
        if (lifes == lifes_f - 1){ctx.clearRect(0, 0, canvas.width, canvas.height)} //начальное кол-во -1
        document.getElementById("result").innerHTML = 'Осталось жизней:'+ lifes

        if (lifes_f == 8){
            if (lifes == 7){draw_gallow1(); draw_gallow0()
            } else if (lifes == 6) {draw_gallow2()
            } else if (lifes == 5) {draw_head()
            } else if (lifes == 4) {draw_body()
            } else if (lifes == 3) {draw_hand1()
            } else if (lifes == 2) {draw_hand2()
            } else if (lifes == 1) {draw_leg1()}
        } else if (lifes_f == 9){
            if (lifes == 8) {draw_gallow0()
            } else if (lifes == 7) {draw_gallow1()
            } else if (lifes == 6) {draw_gallow2()
            } else if (lifes == 5) {draw_head()
            } else if (lifes == 4) {draw_body()
            } else if (lifes == 3) {draw_hand1()
            } else if (lifes == 2) {draw_hand2()
            } else if (lifes == 1) {draw_leg1()}
        } else if (lifes_f==7){
            if (lifes == 6) {draw_gallow0();draw_gallow1();draw_gallow2()
            } else if (lifes == 5) {draw_head()
            } else if (lifes == 4) {draw_body()
            } else if (lifes == 3) {draw_hand1()
            } else if (lifes == 2) {draw_hand2()
            } else if (lifes == 1) {draw_leg1()}
        } else if (lifes_f == 6){
            if (lifes == 5) {draw_gallow0();draw_gallow1();draw_gallow2()
            } else if (lifes == 4) {draw_body();draw_head()
            } else if (lifes == 3) {draw_hand1()
            } else if (lifes == 2) {draw_hand2()
            } else if (lifes == 1) {draw_leg1()}
        }


    }else{
        document.getElementById("result").innerHTML = 'Ты проиграл'
        flag = 0
        draw_leg2()
        music(0)
        setTimeout(reset,2500)
    }
   prword()
   music(1)
}


function reset() {
    flag = 1
    player = new person();
    
    var n = document.getElementById("select").options.selectedIndex;
    lifes = document.getElementById("select").options[n].value;
    lifes_f = lifes
    if (lifes == -1){
        lifes = 8
    }    
    
    let a = player.secretword.replace(/\S/g,"_")
    guestword = a.split('')
    guestword[0] = player.secretword[0]
    guestword[player.secretword.length - 1] = player.secretword[player.secretword.length - 1]
    a = ''
    for (let i = 0; i < player.secretword.length;i++){
        a = a + guestword[i] + ' '
        }
    document.getElementById("word").innerHTML = a;
    document.getElementById("result").innerHTML = 'Осталось жизней:'+ lifes
    let b = document.querySelectorAll(':disabled')
    for (let elem of b) {
        elem.disabled=false;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(221, 70, 65, 0, 2*Math.PI, false);
    ctx.lineWidth = 7;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(202, 62, 6, 0, 2*Math.PI, false);
    ctx.lineWidth = 6;
    ctx.stroke();
   

    ctx.beginPath();
    ctx.arc(240, 62, 6, 0, 2*Math.PI, false);
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(221, 90, 15, 0, Math.PI, false );
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(221, 135)
    ctx.lineTo(221, 343); //body
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(221, 140) //r had
    ctx.lineTo(278, 213);
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(221, 140)
    ctx.lineTo(154, 140); //l hand
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(156, 140)
    ctx.lineTo(125, 105); //l hand
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(221, 343)
    ctx.lineTo(269, 476);
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(221, 343)
    ctx.lineTo(173, 476);
    ctx.lineWidth = 8;
    ctx.stroke();
}

function chooseWord() {
    var words = ['толерантность', 'либерализм', 'экспонат', 'пышность', 'экспозиция', 'эпиграф', 'барбекю', 'парашютист', 'сущность', 'поэтапность', 'возвышенность', 'история', 'везение', 'биение', 'больница', 'ремень', 'сорняк', 'сессия', 'лесник', 'вестибюль', 'беляш', 'одноклассник', 'глушитель', 'беда', 'заказчик', 'шахматист', 'номер', 'заработок', 'интерес', 'тарелка', 'пингвин', 'полнота', 'пустота', 'парфюм', 'срок', 'конкурс', 'судьба', 'внучка', 'комета', 'синяк', 'поведение', 'квартира', 'пластырь', 'наездник', 'состав', 'еженедельник', 'простота', 'мелочь', 'шарманка', 'хулиганство', 'лисица', 'столица', 'базар', 'зевок', 'всадник', 'проспект', 'муравейник', 'аттестат', 'сафари', 'принтер', 'диапазон', 'скорпион', 'раствор', 'гражданка',
    'тротуар', 'супруг', 'чистка', 'ремонт', 'певец', 'виноград', 'список', 'гранит', 'кислород', 'бизнес', 'постель', 'затишье', 'дубрава', 'менеджмент', 'кожура', 'космолог', 'атака', 'стопа', 'правительство', 'зубочистка', 'человек', 'челюсть', 'религия', 'бульдог', 'бочка', 'инвалид', 'победитель', 'печень', 'вентиляция', 'десна', 'наклейка', 'ослица', 'иностранец', 'парник', 'царица', 'яблоко', 'миссия', 'предмет', 'жемчужина', 'лекция', 'свёкла', 'папа', 'гадание', 'изумруд', 'приёмник', 'пожарник', 'биолог', 'пятка', 'скворечник', 'гуашь', 'спичка', 'кофеин', 'эгоизм', 'смола', 'помощник', 'столбец', 'оправдание', 'константа', 'разведка', 'информация', 'дракон', 'зверинец', 'щётка', 'воробей', 'фотосинтез', 'щенок', 'застёжка', 'мель', 'задача', 'матрёшка', 'полководец', 'банкир', 'теннис', 'зритель', 'эскимо', 'гренка', 'стрекоза', 'ящерица', 'пианист', 'водопад', 'симптом', 'петля', 'олицетворение', 'патология', 'субтропики', 'лекарь', 'предосторожность', 'монархист', 'социум', 'клякса', 'послушание', 'прикол', 'шифровка', 'субмарина', 'гладиолус', 'сообщество', 'трансформация', 'благополучие', 'капелла', 'недоумение', 'побережье', 'затычка', 'решение', 'алкоголь', 'шуруп', 'воровка', 'колодец', 'кабан', 'команда',
    'бордель', 'ловушка', 'буква', 'опера', 'сектор', 'математика', 'пароварка', 'невезение', 'глубина', 'штука', 'справочник',
    'вождь', 'хобот', 'ширинка', 'усталость', 'служитель', 'спальная', 'видео', 'просьба', 'фишка', 'рукопись', 'ракетчик', 'каблук', 'шрифт', 'палец', 'ножка', 'халва', 'черника', 'незнайка', 'компания', 'работница', 'мышь', 'исследование', 'кружка',
    'мороженое', 'сиденье', 'пулемёт', 'печь', 'солист', 'свёкла', 'стая', 'зелье', 'дума', 'посылка', 'коготь', 'семафор', 'брат', 'различие', 'плоскостопие', 'двигатель', 'сфера', 'тюльпан', 'затвор', 'внедорожник', 'самурай', 'алгоритм', 'параграф', 'глаз', 'медалист', 'пульт', 'поводок', 'подлежащее', 'бунт', 'удочка', 'диспетчер', 'монитор', 'вдова', 'пиратство', 'астролог', 'сосед', 'изобретатель', 'танец', 'затишье', 'пластелин', 'маска', 'блоха', 'судьба', 'сияние', 'рукавица', 'филе', 'заплыв', 'сёмга', 'гиппопотам', 'мастер', 'походка', 'ландыш', 'яблоня', 'кляча', 'свёртываемость', 'раствор', 'солод', 'спорт', 'шифер', 'прощение', 'стопка', 'побег', 'простота', 'запах', 'беседа', 'варенье', 'пароль', 'актёр', 'вырубка', 'гвоздь', 'скальпель', 'профессор', 'казан', 'скорбь', 'извоз', 'добавка', 'тропа', 'космонавт', 'грифель', 'лауреат', 'борец', 'канистра', 'олимпиада', 'оплата', 'спирт', 'перекрёсток', 'влажность', 'лотерея', 'насморк', 'оправдание', 'мушкетёр', 'санитария', 'опрятность', 'неряшливость', 'фляга', 'приключение', 'канарейка', 'шалун', 'невежество', 'пион', 'убыль', 'выделка',
    'путник', 'робототехника', 'неразбериха', 'рифмоплёт', 'шовинизм', 'ходатайство', 'шагомер', 'прохвост', 'акушер', 'палеозой', 'уведомление', 'оторва', 'кровоподтёк', 'хамство', 'хутор', 'фальсификация', 'параболоид', 'передвижение', 'киловатт', 'оксид', 'морозоустойчивость', 'хулиганьё', 'навес', 'старшинство', 'напильник', 'возмездие', 'откровенность', 'аминокислота', 'спелеология', 'круиз', 'узкость', 'матерщинник', 'трансплантация', 'творение', 'протеже', 'грильяж', 'полтинник', 'астматик', 'скандалист', 'преимущество', 'митрополит', 'чужестранец', 'резиденция', 'хлопотун', 'категория', 'тяжесть', 'ударник',
    'акушерство', 'светотехника', 'растяпа', 'скептицизм', 'изверг', 'физиономия', 'витрина', 'самоуничижение', 'эколог', 'управляющий', 'хорист', 'пиршество', 'резонатор', 'буйство', 'прялка', 'филология', 'купорос', 'ночлег', 'микроскоп', 'щипчики',
    'стружка', 'священнослужитель', 'самопроизвольность', 'чужеземец', 'царизм', 'телеобъектив', 'погремушка', 'энциклопедист',
    'крепостной', 'водопровод', 'цитология', 'бездна', 'сыроделие', 'леший', 'улучшение', 'нервотрепка', 'капустник', 'выгораживание', 'бюрократия', 'самозванец', 'надзиратель', 'усадьба', 'судоходство', 'античность', 'рецидивист', 'туберкулёз', 'созвучие', 'признание', 'карабин', 'разгром', 'инцест', 'гениальность', 'разделение', 'виртуоз', 'подшивка', 'описание', 'частица', 'деструктивность', 'спринтер', 'прочтение', 'дисциплина', 'взяточник', 'предсердие', 'множитель', 'гарантия', 'контекст', 'расширитель', 'самоконтроль', 'таинство', 'фальшивомонетчик', 'канон', 'объединение', 'фондю', 'горловина', 'неведение', 'размычка', 'скважина', 'политолог', 'скряга', 'атрибут', 'безумие', 'балаган', 'искусствовед', 'самовнушение', 'ястребёнок', 'соцветие', 'аперитив', 'взаимодействие', 'костяк', 'успешность', 'танкетка', 'проектировщик', 'небывальщина', 'шматок', 'основатель', 'свинство']
    var rand = Math.floor(Math.random() * words.length)
    return words[rand]
}

function person() {
    this.secretword = chooseWord();
}

function prword(){
    var a = []
    for (let i=0;i< guestword.length; i++){
        if (guestword[i] == '_'){
            a.push('_ ')
        }else{
            a.push(guestword[i]+' ')
        }
    }
    a = a.join('')
    document.getElementById("word").innerHTML = a;
    let c = guestword.join('')
    let d = player.secretword
    if (c == d){
        document.getElementById("result").innerHTML = 'Ты выиграл' ;
        music(2)
        setTimeout(reset,2500);
    }
}

function draw_gallow0(){
    ctx.beginPath();
    ctx.moveTo(355, 7)
    ctx.lineTo(355, 480);
    ctx.lineWidth = 7;
    ctx.stroke();
}
function draw_gallow1(){
    ctx.beginPath();
    ctx.moveTo(270, 480)
    ctx.lineTo(440, 480);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function draw_gallow2(){
    ctx.beginPath();
    ctx.moveTo(358, 7)
    ctx.lineTo(57, 7);
    ctx.lineWidth = 7;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(60, 7)
    ctx.lineTo(60, 45);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function draw_head(){
    ctx.beginPath();
    ctx.arc(60, 82, 40, 0, 2*Math.PI, false);
    ctx.lineWidth = 7;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 74, 2, 0, 2*Math.PI, false);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(70, 74, 2, 0, 2*Math.PI, false);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(51, 96)
    ctx.lineTo(69, 98);
    ctx.lineWidth = 5;
    ctx.stroke();
}

function draw_body(){
    ctx.beginPath();
    ctx.moveTo(60, 122)
    ctx.lineTo(60, 250);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function draw_hand1(){
    ctx.beginPath();
    ctx.moveTo(60, 122)
    ctx.lineTo(30, 176);
    ctx.lineWidth = 6;
    ctx.stroke();
}

function draw_hand2(){
    ctx.beginPath();
    ctx.moveTo(60, 122)
    ctx.lineTo(90, 176);
    ctx.lineWidth = 6;
    ctx.stroke();
}

function draw_leg1(){
    ctx.beginPath();
    ctx.moveTo(60, 250)
    ctx.lineTo(30, 305);
    ctx.lineWidth = 7;
    ctx.stroke();
}

function draw_leg2(){
    ctx.beginPath();
    ctx.moveTo(60, 250)
    ctx.lineTo(90, 305);
    ctx.lineWidth = 7;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(43, 69);
    ctx.lineTo(57, 79);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(43, 79);
    ctx.lineTo(57, 69);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(63, 69);
    ctx.lineTo(77, 79);
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(63, 79);
    ctx.lineTo(77, 69);
    ctx.lineWidth = 5;
    ctx.stroke();
}

function music(s) {
    var audio = new Audio();
    if (s == 1) {
        audio.src = 'click.mp3' 
        audio.autoplay = true;
    } else if (s == 0) {
        audio.src = 'game_over.mp3';
    } else if (s==2){
        audio.src = 'win.mp3';
    }
    audio.autoplay = true;
  }

function change(){
    music(1)
    reset()
    var a = document.getElementById("gallow").classList;
    a.remove("nactive");
    a.add("active");

    var b = document.getElementById("word").classList;
    b.remove("nactive");
    b.add("active");
    

    var c = document.getElementById("result").classList;
    c.remove("nactive");
    c.add("active");

    const screenWidth = window.screen.width
    if (screenWidth < 768){
        var q =  document.getElementById("table2").classList;
        q.remove("nactive");
        q.add("active");
      } else {
        var d = document.getElementById("table").classList;
        d.remove("nactive");
        d.add("active");
    }
    

    var f = document.getElementById("change").style="display:none"
    var g = document.getElementById("gallow1").style="display:none"

    var w = document.getElementById("hangman").classList;
    w.remove("nactive")
    w.add("active")

    var h = document.getElementById("back").classList;
    h.remove("nactive");
    h.add("active");

    var q = document.getElementById("select").classList;
    q.remove("active");
    q.add("nactive");

    var t = document.getElementById("choose_lifes").classList;
    t.remove("active");
    t.add("nactive");

    
}

function change2(){
    music(1)
    var a = document.getElementById("gallow").classList;
    a.remove("active");
    a.add("nactive");

    var b = document.getElementById("word").classList;
    b.remove("active");
    b.add("nactive");

    var c = document.getElementById("result").classList;
    c.remove("active");
    c.add("nactive");

    const screenWidth = window.screen.width
    if (screenWidth < 768){
        var q =  document.getElementById("table2").classList;
        q.remove("active");
        q.add("nactive");
      } else {
        var d = document.getElementById("table").classList;
        d.remove("active");
        d.add("nactive");
    }

    var h = document.getElementById("back").classList;
    h.remove("active");
    h.add("nactive");

    var w = document.getElementById("hangman").classList;
    w.remove("active")
    w.add("nactive")

    var f = document.getElementById("change").style="display:flexbox"
    var g = document.getElementById("gallow1").style="display:flexbox"

    var q = document.getElementById("select").classList;
    q.remove("nactive");
    q.add("active");

    var t = document.getElementById("choose_lifes").classList;
    t.remove("nactive");
    t.add("active");

}

   
