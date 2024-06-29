const quiz = [
    {
        question:'Q.白寿とは何歳の事でしょう？',
        answers:[
            '77歳',
            '88歳',
            '99歳',
            '101歳'
        ],
        correct:'99歳'
    },{
        question:'Q.早起きは三文の徳、三文とは何円でしょう？',
        answers:[
            '90円',
            '110円',
            '200円',
            '500円'
        ],
        correct:'90円'
    },{
        question:'Q.心臓を3つ持っている生き物はどれでしょう？',
        answers:[
            'クラゲ',
            'コウモリ',
            'タコ',
            'チョウチンアンコウ'
        ],
        correct:'タコ'
    },{
        question:'Q.ドイツではぎっくり腰の事をなんと呼ぶでしょう？',
        answers:[
            '神の怒り',
            '天の裁き',
            '獣の突進',
            '魔女の一撃'
        ],
        correct:'魔女の一撃'
    },{
        question:'Q.Javascriptの発明者は誰でしょう？',
        answers:[
            '小暮隆司',
            'ブレンダン・アイク',
            '松本行弘',
            'グイド・ヴァン・ロッサム'
        ],
        correct:'グイド・ヴァン・ロッサム'
    }
]

const quizLenght = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢定義。
function setupQuiz(){
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $button.length){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

function clickHandler(e){
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解。');
        score++;
    }else{
        window.alert('不正解。');
    }

    quizIndex++;

    if(quizIndex < quizLenght){
        // 問題がまだある。
        setupQuiz();
    }else{
        // 問題がもうない。
        window.alert('終了。あなたの正解数は' + quizLenght + '問中' + score + '問です。');
    }
};

// クリック正誤判定。
let clickIndex = 0;

while(clickIndex < buttonLength){
    $button[clickIndex].addEventListener('click',function(e){
        clickHandler(e);
    });
    clickIndex++;
};