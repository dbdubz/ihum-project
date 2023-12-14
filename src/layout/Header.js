import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ data }) {
    //console.log(data["early-renaissance"][0].artifacts[0]["the-holy-trinity"].name);
    const [isSubMenuVisibleLM, setSubMenuVisibleLM] = useState(false);
    const [isSubMenuVisibleER, setSubMenuVisibleER] = useState(false);
    const [isSubMenuVisibleEMR, setSubMenuVisibleEMR] = useState(false);
    const [isSubMenuVisibleMR, setSubMenuVisibleMR] = useState(false);
    const [isSubMenuVisibleHR, setSubMenuVisibleHR] = useState(false);
    const [isSubMenuVisibleLR, setSubMenuVisibleLR] = useState(false);

    //Late Medieval
    function handleMouseOverLM() {
        setSubMenuVisibleLM(true);
        setSubMenuVisibleER(false);
        setSubMenuVisibleEMR(false);
        setSubMenuVisibleMR(false);
        setSubMenuVisibleHR(false);
        setSubMenuVisibleLR(false);
    }

    //Early Renaissance
    function handleMouseOverER() {
        setSubMenuVisibleER(true);
        setSubMenuVisibleLM(false);
        setSubMenuVisibleEMR(false);
        setSubMenuVisibleMR(false);
        setSubMenuVisibleHR(false);
        setSubMenuVisibleLR(false);
    }

    //Early-mid Renaissance
    function handleMouseOverEMR() {
        setSubMenuVisibleEMR(true);
        setSubMenuVisibleER(false);
        setSubMenuVisibleMR(false);
        setSubMenuVisibleHR(false);
        setSubMenuVisibleLR(false);
        setSubMenuVisibleLM(false);
    }

    //Mid Renaissance
    function handleMouseOverMR() {
        setSubMenuVisibleMR(true);
        setSubMenuVisibleER(false);
        setSubMenuVisibleEMR(false);
        setSubMenuVisibleHR(false);
        setSubMenuVisibleLR(false);
        setSubMenuVisibleLM(false);
    }

    //High Renaissance
    function handleMouseOverHR() {
        setSubMenuVisibleHR(true);
        setSubMenuVisibleER(false);
        setSubMenuVisibleEMR(false);
        setSubMenuVisibleMR(false);
        setSubMenuVisibleLR(false);
        setSubMenuVisibleLM(false);
    }

    //Late Renaissance
    function handleMouseOverLR() {
        setSubMenuVisibleLR(true);
        setSubMenuVisibleER(false);
        setSubMenuVisibleEMR(false);
        setSubMenuVisibleMR(false);
        setSubMenuVisibleHR(false);
        setSubMenuVisibleLM(false);
    }

    //Close all submenus
    function handleMouseOut() {
        setSubMenuVisibleLM(false);
        setSubMenuVisibleER(false);
        setSubMenuVisibleEMR(false);
        setSubMenuVisibleMR(false);
        setSubMenuVisibleHR(false);
        setSubMenuVisibleLR(false);
    }

    const lm = "late-medieval";
    const er = "early-renaissance";
    const emr = "early-mid-renaissance";
    const mr = "mid-renaissance";
    const hr = "high-renaissance";
    const lr = "late-renaissance";

    return (
        <div>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/ihum-project" className='nav-item'>Home</Link></li>
                    <li className='dropdown'>
                        <Link to="/exhibit" className='nav-item'>Exhibit</Link>
                        <div className="dropdown-content" onMouseLeave={handleMouseOut}>

                            {/* Late Medieval */}
                            <Link to={`/exhibit/${lm}`} className='parent' style={{textAlign: 'left', backgroundColor: '#ccc', fontWeight: isSubMenuVisibleLM ? 'bold' : ''}} onMouseOver={handleMouseOverLM}>
                                {data["late-medieval"][0].name}
                            </Link>
                            <div className='child' style={{display: isSubMenuVisibleLM ? 'block' : 'none'}}>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${lm}/the-last-judgement`}>
                                    {`${data["late-medieval"][0].artifacts[0]["the-last-judgement"].name} (${data["late-medieval"][0].artifacts[0]["the-last-judgement"]["artist-last"]}, ${data["late-medieval"][0].artifacts[0]["the-last-judgement"].year})`}
                                </Link>
                            </div>

                            {/* Early Renaissance */}
                            <Link to={`/exhibit/${er}`} style={{textAlign: 'left', backgroundColor: '#ccc', fontWeight: isSubMenuVisibleER ? 'bold' : ''}} onMouseOver={handleMouseOverER}>
                                {data["early-renaissance"][0].name}
                            </Link>
                            <div className='child' style={{display: isSubMenuVisibleER ? 'block' : 'none'}}>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${er}/the-holy-trinity`}>
                                    {`${data["early-renaissance"][0].artifacts[0]["the-holy-trinity"].name} (${data["early-renaissance"][0].artifacts[0]["the-holy-trinity"]["artist-last"]}, ${data["early-renaissance"][0].artifacts[0]["the-holy-trinity"].year})`}
                                </Link>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${er}/self-portrait`}>
                                    {`${data["early-renaissance"][0].artifacts[0]["self-portrait"].name} (${data["early-renaissance"][0].artifacts[0]["self-portrait"]["artist-last"]}, ${data["early-renaissance"][0].artifacts[0]["self-portrait"].year})`}
                                </Link>
                            </div>

                            {/* Early-mid Renaissance */}
                            <Link to={`/exhibit/${emr}`} style={{textAlign: 'left', backgroundColor: '#ccc', fontWeight: isSubMenuVisibleEMR ? 'bold' : ''}} onMouseOver={handleMouseOverEMR}>
                                {data["early-mid-renaissance"][0].name}
                            </Link>
                            <div className='child' style={{display: isSubMenuVisibleEMR ? 'block' : 'none'}}>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${emr}/the-birth-of-venus`}>
                                    {`${data["early-mid-renaissance"][0].artifacts[0]["the-birth-of-venus"].name} (${data["early-mid-renaissance"][0].artifacts[0]["the-birth-of-venus"]["artist-last"]}, ${data["early-mid-renaissance"][0].artifacts[0]["the-birth-of-venus"].year})`}
                                </Link>
                            </div>

                            {/* Mid Renaissance */}
                            <Link to={`/exhibit/${mr}`} style={{textAlign: 'left', backgroundColor: '#ccc', fontWeight: isSubMenuVisibleMR ? 'bold' : ''}} onMouseOver={handleMouseOverMR}>
                                {data["mid-renaissance"][0].name}
                            </Link>
                            <div className='child' style={{display: isSubMenuVisibleMR ? 'block' : 'none'}}>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${mr}/vitruvian-man`}>
                                    {`${data["mid-renaissance"][0].artifacts[0]["vitruvian-man"].name} (${data["mid-renaissance"][0].artifacts[0]["vitruvian-man"]["artist-last"]}, ${data["mid-renaissance"][0].artifacts[0]["vitruvian-man"].year})`}
                                </Link>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${mr}/the-school-of-athens`}>
                                    {`${data["mid-renaissance"][0].artifacts[0]["the-school-of-athens"].name} (${data["mid-renaissance"][0].artifacts[0]["the-school-of-athens"]["artist-last"]}, ${data["mid-renaissance"][0].artifacts[0]["the-school-of-athens"].year})`}
                                </Link>
                            </div>

                            {/* High Renaissance */}
                            <Link to={`/exhibit/${hr}`} style={{textAlign: 'left', backgroundColor: '#ccc', fontWeight: isSubMenuVisibleHR ? 'bold' : ''}} onMouseOver={handleMouseOverHR}>
                                {data["high-renaissance"][0].name}
                            </Link>
                            <div className='child' style={{display: isSubMenuVisibleHR ? 'block' : 'none'}}>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${hr}/assumption-of-the-virgin`}>
                                    {`${data["high-renaissance"][0].artifacts[0]["assumption-of-the-virgin"].name} (${data["high-renaissance"][0].artifacts[0]["assumption-of-the-virgin"]["artist-last"]}, ${data["high-renaissance"][0].artifacts[0]["assumption-of-the-virgin"].year})`}
                                </Link>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${hr}/mona-lisa`}>
                                    {`${data["high-renaissance"][0].artifacts[0]["mona-lisa"].name} (${data["high-renaissance"][0].artifacts[0]["mona-lisa"]["artist-last"]}, ${data["high-renaissance"][0].artifacts[0]["mona-lisa"].year})`}
                                </Link>
                            </div>

                            {/* Late Renaissance */}
                            <Link to={`/exhibit/${lr}`} style={{textAlign: 'left', backgroundColor: '#ccc', fontWeight: isSubMenuVisibleLR ? 'bold' : ''}} onMouseOver={handleMouseOverLR}>
                                {data["late-renaissance"][0].name}
                            </Link>
                            <div className='child' style={{display: isSubMenuVisibleLR ? 'block' : 'none'}}>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${lr}/bacchus-and-ariadne`}>
                                    {`${data["late-renaissance"][0].artifacts[0]["bacchus-and-ariadne"].name} (${data["late-renaissance"][0].artifacts[0]["bacchus-and-ariadne"]["artist-last"]}, ${data["late-renaissance"][0].artifacts[0]["bacchus-and-ariadne"].year})`}
                                </Link>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${lr}/the-harvesters`}>
                                    {`${data["late-renaissance"][0].artifacts[0]["the-harvesters"].name} (${data["late-renaissance"][0].artifacts[0]["the-harvesters"]["artist-last"]}, ${data["late-renaissance"][0].artifacts[0]["the-harvesters"].year})`}
                                </Link>
                                <Link style={{borderBottom: 'solid grey 1px'}} to={`/exhibit/${lr}/the-calling-of-saint-matthew`}>
                                    {`${data["late-renaissance"][0].artifacts[0]["the-calling-of-saint-matthew"].name} (${data["late-renaissance"][0].artifacts[0]["the-calling-of-saint-matthew"]["artist-last"]}, ${data["late-renaissance"][0].artifacts[0]["the-calling-of-saint-matthew"].year})`}
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;