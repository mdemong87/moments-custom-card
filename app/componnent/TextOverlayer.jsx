import GradientText from "./GradientText"

export const FrontOne = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">

            <span className="text-white uppercase text-sm lg:text-2xl font-bold absolute top-4 left-3 lg:top-9 lg:left-26 text-center w-[176px] z-50 font-[GustanBlack] ">{cardti}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-57 left-[-64px] lg:top-111 lg:left-8 text-center w-[320px] w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[-12px] lg:top-122 lg:left-8 text-center w-[96px] z-50">{name}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[50px] lg:top-122 lg:left-36 text-center w-[96px] z-50">{name2}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[112px] lg:top-122 lg:left-65 text-center w-[96px] z-50">{name3}</span>

            <span className="text-[#5ba2d7] font-bold lg:font-extrabold absolute z-50 text-[10px] lg:text-md top-68.5 right-2 lg:text-lg w-[180px] lg:top-130 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}




export const FrontTwo = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (
        <div className="w-full h-full relative">


            <div className={"uppercase text-3xl font-extrabold absolute top-[-2] left-11 lg:top-9.5 lg:left-23 z-50"}>
                <GradientText text={cardti} />
            </div>


            <span className="text-white text-[11px] lg:text-xs font-bold absolute top-51 left-[-60px] lg:top-100 lg:left-8 text-center w-[320px] w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[-12px] lg:top-122 lg:left-8 text-center w-[96px] z-50">{name}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[50px] lg:top-122 lg:left-36 text-center w-[96px] z-50">{name2}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[112px] lg:top-122 lg:left-65 text-center w-[96px] z-50">{name3}</span>

            <span className="text-[#5ba2d7] font-bold lg:font-extrabold absolute z-50 text-[10px] lg:text-md top-68.5 right-2 lg:text-lg w-[180px] lg:top-130 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}




export const FrontThree = ({ cardti, carddes, name, name2, name3, acarddate }) => {
    return (


        <div className="w-full h-full relative">

            <div className={"uppercase text-3xl font-extrabold absolute top-[-8] left-11 lg:top-4 lg:left-21 z-50"}>
                <GradientText text={cardti} />
            </div>



            <span className="text-white text-xs font-bold absolute top-51 left-4 lg:top-97 lg:left-7 w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-xs font-bold absolute top-61 left-2 lg:top-119 lg:left-9 z-50">{name}</span>

            <span className="text-white text-xs font-bold absolute top-65 left-2 lg:top-124.5 lg:left-9 z-50">{name2}</span>

            <span className="text-white text-xs font-bold absolute top-69 left-2 lg:top-129.5 lg:left-9 z-50">{name3}</span>

            <span className="text-white lg:font-extrabold absolute z-50 text-sm top-65 right-3 lg:text-3xl lg:top-122 lg:right-6 tracking-tighter">{acarddate}</span>

        </div >
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




