// === 1. 測試連線 ===
console.log("✅ HTML5 遊戲引擎啟動！(150題完整版)");

// === 2. 遊戲資料庫 (各50題) ===
const BOSS_DATA = {
    initials: {
        name: "千舌混亂蛇",
        avatar: "🐍",
        color: "text-red-500",
        taunt: "嘶...這裡有50個陷阱，你的舌頭還能靈活轉動嗎？",
        questions: [
            { q: "知道 (zhī dào)", a: "z", b: "zh", correct: "B", reason: "知(zh)是翹舌音！" },
            { q: "三個人 (sān)", a: "s", b: "sh", correct: "A", reason: "三(s)是平舌音！" },
            { q: "流水 (liú)", a: "n", b: "l", correct: "B", reason: "流(l)不捏鼻子！" },
            { q: "飛機 (fēi)", a: "f", b: "h", correct: "A", reason: "飛(f)要咬嘴唇！" },
            { q: "春天 (chūn)", a: "c", b: "ch", correct: "B", reason: "春(ch)要翹舌！" },
            { q: "早上 (zǎo)", a: "z", b: "zh", correct: "A", reason: "早(z)舌頭是平的！" },
            { q: "男生 (nán)", a: "n", b: "l", correct: "A", reason: "男(n)是鼻音！" },
            { q: "是非 (shì)", a: "s", b: "sh", correct: "B", reason: "是(sh)要用力翹舌！" },
            { q: "渴望 (kě)", a: "k", b: "h", correct: "A", reason: "渴是 k，喝才是 h！" },
            { q: "熱鬧 (rè)", a: "r", b: "y", correct: "A", reason: "熱(r)要捲舌！" },
            { q: "吃飯 (chī)", a: "c", b: "ch", correct: "B", reason: "吃(ch)要捲舌！" },
            { q: "森林 (sēn)", a: "s", b: "sh", correct: "A", reason: "森(s)是平舌音！" },
            { q: "牛奶 (niú)", a: "n", b: "l", correct: "A", reason: "牛(n)要用鼻音！" },
            { q: "快樂 (lè)", a: "n", b: "l", correct: "B", reason: "樂(l)是邊音，不捏鼻！" },
            { q: "花朵 (huā)", a: "f", b: "h", correct: "B", reason: "花是 h，發才是 f！" },
            { q: "暫時 (zàn)", a: "z", b: "zh", correct: "A", reason: "暫(z)是平舌音！" },
            { q: "支持 (chí)", a: "c", b: "ch", correct: "B", reason: "持(ch)要捲舌！" },
            { q: "沙發 (shā)", a: "s", b: "sh", correct: "B", reason: "沙(sh)要捲舌！" },
            { q: "粗細 (cū)", a: "c", b: "ch", correct: "A", reason: "粗(c)是平舌音！" },
            { q: "如果 (rú)", a: "r", b: "y", correct: "A", reason: "如(r)要捲舌！" },
            { q: "南方 (nán)", a: "n", b: "l", correct: "A", reason: "南(n)是鼻音！" },
            { q: "老人 (lǎo)", a: "n", b: "l", correct: "B", reason: "老(l)是邊音！" },
            { q: "蝴蝶 (hú)", a: "f", b: "h", correct: "B", reason: "胡是 h，福是 f！" },
            { q: "發現 (fā)", a: "f", b: "h", correct: "A", reason: "發(f)要咬唇！" },
            { q: "苦瓜 (kǔ)", a: "k", b: "h", correct: "A", reason: "苦是 k，虎是 h！" },
            { q: "竹子 (zhú)", a: "z", b: "zh", correct: "B", reason: "竹(zh)要捲舌！" },
            { q: "村莊 (cūn)", a: "c", b: "ch", correct: "A", reason: "村(c)是平舌音！" },
            { q: "生日 (shēng)", a: "s", b: "sh", correct: "B", reason: "生(sh)要捲舌！" },
            { q: "做工 (zuò)", a: "z", b: "zh", correct: "A", reason: "做(z)是平舌音！" },
            { q: "吵鬧 (chǎo)", a: "c", b: "ch", correct: "B", reason: "吵(ch)要捲舌！" },
            { q: "四月 (sì)", a: "s", b: "sh", correct: "A", reason: "四(s)是平舌音！" },
            { q: "容易 (róng)", a: "r", b: "y", correct: "A", reason: "容(r)要捲舌！" },
            { q: "努力 (nǔ)", a: "n", b: "l", correct: "A", reason: "努(n)要鼻音！" },
            { q: "路口 (lù)", a: "n", b: "l", correct: "B", reason: "路(l)是邊音！" },
            { q: "喝水 (hē)", a: "k", b: "h", correct: "B", reason: "喝是 h，科是 k！" },
            { q: "考試 (kǎo)", a: "k", b: "h", correct: "A", reason: "考是 k，好是 h！" },
            { q: "真正 (zhēn)", a: "z", b: "zh", correct: "B", reason: "真(zh)要捲舌！" },
            { q: "操場 (cāo)", a: "c", b: "ch", correct: "A", reason: "操(c)是平舌音！" },
            { q: "書本 (shū)", a: "s", b: "sh", correct: "B", reason: "書(sh)要捲舌！" },
            { q: "祖國 (zǔ)", a: "z", b: "zh", correct: "A", reason: "祖(z)是平舌音！" },
            { q: "泥土 (ní)", a: "n", b: "l", correct: "A", reason: "泥(n)是鼻音！" },
            { q: "梨子 (lí)", a: "n", b: "l", correct: "B", reason: "梨(l)是邊音！" },
            { q: "發生 (fā)", a: "f", b: "h", correct: "A", reason: "發(f)咬嘴唇！" },
            { q: "紅色 (hóng)", a: "f", b: "h", correct: "B", reason: "紅是 h！" },
            { q: "桌子 (zhuō)", a: "z", b: "zh", correct: "B", reason: "桌(zh)要捲舌！" },
            { q: "錯誤 (cuò)", a: "c", b: "ch", correct: "A", reason: "錯(c)是平舌音！" },
            { q: "散步 (sàn)", a: "s", b: "sh", correct: "A", reason: "散(s)是平舌音！" },
            { q: "然後 (rán)", a: "r", b: "y", correct: "A", reason: "然(r)要捲舌！" },
            { q: "能夠 (néng)", a: "n", b: "l", correct: "A", reason: "能(n)是鼻音！" },
            { q: "快樂 (lè)", a: "n", b: "l", correct: "B", reason: "樂(l)是邊音！" }
        ]
    },
    finals: {
        name: "鼻音迷霧巨人",
        avatar: "🌫️",
        color: "text-purple-500",
        taunt: "嗡...前鼻音？後鼻音？我要把你困在『安』與『昂』的迷宮裡！",
        questions: [
            { q: "朋友 (péng)", a: "en", b: "eng", correct: "B", reason: "朋友很胖(pang)，是後鼻音！" },
            { q: "天空 (tiān)", a: "an", b: "ang", correct: "A", reason: "舌尖頂牙齒，前鼻音 an！" },
            { q: "英文 (yīng)", a: "in", b: "ing", correct: "B", reason: "老鷹飛在後，是 ing！" },
            { q: "綠色 (lǜ)", a: "u", b: "ü", correct: "B", reason: "l 碰到魚(ü)不能挖眼！" },
            { q: "船隻 (chuán)", a: "uan", b: "uang", correct: "A", reason: "船是彎彎的 uan！" },
            { q: "心臟 (xīn)", a: "in", b: "ing", correct: "A", reason: "摸心口震動，前鼻音 in！" },
            { q: "雲朵 (yún)", a: "un", b: "ün", correct: "A", reason: "雲寫作 un (uen)！" },
            { q: "幫忙 (bāng)", a: "an", b: "ang", correct: "B", reason: "幫忙張大嘴，ang！" },
            { q: "學校 (xué)", a: "üe", b: "ue", correct: "A", reason: "x 見 üe 脫帽，本體是 üe！" },
            { q: "風扇 (fēng)", a: "ong", b: "eng", correct: "B", reason: "陷阱！風是 f-eng！" },
            { q: "看見 (kàn)", a: "an", b: "ang", correct: "A", reason: "看(kan)是前鼻音！" },
            { q: "剛剛 (gāng)", a: "an", b: "ang", correct: "B", reason: "剛(gang)是後鼻音！" },
            { q: "真正 (zhēn)", a: "en", b: "eng", correct: "A", reason: "真(zhen)是前鼻音！" },
            { q: "風箏 (zhēng)", a: "en", b: "eng", correct: "B", reason: "箏(zheng)是後鼻音！" },
            { q: "親人 (qīn)", a: "in", b: "ing", correct: "A", reason: "親(qin)是前鼻音！" },
            { q: "清澈 (qīng)", a: "in", b: "ing", correct: "B", reason: "清(qing)是後鼻音！" },
            { q: "音樂 (yīn)", a: "in", b: "ing", correct: "A", reason: "音(yin)是前鼻音！" },
            { q: "英雄 (yīng)", a: "in", b: "ing", correct: "B", reason: "英(ying)是後鼻音！" },
            { q: "藍色 (lán)", a: "an", b: "ang", correct: "A", reason: "藍(lan)是前鼻音！" },
            { q: "海浪 (làng)", a: "an", b: "ang", correct: "B", reason: "浪(lang)是後鼻音！" },
            { q: "森林 (sēn)", a: "en", b: "eng", correct: "A", reason: "森(sen)是前鼻音！" },
            { q: "和尚 (sheng)", a: "en", b: "eng", correct: "B", reason: "尚(shang)或僧(seng)是後鼻音！" },
            { q: "金子 (jīn)", a: "in", b: "ing", correct: "A", reason: "金(jin)是前鼻音！" },
            { q: "亮晶晶 (jīng)", a: "in", b: "ing", correct: "B", reason: "晶(jing)是後鼻音！" },
            { q: "月亮 (liàng)", a: "ian", b: "iang", correct: "B", reason: "亮(liang)嘴巴張大！" },
            { q: "練習 (liàn)", a: "ian", b: "iang", correct: "A", reason: "練(lian)是前鼻音！" },
            { q: "裙子 (qún)", a: "un", b: "ün", correct: "A", reason: "裙是 qun (q-ün)！" },
            { q: "輪子 (lún)", a: "un", b: "ün", correct: "A", reason: "輪是 lun (l-uen)！" },
            { q: "軍隊 (jūn)", a: "un", b: "ün", correct: "A", reason: "軍是 jun (j-ün)！" },
            { q: "困難 (kùn)", a: "un", b: "ün", correct: "A", reason: "困是 kun (k-uen)！" },
            { q: "中間 (zhōng)", a: "ong", b: "eng", correct: "A", reason: "中(zhong)嘴巴是圓的！" },
            { q: "吃飯 (fàn)", a: "an", b: "ang", correct: "A", reason: "飯(fan)是前鼻音！" },
            { q: "放學 (fàng)", a: "an", b: "ang", correct: "B", reason: "放(fang)是後鼻音！" },
            { q: "大門 (mén)", a: "en", b: "eng", correct: "A", reason: "門(men)是前鼻音！" },
            { q: "做夢 (mèng)", a: "en", b: "eng", correct: "B", reason: "夢(meng)是後鼻音！" },
            { q: "拼音 (pīn)", a: "in", b: "ing", correct: "A", reason: "拼(pin)是前鼻音！" },
            { q: "蘋果 (píng)", a: "in", b: "ing", correct: "B", reason: "蘋(ping)是後鼻音！" },
            { q: "簡單 (dān)", a: "an", b: "ang", correct: "A", reason: "單(dan)是前鼻音！" },
            { q: "當然 (dāng)", a: "an", b: "ang", correct: "B", reason: "當(dang)是後鼻音！" },
            { q: "根本 (gēn)", a: "en", b: "eng", correct: "A", reason: "根(gen)是前鼻音！" },
            { q: "更多 (gèng)", a: "en", b: "eng", correct: "B", reason: "更(geng)是後鼻音！" },
            { q: "您好 (nín)", a: "in", b: "ing", correct: "A", reason: "您(nin)是前鼻音！" },
            { q: "安靜 (jìng)", a: "in", b: "ing", correct: "B", reason: "靜(jing)是後鼻音！" },
            { q: "散步 (sàn)", a: "an", b: "ang", correct: "A", reason: "散(san)是前鼻音！" },
            { q: "雨傘 (sǎn)", a: "an", b: "ang", correct: "A", reason: "傘(san)是前鼻音！" },
            { q: "桑樹 (sāng)", a: "an", b: "ang", correct: "B", reason: "桑(sang)是後鼻音！" },
            { q: "昏暗 (hūn)", a: "un", b: "ong", correct: "A", reason: "昏(hun)是 un！" },
            { q: "紅色 (hóng)", a: "un", b: "ong", correct: "B", reason: "紅(hong)是 ong！" },
            { q: "村子 (cūn)", a: "un", b: "ün", correct: "A", reason: "村(cun)是 un！" },
            { q: "聰明 (cōng)", a: "un", b: "ong", correct: "B", reason: "聰(cong)是 ong！" }
        ]
    },
    tones: {
        name: "聲調扭曲魔龍",
        avatar: "🐉",
        color: "text-yellow-500",
        taunt: "吼！我是掌管四聲的神，你那把破劍，能標對我的聲調嗎？",
        questions: [
            { q: "媽媽 (mā ma)", a: "一聲", b: "輕聲", correct: "B", reason: "疊字第二字通常輕聲！" },
            { q: "水果 (shuǐ)", a: "ˇ (三聲)", b: "ˋ (四聲)", correct: "A", reason: "水是三聲打勾勾！" },
            { q: "huī (灰)", a: "huī", b: "huí", correct: "A", reason: "a,o,e,i,u 標號順序！" },
            { q: "去 (qù)", a: "qù", b: "qǜ", correct: "A", reason: "小 ü 見 q 擦掉眼淚！" },
            { q: "女 (nǚ)", a: "nǔ", b: "nǚ", correct: "B", reason: "n, l 見 ü 保留眼睛！" },
            { q: "xiǎo (小)", a: "xǐao", b: "xiǎo", correct: "B", reason: "有 a 不放過，標在 a！" },
            { q: "二月 (èr)", a: "è", b: "r", correct: "A", reason: "單韻母寫作 èr！" },
            { q: "六 (liù)", a: "loù", b: "liù", correct: "B", reason: "iu 並列標在後！" },
            { q: "不對 (bù)", a: "二聲", b: "四聲", correct: "B", reason: "不配四聲唸四聲！" },
            { q: "圓 (yuán)", a: "yuán", b: "yán", correct: "A", reason: "整體認讀是 yuán！" },
            { q: "吃飯 (chī)", a: "chī", b: "chí", correct: "A", reason: "吃是一聲！" },
            { q: "牛奶 (nǎi)", a: "nái", b: "nǎi", correct: "B", reason: "奶是三聲！" },
            { q: "太陽 (yáng)", a: "yáng", b: "yǎng", correct: "A", reason: "陽是二聲！" },
            { q: "跑步 (pǎo)", a: "páo", b: "pǎo", correct: "B", reason: "跑是三聲！" },
            { q: "睡覺 (jiào)", a: "jìao", b: "jiào", correct: "B", reason: "有 a 不放過，標在 a！" },
            { q: "歸 (guī)", a: "guī", b: "gūi", correct: "A", reason: "ui 並列標在後(i)！" },
            { q: "球 (qiú)", a: "qíu", b: "qiú", correct: "B", reason: "iu 並列標在後(u)！" },
            { q: "雪 (xuě)", a: "xě", b: "xuě", correct: "B", reason: "x+üe 去點，但 u 還在！" },
            { q: "月 (yuè)", a: "yè", b: "yuè", correct: "B", reason: "y+üe 去點，但 u 還在！" },
            { q: "句 (jù)", a: "jù", b: "jǜ", correct: "A", reason: "j 見 ü 去點！" },
            { q: "綠 (lǜ)", a: "lù", b: "lǜ", correct: "B", reason: "l 見 ü 保留點！" },
            { q: "路 (lù)", a: "lù", b: "lǜ", correct: "A", reason: "u 和 ü 別搞混！" },
            { q: "女 (nǚ)", a: "nǔ", b: "nǚ", correct: "B", reason: "n 見 ü 保留點！" },
            { q: "努 (nǔ)", a: "nǔ", b: "nǚ", correct: "A", reason: "u 和 ü 別搞混！" },
            { q: "快樂 (lè)", a: "lè", b: "le", correct: "A", reason: "樂是四聲！" },
            { q: "漂亮 (liang)", a: "liàng", b: "liang", correct: "B", reason: "亮在這裡唸輕聲！" },
            { q: "爸爸 (ba)", a: "bà", b: "ba", correct: "B", reason: "第二個字輕聲！" },
            { q: "花 (huā)", a: "hūa", b: "huā", correct: "B", reason: "有 a 不放過，標在 a！" },
            { q: "多 (duō)", a: "dō", b: "duō", correct: "B", reason: "拼寫是 duo！" },
            { q: "火 (huǒ)", a: "hǒ", b: "huǒ", correct: "B", reason: "拼寫是 huo！" },
            { q: "口 (kǒu)", a: "kǒu", b: "kǔo", correct: "A", reason: "標在 o 上！" },
            { q: "給 (gěi)", a: "gěi", b: "gǐe", correct: "A", reason: "ei 標在 e 上！" },
            { q: "培 (péi)", a: "péi", b: "pí", correct: "A", reason: "pei 不是 pi！" },
            { q: "雷 (léi)", a: "lié", b: "léi", correct: "B", reason: "lei 不是 lie！" },
            { q: "丟 (diū)", a: "dūi", b: "diū", correct: "B", reason: "iu 標在 u！" },
            { q: "對 (duì)", a: "duì", b: "dìu", correct: "A", reason: "ui 標在 i！" },
            { q: "寫 (xiě)", a: "xěi", b: "xiě", correct: "B", reason: "ie 標在 e！" },
            { q: "謝 (xiè)", a: "xìe", b: "xiè", correct: "B", reason: "ie 標在 e！" },
            { q: "覺 (jué)", a: "jué", b: "jüé", correct: "A", reason: "j 見 üe 去點！" },
            { q: "缺 (quē)", a: "quē", b: "qüē", correct: "A", reason: "q 見 üe 去點！" },
            { q: "學 (xué)", a: "xué", b: "xuě", correct: "A", reason: "學是二聲！" },
            { q: "略 (lüè)", a: "lè", b: "lüè", correct: "B", reason: "l 見 üe 保留點！" },
            { q: "虐 (nüè)", a: "nè", b: "nüè", correct: "B", reason: "n 見 üe 保留點！" },
            { q: "一 (yī)", a: "yī", b: "ī", correct: "A", reason: "大 y 帶著小 i！" },
            { q: "五 (wǔ)", a: "ǔ", b: "wǔ", correct: "B", reason: "大 w 帶著小 u！" },
            { q: "雨 (yǔ)", a: "yǚ", b: "yǔ", correct: "B", reason: "大 y 帶著 ü，去點！" },
            { q: "雲 (yún)", a: "yún", b: "yǘn", correct: "A", reason: "整體認讀 yun！" },
            { q: "英 (yīng)", a: "yīng", b: "īng", correct: "A", reason: "整體認讀 ying！" },
            { q: "溫 (wēn)", a: "uēn", b: "wēn", correct: "B", reason: "整體認讀 wen！" },
            { q: "魚 (yú)", a: "yú", b: "yǘ", correct: "A", reason: "y 見 ü 去點！" }
        ]
    }
};

// === 3. 遊戲核心邏輯 (App版) ===
const game = {
    state: {
        currentBossKey: null,
        currentIndex: 0,
        score: 0,
        combo: 0,
        playerHP: 3,
        bossHP: 100,
        mistakes: [],
        playerLevel: 1
    },

    // 啟動戰鬥
    startBattle: (bossKey) => {
        const boss = BOSS_DATA[bossKey];
        game.state.currentBossKey = bossKey;
        game.state.currentIndex = 0;
        game.state.score = 0;
        game.state.combo = 0;
        game.state.playerHP = 3;
        game.state.bossHP = 100;
        game.state.mistakes = [];

        // UI 初始化
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.getElementById('battle-screen').classList.add('active');
        
        // 設定 BOSS 資訊
        document.getElementById('boss-avatar').innerText = boss.avatar;
        document.getElementById('boss-name').innerText = boss.name;
        document.getElementById('boss-hp-bar').style.width = '100%';
        
        // 顯示嗆聲
        const tauntEl = document.getElementById('taunt-message');
        tauntEl.innerText = `"${boss.taunt}"`;
        tauntEl.classList.remove('hidden');
        setTimeout(() => tauntEl.classList.add('hidden'), 4000);

        game.updatePlayerHP();
        game.loadQuestion();
    },

    // 載入題目
    loadQuestion: () => {
        const boss = BOSS_DATA[game.state.currentBossKey];
        
        // 防止溢出檢查
        if(game.state.currentIndex >= boss.questions.length) {
            game.showResult(true);
            return;
        }

        const qData = boss.questions[game.state.currentIndex];

        document.getElementById('q-index').innerText = game.state.currentIndex + 1;
        document.getElementById('question-text').innerText = qData.q;
        document.getElementById('btn-a').innerText = qData.a;
        document.getElementById('btn-b').innerText = qData.b;
        document.getElementById('feedback').innerText = "";
        
        // 重置按鈕
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.className = "option-btn w-full"; 
            btn.classList.add('bg-blue-600', 'hover:bg-blue-500', 'border-b-4', 'border-blue-800');
            btn.disabled = false;
        });
    },

    // 檢查答案
    checkAnswer: (choice) => {
        const boss = BOSS_DATA[game.state.currentBossKey];
        const qData = boss.questions[game.state.currentIndex];
        const isCorrect = choice === qData.correct;
        
        const btnA = document.getElementById('btn-a');
        const btnB = document.getElementById('btn-b');
        
        // 鎖定按鈕
        btnA.disabled = true;
        btnB.disabled = true;

        if (isCorrect) {
            // 答對
            game.state.combo++;
            game.state.score += 100 + (game.state.combo * 10);
            
            // 計算 BOSS 扣血量 (題目越多，每題扣越少，讓玩家打久一點)
            let damagePerHit = 100 / boss.questions.length;
            // 至少扣 2%
            if(damagePerHit < 2) damagePerHit = 2; 
            
            game.state.bossHP -= damagePerHit;
            if(game.state.bossHP < 0) game.state.bossHP = 0;
            
            // 視覺效果
            const targetBtn = choice === 'A' ? btnA : btnB;
            targetBtn.classList.add('btn-correct');
            game.showDamageEffect(Math.floor(damagePerHit * 10)); // 顯示傷害數值
            document.getElementById('feedback').innerText = "✨ 漂亮的一擊！";
            document.getElementById('feedback').className = "mt-4 h-6 text-lg font-bold text-green-400";
            
        } else {
            // 答錯
            game.state.combo = 0;
            game.state.playerHP--;
            game.state.mistakes.push(qData);
            
            // 視覺效果
            const targetBtn = choice === 'A' ? btnA : btnB;
            targetBtn.classList.add('btn-wrong');
            document.getElementById('quiz-area').classList.add('shake');
            setTimeout(() => document.getElementById('quiz-area').classList.remove('shake'), 500);
            
            document.getElementById('feedback').innerText = `💥 哎呀！${qData.reason}`;
            document.getElementById('feedback').className = "mt-4 h-6 text-lg font-bold text-red-400";
        }

        game.updateUI();

        // 流程判斷
        if (game.state.playerHP <= 0) {
            setTimeout(() => game.showResult(false), 1500);
        } else if (game.state.bossHP <= 0 || game.state.currentIndex >= boss.questions.length - 1) {
            setTimeout(() => game.showResult(true), 1500);
        } else {
            game.state.currentIndex++;
            setTimeout(game.loadQuestion, 2000); 
        }
    },

    // 更新介面
    updateUI: () => {
        document.getElementById('boss-hp-bar').style.width = `${game.state.bossHP}%`;
        document.getElementById('combo-count').innerText = game.state.combo;
        game.updatePlayerHP();
    },

    updatePlayerHP: () => {
        const container = document.getElementById('player-hp-container');
        container.innerHTML = '';
        for(let i=0; i<3; i++) {
            if(i < game.state.playerHP) {
                container.innerHTML += '<span class="text-red-500 text-2xl">❤️</span>';
            } else {
                container.innerHTML += '<span class="text-gray-600 text-2xl">💔</span>';
            }
        }
    },

    // 傷害特效
    showDamageEffect: (dmg) => {
        const container = document.getElementById('damage-container');
        const el = document.createElement('div');
        el.className = 'damage-text';
        el.innerText = `-${dmg}`;
        el.style.left = `${Math.random() * 40 - 20}px`; 
        container.appendChild(el);
        setTimeout(() => el.remove(), 1000);
    },

    // 結算畫面
    showResult: (isWin) => {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.getElementById('result-screen').classList.add('active');

        const title = document.getElementById('result-title');
        const stats = document.getElementById('result-stats');
        const mistakeDiv = document.getElementById('mistake-list');
        const mistakeUl = document.getElementById('mistake-ul');

        if (isWin) {
            title.innerText = "🎉 任務完成！";
            title.className = "text-5xl font-bold mb-4 text-yellow-400";
            game.state.playerLevel++;
            document.getElementById('player-lvl').innerText = game.state.playerLevel;
        } else {
            title.innerText = "💀 挑戰失敗...";
            title.className = "text-5xl font-bold mb-4 text-gray-500";
        }

        stats.innerHTML = `
            得分: <span class="text-yellow-400">${game.state.score}</span> <br>
            剩餘生命: ${game.state.playerHP}/3
        `;

        mistakeUl.innerHTML = '';
        if (game.state.mistakes.length > 0) {
            mistakeDiv.classList.remove('hidden');
            game.state.mistakes.forEach(m => {
                const li = document.createElement('li');
                li.innerHTML = `${m.q} <span class="text-gray-400">(${m.reason})</span>`;
                mistakeUl.appendChild(li);
            });
        } else {
            mistakeDiv.classList.add('hidden');
            if(isWin) stats.innerHTML += "<br><span class='text-green-400 font-bold'>完美通關！太強了！</span>";
        }
    },

    // 返回地圖
    returnToMap: () => {
        document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
        document.getElementById('world-map').classList.add('active');
    }
};