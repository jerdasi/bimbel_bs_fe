import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from "react-icons/bs";
import faq from '../Components/json/faq.json'


function Faq() {

    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i){
            return selected(null)
        }
        setSelected(i)
    }

  return (
    <div className='faq'>
        

        <Container>
            <Row>
                <h1>Frequently Asked Question</h1>
            </Row>
            <Row className='rowFaq'>
                <Col >
                <div className='accordion'>
                {faq.map((item, index) => {
                return(
                    <div key={index}>
                        <div className='accordionFaq'>
                            <div className='accordionHeading'>
                                <div className='containerFaq' onClick={() => toggle(index)}>
                                    <h3>{item.tanya}</h3>
                                    <p>
                                        {selected === index ? (
                                            <div className='icons'><BsFillArrowUpSquareFill/></div>
                                        ) : (
                                            <div className='icons'><BsFillArrowDownSquareFill/></div>
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className='accordionContent'>
                                <div className={ selected === index ? 'content show' : 'content'}>
                                    <p>{item.jawab}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        

                </div>
                </Col>

                <Col>
                <div className='faqImage'></div>
                </Col>
            </Row>
        </Container>

        
            
    </div>
  )
}

export default Faq