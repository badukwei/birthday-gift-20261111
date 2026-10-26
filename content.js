// Replace the sample questions, answers, captions, and photo paths here.
// Put your five photos in photos/01.jpg through photos/05.jpg.
// correctAnswer is a zero-based answer index; null accepts every answer.
// All five questions use the supplied memories and answers.
window.MEMORIES = [
  {
    question: '還記得我們第一次約會\n看的電影是什麼嗎？',
    answers: ['再見機器人', '再見機掰人', '再見機器貓'],
    correctAnswer: 0,
    wrongReply: '嘿嘿，不是這個啦～\n再想一下我們一起看的那部電影！',
    reply: '答對了，是《再見機器人》！\n我們第一次約會看的電影 ♡',
    title: '第一次約會・再見機器人',
    caption: '一起看的第一部電影，也是屬於我們的一個小回憶。',
    photo: './photos/01.png',
  },
  {
    question: '我們第一次一起跳過的舞，\n是哪一個動漫的主題曲？',
    answers: ['火影忍者', '多啦a夢', '海賊王'],
    correctAnswer: 0,
    wrongReply: '嘿嘿，再想一下～\n提示：是忍者的故事喔！',
    reply: '答對了，是《火影忍者》！\n一起看看我們第一次跳舞的樣子 ♡',
    title: '第一次一起跳舞',
    caption: '這次的回憶會動喔，按下播放，一起重看那一天。',
    video: './videos/first-dance.mp4',
  },
  {
    question: '我們第一次出國，\n遇到了什麼事情？',
    answers: ['行李被鳥大便打到', '趕轉機差點趕不上行李還遲到', '搭計程車被司機繞路'],
    correctAnswer: 1,
    wrongReply: '嘿嘿，再想一下～\n提示：我們和行李都在趕時間！',
    reply: '答對了！趕轉機差點趕不上，\n結果行李還遲到了！',
    title: '第一次出國的小插曲',
    caption: '第一次一起出國，連趕飛機和等行李，都變成了我們的回憶。',
    video: './videos/first-trip.mp4',
  },
  {
    question: '我們參加婚禮的時候，\n妳喝醉了做了什麼事？',
    answers: ['坐在地上尿尿', '在床上大爆吐', '以上皆是'],
    correctAnswer: 2,
    wrongReply: '嘿嘿，不只這一件喔～\n再想一下！',
    reply: '答對了，以上皆是！\n一起重播那天的回憶吧 ♡',
    title: '一起參加婚禮的那一天',
    caption: '按下播放，一起回顧那天的我們。',
    video: './videos/wedding-memories.mp4',
  },
  {
    question: '你知道我最喜歡\n你什麼樣子嗎？',
    answers: ['笑起來憨憨的樣子', '開車載我帥帥的樣子', '你什麼樣子我都喜歡'],
    correctAnswer: 2,
    wrongReply: '這個樣子我也喜歡～\n但不只這樣，再猜一次 ♡',
    reply: '答對了，你什麼樣子我都喜歡 ♡',
    title: '我們的第三個生日',
    caption: '這是我們的第三個生日，未來還要一起過好幾個生日！\n\n想要跟你兩個人手牽手一起在夕陽下散步，一起吃好吃的，一起出國，一起看劇，一起跟嚕咪玩，\n\n接下來的每天我們都要一起，不管平凡還是遇到困難，都要開開心心的～',
    photo: './photos/third-birthday.png',
  },
];
