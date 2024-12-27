import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-w-[375px] max-w-[1920px] min-h-screen bg-[var(--cvet-teksta-2)] pt-3">
      <Header />

      <div className="min-w-[359px] max-md:max-w-[730px] md:max-w-[730px] lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1520px] mx-auto flex flex-col justify-center gap-7 mb-[120px]">
        <div className="flex flex-col sm:gap-3 xl:gap-7 w-full max-md:px-2 md:px-3">
          <h2 className="max-sm:w-[150px] text-[var(--cvet-teksta)] font-bold uppercase lg:text-[26px] xl:text-[45px] 2xl:text-[55px] max-xl:leading-[1.5rem] xl:leading-[4.5rem] tracking-[0.04em]">
            Мы создаем <br /> цифровую реальность
          </h2>

          <p className="text-[var(--cvet-teksta)] text-wrap font-normal max-md:text-[14px] md:text-[16px] xl:text-[24px] leading-[1.25rem] ">
            Мы — команда, которая специализируется на создании сайтов под ключ:
            от профессионального веб-дизайна до разработки сайтов для бизнеса
            любой сложности. Мы предлагаем:
          </p>
        </div>

        <div className="flex items-start max-md:items-center max-md:justify-center md:gap-7 xl:gap-11 2xl:gap-24 max-w-[1612px] md:pl-[30px]">
          <Image
            src="/logo.png"
            className="hidden md:block md:w-[307px] xl:w-[495px] 2xl:w-[426px]"
            alt="Example"
            width={426}
            height={504}
          />

          <div className="min-w-[344px] max-md:max-w-[210px] md:max-w-[910px] flex flex-col md:gap-[22px] xl:gap-7 2xl:gap-[34px]">
            <div className="md:max-w-[35vw] xl:max-w-[45vw] 2xl:max-w-[40vw] h-[268px] xl:h-[434px] relative">
              <div className="bg-[var(--osnovnoy-cvet-2)] rounded-[20px] xl:rounded-[50px] max-sm:w-[100%] sm:w-[120%] h-[152px] xl:h-[162px] absolute left-0 top-0 overflow-hidden">
                <div className="flex flex-col gap-[1px] xl:gap-3 items-start justify-start max-w-[587px] absolute left-[31px] top-3 xl:left-[92px] xl:top-8">
                  <div className="text-[var(--cvet-teksta-2)] text-left xl:text-[24px] font-bold relative max-w-[340px] flex items-center justify-start">
                    Уникальные сайты с нуля
                  </div>
                  <div className="text-[var(--cvet-teksta-2)] text-left xl:text-[24px] font-normal relative max-w-[587px] flex items-center justify-start max-xl:leading-[1rem]">
                    идеально адаптированные под ваш бизнес
                  </div>
                </div>
                <Image
                  src="/portal28.svg"
                  alt=""
                  className="w-[15px] xl:w-7 h-7 absolute left-3 xl:left-11 top-3 xl:top-[34px] overflow-visible"
                  width={28}
                  height={28}
                />
              </div>
              <div className="bg-[var(--osnovnoy-cvet)] rounded-[20px] xl:rounded-[50px] max-sm:w-[100%] sm:w-[120%] h-[142px] xl:h-[162px] absolute left-0 top-[96px] xl:top-[136px] overflow-hidden">
                <div className="flex flex-col gap-[1px] xl:gap-3 items-start justify-start max-w-[649px] absolute left-[31px] top-3 xl:left-[92px] xl:top-8">
                  <div className="text-[var(--cvet-teksta)] text-left xl:text-[24px] font-normal relative max-w-[339px] flex items-center justify-start">
                    Индивидуальный подход
                  </div>
                  <div className="text-[var(--cvet-teksta)] text-left xl:text-[24px] font-normal relative max-w-[649px] flex items-center justify-start max-xl:leading-[1rem]">
                    качественное сопровождение на каждом этапе
                  </div>
                </div>
                <Image
                  src="/portal28black.svg"
                  alt=""
                  className="w-[15px] xl:w-7 h-7 absolute left-3 xl:left-11 top-3 xl:top-[34px] overflow-visible"
                  width={28}
                  height={28}
                />
              </div>
              <div className="bg-[var(--osnovnoy-cvet-2)] rounded-[20px] xl:rounded-[50px] max-sm:w-[100%] sm:w-[120%] h-[80px] xl:h-[162px] absolute left-0 top-[188px] xl:top-[272px] overflow-hidden">
                <div className="flex flex-col gap-[1px] xl:gap-3 items-start justify-start max-w-[484px] absolute left-[31px] top-3 xl:left-[92px] xl:top-8">
                  <div className="text-[var(--cvet-teksta-2)] text-left xl:text-[24px] font-bold relative max-w-[484px] flex items-center justify-start">
                    Разработку продающих веб-сайтов
                  </div>
                  <div className="text-[var(--cvet-teksta-2)] text-left xl:text-[24px] font-normal relative max-w-[275px] flex items-center justify-start max-xl:leading-[1rem]">
                    с SEO-оптимизацией
                  </div>
                </div>
                <Image
                  src="/portal28.svg"
                  alt=""
                  className="w-[15px] xl:w-7 h-7 absolute left-3 xl:left-11 top-3 xl:top-[34px] overflow-visible"
                  width={28}
                  height={28}
                />
              </div>
            </div>

            <p className="text-[var(--cvet-teksta)] text-left md:block hidden md:text-[16px] xl:text-[24px] font-normal text-wrap max-w-[792px]">
              Доверьте создание и продвижение сайта нам — закажите сайт под ключ
              и получите актив, который будет работать на ваш успех!
            </p>
          </div>
        </div>
      </div>

      <div className="px-2 md:pl-5 xl:pl-0 h-[546px] xl:h-[967px] 2xl:h-[869px] min-w-[375px] max-md:max-w-[780px] md:max-w-[1024px] lg:max-w-[1300px] xl:max-w-[1600px] 2xl:max-w-[1920px] bg-[var(--osnovnoy-cvet)] mx-auto flex items-center justify-center md:items-start md:justify-start xl:items-center xl:justify-center relative mb-11 overflow-hidden">
        <Image
          src="/bgwe.png"
          className="hidden md:absolute md:bottom-0 md:right-[-114px] md:w-[542px] md:h-[497px] xl:w-[826px] xl:h-[723px] xl:bottom-0 xl:right-[-114px] 2xl:top-[146px] 2xl:right-[28px] md:block "
          alt="Example"
          width={826}
          height={723}
        />

        <div className=" min-w-[375px] max-md:max-w-[748px] md:max-w-[748px] xl:max-w-[1435px] 2xl:w-[1760px] absolute z-10">
          <div className=" min-w-[375px] max-md:max-w-[748px] md:max-w-[748px] xl:max-w-[1335px] 2xl:max-w-[1700px] flex flex-col max-sm:justify-center max-sm:items-center items-start justify-start max-md:gap-3 md:gap-5 xl:gap-7 md:pt-3 md:h-[510px] xl:h-[840px] 2xl:h-[800px]">
            <div className="max-w-[1760px] max-h-[98px] flex items-center gap-[30px] max-sm:pr-[220px] xl:pr-[845px] 2xl:pr-[800px]">
              <Image
                src="/logoweblock.svg"
                className="hidden xl:block 2xl:h-24 2xl:w-24 xl:h-[86px] xl:w-[86px]"
                alt="Example"
                width={98}
                height={98}
              />

              <h2 className="font-bold uppercase text-[var(--cvet-teksta)] text-base md:text-[26px] xl:text-[45px] 2xl:text-[55px] max-w-[804px] pl-2">
                Почему мы?
              </h2>
            </div>

            <div className="max-w-[904px] flex flex-col gap-3 xl:gap-8 xl:max-h-[724px] 2xl:max-h-[643px] justify-between ">
              <div className="max-w-[335px] md:max-w-[470px] xl:max-w-[904px] pt-3 xl:pt-8 pb-6 md:pb-[13px] xl:pb-[54px] 2xl:pb-8 pl-3 xl:pl-8 pr-3 md:pr-[15px] xl:pr-[17px] 2xl:pr-10 flex gap-3 xl:gap-10 2xl:gap-14 items-start bg-[var(--cvet-teksta-2)] rounded-[20px] xl:rounded-[50px] max-h-[142px] md:max-h-[137px] xl:max-h-[220px] 2xl:max-h-[193px] ">
                <span className="font-bold text-xl xl:text-[40px] 2xl:text-6xl text-[var(--osnovnoy-cvet-3)] max-h-[70px] inline-block align-top">
                  01
                </span>

                <div className="md:max-w-[332px] xl:max-w-[623px] flex flex-col gap-1 xl:gap-3">
                  <h3 className="font-bold text-[15px] md:text-xl xl:text-2xl text-[var(--cvet-teksta)]">
                    Работа с современными CMS
                  </h3>
                  <p className="md:max-w-[317px] xl:max-w-[485px] 2xl:max-w-[623px] font-normal text-sm xl:text-[20px] text-wrap text-[var(--cvet-teksta)]">
                    Создаем сайты на мощных системах управления контентом,
                    такими как Payload, WordPress, 1С-Битрикс, Joomla, OpenCart
                    и другие.
                  </p>
                </div>
              </div>

              <div className="max-w-[335px] md:max-w-[470px] xl:max-w-[904px] pt-3 xl:pt-8 pb-6 md:pb-[13px] xl:pb-[54px] 2xl:pb-8 pl-3 xl:pl-8 pr-3 md:pr-[15px] xl:pr-[17px] 2xl:pr-10 flex gap-3 xl:gap-10 2xl:gap-14 items-start bg-[var(--cvet-teksta-2)] rounded-[20px] xl:rounded-[50px] max-h-[142px] md:max-h-[137px] xl:max-h-[220px] 2xl:max-h-[193px]">
                <span className="font-bold text-xl xl:text-[40px] 2xl:text-6xl text-[var(--osnovnoy-cvet-3)] max-h-[70px] inline-block align-top">
                  02
                </span>

                <div className="md:max-w-[332px] xl:max-w-[623px] flex flex-col gap-1 xl:gap-3">
                  <h3 className="font-bold text-[15px] md:text-xl xl:text-2xl text-[var(--cvet-teksta)]">
                    Постановка бизнес-задачи
                  </h3>
                  <p className="md:max-w-[317px] xl:max-w-[485px] 2xl:max-w-[623px] font-normal text-sm xl:text-[20px] text-wrap text-[var(--cvet-teksta)]">
                    Каждый проект начинается с анализа вашего бизнеса. Создаем
                    уникальный сайт, который решает ваши задачи и соответствует
                    вашим целям.
                  </p>
                </div>
              </div>

              <div className="max-w-[335px] md:max-w-[470px] xl:max-w-[904px] pt-3 xl:pt-8 pb-6 md:pb-[13px] xl:pb-[57px] pl-3 xl:pl-8 pr-3 md:pr-[15px] xl:pr-[17px] 2xl:pr-10 flex gap-3 xl:gap-10 2xl:gap-14 items-start bg-[var(--cvet-teksta-2)] rounded-[20px] max-h-[142px] md:max-h-[137px] xl:rounded-[50px] xl:max-h-[220px] 2xl:max-h-[193px]">
                <span className="font-bold text-xl xl:text-[40px] 2xl:text-6xl text-[var(--osnovnoy-cvet-3)] max-h-[70px] inline-block align-top">
                  03
                </span>

                <div className="md:max-w-[332px] xl:max-w-[623px] flex flex-col gap-1 xl:gap-3">
                  <h3 className="font-bold text-[15px] md:text-xl xl:text-2xl text-[var(--cvet-teksta)]">
                    Создание продающих сайтов под ключ
                  </h3>
                  <p className="md:max-w-[317px] xl:max-w-[485px] 2xl:max-w-[623px] font-normal text-sm xl:text-[20px] text-wrap text-[var(--cvet-teksta)]">
                    Мы разрабатываем не просто сайты, а ликвидные проекты с
                    продуманным дизайном и маркетинговой стратегией.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
