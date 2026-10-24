# 給妳的五個小回憶

手機優先的靜態網站：Quokka 問問題 → 選答案 → 顯示照片 → 下一題，共五題。每個答案都能繼續，沒有計分。

## 預覽

在此資料夾執行 `python3 -m http.server 5173 --bind 127.0.0.1`，打開 http://localhost:5173 。此預覽僅供本機存取。

不需要安裝套件或建置；亦可直接用瀏覽器開啟 `index.html`。

## 換成你們的內容

- `content.js`：五題問題、選項、回答後的文字、照片標題與說明。
- `photos/01.jpg` 到 `photos/05.jpg`：放入自己的五張照片；其他檔名或格式請同步修改 `content.js` 的 `photo`。
- 尚未放照片時會顯示設計好的預留位置。現有文字是示範，不是實際回憶。
- 直橫照片皆完整呈現，不裁切。答案與照片不傳送至伺服器。

## 素材來源

DINOTAENG 官方角色頁：https://dinotaeng.com/character/

`assets/quokka.json` 與 `assets/bobo.json` 來自該頁的角色動畫，WebP 檔案為動畫內原有影格的直接解碼，未修改角色圖片。Quokka 動畫使用本地影格，不依賴外部播放程式。

角色與插畫版權歸 DINOTAENG；本專案未取得額外授權，不宣稱素材為開源或自製。Bobo 素材已備妥，目前簡化版僅使用 Quokka。

字型來自 Google Fonts；離線或載入失敗時使用裝置字型，其餘功能與角色素材均可離線使用。
