import Image from "next/image";

export default function Home() {
  return (
    <div className="min-w-[375px] max-w-[1920px] min-h-screen bg-[var(--cvet-teksta-2)]  pt-[50px]">
      <div className="min-w-[359px] max-md:max-w-[730px] md:max-w-[730px] lg:max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1520px] mx-auto flex flex-col justify-center gap-7">
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
    </div>
  );
}
