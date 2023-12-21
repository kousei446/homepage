import React, { useState } from 'react';
// アプリケーションのメインコンポーネント
const Gpt = () => {
  // 現在の画面を管理するためのstate
  const [currentScreen, setCurrentScreen] = useState(1);

  // 画面切り替えのボタンが押された時の処理
  const switchScreen = () => {
    setCurrentScreen(currentScreen === 1 ? 2 : 1);
    //currentScreen が 1 と等しい場合、setCurrentScreen(2) を実行します。
// currentScreen が 1 と等しくない場合、setCurrentScreen(1) を実行します。
  };

  return (
    <div>
      {/* 現在の画面に応じてコンポーネントを表示 */}
      {currentScreen === 1 ? <Screen1 /> : <Screen2 />}

      {/* 画面切り替えのボタン */}
      <button onClick={switchScreen}>切り替える</button>
    </div>
  );
};

// 画面1のコンポーネント
const Screen1 = () => (
    <div>
      <h1>画面1</h1>
      <p>これは画面1のコンテンツです。</p>
    </div>
  );
  
  // 画面2のコンポーネント
  const Screen2 = () => (
    <div>
      <h1>画面2</h1>
      <p> ahhhhh</p>
    </div>
  );