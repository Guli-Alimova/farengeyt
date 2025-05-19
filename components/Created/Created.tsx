import React from 'react'
import CreatedCard from './CreatedCard';
const creater = [
    {
      name: 'Sardor SALIM ',
      image: '/authors/1.jpg',
      description:"“ tarjimon  Yoshlar uchun 1000 kitob” tashabbusida qator kitoblarni tarjima qilgan. ",
      work:"MPA (Manchester University)"
    },
    {
      name: ' Xurshid YULDOSHEV ',
      image: '/authors/2.jpg',
      description:"“ muharrir  Yoshlar uchun 1000 kitob”, “Asaxiy Books” loyihalar doirasida 100ga yaqin kitob nashr etilishiga rahbarlik qilgan. ",
      work:"Falsafa bo‘yicha magistr (MU) "
    
    },
    {
      name: 'Behzod ALIMOV ',
      image: '/authors/3.jpg',
      description:" Vestminster Universiteti (WIUT) katta o‘qituvchisi.“Yoshlar uchun 1000 kitob” doirasida iqtisodiyotga doir kitoblarni tayyorlashda ishtirok etgan.  ",
      work:"PhD (Turin University)"
     
    },
    {
      name: ' Komil JALILOV',
      image: '/authors/4.jpg',
      description:"20 yillik pedagog, ta’lim sohasi mutaxassisi ",
      work:"MA (UCL, London), O‘zbek tili va adabiyoti universiteti doktoranti"
    
    },
    {
        name: 'Madina MUSAYEVA ',
        image: '/authors/4.jpg',
        description:"O‘zbek tilidagi audiokitoblar suxandoni, tarjimon va kitobxonlik targ‘ibotchisi ",
        work:"MA (Georgetown University)"
      
      },
  ];
const Created = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-50">
      <h2 className="text-3xl font-bold text-primary">Asoschilar</h2>
      <p className="text-gray-500 mt-2"></p>
      <p className="text-gray-400 mb-8"></p>
      <div className="flex flex-wrap justify-center gap-6">
        {creater.map((item, index) => (
          <CreatedCard key={index} 
          name={item.name}
          image={item.image}
          description={item.description}
          work={item.work}
           />
        ))}
      </div>
    </section>

  )
}

export default Created