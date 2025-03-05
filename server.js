const express = require("express");  // 引入 Express
const jsonServer = require("json-server");  // 引入 JSON Server
const path = require("path");  // 處理檔案路徑

const app = express();
const router = jsonServer.router("snowBuddy.json"); // 指定 JSON Server 讀取 snowBuddy.json
const middlewares = jsonServer.defaults();

// 設定靜態檔案資料夾，讓圖片可以被存取
app.use(express.static(path.join(__dirname, "public")));
app.use(middlewares);
app.use("/api", router);  // 讓 API 路徑變成 /api

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
