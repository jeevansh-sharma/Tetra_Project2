import { TtextHoverProps } from "@/types";

export default function TextHover({
	titile1,
    subTitle1,
    titile2,
    subTitle2,
}: TtextHoverProps) {
  return (
    <div className="group flex gap-x-5 overflow-hidden cursor-pointer">
      {/* First Text Block */}
      <div className="relative transition-all ease-in-out duration-500">
        <h1 className="text-4xl absolute left-0 translate-y-60 group-hover:translate-y-0 transition-all duration-500">
          {titile1}
        </h1>
        <h1 className="relative text-4xl flex gap-x-2">
          <div className="group-hover:translate-y-full transition-all duration-500">
            {titile1}
          </div>
          <div className="group-hover:translate-y-[100%] transition-all duration-500">
            {subTitle1}&nbsp;
          </div>
        </h1>
      </div>

      {/* Second Text Block */}
      <div className="relative transition-all ease-in-out duration-500">
        <h1 className="text-4xl absolute left-0 translate-y-[-100%] group-hover:translate-y-0 transition-all duration-500">
          {titile2}
        </h1>
        <h1 className="relative text-4xl flex gap-x-2">
          <div className="group-hover:translate-y-[-100%] transition-all duration-500">
            {titile2}&nbsp;
          </div>
          <div className="group-hover:translate-y-[100%] transition-all duration-500">
            {subTitle2}
          </div>
        </h1>
      </div>
    </div>
  );
}
