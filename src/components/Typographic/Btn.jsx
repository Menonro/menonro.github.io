import React from 'react'

export default function Btn({ direction = 'center', children, onClick = ()=>{} }) {
    return (
        <button className={direction} onClick={onClick}>
            {children}
            <style jsx>{`
                button {
                    cursor: pointer;
                    border: none;
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 80px;
                    line-height: 80px;
                    font-size: 40px;
                    background-color: white;
                    color: black;
                    font-weight: 700;
                    padding: 0 36px;
                } 
                button.left {
                    clip-path: polygon(0 50%, 26px 0, 100% 0, calc(100% - 26px) 50%, 100% 100%, 26px 100%);
                }
                button.right {
                    clip-path: polygon(26px 50%, 0 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 0 100%);
                }
                button.center {
                    clip-path: polygon(0 50%, 26px 0, calc(100% - 26px) 0, 100% 50%, calc(100% - 26px) 100%, 26px 100%);
                }
            `}</style>
        </button>
    )
}
