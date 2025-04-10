import ActionIcons from "./ActionIcons";
import Countries from "./Countries";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

function Header() {
  return (
    <header className="flex items-center gap-10 justify-between m-5 max-xl:justify-center flex-wrap">
      <div className="left-side flex items-center justify-center gap-8 flex-wrap">
        <Logo />
        <Menu />
      </div>
      <div className="right-side flex items-center justify-center gap-5 flex-wrap">
        <Countries />
        <div className="flex items-center justify-center gap-5">
          <Search />
          <ActionIcons />
        </div>
      </div>
    </header>
  );
}

export default Header;
