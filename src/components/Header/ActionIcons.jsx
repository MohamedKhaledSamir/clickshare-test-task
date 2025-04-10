import { GitCompare, Heart } from "lucide-react";

function ActionIcons() {
  return (
    <ul className="flex items-center justify-center gap-2">
      <li className="cursor-pointer">
        <Heart size={35} fill="#5664f5" className="text-gray-50" />
      </li>
      <li className="cursor-pointer">
        <GitCompare className="text-blue-600" />
      </li>
    </ul>
  );
}

export default ActionIcons;
