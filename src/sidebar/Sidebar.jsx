import { useEffect } from 'react'
import './sidebar.css'

function Sidebar() {



    function closeBtn() {
        const sidebar = document.getElementsByClassName("sideBar")[0]
        const main = document.getElementsByTagName("main")[0]
        sidebar.classList.toggle("close")
        if (sidebar.classList.length > 1) {
            main.style.marginLeft = "0px"
        } else {
            main.style.marginLeft = "420px"
        }
    }

    return (
        <div>

            <div className="sideBar">
                <div>
                    <h1>Filters</h1>
                    <button onClick={closeBtn}><i class="fa-solid fa-arrow-left"></i><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <select name="" id="">
                    <option value="">Status</option>
                </select>
                <select name="" id="">
                    <option value="">Price</option>
                </select>
                <select name="" id="">
                    <option value="">Collections</option>
                </select>
                <select name="" id="">
                    <option value="">Chains</option>
                </select>
                <select name="" id="">
                    <option value="">Categories</option>
                </select>
            </div>






        </div>
    )
}

export default Sidebar