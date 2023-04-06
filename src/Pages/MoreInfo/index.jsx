import React from "react";
import "./style.css";
import banner from "../../Assets/Img/Clasroom.png";
const MoreInfo = () => {
  return (
    <div>
      <div className="path-wrapper">
        <div className="container">
          <h1>Batafsil ma'lumot</h1>
          <p>Asosiy / Sahifalar / Batafsil Malumot</p>
        </div>
      </div>
      <p className="text-more-info container">
        Aralash ta’lim-an’anaviy kunduzgi, masofaviy va mustaqil ta’limni
        birlashtiruvchi o‘qitish tizimi bo‘lib, u o‘qituvchilar, ta’lim
        oluvchilar va axborotning interfaol manbalarining o‘zaro
        ta’sirlashishini qamrab oladi, doimo o‘zaro aloqada bo‘lgan va bir
        butunlikni tashkil etgan o‘quv jarayoniga xos barcha komponentlar
        (o‘qitishning maqsadi, mazmuni, metodlari, tashkiliy shakllari,
        vositalari)ni aks ettiradi. Aralash ta’limning asosiy xususiyatlari
        quyidagilardan iborat: sinf vaqtini tejash, o‘quv jarayonida yangi aloqa
        vositalaridan foydalanish, ob’ektiv baholash imkoniyati va innovatsion
        nazorat vositalaridan foydalanish, qobiliyatlarni rivojlantirish, o‘z
        faoliyatini rejalashtirish, bilimlarni sinfdan tashqari egallash va
        undan foydalanish qobiliyati, haqiqiy o‘quv materiallaridan foydalanish,
        o‘quvchiga yo‘naltirilgan yondashuvga tayanishva h.k Talabalar tomonidan
        aralash ta’limning muhim tarkibiy qismi bu ongdir. Bu fazilat talabaning
        o‘z ta’limini boshqarish, rejalashtirish qobiliyatidir. Ushbu
        qobiliyatni rivojlantirish uchun quyidagi omillarning o‘zaro ta’siri
        zarur: o‘z-o‘zini kuzatish, o‘zini o‘zi baholash va o‘zini o‘zi
        boshqarish (o‘z ta’limi natijalariga javob berish). Muhimi, o‘rganish
        statik jarayon sifatida emas, balki insonning o‘z sa’y-harakatlari bilan
        ta’sirlanishi va takomillashtirilishi mumkin bo‘lgan narsa sifatida
        qaralishi kerak. Shunga ko‘ra, talabaga o‘z-o‘zini boshqarish
        ko‘nikmalarini (vaqtni boshqarish, kuchlarni taqsimlash, tanqidiy
        fikrlash) o‘rgatish zarur.
        <img src={banner} alt="banner" />
        Aralash ta’limda talabalarga universitetlarning masofaviy ta’lim
        tizimidan va o’quv materiallaridan foydalanishga to’liq ruxsat beriladi.
        Bu tizimda online kutubxonalar va manbalar mavjud bo’ladi. Talabalar bir
        qism nazorat ishlarini talabalar onlayn tizimida topshirishadi.
        Shuningdek, tizimda guruhli muloqotlar uyushtiriladi va tuli loyihalar
        amalga oshiriladi. An’anaviy ta’lim elementlari ming yillardan beri
        mavjud, biroq aralash ta’lim paydo bo’lganiga hali 10 yilcha ham
        bo’lgani yo’q. Shu sababli bu ta’lim turlarini aralash tarzda olib
        borish maqsadga muvofiq.
        <ul>
          <h1>
            Blended learning modeli talabalarga quyidagi imkoniyatlarni beradi:
          </h1>
          <li>
            1. Online rejimida o’quv materiali bilan hohlagan vaqtda tanishish.
          </li>
          <li>2. Sinov testini topshirib bilimini sinash;</li>
          <li>3. Nazorat testini topshirish;</li>
          <li>
            4. O’tilgan mashg’ulotlarga mos qo’shimcha manbalar bilan tanishish;
          </li>
          <li>
            5. Audio va video yo’zuvlardan, animatsiya va simulyatsiyalardan
            foydalanish;
          </li>
          <li>6. E-maildan foydalanish va forumlarda ishtirok etish;</li>
          <li>
            7. Ma’ruzadan tashqari o’qituvchi-talaba va talabalar o’rtasida
            muloqot tashkil etish.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default MoreInfo;
