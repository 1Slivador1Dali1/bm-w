import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen bg-[var(--cvet-teksta-2)]  pt-[120px]">
      <div className="max-w-[1612px] flex flex-col mx-auto justify-center gap-7">
        <div className="flex flex-col gap-7 w-full">
          <h2 className="text-[var(--cvet-teksta)] font-bold uppercase text-[55px] leading-[4.5rem] text-justify">
            Мы создаем
            <br /> цифровую реальность
          </h2>

          <p className="text-[var(--cvet-teksta)] text-wrap font-normal text-[24px] leading-[2rem]">
            Мы — команда, которая специализируется на создании сайтов под ключ:
            от профессионального веб-дизайна
            <br /> до разработки сайтов для бизнеса любой сложности. Мы
            предлагаем:
          </p>
        </div>

        <div className="flex items-start gap-24 max-w-[1612px] pl-[30px]">
          <Image src="/logo.png" alt="Example" width={426} height={504} />

          <div className="max-w-[910px] flex flex-col gap-[34px]">
            <div className="max-w-[910px] h-[434px] relative">
              <div className="bg-[var(--osnovnoy-cvet-2)] rounded-[50px] w-[910px] h-[162px] absolute left-0 top-0 overflow-hidden">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[587px] absolute left-[92px] top-8">
                  <div className="text-[var(--cvet-teksta-2)] text-left  text-[24px] font-bold relative w-[340px] flex items-center justify-start">
                    Уникальные сайты с нуля
                  </div>
                  <div className="text-[var(--cvet-teksta-2)] text-left text-[24px] font-normal relative w-[587px] flex items-center justify-start">
                    идеально адаптированные под ваш бизнес
                  </div>
                </div>
                <Image
                  src="/portal28.svg"
                  alt=""
                  className="w-7 h-7 absolute left-11 top-[34px] overflow-visible"
                  width={28}
                  height={28}
                />
              </div>
              <div className="bg-[var(--osnovnoy-cvet)] rounded-[50px] w-[910px] h-[162px] absolute left-0 top-[136px] overflow-hidden">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[649px] absolute left-[92px] top-8">
                  <div className="text-[var(--cvet-teksta)] text-left text-2xl font-normal relative w-[339px] flex items-center justify-start">
                    Индивидуальный подход
                  </div>
                  <div className="text-[var(--cvet-teksta)] text-left text-2xl font-normal relative w-[649px] flex items-center justify-start">
                    качественное сопровождение на каждом этапе
                  </div>
                </div>
                <Image
                  src="/portal28black.svg"
                  alt=""
                  className="w-7 h-7 absolute left-11 top-[34px] overflow-visible"
                  width={28}
                  height={28}
                />
              </div>
              <div className="bg-[var(--osnovnoy-cvet-2)] rounded-[50px] w-[910px] h-[162px] absolute left-0 top-[272px] overflow-hidden">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[484px] absolute left-[92px] top-8">
                  <div className="text-[var(--cvet-teksta-2)] text-left text-2xl font-bold relative w-[484px] flex items-center justify-start">
                    Разработку продающих веб-сайтов
                  </div>
                  <div className="text-[var(--cvet-teksta-2)] text-left text-2xl font-normal relative w-[275px] flex items-center justify-start">
                    с SEO-оптимизацией
                  </div>
                </div>
                <Image
                  src="/portal28.svg"
                  alt=""
                  className="w-7 h-7 absolute left-11 top-[34px] overflow-visible"
                  width={28}
                  height={28}
                />
              </div>
            </div>

            <p className="text-[var(--cvet-teksta)] text-left text-[24px] font-normal text-wrap w-[782px]">
              Доверьте создание и продвижение сайта нам —<br /> закажите сайт
              под ключ и получите актив, который будет работать на ваш успех!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
