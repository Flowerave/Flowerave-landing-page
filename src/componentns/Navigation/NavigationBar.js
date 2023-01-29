import React, { useState } from 'react';
import Link from 'next/link';

function NavigationBar(props) {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
    }

    function Box() {
        return (
            <div className='navMobile'>
                <h2>dasd</h2>
            </div>
        );
    }

    return (
    <nav className='nav'>

        <Link href={'/'}>
            <span className='logoMain'>
                <svg width="123" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.526 3.776H5.462v3.048h7.536v3.672H5.462V17H.134V.056h13.392v3.72zM20.03 17h-4.968V.056h4.968V17zm16.032-6.192c0 1.904-.64 3.496-1.92 4.776-1.28 1.264-3.112 1.896-5.496 1.896-2.048 0-3.744-.568-5.088-1.704-1.328-1.136-1.992-2.768-1.992-4.896 0-1.968.624-3.6 1.872-4.896 1.264-1.296 3.056-1.944 5.376-1.944 2.368 0 4.168.64 5.4 1.92 1.232 1.28 1.848 2.896 1.848 4.848zm-4.992-.12c0-2.112-.768-3.168-2.304-3.168-.784 0-1.36.296-1.728.888-.368.576-.552 1.352-.552 2.328 0 2.192.768 3.288 2.304 3.288 1.52 0 2.28-1.112 2.28-3.336zm25.487-6.12L52.837 17h-4.92l-1.632-7.368L44.773 17h-4.92L36.109 4.568h5.04l1.536 7.704 1.512-7.704h4.248l1.56 7.68 1.488-7.68h5.064zm13.961 7.104h-8.664c0 .208.016.416.048.624.048.192.128.44.24.744.128.288.336.52.624.696.304.176.68.264 1.128.264.272 0 .52-.032.744-.096.224-.08.408-.168.552-.264.16-.096.304-.216.432-.36s.224-.264.288-.36c.064-.096.128-.208.192-.336l.096-.192 4.056 1.704c-.56.912-1.384 1.712-2.472 2.4-1.072.672-2.432 1.008-4.08 1.008-.96 0-1.84-.136-2.64-.408-.784-.272-1.432-.632-1.944-1.08a6.897 6.897 0 0 1-1.32-1.56 7.308 7.308 0 0 1-.768-1.848 8.405 8.405 0 0 1-.216-1.896c0-1.152.208-2.176.624-3.072.416-.896.96-1.592 1.632-2.088a7.285 7.285 0 0 1 2.184-1.128 7.685 7.685 0 0 1 2.4-.384c2.192 0 3.88.656 5.064 1.968 1.2 1.296 1.8 2.928 1.8 4.896v.768zm-8.616-2.616h3.6c-.048-.608-.232-1.072-.552-1.392-.32-.32-.72-.48-1.2-.48-.576 0-1.032.224-1.368.672-.32.432-.48.832-.48 1.2zm18.853-4.752V8.48a8.996 8.996 0 0 0-1.056-.048c-.304 0-.6.032-.888.096a3.628 3.628 0 0 0-.912.312c-.336.16-.608.424-.816.792-.192.352-.288.792-.288 1.32V17h-4.92V4.568h4.752v1.08c.64-.576 1.256-.944 1.848-1.104.592-.16 1.352-.24 2.28-.24zM94.608 17h-4.873v-.96a14.81 14.81 0 0 1-1.103.672c-.273.144-.672.272-1.2.384a7.784 7.784 0 0 1-1.825.192c-1.296 0-2.367-.352-3.216-1.056-.832-.72-1.248-1.704-1.248-2.952 0-1.376.569-2.448 1.704-3.216.657-.448 1.8-.784 3.433-1.008 1.632-.224 2.704-.424 3.216-.6-.032-.496-.16-.856-.384-1.08-.209-.224-.64-.336-1.296-.336-.544 0-.937.096-1.177.288-.224.176-.367.464-.431.864a646.51 646.51 0 0 0-4.656.12c.063-.32.12-.568.167-.744.065-.192.169-.448.313-.768a3.23 3.23 0 0 1 .48-.816 6.23 6.23 0 0 1 .791-.696 3.94 3.94 0 0 1 1.153-.6c.431-.144.975-.264 1.632-.36a13.028 13.028 0 0 1 2.184-.168c.816 0 1.535.056 2.16.168a6.94 6.94 0 0 1 1.847.6 3.008 3.008 0 0 1 1.392 1.32c.336.592.504 1.32.504 2.184v7.032c0 .432.025.736.073.912.063.176.183.384.36.624zm-5.136-5.328v-.456c-.209.096-.664.232-1.368.408-.704.16-1.28.36-1.728.6-.433.224-.648.528-.648.912 0 .24.096.464.288.672.207.192.52.288.935.288.64 0 1.217-.232 1.729-.696.527-.464.791-1.04.791-1.728zm19.164-7.104L104.508 17h-5.256L95.1 4.568h5.232l1.512 7.44 1.608-7.44h5.184zm13.913 7.104h-8.663c0 .208.016.416.048.624.048.192.128.44.24.744.128.288.336.52.624.696.304.176.68.264 1.128.264.272 0 .52-.032.744-.096.224-.08.408-.168.552-.264.16-.096.304-.216.432-.36s.224-.264.288-.36c.064-.096.128-.208.192-.336l.096-.192 4.056 1.704c-.56.912-1.384 1.712-2.472 2.4-1.072.672-2.432 1.008-4.08 1.008-.96 0-1.84-.136-2.64-.408-.784-.272-1.432-.632-1.944-1.08a6.897 6.897 0 0 1-1.32-1.56 7.308 7.308 0 0 1-.768-1.848 8.405 8.405 0 0 1-.216-1.896c0-1.152.208-2.176.624-3.072.416-.896.96-1.592 1.632-2.088a7.285 7.285 0 0 1 2.184-1.128 7.685 7.685 0 0 1 2.4-.384c2.192 0 3.88.656 5.064 1.968 1.2 1.296 1.799 2.928 1.799 4.896v.768zm-8.615-2.616h3.6c-.048-.608-.232-1.072-.552-1.392-.32-.32-.72-.48-1.2-.48-.576 0-1.032.224-1.368.672-.32.432-.48.832-.48 1.2z" fill="currentColor"/></svg>
            </span>
        </Link>

        <div className='socialLink'>
            <div className='socialLink_Media'>
                <Link href={'https://apple.com'} target="_blank">Instagram</Link>
                <Link href={'https://apple.com'} target="_blank">Facebook</Link>
                <Link href={'https://twitter.com/flowerave_nft'} target="_blank">Twitter</Link>
            </div>
            <span className='dot'></span>
            <div className='socialLink_Develop'>
                <Link href={'https://github.com/Flowerave'} target="_blank">GitHub</Link>
                <Link href={'https://apple.com'} target="_blank">Notion</Link>
            </div>
        </div>

        <button
            className='navMobile'
            onClick={handleClick}>
            Click
            </button>

        {/* 👇️ show elements on click */}
        {isShown && (
            <div className='navigationMobileView'>
                IS SHOW
            </div>
        )}


    </nav>
  )
}

export default NavigationBar