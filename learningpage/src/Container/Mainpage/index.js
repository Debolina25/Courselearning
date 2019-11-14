import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Component/Header';
import './style.css';
import Footer from '../../Component/Footer';
export default class Main extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="container page_position">
                <h1 className="text-center">UDEMY</h1>
                <p>
                Udemy.com is an online learning platform aimed at professional adults and students.
                Udemy, a portmanteau of you + academy, has more than 30 million students and 50,000 
                instructors teaching courses in over 60 languages. There have been over 245 million 
                course enrollments. Students and instructors come from 190+ countries and 2/3 of students
                are located outside of the U.S. Udemy also has over 4,000 enterprise customers and 80% of
                Fortune 100 companies use Udemy for employee upskilling (Udemy for Business). Students
                take courses largely as a means of improving job-related skills. Some courses generate 
                credit toward technical certification. Udemy has made a special effort to attract corporate 
                trainers seeking to create coursework for employees of their company.
                As of 2019, there are more than 130,000 courses on the website.
                </p>
                <h2>History</h2>
                <p>
                In 2007, Udemy (you-de-mee) founder Eren Bali built software for a live virtual classroom
                while living in Turkey. He saw potential in making the product free for everyone, and
                moved to Silicon Valley to found a company two years later. The site was launched by Bali, 
                Oktay Caglar and Gagan Biyani in early 2010.
                In February 2010, the founders tried to raise venture capital funding, but the idea failed 
                to impress investors and they were rejected 30 times, according to Gagan Biyani. In response
                to this, they bootstrapped the development of the product and launched Udemy—"The Academy of 
                You"—in May 2010.
                Within a few months, 1,000 instructors had created about 2,000 courses, and Udemy had 
                nearly 10,000 registered users. Based on this favorable market reaction, they decided to 
                attempt another round of financing, and raised $1 million in venture funding by August.
                In October 2011, the company raised an additional $3 million in Series A funding led by 
                Groupon investors Eric Lefkofsky and Brad Keywell, as well as 500 Startups and MHS Capital.
                In December 2012, the company raised $12 million in Series B funding led by Insight 
                Venture Partners, as well as Lightbank Capital, MHS Capital and Learn Capital, bringing 
                Udemy's total funding to $16 million.
                On April 22, 2014, the Wall Street Journal's Digital edition reported that Dennis Yang, 
                Chief Operating Officer of Udemy was named CEO, replacing Eren Bali.
                In May 2014, Udemy raised another $32 million in a Series C funding, led by Norwest 
                Venture Partners, as well as Insight Venture Partners and MHS Capital.
                In June 2015, Udemy raised a $65 million Series D financing round, led by Stripes Group. 
                Now Udemy joined another online learning house Skillsdox Inc of Canada to open up School 
                of Skills in India.
                In June 2016, Udemy raised $60 million from Naspers Ventures as a follow-up to the $65
                million Series D round of financing from June 2015.
                On February 5, 2019, Udemy announced that the board of the company has appointed Gregg 
                Coccari as its new chief executive officer.
                </p>
                <h2>Overview</h2>
                <p>
                Udemy serves as a platform that allows instructors to build online courses on topics of their
                choosing. Using Udemy's course development tools they can upload video, PowerPoint presentations, 
                PDFs, audio, zip files and live classes to create courses.[citation needed] Instructors can also 
                engage and interact with users via online discussion boards.
                Courses are offered across a breadth of categories, including business and entrepreneurship, 
                academics, the arts, health and fitness, language, music, and technology.[citation needed] Most 
                classes are in practical subjects such as Excel software or using an iPhone camera. Udemy also
                offers Udemy for Business, enabling businesses access to a targeted suite of over 3,000 training
                courses on topics from digital marketing tactics to office productivity, design, management, 
                programming, and more. With Udemy for Business, organizations can also create custom learning 
                portals for corporate training.
                Udemy offers paid and free courses, depending on the instructor. In 2015, the top 10 
                instructors made more than $17 million in total revenue.
                In April 2013, Udemy offered an app for Apple iOS, allowing students to take classes 
                directly from iPhones; The Android version was launched in January 2014. As of January 
                2014, the iOS app had been downloaded over 1 million times, and 20 percent of Udemy 
                users access their courses via mobile.[21] In July 2016, Udemy expanded their iOS platform
                to include Apple TV.
                </p>
                <Footer/>
            </div>
            </div>
        );
    }
}