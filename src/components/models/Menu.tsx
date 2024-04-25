import React from 'react'

type Props = {
    children: React.ReactNode;
    name: string;
}

const Menu = (props: Props) => {
    return (
        <>
            <div className="z-[910] absolute top-16 left-[21rem] flex justify-center items-center size-[20rem] text-white bg-[--black-700] border border-[--black-500] shadow rounded-md">
                {props.name}
            </div>
        </>
    )
}

export default Menu