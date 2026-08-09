/**
 * ServicesFAQ.jsx
 * Liam Hilton Designs
 *
 * Mobile-first accordion FAQ — single card container, one question
 * expanded at a time via native <details>/<summary> for zero-JS
 * accessibility and keyboard support. Plus/minus icon rotates on open.
 * FAQPage JSON-LD schema (added in ServicesPage.jsx via Helmet) draws
 * directly from this same content — real AEO value, not just UI.
 */

import { motion } from 'framer-motion'
import { faqData } from '../../constants/faqData'
import './ServicesFAQ.css'

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesFAQ() {
  return (
    <section className="services-faq" role="region" aria-label="Frequently asked questions">
      <div className="services-faq__container">
        <motion.div
          className="services-faq__card"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <motion.div className="services-faq__header" variants={itemVariants}>
            <span className="services-faq__eyebrow">FAQ</span>
            <h2 className="services-faq__headline">
              Frequently asked{' '}
              <span className="services-faq__headline-accent">questions.</span>
            </h2>
            <p className="services-faq__subheadline">
              Straight answers to what people actually ask before working together.
            </p>
          </motion.div>

          <div className="services-faq__list">
            {faqData.map((item, i) => (
              <motion.details
                key={i}
                className="services-faq__item"
                variants={itemVariants}
                name="faq-accordion"

              >
                <summary className="services-faq__question">
                  <span>{item.question}</span>
                  <span className="services-faq__icon" aria-hidden="true">+</span>
                </summary>
                <p className="services-faq__answer">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}