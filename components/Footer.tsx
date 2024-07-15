import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Moe from "../utils/moe";

export const Footer = () => {
  const recaptchaRef = React.createRef<any>();
  const [isCaptchaDone, setIsCaptchaDone] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const onSubmitNewsletter = (
    e: React.FormEvent<EventTarget | HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const onChange = (token: string | null) => {
    if (token !== null) {
      setIsCaptchaDone(true);
    } else {
      setIsCaptchaDone(false);
    }
  };

  React.useEffect(() => {
    if (isCaptchaDone === true) {
      setTimeout(() => {
        Moe.add_email(emailValue);
        Moe.add_user_attribute("web_newsletter", true);
        setIsSubmitted(false);
        recaptchaRef?.current?.reset();
        setEmailValue("");
        setIsCaptchaDone(false);

        // toast.success("Berhasil berlangganan dengan email", {
        //   position: "bottom-center",
        //   autoClose: 3000,
        //   hideProgressBar: true,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        // });
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCaptchaDone]);

  return (
    <div className="bg-black-primary py-14 px-8 lg:px-20 mt-14 flex flex-col lg:flex-row gap-12 justify-between text-white">
      <div className="w-3/4">
        <Image
          src="/blog/assets/images/gooddreamer-logo-white.svg"
          width={200}
          height={27}
          alt="gooddreamer-logo"
        />
        <div className="flex mt-4 gap-8">
          <div>
            <h4 className="text-[18px] font-bold">Informasi</h4>
            <ul className="text-[16px] flex flex-col gap-2 mt-4">
              <li>
                <Link href="/announcement">Pengumuman</Link>
              </li>
              <li>
                <Link href="/activity">Aktivitas</Link>
              </li>
              {/* <li><Link href="/author">Benefit Penulis {"&"} Jadi Penulis</Link>Benefit Penulis {"&"} Jadi Penulis</li> */}
              <li>
                <Link href="/article">Artikel</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[18px] font-bold">Ketentuan</h4>
            <ul className="text-[16px] flex flex-col gap-2 mt-4">
              <li>
                <Link href="https://gooddreamer.id/privacy-terms">
                  Syarat {"&"} Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-auto">
        <h4 className="text-[18px] font-bold">
          Tidak ingin ketinggalan berita?
        </h4>
        <h5 className="text-[16px] mt-2">
          Kami bisa mengirimkan update melalui email
        </h5>

        <form
          onSubmit={onSubmitNewsletter}
          className="mt-4 flex items-center gap-2"
        >
          <div className="relative">
            <input
              type="email"
              className="rounded-[8px] py-[12px] pl-12 w-full border border-white bg-black-primary"
              placeholder="Tulis emailmu disini"
              onChange={onChangeEmail}
              value={emailValue}
            />
            <Image
              src="/blog/assets/icons/envelope.svg"
              width={24}
              height={24}
              alt="envelope"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <button
            type="submit"
            className="rounded-[8px] border border-white bg-transparent px-[20px] py-[12px]"
          >
            Submit
          </button>
        </form>
        <div className="mt-12">
          <h4 className="text-[18px] font-bold">Hubungi Kami</h4>
          <div className="flex mt-3 gap-3">
            <Link
              target="_blank"
              href="https://www.instagram.com/gooddreamerindonesia"
            >
              <Image
                src="/blog/assets/icons/ig.svg"
                width={21}
                height={21}
                alt="ig"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/GoodDreamerOfficial"
            >
              <Image
                src="/blog/assets/icons/fb.svg"
                width={21}
                height={21}
                alt="fb"
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/gooddreamer-indonesia/"
            >
              <Image
                src="/blog/assets/icons/linkedin.svg"
                width={21}
                height={21}
                alt="linkedin"
              />
            </Link>
          </div>
          <h5 className="text-[16px] mt-3">Copyright @Gooddreamer</h5>
        </div>
      </div>

      {isSubmitted && (
        <Transition appear show={!!isSubmitted} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={() => setIsSubmitted(false)}
          >
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-75" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="h-[90%] w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                    <div className="flex w-auto justify-between p-4">
                      <h2>Pastikan anda bukan robot</h2>
                      <span
                        onClick={() => setIsSubmitted(false)}
                        className="text-md cursor-pointer"
                      >
                        X
                      </span>
                    </div>
                    <div className="flex w-auto justify-center justify-center py-14">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LdEMyEpAAAAACieBjKW8KkH6SWQEwwVS2rXwYX4"
                        onChange={onChange}
                      />
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </div>
  );
};
