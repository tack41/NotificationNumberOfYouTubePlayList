function main() {
  //各種情報の取得
  //YouTube API
  //PlayList ID
  //SpreadsheetID

  //SpreadSheetを開き、前回登録日時、前回登録総数を取得

  //YouTube APIより、現在の登録一覧、登録総数を取得(今回登録日時の算出)

  //前回登録日時と各動画の登録日時から、今回新たに登録された動画数を計算

  //前回登録総数、今回登録総数、今回新たに登録された動画数から今回消費された動画数を計算

  //SpreadSheetに今回登録日時、今回登録総数、今回新規登録数、今回消費された動画数を記録

  //通知
  notifyResult();
}
const greeter = (person: string) => {
  return `Hello, ${person}!`;
}
  
function testGreeter() {
  const user = 'Panda 🐼';
  Logger.log(greeter(user));
}

function notifyResult(){//今回登録日時、今回登録総数、今回新規登録数、今回消費された動画数を取得
  //LINEで通知
}