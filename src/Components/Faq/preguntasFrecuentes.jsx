import React, { useState } from 'react';
import './preguntasFrecuentes.scss'; // Archivo de estilos

const PreguntasFrecuentes = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexInvertidas, setActiveIndexInvertidas] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleQuestionInvertida = (index) => {
    setActiveIndexInvertidas(activeIndexInvertidas === index ? null : index);
  };


  const preguntas = [
    {
      pregunta: '¿Cómo me garantizan que mi trabajo esté libre de plagio?',
      respuesta:
        'La originalidad de tu trabajo es una de nuestras prioridades en Académica Express. Para asegurarnos de que tu proyecto sea 100% único, implementamos rigurosas medidas de seguridad. Utilizamos Turnitin, el software antiplagio más reconocido a nivel mundial, para analizar cada entrega. Junto con tu trabajo, recibirás un informe detallado que confirma que el contenido es completamente original y exclusivo.',
    },
    {
      pregunta: '¿Cuál es el costo de realizar mi proyecto?',
      respuesta:
        'El costo de tu proyecto depende de varios factores, como el tipo de trabajo, el tiempo disponible, y las pautas específicas que debemos seguir. En Académica Express, entendemos que cada cliente es único y que cada proyecto tiene sus particularidades. Por eso, no ofrecemos presupuestos generales; preferimos conocer tus necesidades en detalle para brindarte una cotización personalizada y ajustada a lo que realmente necesitas. Compartir esta información no te llevará mucho tiempo, y nos permitirá ofrecerte una propuesta precisa y justa',
    },
    {
      pregunta: '¿Cuánto tiempo tardan en realizar mi proyecto?',
      respuesta:
        'Nos adaptamos a tus tiempos y necesidades. Si tu proyecto es urgente, podemos dedicarle más recursos para cumplir con plazos cortos. Como referencia, para un trabajo de 40 páginas, lo ideal es contar con dos meses. Sin embargo, hemos completado proyectos de hasta 100 páginas en solo dos días. La flexibilidad es clave: cuanto más tiempo tengamos, más económico será tu presupuesto. Los plazos los marcas tú, y nosotros nos encargamos de cumplirlos con la mayor calidad posible.',
    },
    {
        pregunta: '¿Podré hablar con el profesional a cargo de mi proyecto?',
        respuesta:
          'Sí, una vez confirmado el proyecto con el primer pago, un miembro de nuestro departamento de gestión se pondrá en contacto contigo para coordinar una llamada con el profesional asignado a tu investigación. Esta llamada, conocida como “conferencia,” te permitirá comunicarte directamente con el experto que llevará a cabo tu proyecto, asegurando que todas tus expectativas y necesidades sean comprendidas desde el inicio.',
      },
      {
        pregunta: '¿Cómo tengo la seguridad de que me entregarán mi trabajo?',
        respuesta:
          'En Académica Express, contamos con más de 10 años de experiencia y respaldo internacional. Nos tomamos muy en serio el seguimiento de tu proyecto. Un gestor estará encargado de supervisar el progreso y garantizar que se cumplan los plazos establecidos. Además, podrás consultar el estado de tu trabajo en cualquier momento, brindándote la tranquilidad de que recibirás tu proyecto puntualmente.',
      },
      {
        pregunta: '¿Es un servicio confidencial?',
        respuesta:
          'Nuestro servicio es totalmente confidencial. Valoramos tu privacidad y tomamos todas las precauciones para proteger tu información y la de nuestros profesionales. Nunca te pediremos datos personales sensibles; solo la información necesaria para realizar tu proyecto. Para mantener esta confidencialidad, no realizamos videollamadas ni reuniones presenciales, asegurando que tus datos estén protegidos al 100%.',
      },
      {
        pregunta: '¿Tengo que brindar datos personales?',
        respuesta:
          'No, no es necesario que compartas datos personales para utilizar nuestros servicios. Solo necesitamos información relacionada con tu proyecto, como la extensión, el tema, la carrera, el grado de estudio, y el tipo de trabajo que necesitas. Incluso hemos desarrollado proyectos de manera completamente anónima, garantizando tu privacidad en todo momento.',
      },
      {
        pregunta: '¿Puedo visitar sus instalaciones o pagar directamente en sus oficinas?',
        respuesta:
          'No, debido a nuestras estrictas políticas de privacidad y confidencialidad, no realizamos reuniones en nuestras oficinas ni permitimos visitas para contratar el servicio. Esto nos ayuda a mantener la confidencialidad y proteger tanto a nuestros clientes como a los profesionales que trabajan con nosotros.',
      },
      {
        pregunta: '¿Qué sucede con los derechos de autor?',
        respuesta:
          'En Académica Express, respetamos plenamente la ley de propiedad intelectual. Una vez entregado el proyecto, tú serás el único titular de los derechos de autor del documento. Esto significa que cualquier reproducción, impresión o presentación del trabajo estará bajo tu control exclusivo, y solo tú podrás otorgar permisos para su uso.',
      },
      {
        pregunta: '¿Qué garantías ofrecen en los proyectos que realizan?',
        respuesta:
          'En Académica Express, te garantizamos que cada proyecto que realizamos cumple con las normas académicas establecidas y se adapta a tus necesidades específicas. Todos nuestros documentos son completamente originales y únicos, elaborados con el máximo cuidado para asegurar tu éxito académico.',
      },
      {
        pregunta: '¿Pueden darme un precio estimado en el primer contacto?',
        respuesta:
          'No podemos proporcionar un precio estimado en el primer contacto porque necesitamos conocer a fondo los detalles de tu proyecto y tus requerimientos específicos. Una vez tengamos esa información, te ofreceremos un presupuesto personalizado en un segundo contacto. Nuestra atención es 100% personalizada, y nos aseguramos de que cada texto sea totalmente distinto y adecuado a lo que realmente necesitas, sin trabajar con plantillas preestablecidas.',
      },
      {
        pregunta: '¿Quién realiza el proyecto?',
        respuesta:
          'Entendemos la importancia de saber quién estará a cargo de tu proyecto. En Académica Express, te aseguramos que tu trabajo será realizado por profesionales especializados en proyectos académicos, con experiencia en tu tema y expertos en tu área de estudio. Todos nuestros profesionales pasan por un riguroso filtro de calidad antes de formar parte de nuestro equipo, garantizando que tu proyecto esté en las mejores manos.',
      },
      {
        pregunta: '¿Cuándo tengo que proporcionar todos los datos de mi proyecto?',
        respuesta:
          'Desde el primer contacto, necesitamos que nos proporciones todos los datos relevantes de tu proyecto. Esta información es crucial para que podamos brindarte un presupuesto adecuado a tus necesidades y asegurarnos de que el trabajo cumpla con tus expectativas.',
      },
    
  ];

  const procesoEntrega = [
    {
      pregunta: '¿Cuál es la modalidad de trabajo?',
      respuesta:
        'Nuestro método de trabajo se basa en un enfoque estructurado y flexible. Una vez que decides contar con nuestra ayuda para la redacción de tu proyecto de investigación, acordamos las entregas de acuerdo con tu calendario académico y las fechas de corrección. Te iremos enviando el proyecto en partes para que puedas estudiarlo y realizar las correcciones necesarias. Todas las correcciones que no impliquen cambios drásticos, como un cambio de tema, están incluidas en el servicio. Además, una vez finalizado el proyecto, tendrás varios días para solicitar ajustes adicionales. Dividimos el proyecto en entregas parciales, lo que te permite pagar en cuotas. Por ejemplo, si tu trabajo tiene 40 páginas, lo dividiremos en 4 entregas de 10 páginas cada una, con pagos proporcionales. Con cada entrega, recibirás un informe antiplagio de Turnitin, lo que garantiza que tu trabajo sea completamente original y exclusivo. Además, tendrás contacto directo con el profesional encargado de tu proyecto a través de una llamada telefónica para asegurar una comunicación fluida.',
    },
    {
      pregunta: '¿Puedo hablar con el profesional antes de pagar?',
      respuesta:
        'La llamada con el profesional se realiza una vez que el proyecto ha sido confirmado mediante el primer pago. Dado que valoramos más de 50 proyectos al día, nuestros profesionales necesitan concentrarse en la investigación y desarrollo de proyectos en curso. Ten la tranquilidad de que estás en buenas manos; nuestro proceso de selección de profesionales es riguroso y garantiza que cada proyecto esté en manos expertas.',
    },
    {
      pregunta: '¿Cómo se establecen las fechas de entrega?',
      respuesta:
        'Las fechas de entrega las estableces tú, y nosotros nos adaptamos a tu calendario. Si tienes fechas específicas para la entrega de partes concretas de tu proyecto, te aseguramos que recibirás todo en tiempo y forma, hasta llegar a la entrega final. Nuestra flexibilidad te permite coordinar cada etapa del proyecto según tus necesidades.',
    },
    {
        pregunta: '¿En cuánto tiempo tendría la primera entrega?',
        respuesta:
          'Si no tienes un plazo estimado específico, la primera entrega generalmente se realiza entre 7 y 10 días. Si solo tienes la fecha de entrega final, podemos ajustar las fechas para las diferentes entregas en acuerdo con el profesional a cargo de tu proyecto, asegurando que todo se desarrolle dentro de los plazos necesarios.',
      },
      {
        pregunta: '¿Qué sucede si el proyecto que me entregaron necesita correcciones?',
        respuesta:
          'Si el proyecto que recibes requiere correcciones, simplemente infórmanos lo antes posible. Estas correcciones no tendrán ningún costo adicional, siempre que se trate de ajustes dentro del alcance original y no de ampliaciones o modificaciones significativas en el proyecto.',
      },
      {
        pregunta: '¿Cómo se realizan los pagos subsecuentes a la contratación del servicio?',
        respuesta:
          'Después de realizar el primer pago, recibirás la primera entrega del proyecto. En ese momento, tu gestor te informará que tendrás un lapso de 48 horas para realizar el pago de la siguiente entrega. Este proceso se repetirá con cada entrega, lo que nos permite respetar las fechas pactadas y garantizar que el proyecto avance sin contratiempos.',
      },
      {
        pregunta: '¿Puedo modificar la extensión de mi proyecto después de realizar el primer pago?',
        respuesta:
          'Sí, puedes modificar la extensión de tu proyecto después del primer pago. Si necesitas que el proyecto sea más corto o más extenso, infórmanos lo antes posible. Ten en cuenta que, si se requiere una extensión mayor del proyecto, esto implicará un costo adicional.',
      },
      {
        pregunta: '¿Puedo modificar las fechas de entrega después de realizar el primer pago?',
        respuesta:
          'Puedes modificar las fechas de entrega siempre que llegues a un acuerdo con el profesional encargado de tu proyecto. Si deseas que la entrega se realice después de la fecha acordada inicialmente, simplemente coordina con el profesional y se ajustará sin problemas. Sin embargo, si necesitas adelantar la entrega, esto tendrá un costo extra, ya que se considerará como un proyecto express, y dependerá de la disponibilidad del profesional en ese momento.',
      },
      {
        pregunta: '¿Qué sucede si no realizo el pago subsecuente de alguna entrega de mi proyecto?',
        respuesta:
          'Si no realizas el pago subsecuente de una entrega, el proyecto se paralizará y las fechas de entrega pactadas inicialmente se retrasarán. Es importante cumplir con los pagos a tiempo para evitar demoras en el desarrollo y entrega de tu trabajo.',
      },
      {
        pregunta: '¿Puedo pedir los datos del profesional a cargo de mi proyecto?',
        respuesta:
          'No, debido a nuestra estricta política de privacidad y confidencialidad, no podemos compartir los datos del profesional a cargo de tu proyecto. Sin embargo, puedes tener la certeza de que tu trabajo está en manos expertas. Nuestro proceso de selección es riguroso y exigente, asegurando que los profesionales que asignamos cumplan con los más altos estándares de calidad en su área de estudio.',
      },
      {
        pregunta: '¿Cuánto tiempo tardan en realizar las correcciones de mi proyecto?',
        respuesta:
          'El tiempo necesario para realizar las correcciones depende de la cantidad y la complejidad de las mismas. Aunque no podemos dar un tiempo exacto, nuestro tiempo mínimo de respuesta es de 4 días hábiles. Si necesitas las correcciones para una fecha específica, es recomendable que lo verifiques con tu gestor, quien coordinará con los profesionales para asegurar la disponibilidad y cumplimiento de tus requerimientos.',
      },
     

  ];

  return (
    <div className="preguntas-frecuentes-container">
      <h1 className="titulo-principal">Preguntas previo a contratar el servicio</h1>
      <div className="preguntas-respuestas">
        <div className="imagen-container">
          {/* Aquí puedes poner tu imagen de fondo */}
          <img src="Myimage/Pregunta.png" alt="imagen de fondo" className="imagen-fondo" />
        </div>
        <div className="preguntas-desplegables">
          {preguntas.map((item, index) => (
            <div key={index} className="pregunta-container">
              <div className="pregunta" onClick={() => toggleQuestion(index)}>
                {item.pregunta}
              </div>
              <div className={`respuesta ${activeIndex === index ? 'activa' : ''}`}>
                {item.respuesta}
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Preguntas previo a contratar el servicio (PARTE 2 PREGUNTAS)*/}

      <h1 className="titulo-principalReverse">Preguntas sobre el proceso de entrega de mi proyecto</h1>
      <div className="preguntas-respuestasPrevia">
        <div className="imagen-container">
          {/* Aquí puedes poner tu imagen de fondo */}
          <img src="Myimage/Pregunta2.png" alt="imagen de fondo" className="imagen-fondoReverse" />
        </div>
        <div className="preguntas-desplegables">
          {procesoEntrega.map((item, index) => (
            <div key={index} className="pregunta-container">
              <div className="pregunta" onClick={() => toggleQuestionInvertida(index)}>
                {item.pregunta}
              </div>
              <div className={`respuesta ${activeIndexInvertidas  === index ? 'activa' : ''}`}>
                {item.respuesta}
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default PreguntasFrecuentes;
