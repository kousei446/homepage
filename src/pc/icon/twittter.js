import Twiter from "./twitter.jpg"
function Twitter() {
    const handleClick = () => {
        // 画像をクリックしたときの処理
        window.location.href = 'https://www.google.co.jp/search?q=Twitter&sca_esv=590844747&sxsrf=AM9HkKl0jw6s0DuaVIChN8scDmnqLKClZA%3A1702547520002&source=hp&ei=P9B6ZY6zO7Te2roPgL2lgAg&iflsig=AO6bgOgAAAAAZXreUJmTgQWMTv2pqvDTQBfiJgBRRiz4&ved=0ahUKEwjOzpDh046DAxU0r1YBHYBeCYAQ4dUDCAw&uact=5&oq=Twitter&gs_lp=Egdnd3Mtd2l6IgdUd2l0dGVyMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMg4QABiABBiKBRixAxiDAUiKKVAAWKoecAB4AJABAJgBUaABtQKqAQE0uAEDyAEA-AEBwgINEAAYgAQYBBixAxiDAcICBxAAGIAEGATCAgYQABgDGATCAgoQABiABBgEGLED&sclient=gws-wiz'; 
        //window.location.hrefを使用して新しいURLに遷移します。
        //これにより、ブラウザは指定されたURLにリダイレクトされます。
      };
    return (
        <div>
            <a  href="https://www.google.co.jp/search?q=Twitter&sca_esv=590844747&sxsrf=AM9HkKl0jw6s0DuaVIChN8scDmnqLKClZA%3A1702547520002&source=hp&ei=P9B6ZY6zO7Te2roPgL2lgAg&iflsig=AO6bgOgAAAAAZXreUJmTgQWMTv2pqvDTQBfiJgBRRiz4&ved=0ahUKEwjOzpDh046DAxU0r1YBHYBeCYAQ4dUDCAw&uact=5&oq=Twitter&gs_lp=Egdnd3Mtd2l6IgdUd2l0dGVyMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMg4QABiABBiKBRixAxiDAUiKKVAAWKoecAB4AJABAJgBUaABtQKqAQE0uAEDyAEA-AEBwgINEAAYgAQYBBixAxiDAcICBxAAGIAEGATCAgYQABgDGATCAgoQABiABBgEGLED&sclient=gws-wiz" target="_parent" rel="noopener noreferrer">
                <img src={Twiter} 
                alt="twitter"
                onClick={handleClick}
                />
            </a>
        </div>
    )
}
export default Twitter
//target属性は、ハイパーリンク（<a>タグや<area>タグなど）が
//クリックされたときにどのようにリンク先を表示するかを指定するために使用されます

//rel属性は、リンク先のリソースとの関係を
//定義するために使用されるHTML属性です
