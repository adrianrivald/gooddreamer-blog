import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useFaqHomeList } from "../services/faq/use-faq-list";

export const Faq = () => {
  const router = useRouter();
  const { data, isLoading } = useFaqHomeList();
  const [toggleFaq1, setToggleFaq1] = React.useState(false);
  const [toggleFaq2, setToggleFaq2] = React.useState(false);
  const faqData = data?.data;

  console.log(faqData && faqData, "faqData && faqdata");

  const onToggleFaq1 = () => {
    setToggleFaq1((prev) => {
      return !prev;
    });
  };

  const onToggleFaq2 = () => {
    setToggleFaq2((prev) => {
      return !prev;
    });
  };

  const onToFaq = () => {
    router.push("/faq");
  };

  return (
    <div className="bg-purple-primary py-14 px-8 lg:px-20 mt-14">
      <div className="flex justify-between">
        <h1 className="text-[40px] text-white font-bold">FAQ</h1>
        <button
          onClick={onToFaq}
          className={`mt-4 bg-purple-secondary text-purple-primary flex justify-between items-center gap-2 rounded-[5px] focus:outline-none w-[206px] py-2 px-4 `}
        >
          Lihat Lainnya
          <Image
            src="/assets/icons/arrow.svg"
            width={12}
            height={12}
            alt="arrow"
          />
        </button>{" "}
      </div>

      {/* Faq content */}
      <div className="mt-4">
        <div className="text-white border-b border-grey-fourth pb-4">
          <div
            onClick={onToggleFaq1}
            className="cursor-pointer flex justify-between text-[20px] font-bold"
          >
            <span>{faqData && faqData[0]?.question}</span>
            <Image
              src="/assets/icons/chevron-up.svg"
              width={14}
              height={14}
              alt="chevron"
              className={`${
                toggleFaq1 ? "rotate-0" : "rotate-180"
              }  transition-all`}
            />
          </div>
          <div
            className={`mt-4 text-[20px] overflow-hidden  ${
              toggleFaq1 ? "h-[100px]" : "h-[0px]"
            } transition-all`}
          >
            <p>{faqData && faqData[0]?.answer}</p>
          </div>
        </div>
        <div className="mt-8 text-white border-b border-grey-fourth pb-4">
          <div
            onClick={onToggleFaq2}
            className="cursor-pointer flex justify-between text-[20px] font-bold"
          >
            <span>{faqData && faqData[1]?.question}</span>
            <Image
              src="/assets/icons/chevron-up.svg"
              width={14}
              height={14}
              alt="chevron"
              className={`${
                toggleFaq2 ? "rotate-0" : "rotate-180"
              }  transition-all`}
            />
          </div>
          <div
            className={`mt-4 text-[20px] overflow-hidden  ${
              toggleFaq2 ? "h-[100px]" : "h-[0px]"
            } transition-all`}
          >
            <p>{faqData && faqData[1]?.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
