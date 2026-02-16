import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../public/locales/en";
import es from "../../public/locales/es";

const renderContantInfo = () => {
  return (
    <div className="mt-4 md:flex">
      <div className="flex flex-col items-center justify-center mx-4 w-64">
      <Image
        src="/location.png"
        alt="/"
        width={30}
        height={30}
      />
      <p className="py-4">CABA, Argentina</p>
      </div>
      <div className="flex flex-col items-center justify-center mx-4 w-64">
        <Image
          src="/email.png"
          alt="/"
          width={30}
          height={30}
        />
        <p className="py-4">sebastian.t.capelli@gmail.com</p>
      </div>
      <div className="flex flex-col items-center justify-center mx-4 w-64">
      <Image
        src="/phone.png"
        alt="/"
        width={30}
        height={30}
      />
      <p className="py-4">+54 9 11 24071788</p>
      </div>
      
    </div>
  )
}

const RenderIcons = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  const pathCV = locale === "es" ? "/cv-CAPELLI.pdf" : "/cv-en-CAPELLI.pdf"

  return (
    <div className="mt-4">
      <div className="grid grid-cols-3 md:flex">
      <div
        className="rounded-full shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200 inline-block m-4"
        onClick={() => window.open("https://www.linkedin.com/in/scapelli", "_blank")}
      >
        <FaLinkedinIn size={20} />
      </div>

      <div
        className="rounded-full shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200 inline-block m-4"
        onClick={() => window.open("https://github.com/scapelli", "_blank")}
      >
        <FaGithub size={20} />
      </div>

      <div
        className="rounded-full shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200 inline-block m-4"
        onClick={() => window.open(pathCV, "_blank")}
      >
        <Image
          src="/cv-letters.png"
          alt="/"
          width={20}
          height={20}
        />
      </div>
      <div
        className="rounded-full shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200 inline-block m-4"
        onClick={() => window.open("https://www.facebook.com/profile.php?id=100010047974588&mibextid=ZbWKwL", "_blank")}
      >
        <FaFacebookF size={20} />
      </div>

      <div
        className="rounded-full shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200 inline-block m-4"
        onClick={() => window.open("https://www.instagram.com/sebastian_capelli?igsh=MXdhbXZlcHlmdWY3cw==", "_blank")}
      >
        <FaInstagram size={20} />
      </div>
      <div
        className="rounded-full shadow-custom-large shadow-gray-400 p-4 cursor-pointer hover:scale-120 ease-in duration-200 inline-block m-4"
        onClick={() => window.open("https://t.me/SebastianCapelli", "_blank")}
      >
        <FaTelegramPlane size={20} />
      </div>
      </div>
    </div>
  )
}

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : es;
  
  return (
    <div id="contact" className="w-full lg:h-full pt-4 bg-grey-500 border-t-2 border-customRed flex flex-col items-center">
        <p className="text-xl tracking-widest uppercase text-[#ab1c1c]">
          {t.sections.contact.title}
        </p>
      {renderContantInfo()}
      {RenderIcons()}

    </div>
  );
};

export default Index;