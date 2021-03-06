function QuizItem(question, audio, variants, answer, enabled, replied, selectionOfUser) {
    this.question = question;
    this.audio = audio;
    this.variants = variants;
    this.answer = answer;
    this.enabled = enabled;
    this.replied = replied;
    this.selectionOfUser = selectionOfUser;
}

var quizQuestions = [];

quizQuestions[0] = new QuizItem(
    " ",
    'audio00.mp3',
    [   '/question00/answer00.jpg',
        '/question00/answer01.jpg',
        '/question00/answer02.jpg',
        '/question00/answer03.jpg'
    ],
    "2",
    false,
    false,
    undefined);

quizQuestions[1] = new QuizItem(
    " ",
    'audio01.mp3',
    [   '/question01/answer00.jpg',
        '/question01/answer01.jpg',
        '/question01/answer02.jpg',
        '/question01/answer03.jpg'
    ],
    "1",
    false,
    false,
    undefined);

quizQuestions[2] = new QuizItem(
    " ",
    'audio02.mp3',
    [   '/question02/answer00.jpg',
        '/question02/answer01.jpg',
        '/question02/answer02.jpg',
        '/question02/answer03.jpg'
    ],
    "0",
    false,
    false,
    undefined);

quizQuestions[3] = new QuizItem(
    " ",
    'audio03.mp3',
    [   '/question03/answer00.jpg',
        '/question03/answer01.jpg',
        '/question03/answer02.jpg',
        '/question03/answer03.jpg'
    ],
    "3",
    false,
    false,
    undefined);

quizQuestions[4] = new QuizItem(
    " ",
    'audio04.mp3',
    [   '/question04/answer00.jpg',
        '/question04/answer01.jpg',
        '/question04/answer02.jpg',
        '/question04/answer03.jpg'
    ],
    "2",
    false,
    false,
    undefined);

quizQuestions[5] = new QuizItem(
    " ",
    'audio05.mp3',
    [   '/question05/answer00.jpg',
        '/question05/answer01.jpg',
        '/question05/answer02.jpg',
        '/question05/answer03.jpg'
    ],
    "3",
    false,
    false,
    undefined);
