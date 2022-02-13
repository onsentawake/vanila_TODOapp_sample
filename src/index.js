// cssの読み込み
import "./styles.css";

// 追加ボタンがクリックされた際の処理
const onClickAdd = () => {
  // テキストボックスの値を取得、文字の初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了のTODO エリアにタスク項目を生成する関数
const createIncompleteList = (text) => {
  //divタグを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  //divタグの子タグ li を生成する
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //completeButton（完了ボタン）が押された際の処理（完了したTODOへ表示させる）
  completeButton.addEventListener("click", () => {
    //親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了　リストに追加
    const addTarget = completeButton.parentNode;

    // Todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    // console.log(addTarget);

    //完了したTODOエリアに liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //完了したTODOエリアに button タグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻すボタンを押された際に、完了したTODOエリアから要素を削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //完了ボタン
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
