import MainContent from "../Main"
import Subtitle from "../Subtitle"
import ResumePrimary from '../Resume_Primary'
import Section from "../Section"
// import generatePDF from "../Resume_PDF"
// import { renderToString } from "react-dom/server";
// import Prints from '../Resume_PDF'
// import { jsPDF } from 'jspdf'


const Resume = () => {
    const title = 'resume'

    const employment = [
        { primary: 'DeBoer Tool Inc',
            roles: [ 
                {
                role: 'Jr. Software Developer',
                from: '2020',
                to: 'Present',
                tasks: [
                    'Design & develop applications to simplify engineering processes',
                    'Interactive engineered product design applications',
                    'Work collaboratively with senior developers',
                    'JavaScript, HTML, CSS, GitHub',
                    ]
                },
                {
                role: 'Production Manager',
                from: '2014',
                to: '2020',
                tasks: [
                    'Administer ISO 9001:2015 Registered QMS',
                    'Production Planning / Forecasting',
                    'Functional Workflow / Application Development',
                    'Product Design, Engineering Development and Standardization',
                    'JHSC / First Aid',
                    ]
                }
             ]
            }
        ]

    const education = [
        { primary: 'University of Toronto: SCS',
            roles: [ 
                {
                role: 'Full Stack Coding Bootcamp',
                from: '2021',
                to: 'Present',
                tasks: [
                    'MERN Full Stack Development',
                    'Front End: React, Handlebars, HTML, CSS, JavaScript',
                    'Back End: Express, Node, mySQL, MongoDB',
                    'Other: jQuery, Bootstrap, Heroku, GitHub / Git'
                    ]
                }
             ]
        },
        { primary: 'The DaVinci Institute',
            roles: [ 
                {
                role: '2D Visual Effects & Compositing',
                from: '2005',
                to: '2006',
                tasks: [
                   'Adobe Creative Suite',
                   'Autodesk Combustion',
                   'Training in editing, compositing, effects, post processing, and production',
                    ]
                },
                {
                role: '3D Modeling and Animation',
                from: '2005',
                to: '2006',
                tasks: [
                    'Autodesk Maya',
                    'Adobe Creative Suite',
                    'Training in 3D modeling, rigging, animation, rendering, and VFX',
                    ]
                }
             ]
        }
    ]   
    
    const interests = [
        { primary: 'Other Interests',
            roles: [ 
                {
                    tasks: [
                        'Digital Photography / Videography',
                        '3D Modeling and Animation',
                        'Soccer',
                        'Automobiles & Driving',
                        'Continued Learning',
                    ]
                }
            ]
        }
    ] 
 
    const print = () => {
        const string = <Prints />;
        // console.log( string )
        const pdf = new jsPDF("p", "mm", "a4");
        const columns = [
          "SOW Creation Date",
          "SOW Start Date",
          "Project",
          "Last Updated",
          "SOW End Date"
        ];
        var rows = [
          [
            "Dec 13, 2017",
            "Jan 1, 2018",
            "ABC Connect - ABCXYZ",
            "Dec 13, 2017",
            "Dec 31, 2018"
          ]
        ];
        pdf.fromHTML( string );
        pdf.save("pdf");
      };

    return (
        <MainContent>
            <Subtitle title={ title }/>
            {/* <button onClick={ generatePDF } type="primary">Download PDF</button>  */}
            {/* <button onClick={print}>print</button> */}
            <Section wrap="wrap">
                <ResumePrimary title="Employment" data={ employment } />
                <ResumePrimary title="Education" data={ education } />
                <ResumePrimary title="Interests" data={ interests } />
            </Section>
        </MainContent>
    )
}

export default Resume