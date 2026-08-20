import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { personalData } from '../../data/personal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <SectionHeading 
            title="About Me" 
            className="items-center text-center"
          />
          
          <div className="max-w-3xl text-text-secondary text-lg leading-relaxed">
            <p className="mb-6">
              {personalData.about}
            </p>
            <p>
              I specialize in working with modern web technologies like React, Node.js, and Cloud Services, constantly pushing the boundaries of what's possible with clean, efficient code.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
