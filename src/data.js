import ServiceOne from './assets/service-1.jpg'
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
    description_uz: ` 
    <p style="text-align:center">Biz yuqori quvvatli turbogeneratorlarni ta'mirlashda katta tajribaga egamiz. Bizda malakali mutaxassislar va quyidagi ishlarni bajarish uchun maxsus uskunalar mavjud:</p>
    <br /> Statorni ta'mirlash: O'ram izolyatsiyasini tiklash, shikastlangan tayoqchalarni almashtirish, stator paketini mustahkamlash. <br /> • Rotorni ta'mirlash: Rotorlarni demontaj va montaj qilish, bandaj izolyatsiyasini almashtirish, kontakt halqalarni almashtirish, mahkamlash, shamollatish kanallarining o'tkazuvchanligini tekshirish. <br /> • Gaz sovutish va distillat tizimlarini ta'mirlash. <br /> • Shchetka apparatini ta'mirlash. <br /> • Podshipniklarni almashtirish. <br /> • Elektrik, havo, gidravlik va harorat sinovlarini o'tkazish.`,
    description_ru: `
    <p style="text-align:center">има дългогдишен опит в ремонта на високомощни турбогенератори. Разполагаме с обучен персонал и специализирани приспособления за извършване на следните дейности:</p>
    <br />
    • Ремонт на статор:Възтановяване на изолацията на намотката. Подмяна на дефектирали стержени.Приклинване на статорния пакет.  <br />
    • Ремонт на ротор:Демонтаж и монтаж на ротори. Подмяна на подбандажна изолация. Подмяна наконтактни пръстени. Приклинване. Проверка продухваемостта на вентилационнитеканали.  <br />
    • Ремонт нагазоохлаждащата и дестилатна системи.  <br />
    • Ремонт на четков апарат.  <br />
    • Подмяна на лагери.  <br />
    • Електрически, въздушни, хидравлични и температурни изпитания.
    `,
    description_en: ` 
    <p style="text-align:center">We have extensive experience in the repair of high-power turbogenerators. Our trained staff and specialized equipment allow us to perform the following activities:</p>
    <br /> Stator repair: Restoration of coil insulation, replacement of damaged rods, fastening of the stator core. <br /> • Rotor repair: Dismantling and installation of rotors, replacement of bandage insulation, replacement of contact rings, fastening, checking the ventilation channels' flow. <br /> • Repair of gas cooling and distillation systems. <br /> • Repair of the brush apparatus. <br /> • Replacement of bearings. <br />• Electrical, air, hydraulic, and thermal testing.`
  },
  {
    id: "electrical-installation-1",
    image: ServiceFive,
    title_uz: "ELEKTR MONTAJ VA TA'MIRLASH ISHLARI",
    title_ru: "ЭЛЕКТРОЛАБОРАТОРНЫЕ РАБОТЫ",
    title_en: "ELECTRICAL INSTALLATION AND REPAIR WORKS",
    description_uz: ` 
    <p style="text-align:center">Mamlakat bo'ylab sanoat korxonalarida elektr uskunalariga xizmat ko'rsatish uchun uchta mobil servis guruhi tashkil qilingan. Biz 24/7 rejimida rejalashtirilgan va favqulodda texnik xizmat ko'rsatishni amalga oshiramiz.</p>
    <br /> Ekspluatatsiyaga kiritilgan elektr uskunalarining profilaktik texnik xizmat ko'rsatish. <br /> • Ta'mirlash ishlari sanoat korxonalarida mobil guruhlar tomonidan amalga oshiriladi. <br /> • Servis guruhlari zamonaviy diagnostika va ta'mirlash vositalari bilan jihozlangan. <br /> • Bizning servis mutaxassislarimiz yuqori malakali va doimiy ravishda malaka oshirish kurslarida qatnashadilar. <br /> • Faqat original ehtiyot qismlar va sifatli materiallardan foydalaniladi. <br /> • Ekspluatatsiya muddati tugagan qismlarni yetkazib berish va almashtirish xizmatlari ko'rsatiladi. <br /> • Shuningdek, Stara Zagora shahrida zamonaviy ta'mirlash bazasiga egamiz.`,
    description_ru: `
    <p style="text-align:center">са формирани три мобилни сервизни групи, обслужващи електросъоръжания в промишлените предприятия на територията на страната. Осъществяваме планова и аварийна подръжка 24/7.</p>
      <br />
    • Профилактично техническо обслужване на въведени вексплоатация електросъоръжения. <br />
    • Ремонтните дейности се извършват от мобилни групи на територията на промишлените предприятия.  <br />
    • Сервизните групи са оборудвани със съвременни технически средства за диагностика и ремонт.  <br />
    • В сервиза работят висококвалифицираниспециалисти, които редовно посещават фирмени курсове.   <br />
    • Използват се оригинални резервни части и качествени материали.  <br />
    • Доставка и подмяна на частите с изтекъл експлоатационен период. <br />
    • Разполагаме с оборудвана ремонтна база и в град Стара Загора.
    `,
    description_en: ` 
    <p style="text-align:center">Three mobile service groups have been established to service electrical equipment in industrial enterprises across the country. We provide planned and emergency maintenance 24/7.</p>
    <br /> • Preventive technical maintenance of electrical equipment already in operation. <br /> • Repair activities are carried out by mobile groups directly at industrial enterprises. <br /> • Service groups are equipped with modern diagnostic and repair tools. <br /> • Our service team consists of highly qualified specialists who regularly attend corporate training courses. <br /> • Only original spare parts and high-quality materials are used. <br /> • Delivery and replacement of parts with expired service life. <br /> • Additionally, we have a fully equipped repair base in Stara Zagora.`
  },
  {
    id: "electrical-installation-2",
    image: ServiceSeven,
    title_uz: "ELEKTR MONTAJ VA TA'MIRLASH ISHLARI",
    title_ru: "СПЕЦИАЛИЗИРОВАННОЕ ОБОРУДОВАНИЕ",
    title_en: "ELECTRICAL INSTALLATION AND REPAIR WORKS",
    description_uz: "Yuqori sifatli elektr montaj va ta'mirlash ishlari...",
    description_ru: "Высококачественное специализированное оборудование для электромонтажных работ...",
    description_en: "High-quality electrical installation and repair works...",
  },
];
