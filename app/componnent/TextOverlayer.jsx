import GradientText from "./GradientText"

export const FrontOne = ({ cardti, carddes, name, name2, name3, acarddate, labelone, labeltwo, labelthree }) => {
    return (
        <div className="w-full h-full relative">

            <span className="text-white uppercase text-sm lg:text-2xl font-bold absolute top-4 left-11.5 lg:top-9 lg:left-26 text-center w-[96px] lg:w-[176px] z-50 font-[GustanBlack]">{cardti}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-57 left-[6px] lg:top-111 lg:left-8 text-center w-[180px] lg:w-[320px] z-50">{carddes}</span>

            <span className="text-white text-[8px] lg:text-xs font-bold absolute top-64 left-[-12px] lg:top-122 lg:left-8 text-center w-[96px] z-50">{name}</span>


            <span className="bg-black border border-gray-50 h-[5px] lg:h-[8px] rounded-full text-[10px] lg:text-xs font-bold absolute top-66.5 left-[-12px] lg:top-126 lg:left-8 text-center w-[96px] z-50">
                <div style={{ width: `${labelone}%` }} className={`h-full bg-[#f56f41] rounded-full`} />
            </span>

            <span className="text-white text-[8px] lg:text-xs font-bold absolute top-64 left-[50px] lg:top-122 lg:left-36 text-center w-[96px] z-50">{name2}</span>


            <span className="bg-black border border-gray-50 h-[5px] lg:h-[8px] rounded-full text-[10px] lg:text-xs font-bold absolute top-66.5 left-[50px] lg:top-126 lg:left-36 text-center w-[96px] z-50">
                <div style={{ width: `${labeltwo}%` }} className={`h-full bg-[#f56f41] rounded-full`} />
            </span>


            <span className="text-white text-[8px] lg:text-xs font-bold absolute top-64 left-[112px] lg:top-122 lg:left-65 text-center w-[96px] z-50">{name3}</span>


            <span className="bg-black border border-red-900 h-[5px] lg:h-[8px] rounded-full text-[10px] lg:text-xs font-bold absolute top-66.5 left-[130px] lg:top-126 lg:left-65 text-center w-[58px] lg:w-[96px] z-50">
                <div style={{ width: `${labelthree}%` }} className={`h-full bg-[#f56f41] rounded-full`} />
            </span>

            <span className="text-[#5ba2d7] font-bold lg:font-extrabold absolute z-50 text-[10px] lg:text-md top-68.5 right-2 lg:text-lg w-[180px] lg:top-130 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}




export const FrontTwo = ({ cardti, carddes, name, name2, name3, acarddate, labelone, labeltwo, labelthree }) => {
    return (
        <div className="w-full h-full relative">


            <div className={"uppercase text-3xl font-extrabold absolute top-[-2] left-11 lg:top-9.5 lg:left-23 z-50"}>
                <GradientText text={cardti} />
            </div>


            <span className="text-white text-[11px] lg:text-xs font-bold absolute top-51 left-[-60px] lg:top-100 lg:left-8 text-center w-[320px] w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[-12px] lg:top-122 lg:left-8 text-center w-[96px] z-50">{name}</span>

            <span className="bg-black border border-gray-50 h-[8px] rounded-full text-[10px] lg:text-xs font-bold absolute top-62 left-[-12px] lg:top-126 lg:left-8 text-center w-[96px] z-50">
                <div style={{ width: `${labelone}%` }} className={`h-full bg-sky-400 rounded-full`} />
            </span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[50px] lg:top-122 lg:left-36 text-center w-[96px] z-50">{name2}</span>

            <span className="bg-black border border-gray-50 h-[8px] rounded-full text-[10px] lg:text-xs font-bold absolute top-62 left-[50px] lg:top-126 lg:left-36 text-center w-[96px] z-50">
                <div style={{ width: `${labeltwo}%` }} className={`h-full bg-sky-400 rounded-full`} />
            </span>

            <span className="text-white text-[10px] lg:text-xs font-bold absolute top-62 left-[112px] lg:top-122 lg:left-65 text-center w-[96px] z-50">{name3}</span>


            <span className="bg-black border border-gray-50 h-[8px] rounded-full text-[10px] lg:text-xs font-bold absolute top-62 left-[112px] lg:top-126 lg:left-65 text-center w-[96px] z-50">
                <div style={{ width: `${labelthree}%` }} className={`h-full bg-sky-400 rounded-full`} />
            </span>

            <span className="text-[#5ba2d7] font-bold lg:font-extrabold absolute z-50 text-[10px] lg:text-md top-68.5 right-2 lg:text-lg w-[180px] lg:top-130 lg:right-26 text-center tracking-tighter">{acarddate}</span>

        </div>
    )
}




export const FrontThree = ({ cardti, carddes, name, name2, name3, acarddate, labelone, labeltwo, labelthree }) => {
    return (


        <div className="w-full h-full relative">

            <div className={"uppercase text-3xl font-extrabold absolute top-[-8] left-11 lg:top-4 lg:left-21 z-50"}>
                <GradientText text={cardti} />
            </div>



            <span className="text-white text-xs font-bold absolute top-51 left-4 lg:top-97 lg:left-7 w-[265px] z-50 ">{carddes}</span>

            <span className="text-white text-xs font-bold w-[96px] absolute top-61 left-2 lg:top-120 lg:left-4 z-50">{name}</span>


            <span className="bg-white h-[6.5px] w-[96px] rounded-full absolute top-61 left-2 lg:top-124 lg:left-4 z-50">
                <div style={{ width: `${labelone}%` }} className={`h-full bg-[#f56f41] rounded-full`} />
            </span>

            <span className="text-white text-xs font-bold w-[96px] absolute top-65 left-2 lg:top-126 lg:left-4 z-50">{name2}</span>


            <span className="bg-white h-[6.5px] w-[96px] rounded-full absolute top-65 left-2 lg:top-130 lg:left-4 z-50">
                <div style={{ width: `${labeltwo}%` }} className={`h-full bg-[#f56f41] rounded-full`} />
            </span>


            <span className="text-white text-xs font-bold w-[96px] absolute top-69 left-2 lg:top-132 lg:left-4 z-50">{name3}</span>


            <span className="bg-white h-[6.5px] w-[96px] rounded-full absolute top-69 left-2 lg:top-136 lg:left-4 z-50">
                <div style={{ width: `${labelthree}%` }} className={`h-full bg-[#f56f41] rounded-full`} />
            </span>

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

            <span className="text-white text-md lg:text-2xl font-semibold lg:font-extrabold absolute top-6 left-5 lg:top-14 lg:left-26 text-center w-[176px] z-50 tracking-tighter">{cardti.toUpperCase()}</span>

            <span className="text-white text-[8px] lg:text-xs font-semibold lg:font-bold absolute top-14 left-6 lg:top-26 lg:left-15 line-clamp-3 text-center w-[153px] lg:w-[270px] z-50 ">{carddes}</span>

            <span className="text-white text-sm lg:text-lg font-semibold lg:font-extrabold absolute top-24 left-9 lg:top-46.5 lg:left-18 text-left w-[176px] z-50 tracking-tighter">{name.toUpperCase()}</span>

            <span className="text-white text-[8px] lg:text-xs font-semibold lg:font-bold absolute top-30 left-6 lg:top-57 lg:left-15 line-clamp-4 text-center w-[153px] lg:w-[270px] z-50">{name2}</span>

            <span className="text-white text-sm lg:text-lg font-semibold lg:font-extrabold absolute top-44 -left-4 lg:top-85.5 lg:left-35 text-right w-[176px] z-50 tracking-tighter">{name3.toUpperCase()}</span>

            <span className="text-white text-[8px] lg:text-xs font-semibold lg:font-bold absolute top-50 left-6 lg:top-96 lg:left-15 text-center w-[153px] lg:w-[270px] z-50">{acarddate}</span>

        </div>

    )
}




