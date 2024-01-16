import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          I'm a versatile individual on a transformative journey into the dynamic world of technology with a passion for tech and a love for design. With a Bachelor's and Master's degree from the scenic landscapes of Scotland, I've cultivated a love for growth and developed the ability to thrive beyond my comfort zone. This foundation, although not technology-specific, forms the bedrock of my unique approach to problem-solving and innovation.
          </p>

          <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            Armed with a Software Development Diploma from Code Institute, I master coding intricacies and infuse creativity into projects across frontend and backend development, as well as UX/UI design, business development, and project management.
          </p>

          <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            In tech, I offer a unique blend of technical expertise and a collaborative mindset cultivated through diverse experiences. Challenges are opportunities for innovation, and my diverse background enriches team dynamics.
          </p>

          <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            So are you ready to elevate your projects with a fresh approach? Let's exceed technology demands together. Reach out to start a conversation about how my skills can contribute to your team's success. Connect for a virtual coffee chat, project exploration, or to exchange ideas. Excited about the possibilities ahead!
          </p>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
