export const translations = {
  es: {
    hero: {
      title: "JULIAN ALVAREZ",
      subtitle: "DESARROLLADOR FULL-STACK",
      description: "Desplázate hacia abajo para conocer mi perfil, las tecnologías que utilizo y los proyectos en los que he trabajado.",
      scrollDown: "Desliza",
    },
    scroll: {
      welcome: "Bienvenido a mi",
      portfolio: "Portafolio Digital",
    },
    nav: {
      about: "Sobre mí",
      tech: "Mi Stack",
      projects: "Experiencia",
      contact: "Contacto",
      hiring: "¿Tienes un proyecto?",
      letstalk: "¡Hablemos!",
    },
    sections: {
      about: {
        tag: "01. Sobre mí",
        title: "Hola, soy Julian.",
        content: "Tengo 18 años, soy de Buenos Aires, Argentina, y soy un desarrollador full-stack desde hace 2 años, con experiencia en la creación de aplicaciones web y softwares a medida. Mi objetivo es transformar problemas cotidianos en soluciones prácticas y eficientes que satisfagan las necesidades de mis clientes. Además, me gusta mantenerme actualizado con las últimas tecnologías y tendencias en el mundo del desarrollo web.",
      },
      tech: {
        tag: "02. Tecnologías",
        title: "Mi Stack",
      },
      experience: {
        tag: "03. Experiencia Freelance",
        title: "Soluciones a Medida",
        viewProject: "Explorar Proyecto",
        github: "Repositorio",
        website: "Sitio Web",
        projects: {
          nutri: {
            title: "Plataforma para Nutricionistas",
            description: "Sistema de gestión clínica con reserva de turnos multisucursal y pagos integrados.",
            details: "Desarrollé una solución completa que permite a los pacientes agendar citas en diferentes sucursales y realizar pagos en línea. El sistema incluye un panel administrativo avanzado para la gestión de agendas, horarios dinámicos y seguimiento de pacientes.",
          },
          barber: {
            title: "Plataforma para Barberías",
            description: "Gestión de turnos online con motor de estadísticas y analítica de rendimiento.",
            details: "Creé una plataforma que automatiza la reserva de servicios y ofrece un panel de control empresarial. Incluye analíticas detalladas sobre ingresos, rendimiento por profesional, gráficos comparativos y estadísticas de crecimiento del negocio.",
          },
          caps: {
            title: "E-commerce de Gorras",
            description: "Tienda online con gestión de stock y pedidos personalizados.",
            details: "Desarrollé una plataforma de venta de gorras que incluye un catálogo dinámico y un panel de administración para controlar inventario y pedidos, optimizando la operación del negocio sin necesidad de pasarelas de pago.",
          },
          restaurant: {
            title: "Landing Page para Restaurante",
            description: "Sitio web informativo con menú digital interactivo.",
            details: "Creé una landing page enfocada en la conversión y la experiencia del usuario, presentando la historia del restaurante, su ubicación y un menú online fácil de navegar para los comensales.",
          }
        }
      },
      contact: {
        tag: "04. Contacto",
        title: "¿Listo para dar vida a tu próximo gran proyecto?",
        content: "Busco colaborar en soluciones innovadoras y practicas a medida para mis clientes. Si tienes una idea, hablemos de cómo hacerla realidad con profesionalismo y excelencia técnica.",
        button: "Enviar Email",
      },
    },
  },
  en: {
    hero: {
      title: "JULIAN ALVAREZ",
      subtitle: "FULL-STACK DEVELOPER",
      description: "Scroll down to learn about my profile, the technologies I use, and the projects I've worked on.",
      scrollDown: "Scroll",
    },
    scroll: {
      welcome: "Welcome to my",
      portfolio: "Digital Portfolio",
    },
    nav: {
      about: "About me",
      tech: "My Stack",
      projects: "Experience",
      contact: "Contact",
      hiring: "Have a project?",
      letstalk: "Let's talk!",
    },
    sections: {
      about: {
        tag: "01. About me",
        title: "Hi, I'm Julian.",
        content: "I'm 18 years old, from Buenos Aires, Argentina, and I've been a full-stack developer for 2 years, with experience in creating custom web applications and software. My goal is to transform everyday problems into practical and efficient solutions that meet the needs of my clients. Additionally, I enjoy staying updated with the latest technologies and trends in the world of web development.",
      },
      tech: {
        tag: "02. Technologies",
        title: "My Stack",
      },
      experience: {
        tag: "03. Freelance Experience",
        title: "Custom Solutions",
        viewProject: "Explore Project",
        github: "Repository",
        website: "Website",
        projects: {
          nutri: {
            title: "Nutritionist Platform",
            description: "Clinical management system with multi-branch appointment booking and integrated payments.",
            details: "I developed a complete solution that allows patients to book appointments across different branches and make online payments. The system includes an advanced administrative panel for agenda management, dynamic schedules, and patient tracking.",
          },
          barber: {
            title: "Barbershop Ecosystem",
            description: "Online appointment management with statistics engine and performance analytics.",
            details: "I created a platform that automates service booking and offers a business control panel. It includes detailed analytics on income, professional performance, comparative charts, and business growth statistics.",
          },
          caps: {
            title: "Caps E-commerce",
            description: "Online store with stock management and custom orders.",
            details: "I developed a caps sales platform including a dynamic catalog and an admin panel to control inventory and orders, optimizing business operations without the need for complex payment gateways.",
          },
          restaurant: {
            title: "Restaurant Landing Page",
            description: "Informative website with interactive digital menu.",
            details: "I created a landing page focused on conversion and user experience, presenting the restaurant's history, location, and an online menu easy for diners to navigate.",
          }
        }
      },
      contact: {
        tag: "04. Contact",
        title: "Ready to bring your next big project to life?",
        content: "I'm looking to collaborate on innovative solutions that push technological boundaries. If you have an idea, let's talk about how to make it a reality with professionalism and technical excellence.",
        button: "Send Email",
      },
    },
  },
};

export type Language = "es" | "en";
export type TranslationType = typeof translations.es;
