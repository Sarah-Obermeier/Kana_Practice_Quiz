
document.getElementById('start').onclick = startQuiz();

function startQuiz()
{
    var kanaType = document.getElementById('kanaSelect').value;
    document.getElementById("kana").innerHTML = getNextKana();
    document.getElementById("input").disabled = false;
}

function checkAnswer()
{
    var answer = getAnswer();
    var kana = document.getElementById("kana").innerHTML;
    var total = document.getElementById("total").innerHTML;
    var correct = document.getElementById("correct").innerHTML;
    var wrong = document.getElementById("wrong").innerHTML;

    if (document.getElementById("answer").value == answer) 
    {
        total++;
        correct++;
        document.getElementById("total").innerHTML = total;
        document.getElementById("correct").innerHTML = correct;
        document.getElementById("previous").innerHTML = kana + " = " + answer;
        document.getElementById("kana").innerHTML = getNextKana();
        document.getElementById("answer").value = "";
    }
    else
    {
        total++;
        wrong++;
        document.getElementById("total").innerHTML = total;
        document.getElementById("wrong").innerHTML = wrong;
        document.getElementById("previous").innerHTML = kana + " = " + answer;
        document.getElementById("kana").innerHTML = getNextKana();
        document.getElementById("answer").value = "";
    }
}

function getNextKana()
{
    var kanaType = document.getElementById('kanaSelect').value;

    const hiragana = ["あ","い","う","え","お",
                      "か","き","く","け","こ",
                      "が","ぎ","ぐ","げ","ご",
                      "さ","し","つ","て","と",
                      "ざ","じ","ず","ぜ","ぞ",
                      "た","ち","つ","て","と",
                      "だ","ぢ","づ","で","ど",
                      "な","に","ぬ","ね","の",
                      "は","ひ","ふ","へ","ほ",
                      "ば","び","ぶ","べ","ぼ",
                      "ぱ","ぴ","ぷ","ぺ","ぽ",
                      "ま","み","む","め","も",
                      "や","ゆ","よ",
                      "ら","り","る","れ","ろ",
                      "わ","を","ん"];

    const katakana = ["ア","イ","ウ","エ","オ",
                      "カ","キ","ク","ケ","コ",
                      "ガ","ギ","グ","ゲ","ゴ",
                      "サ","シ","ス","セ","ソ",
                      "ザ","ジ","ズ","ゼ","ゾ",
                      "タ","チ","ツ","テ","ト",
                      "ダ","ヂ","ヅ","デ","ド",
                      "ナ","ニ","ヌ","ネ","ノ",
                      "ハ","ヒ","フ","ヘ","ホ",
                      "バ","ビ","ブ","ベ","ボ",
                      "パ","ピ","プ","ペ","ポ",
                      "マ","ミ","ム","メ","モ",
                      "ヤ","ユ","ヨ",
                      "ラ","リ","ル","レ","ロ",
                      "ワ","ヲ","ン"];
    
    const both = ["あ","い","う","え","お",
                  "か","き","く","け","こ",
                  "が","ぎ","ぐ","げ","ご",
                  "さ","し","つ","て","と",
                  "ざ","じ","ず","ぜ","ぞ",
                  "た","ち","つ","て","と",
                  "だ","ぢ","づ","で","ど",
                  "な","に","ぬ","ね","の",
                  "は","ひ","ふ","へ","ほ",
                  "ば","び","ぶ","べ","ぼ",
                  "ぱ","ぴ","ぷ","ぺ","ぽ",
                  "ま","み","む","め","も",
                  "や","ゆ","よ",
                  "ら","り","る","れ","ろ",
                  "わ","を","ん",
                  "ア","イ","ウ","エ","オ",
                  "カ","キ","ク","ケ","コ",
                  "ガ","ギ","グ","ゲ","ゴ",
                  "サ","シ","ス","セ","ソ",
                  "ザ","ジ","ズ","ゼ","ゾ",
                  "タ","チ","ツ","テ","ト",
                  "ダ","ヂ","ヅ","デ","ド",
                  "ナ","ニ","ヌ","ネ","ノ",
                  "ハ","ヒ","フ","ヘ","ホ",
                  "バ","ビ","ブ","ベ","ボ",
                  "パ","ピ","プ","ペ","ポ",
                  "マ","ミ","ム","メ","モ",
                  "ヤ","ユ","ヨ",
                  "ラ","リ","ル","レ","ロ",
                  "ワ","ヲ","ン"];

    if (kanaType == "hiragana") 
    {
        var rand = Math.floor(Math.random() * hiragana.length);
        return hiragana[rand];
    }
    else if (kanaType == "katakana") 
    {
        var rand = Math.floor(Math.random() * katakana.length);
        return katakana[rand];
    }
    else 
    {
        var rand = Math.floor(Math.random() * both.length)
        return both[rand];
    }
    return hiragana[rand];
}

function getAnswer()
{
    var kana = document.getElementById("kana").innerHTML;
    var answer = "";

    switch(kana)
    {
        case "あ": answer = "a"; break;
        case "い": answer = "i"; break;
        case "う": answer = "u"; break;
        case "え": answer = "e"; break;
        case "お": answer = "o"; break;

        case "か": answer = "ka"; break;
        case "き": answer = "ki"; break;
        case "く": answer = "ku"; break;
        case "け": answer = "ke"; break;
        case "こ": answer = "ko"; break;
        case "が": answer = "ga"; break;
        case "ぎ": answer = "gi"; break;
        case "ぐ": answer = "gu"; break;
        case "げ": answer = "ge"; break;
        case "ご": answer = "go"; break;

        case "さ": answer = "sa"; break;
        case "し": answer = "shi"; break;
        case "す": answer = "su"; break;
        case "せ": answer = "se"; break;
        case "そ": answer = "so"; break;
        case "ざ": answer = "za"; break;
        case "じ": answer = "ji"; break;
        case "ず": answer = "zu"; break;
        case "ぜ": answer = "ze"; break;
        case "ぞ": answer = "zo"; break;

        case "た": answer = "ta"; break;
        case "ち": answer = "chi"; break;
        case "つ": answer = "tsu"; break;
        case "て": answer = "te"; break;
        case "と": answer = "to"; break;
        case "だ": answer = "da"; break;
        case "ぢ": answer = "di"; break;
        case "づ": answer = "du"; break;
        case "で": answer = "de"; break;
        case "ど": answer = "do"; break;

        case "な": answer = "na"; break;
        case "に": answer = "ni"; break;
        case "ぬ": answer = "nu"; break;
        case "ね": answer = "ne"; break;
        case "の": answer = "no"; break;

        case "は": answer = "ha"; break;
        case "ひ": answer = "hi"; break;
        case "ふ": answer = "fu"; break;
        case "へ": answer = "he"; break;
        case "ほ": answer = "ho"; break;
        case "ば": answer = "ba"; break;
        case "び": answer = "bi"; break;
        case "ぶ": answer = "bu"; break;
        case "べ": answer = "be"; break;
        case "ぼ": answer = "bo"; break;
        case "ぱ": answer = "pa"; break;
        case "ぴ": answer = "pi"; break;
        case "ぷ": answer = "pu"; break;
        case "ぺ": answer = "pe"; break;
        case "ぽ": answer = "po"; break;

        case "ま": answer = "ma"; break;
        case "み": answer = "mi"; break;
        case "む": answer = "mu"; break;
        case "め": answer = "me"; break;
        case "も": answer = "mo"; break;

        case "や": answer = "ya"; break;
        case "ゆ": answer = "yu"; break;
        case "よ": answer = "yo"; break;

        case "ら": answer = "ra"; break;
        case "り": answer = "ri"; break;
        case "る": answer = "ru"; break;
        case "れ": answer = "re"; break;
        case "ろ": answer = "ro"; break;

        case "わ": answer = "wa"; break;
        case "を": answer = "wo"; break;
        case "ん": answer = "n"; break;


        case "ア": answer = "a"; break;
        case "イ": answer = "i"; break;
        case "ウ": answer = "u"; break;
        case "エ": answer = "e"; break;
        case "オ": answer = "o"; break;

        case "カ": answer = "ka"; break;
        case "キ": answer = "ki"; break;
        case "ク": answer = "ku"; break;
        case "ケ": answer = "ke"; break;
        case "コ": answer = "ko"; break;
        case "ガ": answer = "ga"; break;
        case "ギ": answer = "gi"; break;
        case "グ": answer = "gu"; break;
        case "ゲ": answer = "ge"; break;
        case "ゴ": answer = "go"; break;

        case "サ": answer = "sa"; break;
        case "シ": answer = "shi"; break;
        case "ス": answer = "su"; break;
        case "セ": answer = "se"; break;
        case "ソ": answer = "so"; break;
        case "ザ": answer = "za"; break;
        case "ジ": answer = "ji"; break;
        case "ズ": answer = "zu"; break;
        case "ゼ": answer = "ze"; break;
        case "ゾ": answer = "zo"; break;

        case "タ": answer = "ta"; break;
        case "チ": answer = "chi"; break;
        case "ツ": answer = "tsu"; break;
        case "テ": answer = "te"; break;
        case "ト": answer = "to"; break;
        case "ダ": answer = "da"; break;
        case "ヂ": answer = "di"; break;
        case "ヅ": answer = "du"; break;
        case "デ": answer = "de"; break;
        case "ド": answer = "do"; break;

        case "ナ": answer = "na"; break;
        case "ニ": answer = "ni"; break;
        case "ヌ": answer = "nu"; break;
        case "ネ": answer = "ne"; break;
        case "ノ": answer = "no"; break;

        case "ハ": answer = "ha"; break;
        case "ヒ": answer = "hi"; break;
        case "フ": answer = "fu"; break;
        case "ヘ": answer = "he"; break;
        case "ホ": answer = "ho"; break;
        case "バ": answer = "ba"; break;
        case "ビ": answer = "bi"; break;
        case "ブ": answer = "bu"; break;
        case "ベ": answer = "be"; break;
        case "ボ": answer = "bo"; break;
        case "パ": answer = "pa"; break;
        case "ピ": answer = "pi"; break;
        case "プ": answer = "pu"; break;
        case "ペ": answer = "pe"; break;
        case "ポ": answer = "po"; break;

        case "マ": answer = "ma"; break;
        case "ミ": answer = "mi"; break;
        case "ム": answer = "mu"; break;
        case "メ": answer = "me"; break;
        case "モ": answer = "mo"; break;

        case "ヤ": answer = "ya"; break;
        case "ユ": answer = "yu"; break;
        case "ヨ": answer = "yo"; break;

        case "ラ": answer = "ra"; break;
        case "リ": answer = "ri"; break;
        case "ル": answer = "ru"; break;
        case "レ": answer = "re"; break;
        case "ロ": answer = "ro"; break;

        case "ワ": answer = "wa"; break;
        case "ヲ": answer = "wo"; break;
        case "ン": answer = "n"; break;
    }
    return answer;
}
