import PopoverComponents from "@/components/Popover/Popover";
import popoverConst from "@/constants/components/popover/popover.const";

export const Header = () => {
  return (
    <header className="w-full bg-gray-300 h-12 sticky top-0">
      <div className="w-full flex justify-between items-center text-black h-12">
        <div className="flex text-xl items-center justify-center h-full px-4">
          hima-code-blog
        </div>
        <div className="flex-1 text-xl">
          <PopoverComponents props={popoverConst} />
        </div>
      </div>
    </header>
  );
};

export default Header;
