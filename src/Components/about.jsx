
import './ComponentStyles/about.css';

const statsData = [
  { label: 'Our Motto', value: 'Embracing Technology For Innovators'},
  { label: 'Our Vision', value: 'Committed to technology, Committed to the future' },
  { label: 'Our mission', value: 'We strive to develop and support computing and informatics students through state-Of-art technology,innovation,leadership, to be internationally competent and competative'}
];

const StatCard = ({ label,value, icon: Icon }) => {  
 

  return (
    <div className="about-card">
      <div className='about-card-overlay'>
      

      <div className ="about-value">
      <h3>{label}</h3>
      <p>{value}</p>
      </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="about">
        <div className='about-overlay'>
      <div className="about-container">
        {statsData.map((stat, index) => (
          <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />  // Pass the icon
        ))}
      </div>
      </div>
    </section>
  );
};

export default About;
