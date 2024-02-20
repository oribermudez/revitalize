import Service from '@/app/components/client-dashboard/Service';

const massageTherapy = [
  {image: '/assets/massage1.jpg', title: 'Relaxation Massage', description: 'Relax your muscles and relieve tension with our soothing relaxation massage.'},
  {image: '/assets/deepTissue.jpg', title: 'Deep Tissue Massage', description: 'Target deep-seated muscle knots and improve mobility with our deep tissue massage.'},
  {image: '/assets/cupping.png', title: 'Cupping Therapy', description: 'Experience the benefits of cupping therapy for improved circulation and pain relief.'},
  {image: '/assets/massage3.jpg', title: 'Therapeutic Massage', description: 'Address specific muscular issues and injuries with our therapeutic massage techniques.'},
];

const facialTherapy = [
  {image: '/assets/massage4.jpg', title: 'Face & Scalp Massage', description: 'Indulge in a relaxing massage focusing on the face and scalp to release tension and promote relaxation.'},
  {image: '/assets/faceMassage.jpg', title: 'Facial Cupping', description: 'Revitalize your skin with facial cupping, reducing puffiness and promoting circulation for a youthful glow.'},
  {image: '/assets/massage2.jpg', title: 'Hot Towel Therapy', description: 'Enhance your facial experience with hot towel therapy, opening pores and improving product absorption.'},
  {image: '/assets/guaSha.jpg', title: 'Gua Sha', description: 'Experience the ancient healing technique of Gua Sha, promoting lymphatic drainage and reducing muscle tension.'},
];

const specialTreatments = [
  {image: '/assets/hotStone.jpg', title: 'Hot Stone Therapy', description: 'Soothe tired muscles and relax your body with the comforting warmth of hot stone therapy.'},
  {image: '/assets/rejuvenation.jpg', title: 'Rejuvenation Treatment', description: 'Revitalize your body and mind with our rejuvenation treatment, combining massage and holistic techniques for total relaxation.'},
];

const Services = () => {  
  return (
    <>
      <div className="mt-4">
        <h4 className='my-8 font-bold'>Massage Therapy</h4>
        <p className='bg-main/60 p-4 text-white text-sm mb-8 rounded-md shadow-md'>Massage therapy offers a holistic solution for both physical and mental health, providing relaxation, reducing muscle tension, and relieving stress. It promotes overall well-being by enhancing circulation, releasing endorphins, and fostering a sense of calm and balance.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {massageTherapy.map((massage, index) => (
            <Service key={massage.title} massage={massage} index={index} />
          ))}
        </div>

      </div>
      <div className="mt-4">
        <h4 className='my-8 font-bold'>Facial & Buccal Therapy</h4>
        <p className='bg-main/60 p-4 text-white text-sm mb-8 rounded-md shadow-md'>Facial and buccal therapy revitalizes skin health and relaxation through targeted techniques that improve circulation, lymphatic drainage, and muscle tension relief. By enhancing skin tone and texture while reducing headaches and promoting relaxation, these therapies offer a holistic approach to skincare and well-being, leaving individuals feeling rejuvenated and refreshed.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {facialTherapy.map((massage, index) => (
            <Service key={massage.title} massage={massage} index={index} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h4 className='my-8 font-bold'>Special Treatments</h4>
        <p className='bg-main/60 p-4 text-white text-sm mb-8 rounded-md shadow-md'>Special treatments like hot stone massage and rejuvenation therapy offer unique benefits for physical and mental well-being. Hot stone massage uses heated stones to relax muscles and improve circulation, while rejuvenation therapy combines massage, exfoliation, and aromatherapy to revitalize the body and mind. These treatments provide a luxurious and effective way to reduce stress, boost energy levels, and promote overall health and vitality.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {specialTreatments.map((massage, index) => (
            <Service key={massage.title} massage={massage} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
