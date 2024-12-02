import {
  BiRevision,
  BiEditAlt,
  BiSolidTrashAlt,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { formatText } from "../../js/formatter";

export default function Bot({ content }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-[1em] text-secondary-300">
        <div dangerouslySetInnerHTML={{ __html: formatText(content) }} />
      </div>

      <div className="flex flex-row items-center gap-1">
        <div className="flex flex-row items-center gap-1 p-2 border border-secondary-250 rounded-sm opacity-30 cursor-pointer hover:opacity-100">
          <BiRevision className="text-secondary-300" />
        </div>
        <div className="flex flex-row items-center gap-1 p-2 border border-secondary-250 rounded-sm opacity-30 cursor-pointer hover:opacity-100">
          <BiEditAlt className="text-secondary-300" />
        </div>
        <div className="flex flex-row items-center gap-1 p-2 border border-secondary-250 rounded-sm opacity-30 cursor-pointer hover:opacity-100">
          <BiSolidTrashAlt className="text-secondary-300" />
        </div>
        <div className="flex flex-row items-center gap-1 p-2 border border-secondary-250 rounded-sm opacity-30 cursor-pointer hover:opacity-100">
          <BiDotsVerticalRounded className="text-secondary-300" />
        </div>
      </div>
    </div>
  );
}
