import { TECollapse } from "tw-elements-react";

const FAQInfo = ({
  handleClick,
  activeElement,
  faqParagraph,
  faqTitle,
  faqId,
}) => {
  return (
    <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
      <h2 className="mb-0" id="headingOne">
        <button
          className={`${
            activeElement === faqId &&
            `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
          } group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
          type="button"
          onClick={() => handleClick(faqId)}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {faqTitle}
          <span
            className={`${
              activeElement === faqId ? `rotate-[-180deg] -mr-1` : `rotate-0`
            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </button>
      </h2>
      <TECollapse
        show={activeElement === faqId}
        className="!mt-0 !rounded-b-none !shadow-none"
      >
        <div className="px-5 py-4">{faqParagraph}</div>
      </TECollapse>
    </div>
  );
};

export default FAQInfo;
