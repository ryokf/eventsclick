import { VscChevronRight } from "react-icons/vsc";

const ButtonNav = ({href}) => {
    return (
        <a href={href} className='flex items-center text-primary'>
            <div className="text-xs lg:text-base">Selengkapnya</div>
            <div><VscChevronRight className='lg:text-xl' /></div>
        </a>
    )
}

export default ButtonNav
