import MainContent from "../Main"
import Subtitle from "../Subtitle"
import ResumePrimary from '../Resume_Primary'
import Section from "../Section"
import { jsPDF } from 'jspdf'
FaFileDownload
import { FaFileDownload } from 'react-icons/fa'

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
        const pdf = new jsPDF("p", "mm", "a4");
        const header = {
            name: 'Andrew Ogilvie',
            address1: '1162 Barr Cres',
            address2: 'Milton ON L9T 6X8',
            phone: '(416) 845-6942',
            email: 'primalorb@gmail.com'
        }
        const data = [ 
            {
                title: "Employment",
                dataset: employment
            },
            {
                title: "Education",
                dataset: education
            },
            {
                title: "Interests",
                dataset: interests
            },
        ]
        let yPos = 10
        let size = 18
        pdf.setFontSize( size );
        pdf.setFont("helvetica", "bold");
        pdf.text( header.name, 105, yPos, null, null, "center")
        size = 10
        pdf.setFontSize( size );
        yPos += size * 0.45
        pdf.setFont("helvetica", "normal");
        pdf.text( header.address1, 105, yPos, null, null, "center")
        yPos += size * 0.45
        pdf.text( header.address2, 105, yPos, null, null, "center")
        yPos += size * 0.45
        pdf.text( header.phone, 105, yPos, null, null, "center")
        yPos += size * 0.45
        pdf.text( header.email, 105, yPos, null, null, "center")
        yPos += size * 0.45
        data.map( a => {
            size = 18
            yPos += size * 0.65
            pdf.setFontSize( size );
            pdf.setFont("helvetica", "normal");
            pdf.text( a.title, 18, yPos );
            a.dataset.map( ( x ) => {
                size = 14
                yPos += size * 0.55
                pdf.setFontSize( size );
                pdf.text(x.primary, 25, yPos );
                x.roles.map( ( y ) => {
                    if( y.role !== undefined ){
                        size = 10
                        yPos += size * 0.55
                        pdf.setFontSize( size );
                        pdf.setFont("helvetica", "italic");
                        pdf.text(`( ${ y.from } - ${ y.to } )`, 30, yPos );
                        pdf.setFont("helvetica", "bold");
                        pdf.text( y.role, 58, yPos );
                    }
                    y.tasks.map( ( z ) => {
                        size = 9
                        yPos += size * 0.55
                        pdf.setFont("helvetica", "normal");
                        pdf.setFontSize( size );
                        pdf.text( `• ${z}`, 62, yPos );
                    } )
                } )
            } )
        })
        size = 9
        pdf.setFontSize( size );
        pdf.setFont("helvetica", "italic");
        let date = new Date().toLocaleString()
        pdf.text( `* This document is dynamically generated: ${date}`, 200, 280, null, null, "right")
        pdf.save(`${ header.name.toLowerCase().split(' ')[0][0] }-${ header.name.toLowerCase().split(' ')[1] }-resume.pdf`);
    };

    return (
        <MainContent>
            <Subtitle title={ title }/>
            <Section wrap="wrap">
                <ResumePrimary title="Employment" data={ employment } />
                <ResumePrimary title="Education" data={ education } />
                <ResumePrimary title="Interests" data={ interests } />
            </Section>
            <button onClick={ print } className="resume-button"><FaFileDownload />Download PDF</button>
        </MainContent>
    )
}

export default Resume