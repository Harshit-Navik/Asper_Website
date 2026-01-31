import LogoIcon from "./logoicon";

const Logo = () => {
    return ( <div>
        {/* /* GDG Logo */ }
    <a href="/" className="flex items-center gap-3 group text-decoration-none">
      <LogoIcon />
      <div className="flex flex-col">
        <span className="text-lg font-bold text-neutral-900 tracking-tight leading-none">GDG</span>
        <span className="text-[10px] text-neutral-500 font-medium tracking-wide">SOIT RGPV</span>
      </div>
    </a>
    </div> );
}
 
export default Logo;