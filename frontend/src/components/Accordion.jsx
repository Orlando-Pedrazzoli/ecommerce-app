import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      id: 'payment-arrow',
      question: 'When is payment taken for my order?',
      answer: `Payment is taken during the checkout process when you pay for your order. 
               The order number that appears on the confirmation screen indicates payment 
               has been successfully processed.`,
    },
    {
      id: 'delivery-arrow',
      question: 'How would you ship my order?',
      answer: `For large products, we deliver your product via a third party logistics 
               company offering you the “room of choice” scheduled delivery service. 
               For small products, we offer free parcel delivery.`,
    },
    {
      id: 'cancel-arrow',
      question: 'Can I cancel my order?',
      answer: `Scheduled delivery orders can be cancelled 72 hours prior to your 
               selected delivery date for full refund.`,
    },
  ];

  return (
    <div className='mt-20 accordion divide-neutral/20 max-w-full divide-y'>
      {accordionData.map((item, index) => (
        <div
          key={item.id}
          className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
          id={item.id}
        >
          <button
            className='accordion-toggle inline-flex items-center gap-x-4 text-start w-full px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'
            aria-controls={`${item.id}-collapse`}
            aria-expanded={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <span
              className={`icon-[tabler--chevron-right] ${
                activeIndex === index ? 'rotate-90' : ''
              } size-5 shrink-0 transition-transform duration-300 rtl:rotate-180`}
            ></span>
            {item.question}
          </button>
          <div
            id={`${item.id}-collapse`}
            className={`accordion-content ${
              activeIndex === index ? 'block' : 'hidden'
            } w-full overflow-hidden transition-[height] duration-300`}
            aria-labelledby={item.id}
            role='region'
          >
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] pb-4'>
              <p className='text-base-content/80 font-normal'>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
