# Testing day 2017 前端測試

**初始化測試專案**

```
npm init -y
npm install webdriverio -D
node_modules/.bin/wdio
```

**設定 npm test**

```
vi package.json
```

**執行測試專案**

```
npm test
```

### 新增 allure 報表格式

```
npm install wdio-allure-reporter --save-dev
vi wdio.conf.js
npm test

// 安裝將 allure 測試結果轉換成報表的工具
brew tap qatools/formulas
brew install allure-commandline

// 將 allure 測試結果轉換成報表
allure generate allure-results
allure report open
```

### 參考資料

* [Allure Commandline - Allure - Confluence](http://wiki.qatools.ru/display/AL/Allure+Commandline)