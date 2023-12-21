import insta from "./insta.jpg"

function Insta(){
    const handleClick =()=>{
        window.location.href="https://www.instagram.com/"
    };
    return(
        <dev>
            <a href="https://www.instagram.com/" target="_parent" rel="noopener noreferrer"> 
                <img src={insta}
                alt="insta"
                onClick={handleClick}
                />
            </a>
        </dev>
    )
}
export default Insta