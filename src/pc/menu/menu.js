import { Button } from "./button"
import "./menu.css"
function Menu() {
    return (
        <div style={{
            backgroundColor: "rgb(28, 150, 37)",
            width: "300px",
            height: "1000px",
            borderRadius: "20px",
        }}>
            <p className="menu">メニュー</p>
            <div>
                <Button />
                <Button />
            </div>
        </div>
    )
}
export default Menu
