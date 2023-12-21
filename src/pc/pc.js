import "./pc.css"
import Twitter from "./icon/twittter"
import Insta from "./icon/insta"
import Menu from "./menu/menu"
function Pc1() {
    return (
        <div>
            <div style={{ backgroundColor: "#D9D9D9", }}>
                <h className="name">コウセイランド!(^^♪</h>
            </div>
            <div className="oit">
                <p className="oitmoji">Hello World!!</p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    <h className="age">ようこそ！！</h>
                </div>
                <div
                    style={{ display: "flex", }}>
                    <Twitter />
                    <Insta />
                </div>
            </div>
            <div style={{display:"flex",}}>
                <div>
                    <Menu  />
                </div>
                <div>
                    <p> こんにちは私は。。。。。。</p>
                </div>
            </div>
        </div>
    )
}
export default Pc1
