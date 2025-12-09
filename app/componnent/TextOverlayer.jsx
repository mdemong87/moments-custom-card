import GradientText from "./GradientText"

export const FrontOne = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">

            <span className="text-white uppercase text-2xl font-bold absolute top-9 left-26 text-center w-[176px] z-50 tracking-widest bebas">{cardti}</span>

            <span className="text-white text-xs font-bold absolute top-111 text-center w-[320px] left-8 w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-8 text-center w-[96px] z-50">{name.toUpperCase()}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-36 text-center w-[96px] z-50">{name2}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-65 text-center w-[96px] z-50">{name3}</span>

            <span className="text-[#5ba2d7] lg:font-extrabold absolute z-50 text-md top-30 lg:text-lg w-[180px] lg:top-130 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}




export const FrontTwo = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">

            <div className={"uppercase text-3xl font-extrabold absolute top-4 left-21 z-50"}>
                <GradientText text={cardti} />
            </div>



            <span className="text-white text-xs font-bold absolute top-97 left-7 w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-3 z-50">{name}</span>

            <span className="text-white text-xs font-bold absolute top-127 left-3 z-50">{name2}</span>

            <span className="text-white text-xs font-bold absolute top-132 left-3 z-50">{name3}</span>

            <span className="text-white lg:font-extrabold absolute z-50 text-md top-30 lg:text-3xl lg:top-122 lg:right-6 tracking-tighter">{acarddate}</span>

        </div >
    )
}




export const FrontThree = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">


            <div className={"uppercase text-3xl font-extrabold absolute top-9.5 left-23 z-50"}>
                <GradientText text={cardti} />
            </div>


            <span className="text-white text-xs font-bold absolute top-100 text-center w-[320px] left-8 w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-8 text-center w-[96px] z-50">{name.toUpperCase()}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-36 text-center w-[96px] z-50">{name2}</span>

            <span className="text-white text-xs font-bold absolute top-122 left-65 text-center w-[96px] z-50">{name3}</span>

            <span className="text-[#5ba2d7] lg:font-extrabold absolute z-50 text-md top-30 lg:text-lg w-[180px] lg:top-130 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}



export const FrontFour = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">

            <span className="text-white text-2xl font-bold absolute top-7 left-26 text-center w-[176px] z-50 tracking-widest bebas">{cardti}</span>

            <span className="text-white text-xs font-bold absolute top-108 text-center w-[320px] left-8 w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-xs font-bold absolute top-120 left-8 text-center w-[96px] z-50">{name.toUpperCase()}</span>

            <span className="text-white text-xs font-bold absolute top-120 left-36 text-center w-[96px] z-50">{name2}</span>

            <span className="text-white text-xs font-bold absolute top-120 left-65 text-center w-[96px] z-50">{name3}</span>

            <span className="text-[#5ba2d7] lg:font-extrabold absolute z-50 text-md top-28 lg:text-lg w-[180px] lg:top-128 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}




export const BackOne = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">

            <span className="text-white text-2xl font-extrabold absolute top-14 left-26 text-center w-[176px] z-50 tracking-tighter">{cardti.toUpperCase()}</span>

            <span className="text-white text-xs font-bold absolute top-26 text-center w-[270px] left-15 z-50 ">{carddes}</span>

            <span className="text-white text-lg font-extrabold absolute top-46.5 left-18 text-left w-[176px] z-50 tracking-tighter">{name.toUpperCase()}</span>

            <span className="text-white text-xs font-bold absolute top-57 text-center w-[270px] left-15 z-50">{name2}</span>

            <span className="text-white text-lg font-extrabold absolute top-85.5 left-35 text-right w-[176px] z-50 tracking-tighter">{name3.toUpperCase()}</span>

            <span className="text-white text-xs font-bold absolute top-96 text-center w-[270px] left-15 z-50">{acarddate}</span>

        </div>

    )
}




