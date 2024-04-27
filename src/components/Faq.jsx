import React from 'react'
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevron from "../arrow.svg";
const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {header}
          <img
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
            src={chevron}
            alt="Chevron"
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left hover:bg-slate-100 ${
            isEnter && "bg-slate-200"
          }`
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out"
      }}
      panelProps={{ className: "p-4" }}
    />
  );
const Faq = () => {
  return (
    <div className='flex flex-col px-32 mt-40 '>
        <h4 className='bg-gradient-to-b px-3 mb-4 from-[#06286E] to-[#164EC0] text-transparent bg-clip-text  text-3xl font-extrabold'>FAQ</h4>
  
        <div className="mx-2 my-4 border border-blue-200 font-semibold ">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={200} >
        <AccordionItem header="Can education flashcards be used for all age groups?" >
      <div className='text-[gray] font-normal'> Yes, education flashcard can be taillored to different age groups and learning levels.They are flashcard designed for preschoolers,elementary school students,high school students and even for college-level and adult learners.</div> 
        </AccordionItem>
       </Accordion>
       </div>
       <div className="mx-2 my-4 border  border-blue-200 font-semibold">
       <Accordion transition transitionTimeout={200}>
        <AccordionItem header="How do education flashcard work?">
        <div className='font-normal text-[gray]'>           Education flashcard work by presenting a question on prompt on oneside and corrosponding answer or information  on other side.User can see card repetedly reinforcing their memory and enhancing learning through repetiton.
 </div>

        </AccordionItem>
        </Accordion>
        </div>
        <div className="mx-2 my-4 border font-semibold  border-blue-200">
        <Accordion transition transitionTimeout={200}>
        <AccordionItem header="Can Education flashcard be used for test preparation?">
          <div className='font-normal text-[gray]'> Absolutely, Flashcards are excellent tool for test preparation,allowing students to review key concepts ,terms and facts.They provide a quick and focused way to reinforce knowledge before exams </div>
        </AccordionItem>
      </Accordion>
     
    </div>
        </div>
  )
}

export default Faq