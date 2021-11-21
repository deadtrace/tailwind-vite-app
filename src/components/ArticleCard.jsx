import React from "react";

const ArticleCard = (props) => {
  console.log("Хуй");
  const { title, content, imageURL, category, date, source } = props.article;
  return (
    <div className="h-full">
      <div className="h-48 tablet:h-40 desktop:h-72 relative rounded-t-2xl overflow-hidden">
        <img
          src={imageURL}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
        <span className="py-2 px-3 text-black font-roboto text-sm leading-6 bg-white block absolute top-4 left-4 rounded-xl">
          Природа
        </span>
        <div className="p-3 absolute bg-white right-4 top-4 rounded-xl cursor-pointer">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 0H6V2H0V4H18V2H12V0ZM2 6V17C2 18.1046 2.89543 19 4 19H14C15.1046 19 16 18.1046 16 17V6H14V17H4V6H2ZM6 6L6 15H8L8 6H6ZM10 6V15H12V6H10Z"
              fill="#B6BCBF"
            />
          </svg>
        </div>
      </div>

      <div className="pt-4 pb-11 px-4 bg-white relative h-full rounded-b-2xl tablet:h-auto desktop:h-80">
        <span className="block font-pro text-gry text-lg">{date}</span>
        <span className="block font-slab text-main text-2xl mt-3">{title}</span>
        <span className="block font-roboto text-main text-base mt-3">
          {content}
        </span>
        <span className="block absolute bottom-4 left-4 tracking-tighter text-gry font-slab text-base font-bold uppercase">
          {source}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
