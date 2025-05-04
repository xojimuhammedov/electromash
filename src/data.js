import ServiceOne from './assets/transformator.jpg'
import ServiceTwo from './assets/service2.jpg'
import ServiceThree from './assets/service8.jpg'
import ServiceFour from './assets/service4.jpg'
import ServiceFive from './assets/service5.jpg'
import ServiceSeven from './assets/service7.jpg'

export const serviceData = [
  {
    id: "transformer-repair",
    image: ServiceOne,
    title_uz: "QUVVAT TRANSFORMATORLARINI 500 KV GACHA TA'MIRLASH VA REKONSTRUKSIYA QILISH",
    title_ru: "РЕМОНТ И РЕКОНСТРУКЦИЯ СИЛОВЫХ ТРАНСФОРМАТОРОВ ДО 500 КВ",
    title_en: "REPAIR AND RECONSTRUCTION OF POWER TRANSFORMERS UP TO 500 KV",
    description_uz: `
      <p style="text-align:center">500 kV gacha bo'lgan quvvat transformatorlarini to'liq ta'mirlash va rekonstruksiya qilish xizmatlari. Bizda yog'-qog'ozli izolyatsiya parametrlarini tiklash, transformatorlarni ta'mirlash va rekonstruksiya qilish bo'yicha katta tajribaga ega yuqori malakali mutaxassislar mavjud.</p> 
      <br />
      Barcha uskunalarimiz mobil bo'lib, mijoz hududida xizmat ko'rsatish imkonini beradi. Biz zamonaviy va yuqori unumli mashinalar, yordamchi asboblar va ilg'or o'lchov texnikasiga egamiz, bu esa quyidagi ishlarni sifatli bajarish imkonini beradi:
      <br />
      • 0.4, 10, 20, 110, 220 va 500 kV chiqishlarini almashtirish va moslashtirish. <br />
      • Sovutgichlar, gazli relelar, daraja o'lchagichlar, himoya armaturasini ta'mirlash va almashtirish. <br />
      • Motorli harakatlantirgichlar va kuch o‘tkazuvchi kalitlarni ta'mirlash va almashtirish. <br />
      • Muhurlash materiallarini almashtirish va yog' oqishlarini bartaraf etish. <br />
      • Yog‘ni degazatsiya mashinasi orqali qayta ishlash va to‘ldirish. <br />
      • Transformator o‘ramlarini termovakuum quritish. <br />
      • Transformatorning korroziyaga qarshi qoplamasini yuvish va tiklash. <br />
      • To‘liq elektr o‘lchov ishlari va ishga tushirish.
    `,
    description_ru: `
      <p style="text-align:center">Услуги по ремонту и реконструкции силовых трансформаторов до 500 кВ. У нас работают высококвалифицированные специалисты с богатым опытом восстановления параметров маслобумажной изоляции, ремонта и реконструкции силовых трансформаторов. </p>
      <br />
      Всё оборудование мобильное, что позволяет выполнять работы на территории клиента. Мы оснащены современными и высокопроизводительными машинами, вспомогательными инструментами и передовой измерительной техникой для качественного выполнения следующих работ:
      <br />
      • Замена и адаптация выводов 0,4; 10; 20; 110; 220 и 500 кВ. <br />
      • Замена и ремонт охладителей, газовых реле, уровнемеров, запорной и защитной арматуры. <br />
      • Ремонт и замена моторных приводов и переключателей. Осциллография переключателей. <br />
      • Замена уплотнителей и устранение течей масла. <br />
      • Обработка и доливка масла с помощью дегазационной машины. <br />
      • Термо-вакуумная сушка обмоток трансформатора. <br />
      • Мойка и восстановление антикоррозийного покрытия трансформатора. <br />
      • Полные электрические измерения и ввод в эксплуатацию.
    `,
    description_en: `
      <p style="text-align:center">Comprehensive repair and reconstruction services for power transformers up to 500 kV.</p> 
      <br />
      Our team consists of highly qualified specialists with extensive experience in restoring oil-paper insulation parameters, transformer repair, and reconstruction. 
      <br />
      All our equipment is mobile, allowing on-site service delivery. We use modern, high-performance machines, auxiliary tools, and advanced measuring equipment to perform the following activities:
      <br />
      • Replacement and adaptation of 0.4; 10; 20; 110; 220; and 500 kV bushings. <br />
      • Replacement and repair of coolers, gas relays, level indicators, and protective fittings. <br />
      • Repair and replacement of motor drives and on-load tap changers. Oscillography of tap changers. <br />
      • Replacement of seals and elimination of oil leaks. <br />
      • Oil treatment and topping up with degassing machines. <br />
      • Thermal vacuum drying of transformer windings. <br />
      • Washing and restoring the anti-corrosion coating of transformers. <br />
      • Full electrical measurements and commissioning.
    `,
  },
  {
    id: "diagnostics-testing",
    image: ServiceTwo,
    title_uz: "Maxsus diagnostika testlari",
    title_ru: "Специализированный диагностический анализы",
    title_en: "Specialized diagnostic tests",
    description_uz: `
      Namlikni aniqlash - IEC 60814; <br />
      elektr quvvatini aniqlash - IEC 60156; <br />
      kislotalilikni aniqlash - IEC 60296; <br />
      dielektrik tarqalish koeffitsientini (DDF) aniqlash - IEC 60247; <br />
      Eritilgan gaz tahlili (DGA) - IEC 60567 va IEC 60599; <br />
    `,
    description_ru: `
      определение влажности - IEC 60814; <br />
      определение электрической прочности — IEC 60156; <br />
      определение кислотности - IEC 60296;  <br />
      определение тангенса угла диэлектрических потерь (DDF) - IEC 60247;  <br />
      анализ растворенных газов (DGA) - IEC 60567 и IEC 60599; <br />
    `,
    description_en: `
      Determination of humidity - IEC 60814;<br />
      Determination of electric strength - IEC 60156;<br />
      Determination of acidity - IEC 60296;<br />
      Determination of dielectric dissipation factor (DDF) - IEC 60247;<br />
      Dissolved gas analysis (DGA) - IEC 60567 and IEC 60599;<br />
    `,
  },
  {
    id: "oil-handling",
    image: ServiceThree,
    title_uz: "TRANSFORMATOR YOG'I BILAN ISHLASH",
    title_ru: "РАБОТА С ТРАНСФОРМАТОРНЫМ МАСЛОМ",
    title_en: "WORKING WITH TRANSFORMER OIL",
    description_uz: `
      <p style="text-align:center">Transformator yog'ini qayta ishlash, tozalash va yangilash xizmatlari. 
      Biz yog'ni degazatsiya qilish, namlikni olib tashlash, va uni dielektrik xususiyatlarini tiklash uchun eng zamonaviy texnologiyalardan foydalanamiz.</p>
      <br />
      Xizmatlarimiz quyidagilarni o'z ichiga oladi:
      <br />
      Yog‘ni filtratsiya va degazatsiya qilish. <br />
      Transformatorni ish holatida yog‘ni almashtirmasdan xizmat ko‘rsatish. <br />
      Yog‘ sifatini laboratoriya sharoitida tahlil qilish. <br />
      Transformatorlar ishdan to‘xtatilganda yog‘ni to‘liq almashtirish va tozalash.
    `,
    description_ru: `
      <p style="text-align:center">Услуги по переработке, очистке и обновлению трансформаторного масла. 
      Мы применяем самые современные технологии для дегазации масла, удаления влаги и восстановления его диэлектрических свойств.</p>
      <br />
      Наши услуги включают:
      <br />
      Фильтрацию и дегазацию масла. <br />
      Обслуживание трансформаторов без замены масла в рабочем состоянии. <br />
      Лабораторный анализ качества масла. <br />
      Полную замену и очистку масла при отключении трансформаторов.
    `,
    description_en: `
      <p style="text-align:center">Services for processing, cleaning, and renewing transformer oil. 
      We use the latest technologies for degassing, moisture removal, and restoring dielectric properties of the oil.</p>
      <br />
      Our services include:
      <br />
      Oil filtration and degassing. <br />
      In-service maintenance without oil replacement. <br />
      Laboratory analysis of oil quality. <br />
      Full oil replacement and cleaning during transformer shutdowns.
    `,
  },
  {
    id: "electrical-installation",
    image: ServiceFour,
    title_uz: "ELEKTR MONTAJ VA TA'MIRLASH ISHLARI",
    title_ru: "ЭЛЕКТРОМОНТАЖНЫЕ И РЕМОНТНЫЕ РАБОТЫ",
    title_en: "ELECTRICAL INSTALLATION AND REPAIR WORKS",
    description_uz: "",
    description_ru: "",
    description_en: ""
  },
  {
    id: "electrical-installation-1",
    image: ServiceFive,
    title_uz: "ELEKTR MONTAJ VA TA'MIRLASH ISHLARI",
    title_ru: "Электротехнический лаборатория",
    title_en: "ELECTRICAL INSTALLATION AND REPAIR WORKS",
    description_uz: "",
    description_ru: "",
    description_en: ""
  },
  {
    id: "electrical-installation-2",
    image: ServiceSeven,
    title_uz: "ELEKTR MONTAJ VA TA'MIRLASH ISHLARI",
    title_ru: "СПЕЦИАЛИЗИРОВАННОЕ ОБОРУДОВАНИЕ",
    title_en: "ELECTRICAL INSTALLATION AND REPAIR WORKS",
    description_uz: `
Ishlayotgan nimstansiyalar hududida 35 dan 500 kV gacha kuchlanishli quvvat transformatorlarida ta'mirlash ishlarini bajarish uchun ta'mirlash texnologiyasiga muvofiq zarur ishlarni amalga oshirishga imkon beruvchi mobil uskunalardan foydalaniladi:
<br/> <b>O'rnatish</b> <br/>
Quvvat transformatorlarining podstansiya ichida ko'tarish mexanizmlaridan foydalanmasdan harakatlanishini ta'minlash uchun maxsus armatura uskunalari talab qilinadi. Ishlayotgan podstansiyalar hududida yuk ko'tarish moslamalarini ishlatish har doim ham yuqori umumiy o'lchamlari va og'irlik xususiyatlari, shuningdek podstansiyadagi cheklangan joy tufayli mumkin emas. 
<br /> <b>Quruq havo generatori</b> <br />
Qo'shimchalarni olib tashlash va transformator idishining qopqog'ini faol qismni ho'llamasdan ko'tarish uchun transformatorga quruq havo etkazib beradigan birlik kerak. 
<br /> <b>Vakuum o'rnatish</b> <br />
Transformatorda vakuum hosil qilish imkonini beradi va transformatorning faol qismini, shuningdek, uning yakuniy yig'ilishini quritish uchun ishlatiladi. 
<br /> <b>Gazsizlantirish qurilmasi</b> <br />
U transformatorning izolyatsion qarshiligini tiklash uchun ham, transformator moyini tayyorlash va to'ldirish uchun ham qo'llaniladi. 
<br /> <b>FOSN filtri</b> <br />
Transformator moyidan aralashmalarni olib tashlash, shuningdek, yog'ning dielektrik yo'qotish tangensining qiymatini tiklash kerak. 
<br /> <b>Texnologik tanklar.</b> <br />
Transformator moyi tarkibida hech qanday aralashma bo'lmasligi kerak, shuning uchun uni faqat maxsus tayyorlangan idishlarga quyish mumkin. Transformatordan olib tashlash uchun zarur bo'lgan transformator moyining hajmi o'nlab tonnani tashkil qilishi mumkin, shuning uchun ta'mirlash uchun tanklarga ega bo'lish shart. 
`,
    description_ru: `
    Для проведения работ по ремонту силовых трансформаторов напряжением от 35 до 500 кВ на территории действующих подстанций применяется мобильное оборудование, позволяющее выполнить требуемые мероприятия в соответствии с технологией ремонта:
     <br/>  <b>Такелаж</b> <br/>
    Для обеспечения перемещение силовых трансформаторов на территории подстанции без применения грузоподъемных механизмов необходимо специальное такелажное оборудование. Применение грузоподъёмной техники на территории действующих подстанций не всегда возможно из-за высоких габаритно-массовых характеристик, а также ограниченного пространства на подстанции.
   <br />  <b>Генератор сухого воздуха</b> <br />
    Для выполнения съёма навесного оборудования, а также подъёма крышки бака трансформатора без увлажнения активной части необходима установка, осуществляющая подачу осушенного воздуха в трансформатор.
      <br /> <b>Вакуумная установка</b> <br />
    Позволяет создать вакуум в трансформаторе и применяется при сушке активной части трансформатора, а также его финальной сборке. 
     <br /> <b>Дегазационная установка</b> <br />
    Применяется как для восстановления сопротивления изоляции трансформатора, так и для подготовки и заливки трансформаторного масла. 
     <br /> <b>Фильтр ФОСН</b> <br />
    Необходим для устранения примесей из трансформаторного масла, а также восстановления значения тангенса угла диэлектрических потерь масла. 
    <br /> <b>Технологические емкости.</b> <br />
    Трансформаторное масло не должно содержать никаких примесей, в связи с чем переливать его можно только в специально подготовленные емкости. Объем трансформаторного масла, необходимого к изъятию из трансформатора может составлять десятки тонн, поэтому наличие емкостей для проведения ремонта является обязательным.
    `,
    description_en: `
To perform repair work on power transformers with a voltage of 35 to 500 kV on the territory of operating substations, mobile equipment is used, which allows performing the required activities in accordance with the repair technology:
<br/> <b>Skidding system</b> <br/>
To ensure the movement of power transformers on the territory of the substation without the use of lifting mechanisms, special rigging equipment is required. The use of lifting equipment on the territory of operating substations is not always possible due to high overall dimensions and weight characteristics, as well as limited space at the substation.
<br /> <b>Dry air generator</b> <br />
To remove attachments, as well as lift the transformer tank cover without moistening the active part, an installation is required to supply dry air to the transformer.
<br /> <b>Vacuum pump system</b> <br />
Allows you to create a vacuum in the transformer and is used for drying the active part of the transformer, as well as its final assembly.
<br /> <b>Degassing unit</b> <br />
It is used both to restore the insulation resistance of the transformer, and to prepare and fill the transformer oil.
<br /> <b>FOSN filter</b> <br />
It is necessary to remove impurities from the transformer oil, as well as to restore the value of the dielectric loss tangent of the oil.
<br /> <b>Technological containers.</b> <br />
Transformer oil should not contain any impurities, and therefore it can only be poured into specially prepared containers. The volume of transformer oil required for removal from the transformer can be tens of tons, so the presence of containers for repairs is mandatory.
`,
  },
];
