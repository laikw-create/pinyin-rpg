// === 遊戲資料庫 (題庫) ===
const BOSS_DATA = {
    initials: {
        name: "千舌混亂蛇",
        avatar: "🐍",
        color: "text-red-500",
        taunt: "嘶...『滋味』還是『汁味』？在我的毒牙前，你的舌頭只會打結！",
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
            { q: "熱鬧 (rè)", a: "r", b: "y", correct: "A", reason: "熱(r)要捲舌！" }
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
            { q: "風扇 (fēng)", a: "ong", b: "eng", correct: "B", reason: "陷阱！風是 f-eng！" }
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
            { q: "圓 (yuán)", a: "yuán", b: "yán", correct: "A", reason: "整體認讀是 yuán！" }
        ]
    }
};

// === 遊戲核心邏輯 ===
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
        document.getElementById('world-map').classList.remove('active');
        document.getElementById('result-screen').classList.remove('active');
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
        const qData = boss.questions[game.state.currentIndex];

        document.getElementById('q-index').innerText = game.state.currentIndex + 1;
        document.getElementById('question-text').innerText = qData.q;
        document.getElementById('btn-a').innerText = qData.a;
        document.getElementById('btn-b').innerText = qData.b;
        document.getElementById('feedback').innerText = "";
        
        // 重置按鈕顏色
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.className = "option-btn bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg text-xl transition transform active:scale-95 border-b-4 border-blue-800";
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
            // 答對邏輯
            game.state.combo++;
            game.state.score += 100 + (game.state.combo * 10);
            game.state.bossHP -= 10;
            
            // 視覺效果
            const targetBtn = choice === 'A' ? btnA : btnB;
            targetBtn.classList.add('btn-correct');
            game.showDamageEffect(100 + (game.state.combo * 10));
            document.getElementById('feedback').innerText = "✨ 漂亮的一擊！";
            document.getElementById('feedback').className = "mt-4 h-6 text-lg font-bold text-green-400";
            
        } else {
            // 答錯邏輯
            game.state.combo = 0;
            game.state.playerHP--;
            game.state.mistakes.push(qData);
            
            // 視覺效果
            const targetBtn = choice === 'A' ? btnA : btnB;
            targetBtn.classList.add('btn-wrong');
            document.getElementById('quiz-area').classList.add('shake');
            setTimeout(() => document.getElementById('quiz-area').classList.remove('shake'), 500);
            
            document.getElementById('feedback').innerText = `💥 哎呀！解析：${qData.reason}`;
            document.getElementById('feedback').className = "mt-4 h-6 text-lg font-bold text-red-400";
        }

        game.updateUI();

        // 判斷遊戲結束
        if (game.state.playerHP <= 0) {
            setTimeout(() => game.showResult(false), 1500);
        } else if (game.state.currentIndex >= boss.questions.length - 1) {
            setTimeout(() => game.showResult(true), 1500);
        } else {
            game.state.currentIndex++;
            setTimeout(game.loadQuestion, 2000); // 2秒後下一題
        }
    },

    // 更新介面 (血條)
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
        // 隨機位置
        el.style.left = `${Math.random() * 40 - 20}px`; 
        container.appendChild(el);
        setTimeout(() => el.remove(), 1000);
    },

    // 結算畫面
    showResult: (isWin) => {
        document.getElementById('battle-screen').classList.remove('active');
        document.getElementById('result-screen').classList.add('active');

        const title = document.getElementById('result-title');
        const stats = document.getElementById('result-stats');
        const mistakeDiv = document.getElementById('mistake-list');
        const mistakeUl = document.getElementById('mistake-ul');

        if (isWin) {
            title.innerText = "🎉 任務完成！";
            title.className = "text-6xl font-bold mb-4 text-yellow-400";
            game.state.playerLevel++;
            document.getElementById('player-lvl').innerText = game.state.playerLevel;
        } else {
            title.innerText = "💀 挑戰失敗...";
            title.className = "text-6xl font-bold mb-4 text-gray-500";
        }

        stats.innerHTML = `
            得分: <span class="text-yellow-400">${game.state.score}</span> <br>
            剩餘生命: ${game.state.playerHP}/3
        `;

        // 顯示錯題
        mistakeUl.innerHTML = '';
        if (game.state.mistakes.length > 0) {
            mistakeDiv.classList.remove('hidden');
            game.state.mistakes.forEach(m => {
                const li = document.createElement('li');
                li.innerHTML = `${m.q} -> 正解: <b>${m.correct}</b> <span class="text-gray-400">(${m.reason})</span>`;
                mistakeUl.appendChild(li);
            });
        } else {
            mistakeDiv.classList.add('hidden');
            if(isWin) stats.innerHTML += "<br><span class='text-green-400'>完美通關！太強了！</span>";
        }
    },

    // 返回地圖
    returnToMap: () => {
        document.getElementById('result-screen').classList.remove('active');
        document.getElementById('battle-screen').classList.remove('active');
        document.getElementById('world-map').classList.add('active');
    }
};