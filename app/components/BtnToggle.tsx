interface NavegacionProps {
    active: boolean;
    setActive: (active: boolean) => void;
  }

const BtnToggle:React.FC<NavegacionProps> = ({active, setActive}) => {

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div id="menuToggle" className="relative z-50">
            <div onClick={handleClick} className="toggle">
                <div className={`bar${ active ? ' bar--top bar--top-active' : ' bar--top'}`}></div>
                <div className={`bar${ active ? ' bar--middle bar--middle-active' : ' bar--middle'}`}></div>
                <div className={`bar${ active ? ' bar--bottom bar--bottom-active' : ' bar--bottom'}`}></div>
            </div>
        </div>
    );
};

export default BtnToggle;
