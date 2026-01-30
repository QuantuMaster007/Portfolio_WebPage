import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

interface indexProps {}

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const navList = {
  initial: { x: 0 },
  animate: {
    x: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
    },
  },
}

const navItem = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ...transition },
  },
}

const locomotiveScroll =
  typeof window !== `undefined`
    ? require('locomotive-scroll').default
    : null

const index: React.FC<indexProps> = () => {
  const refScroll = React.useRef(null)
  let scroll: any

  React.useEffect(() => {
    if (!refScroll.current) return
    scroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    })
  }, [])

  function updateScroll() {
    scroll?.destroy()
    setTimeout(() => {
      scroll = new locomotiveScroll({
        el: refScroll.current,
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      })
    }, 100)
  }

  return (
    <motion.div data-scroll-container ref={refScroll} initial='initial' animate='animate'>
      <Head>
        <title>Sourabh Tarodekar | Technical Program Manager</title>
        <meta
          name='description'
          content='Technical Program Manager driving hardware execution, CapEx planning, and NPI readiness at scale.'
        />
        <link rel='icon' href='/vercel.svg' />
      </Head>

      {/* ================= HEADER / HERO ================= */}
      <header data-scroll-section className='home-header'>
        <div className='home-header__left'>
          <nav className='navigation'>
            <motion.h3
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition }}
              style={{ fontWeight: 600 }}>
              Sourabh Tarodekar
            </motion.h3>

            <motion.ul variants={navList} className='navigation__list'>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#about'>About</a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#projects'>Projects</a>
              </motion.li>
              <motion.li variants={navItem} className='navigation__item'>
                <a onClick={updateScroll} href='#contact'>Contact</a>
              </motion.li>
            </motion.ul>
          </nav>

          <div className='home-hero'>
            <motion.h4
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition }}
              className='hero-h4'>
              Technical Program Manager
            </motion.h4>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition }}
              className='hero-h1'>
              Building complex hardware programs <br /> from concept to production
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition }}
              className='home-hero__footer'>
              <a href='https://github.com/QuantuMaster007' target='_blank'>GitHub</a>
              <a href='https://www.linkedin.com/in/sourabh232/' target='_blank'>LinkedIn</a>
              <a href='mailto:sourabh232@gmail.com'>Email</a>
            </motion.div>
          </div>
        </div>

        <div className='home-header__right'>
          <motion.img
            initial={{ opacity: 0, scale: 1.2, x: 200 }}
            animate={{ opacity: 1, scale: 1, x: 0, transition }}
            src='webp/header-bg.webp'
            alt='ambient tech background'
          />
        </div>
      </header>

      {/* ================= ABOUT ================= */}
      <main className='main'>
        <section data-scroll-section id='about' className='section-features'>
          <div className='feature-container'>
            <h2 className='heading-2'>About Me</h2>
            <p className='paragraph'>
              I’m a Technical Program Manager with 7+ years of experience partnering with
              engineering, operations, and supply chain teams to deliver complex, capital-intensive
              hardware programs.
              <br /><br />
              I focus on disciplined execution, clear ownership, and early risk identification to
              ensure programs are truly ready to scale.
            </p>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section data-scroll-section id='projects' className='section-gallery'>
          <div className='gallery-container'>
            <h2 className='heading-2'>Selected Work</h2>

            <div className='gallery'>
              <div className='gallery__left'>
                <h3>CapEx Factory Readiness Framework</h3>
                <p>
                  A framework to assess factory readiness across people, process, materials, and
                  equipment to support early capital decisions.
                </p>
                <a href='https://github.com/QuantuMaster007/CapEx_Factory_Readiness' target='_blank'>
                  View on GitHub
                </a>
              </div>

              <div className='gallery__right'>
                <h3>System Interface & Integration</h3>
                <p>
                  A system-level approach to managing interfaces, dependencies, and integration risks
                  across complex hardware subsystems.
                </p>
                <a href='https://github.com/QuantuMaster007/Interface_N_Integration' target='_blank'>
                  View on GitHub
                </a>

                <h3>Supply Chain Control</h3>
                <p>
                  A program-level framework for supplier risk management, long-lead mitigation, and
                  execution during NPI and ramp.
                </p>
                <a href='https://github.com/QuantuMaster007/supply-chain-control' target='_blank'>
                  View on GitHub
                </a>

                <h3>NPI Program Management Playbook</h3>
                <p>
                  A practical playbook covering NPI planning, governance, and execution across
                  Proto, EVT, DVT, and PVT.
                </p>
                <a
                  href='https://github.com/QuantuMaster007/NPI_Program_Management_Playbook'
                  target='_blank'>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section data-scroll-section id='contact' className='section-feedback'>
          <div className='feedback-container'>
            <h2 className='heading-2'>Let’s Connect</h2>
            <p className='paragraph'>
              I’m always open to discussing new opportunities where I can lead ideas from concept to
              production. If you think we might be a good fit, feel free to reach out via email.
            </p>
            <a href='mailto:sourabh232@gmail.com'>sourabh232@gmail.com</a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer data-scroll-section className='footer'>
        <p className='footer-copyright'>
          © Sourabh Tarodekar — Technical Program Manager
        </p>
      </footer>
    </motion.div>
  )
}

export default index
