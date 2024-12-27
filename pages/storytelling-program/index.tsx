import Head from "next/head";
import Image from "next/image";
import { useActivityList } from "../../services/content/use-content-list";
import React, { Fragment } from "react";
import Link from "next/link";
import { FaqGsp } from "../../components/FAQ-GSP";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";

export default function StoryTellingProgramPage() {
  const [isOpenTerms, setIsOpenTerms] = React.useState(false);

  const onOpenTerms = () => {
    setIsOpenTerms(true);
  };

  return (
    <div>
      <Head>
        <title>Novel Affiliate | GoodDreamer Storytelling Program</title>
        <meta
          name="description"
          content="Tambah penghasilan dengan gabung di GoodDreamer Storytelling Program (GDSP) yang merupakan program affiliate novel GoodDreamer dengan keuntungan 10% flat per transaksi!
"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-[#353535]">
        <div className=" py-8 px-8 lg:px-20 mt-14">
          <div>
            <Image
              src="/blog/assets/images/storytellingbanner.png"
              width={1920}
              height={600}
              alt="banner"
            />
          </div>
          <div className="mt-20 flex flex-col lg:flex-row gap-10">
            <div className="flex-none lg:w-[40%]">
              <h1 className="text-purple-primary text-[30px] font-bold ">
                Apa Itu GoodDreamer Storytelling Program (GDSP)?
              </h1>
            </div>
            <div className="p-4 text-[20px] bg-purple-secondary flex-auto rounded-[18px]">
              GoodDreamer Storytelling Program adalah program afiliasi yang
              memberi peluang bagi Storyteller (afiliator) untuk mendapat
              penghasilan dengan membagikan <i>link</i> novel digital
              GoodDreamer di media sosial, YouTube, WhatsApp, atau website.
              Setiap transaksi menghasilkan komisi untuk Storyteller.
            </div>
          </div>
          <div className="mt-20">
            <h1 className="text-purple-primary text-[30px] font-bold ">
              Keuntungan Mengikuti GDSP
            </h1>
            <div className="flex flex-col items-center xl:flex-row gap-24 mt-10">
              <div className="w-1/3">
                <Image
                  src="/blog/assets/images/gsp.png"
                  width={469}
                  height={688}
                  alt="gsp"
                  className="w-full"
                />
              </div>
              <div className="">
                {/* list-image-[url(/blog/assets/icons/dot.svg)] */}
                <ul className="flex flex-col gap-6 list-style-none">
                  {/* <li className="p-[10px] relative before:content-[''] before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-[#007AFF] before:absolute before:left-[-15px] before:top-[50%] before:translate-y-[-40%] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[2px] [&:not(:last-child)]:after:h-[100%] [&:not(:last-child)]:after:bg-[#007AFF] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[-8px] [&:not(:last-child)]:after:top-[50%]"> */}
                  <li className="pl-[50px] relative before:content-[''] before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-[#007AFF] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:h-[calc(100%+30px)] [&:not(:last-child)]:after:border-l [&:not(:last-child)]:after:border-[#007AFF] [&:not(:last-child)]:after:border-dashed [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[7px] [&:not(:last-child)]:after:top-[calc(50%+5px)]">
                    <div className="p-4 text-[20px] bg-purple-secondary rounded-[18px]">
                      <h2 className="text-purple-primary text-[20px] font-bold">
                        Komisi 10% Flat
                      </h2>
                      <p className="text-[18px] mt-4">
                        Komisi yang didapatkan tinggi yaitu 10% flat dari setiap
                        transaksi yang berhasil melalui <i>link</i>/tautan yang
                        dibagikan oleh Storyteller.{" "}
                      </p>
                    </div>
                  </li>
                  <li className="pl-[50px] relative before:content-[''] before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-[#007AFF] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:h-[calc(100%+10px)] [&:not(:last-child)]:after:border-l [&:not(:last-child)]:after:border-[#007AFF] [&:not(:last-child)]:after:border-dashed [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[7px] [&:not(:last-child)]:after:top-[calc(50%+5px)]">
                    <div className="p-4 text-[20px] bg-purple-secondary rounded-[18px]">
                      <h2 className="text-purple-primary text-[20px] font-bold">
                        Materi Konten Gratis
                      </h2>
                      <p className="text-[18px] mt-4">
                        Di awal bergabung, Storyteller akan mendapatkan beberapa
                        materi konten gratis dari tim GoodDreamer, yang bisa
                        langsung dipakai dan dibagikan.
                      </p>
                    </div>
                  </li>
                  <li className="pl-[50px] relative before:content-[''] before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-[#007AFF] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:h-[calc(100%+25px)] [&:not(:last-child)]:after:border-l [&:not(:last-child)]:after:border-[#007AFF] [&:not(:last-child)]:after:border-dashed [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[7px] [&:not(:last-child)]:after:top-[calc(50%+5px)]">
                    <div className="p-4 text-[20px] bg-purple-secondary rounded-[18px]">
                      <h2 className="text-purple-primary text-[20px] font-bold">
                        Support Team
                      </h2>
                      <p className="text-[18px] mt-4">
                        Tersedia tim yang siap membantu menjawab setiap
                        pertanyaan dari Storyteller.
                      </p>
                    </div>
                  </li>
                  <li className="pl-[50px] relative before:content-[''] before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-[#007AFF] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:h-[calc(100%+10px)] [&:not(:last-child)]:after:border-l [&:not(:last-child)]:after:border-[#007AFF] [&:not(:last-child)]:after:border-dashed [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[7px] [&:not(:last-child)]:after:top-[calc(50%+5px)]">
                    <div className="p-4 text-[20px] bg-purple-secondary rounded-[18px]">
                      <h2 className="text-purple-primary text-[20px] font-bold">
                        Akses ke Ratusan Novel GoodDreamer
                      </h2>
                      <p className="text-[18px] mt-4">
                        Storyteller berkesempatan untuk menjelajahi novel-novel
                        menarik yang tersedia di platform GoodDreamer.
                      </p>
                    </div>
                  </li>
                  <li className="pl-[50px] relative before:content-[''] before:w-[16px] before:h-[16px] before:rounded-[50%] before:bg-[#007AFF] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:w-[1px] [&:not(:last-child)]:after:h-[calc(100%+10px)] [&:not(:last-child)]:after:border-l [&:not(:last-child)]:after:border-[#007AFF] [&:not(:last-child)]:after:border-dashed [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:left-[7px] [&:not(:last-child)]:after:top-[calc(50%+5px)]">
                    <div className="p-4 text-[20px] bg-purple-secondary rounded-[18px]">
                      <h2 className="text-purple-primary text-[20px] font-bold">
                        Minimum Pencairan Komisi Terjangkau!
                      </h2>
                      <p className="text-[18px] mt-4">
                        Minimal pencairan komisi Rp100.000.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 ">
            <h1 className="text-purple-primary text-[30px] font-bold ">
              Cara Bergabung Menjadi Member GDSP
            </h1>
            <div className="flex flex-col-reverse lg:flex-row gap-16 space-between">
              <div className="w-full lg:w-1/2">
                <ol className="list-decimal list-outside mt-4 ml-6 flex flex-col gap-3 text-[20px]">
                  <li>
                    Melakukan proses pendaftaran dengan cara mengisi data-data
                    yang diperlukan melalui{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdCzDlGckz7n3b22YI2CXEWWLBp6ZIu7Aa7Z1goiuR2Iy7UBg/viewform?usp=sf_link "
                      className="text-blue-primary underline"
                    >
                      Google Form yang sudah disediakan.
                    </a>
                  </li>
                  <li>
                    Menunggu proses validasi (konfirmasi data-data pendaftar)
                    yang berlangsung selama 2-3 hari kerja.
                  </li>
                  <li>
                    Menerima <i>email approval</i> yang berisi{" "}
                    <i>link personal</i>. <i>Approval</i> hanya diberikan kepada
                    Storyteller yang lolos proses validasi data.
                  </li>
                  <li>
                    Mulai bagikan <i>link personal</i> dan dapatkan penghasilan
                    tambahan yang menjanjikan.
                  </li>
                </ol>
                <div className="mt-4" onClick={onOpenTerms}>
                  <div className="text-blue-primary underline text-[20px] cursor-pointer">
                    Syarat Bergabung Menjadi Member GDSP
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/blog/assets/images/gsp-how.png"
                  width={551}
                  height={314}
                  alt="gsp-how"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mx-auto mt-8">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSdCzDlGckz7n3b22YI2CXEWWLBp6ZIu7Aa7Z1goiuR2Iy7UBg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-primary p-3 rounded-lg text-white focus:outline-none">
                Daftar GoodDreamer Storytelling Program disini
              </button>
            </Link>
          </div>
          <div className="mt-20">
            <h1 className="text-purple-primary text-[30px] font-bold ">
              Hal yang Sering Ditanyakan
            </h1>
            <FaqGsp />
          </div>
        </div>
      </main>
      <Transition appear show={isOpenTerms} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpenTerms(false)}
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
            <div className="fixed inset-0 bg-black/25" />
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
                <DialogPanel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <DialogTitle className="mt-2">
                    <h2 className="text-purple-primary text-[30px] font-bold">
                      Syarat Bergabung Menjadi GSP
                    </h2>
                  </DialogTitle>
                  <div className="mt-4 bg-purple-secondary p-4 rounded-[10px]">
                    <ol className="list-decimal list-outside ml-10 text-[20px] flex flex-col gap-6">
                      <li>Warga Negara Indonesia (WNI).</li>
                      <li>
                        Memiliki nomor WhatsApp aktif sebagai media komunikasi
                        dengan <i>support team</i>.
                      </li>
                      <li>
                        Memiliki rekening <i>bank/e-wallet</i> aktif (untuk usia{" "}
                        {"<"}
                        17 tahun, dibutuhkan surat persetujuan orang tua/wali).
                      </li>
                      <li>
                        Memiliki akun media sosial/situs web yang aktif. Akun
                        media sosial/situs web tidak mengandung pornografi,
                        SARA, kekerasan, ataupun konten negatif lainnya.
                      </li>
                      <li>
                        Bersedia mengisi data diri secara lengkap termasuk
                        melampirkan KTP.
                      </li>
                    </ol>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
