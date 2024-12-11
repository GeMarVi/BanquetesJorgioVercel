interface NavegacionProps {
    activeToggle: boolean;
    setActiveToggle: (active: boolean) => void;
  }

const BtnToggle:React.FC<NavegacionProps> = ({activeToggle, setActiveToggle}) => {

    const handleClick = () => {
        setActiveToggle(!activeToggle);
    }

    return (
        <div id="menuToggle" className="relative z-50">
            <div onClick={handleClick} className="toggle">
                <div className={`bar${ activeToggle ? ' bar--top bar--top-active' : ' bar--top'}`}></div>
                <div className={`bar${ activeToggle ? ' bar--middle bar--middle-active' : ' bar--middle'}`}></div>
                <div className={`bar${ activeToggle ? ' bar--bottom bar--bottom-active' : ' bar--bottom'}`}></div>
            </div>
        </div>
    );
};

export default BtnToggle;
