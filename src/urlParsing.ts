/**
 * 任務：實作一個函式 `parseUrl`，嘗試用 URL 方法，解析網址並 return 其組成部分。
 *
 * 範例：
 * parseUrl('https://www.example.com/path') 應該回傳 
 * {
 *   protocol: 'https:',
 *   hostname: 'www.example.com',
 *   path: '/path'
 * }
 *
 * @param url - 一個需要被解析的 URL
 * @returns - 回傳一個物件，包含 protocol、hostname 和 path
 */
interface UrlParts {
  protocol: string;
  hostname: string;
  path: string;
}

export function parseUrl(url: string): UrlParts {
   // 請在此處寫下你的程式碼
   const ary = url.split('/').filter(Boolean);//可排除布林值為false陣列中的null與空白值
   const parm: UrlParts = {
    protocol: ary[0],
    hostname: ary[1],
    path: `/${ary[2]}`
   }
   return parm;   
}
let url = 'https://www.example.com/path';
console.log(parseUrl(url));