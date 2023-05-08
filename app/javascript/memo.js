function post (){
    // リクエストを送信する処理
    const submit = document.getElementById("submit");
    // 投稿ボタンがクリックされたことを認識するためにsubmit.addEventListenerと記述
    submit.addEventListener("click", (e) => {
        // メモが重複投稿されないようにする
        e.preventDefault();
        // getElementByIdメソッドを用いてフォームの要素を取得
        const form = document.getElementById("form");
        // FormDataオブジェクトを使うためにフォームの値を取得
        const formData = new FormData("form");
        // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成
        const XHR = new XMLHttpRequest();
        // openメソッドを用いてリクエスト内容を指定
        XHR.open("POST", "/posts", true);
        // jsonというデータフォーマットを使用
        XHR.responseType = "json";
        // フォームに入力された内容をサーバー側に送信
        XHR.send(formData);
        XHR.onload = () => {
            console.log(XHR.response);
        };
    });
};

window.addEventListener('load', post);