import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useFaqHomeList } from "../services/faq/use-faq-list";

export const FaqGsp = () => {
  const router = useRouter();
  const { data, isLoading } = useFaqHomeList();
  const [toggleFaq1, setToggleFaq1] = React.useState(false);
  const [toggleFaq2, setToggleFaq2] = React.useState(false);
  const [toggleFaq3, setToggleFaq3] = React.useState(false);
  const [toggleFaq4, setToggleFaq4] = React.useState(false);
  const faqData = [
    {
      question: "Apakah ada target pendapatan setiap bulannya?",
      answer: (
        <span>
          Tidak ada target. Semakin rajin Storyteller membagikan tautan/
          <i>link</i>, maka semakin besar juga potensi komisi yang akan
          didapatkan.
        </span>
      ),
    },
    {
      question: "Apakah ada target posting konten?",
      answer:
        "Tidak ada ketentuan jumlah posting konten tiap bulannya. Storyteller berhak menentukan keaktifannya sendiri.",
    },
    {
      question: (
        <span>
          Apakah konten untuk promosi harus melalui proses <i>approval</i>?
        </span>
      ),
      answer: (
        <span>
          Tidak harus. Konten bisa dikreasikan dan disesuaikan dengan minat{" "}
          <i>followers</i>/audiens masing-masing.
        </span>
      ),
    },
    {
      question: (
        <span>
          Seberapa besar potensi pendapatan saya jika mengikuti GoodDreamer
          Storytelling Program?
        </span>
      ),
      answer: (
        <Image
          src="/blog/assets/images/gdsp-faq-4.png"
          width={3200}
          height={1800}
          alt="faq-4"
        />
      ),
    },
  ];

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

  const onToggleFaq3 = () => {
    setToggleFaq3((prev) => {
      return !prev;
    });
  };

  const onToggleFaq4 = () => {
    setToggleFaq4((prev) => {
      return !prev;
    });
  };

  const onToFaq = () => {
    router.push("/faq");
  };

  return (
    <div className="mt-10 bg-purple-secondary p-4 rounded-[10px] flex flex-col gap-8">
      <div className={`transition-all border-b border-grey-third pb-4  `}>
        <div
          onClick={onToggleFaq1}
          className="cursor-pointer flex justify-between text-[20px]"
        >
          <span>Apakah ada target pendapatan setiap bulannya?</span>
          <Image
            src="/blog/assets/icons/chevron-up.svg"
            width={14}
            height={14}
            alt="chevron"
            className={`${
              toggleFaq1 ? "rotate-0" : "rotate-180"
            }  transition-all`}
          />
        </div>
        <div
          className={`transition-all ${
            toggleFaq1 ? "min-h-[100px]" : "min-h-[0px]"
          }`}
        >
          <div
            className={`mt-4 bg-white p-4 rounded-[10px] text-[20px] overflow-hidden  ${
              toggleFaq1 ? "block" : "hidden"
            } transition-all`}
          >
            <p>
              Tidak ada target. Semakin rajin Storyteller membagikan
              tautan/link, maka semakin besar juga potensi komisi yang akan
              didapatkan.
            </p>
          </div>
        </div>
      </div>
      <div className={`transition-all border-b border-grey-third pb-4  `}>
        <div
          onClick={onToggleFaq2}
          className="cursor-pointer flex justify-between text-[20px]"
        >
          <span>Apakah ada target posting konten?</span>
          <Image
            src="/blog/assets/icons/chevron-up.svg"
            width={14}
            height={14}
            alt="chevron"
            className={`${
              toggleFaq2 ? "rotate-0" : "rotate-180"
            }  transition-all`}
          />
        </div>
        <div
          className={`transition-all ${
            toggleFaq2 ? "min-h-[100px]" : "min-h-[0px]"
          }`}
        >
          <div
            className={`mt-4 bg-white p-4 rounded-[10px] text-[20px] overflow-hidden  ${
              toggleFaq2 ? "block" : "hidden"
            } transition-all`}
          >
            <p>{faqData && faqData[1]?.answer}</p>
          </div>
        </div>
      </div>
      <div className={`transition-all border-b border-grey-third pb-4  `}>
        <div
          onClick={onToggleFaq3}
          className="cursor-pointer flex justify-between text-[20px]"
        >
          <span>{faqData && faqData[2]?.question}</span>
          <Image
            src="/blog/assets/icons/chevron-up.svg"
            width={14}
            height={14}
            alt="chevron"
            className={`${
              toggleFaq3 ? "rotate-0" : "rotate-180"
            }  transition-all`}
          />
        </div>
        <div
          className={`transition-all ${
            toggleFaq3 ? "min-h-[100px]" : "min-h-[0px]"
          }`}
        >
          <div
            className={`mt-4 bg-white p-4 rounded-[10px] text-[20px] overflow-hidden  ${
              toggleFaq3 ? "block" : "hidden"
            } transition-all`}
          >
            <p>{faqData && faqData[2]?.answer}</p>
          </div>
        </div>
      </div>
      <div className={`transition-all border-b border-grey-third pb-4  `}>
        <div
          onClick={onToggleFaq4}
          className="cursor-pointer flex justify-between text-[20px]"
        >
          <span>{faqData && faqData[3]?.question}</span>
          <Image
            src="/blog/assets/icons/chevron-up.svg"
            width={14}
            height={14}
            alt="chevron"
            className={`${
              toggleFaq4 ? "rotate-0" : "rotate-180"
            }  transition-all`}
          />
        </div>
        <div
          className={`transition-all ${
            toggleFaq4 ? "min-h-[100px]" : "min-h-[0px]"
          }`}
        >
          <div
            className={`mt-4 bg-white p-4 rounded-[10px] text-[20px] overflow-hidden  ${
              toggleFaq4 ? "block" : "hidden"
            } transition-all`}
          >
            {faqData && faqData[3]?.answer}
          </div>
        </div>
      </div>
    </div>
  );
};
