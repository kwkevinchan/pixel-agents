/**
 * Traditional Chinese (zh-TW) display strings that are produced outside the
 * webview. Tool status text arrives from the server in English and is also
 * parsed by prefix (toolUtils.ts), so it is translated only at display time.
 */

const STATUS_PREFIXES: Array<[string, string]> = [
  ['Reading ', '讀取 '],
  ['Editing notebook', '編輯筆記本'],
  ['Editing ', '編輯 '],
  ['Writing ', '寫入 '],
  ['Running subtask', '執行子任務'],
  ['Running: ', '執行：'],
  ['Searching files', '搜尋檔案'],
  ['Searching code', '搜尋程式碼'],
  ['Searching the web', '搜尋網路'],
  ['Fetching web content', '擷取網頁內容'],
  ['Subtask: ', '子任務：'],
  ['Waiting for your answer', '等待你的回答'],
  ['Planning', '規劃中'],
  ['Creating team: ', '建立團隊：'],
  ['Creating team', '建立團隊'],
  ['Sending message', '傳送訊息'],
  ['Using ', '使用 '],
  ['Needs approval', '需要核准'],
  ['Waiting for input', '等待輸入'],
  ['Idle', '閒置'],
];

/** Translate a server-provided tool status line for display. */
export function localizeStatus(status: string): string {
  for (const [en, zh] of STATUS_PREFIXES) {
    if (status.startsWith(en)) return zh + status.slice(en.length);
  }
  return status;
}
