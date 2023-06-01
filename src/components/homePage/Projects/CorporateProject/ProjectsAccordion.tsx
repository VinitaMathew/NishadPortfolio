import React from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useInView } from "react-intersection-observer";

export default function ProjectsAccordion(props:any){
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
    return (
      <div ref={ref} className={inView ? "slide-up" : "hidden"}>
        <AccordionItem className="accordion-item" key={props.index}>
          <AccordionItemHeading>
            <AccordionItemButton className="accordion-button">
              {props.project.heading}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="accordion-panel">
            <img className="panel-image" src={props.project.image} alt="" />
            <div dangerouslySetInnerHTML={{ __html: props.project.content }}></div>
          </AccordionItemPanel>
        </AccordionItem>
      </div>
    );
}