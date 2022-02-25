import "./topbar.scss"
import {LensSharp, Mail, GitHub} from "@material-ui/icons"


export default function Topbar() {
  return (
    <div className="topbar active">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo"><LensSharp/></a>
                    <div className="itemContainer">
                        <GitHub/>
                        <span><a href="github.com/sua-dev">GitHub</a></span>
                        <Mail/>
                        <span><a href="mailto:sua2g16@soton.ac.uk">University Email</a></span>
                    </div>
            </div>
            
            <div className="right">
                <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
