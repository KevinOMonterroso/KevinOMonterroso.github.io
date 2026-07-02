function About() {
  return (
    <section id="about">
      <div className="py-8 mx-auto max-w-4xl">
          <b className="mb-1 underline decoration-wavy decoration-amber-300 italic text-xl font-semibold text-body">
            Quien soy
          </b>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Me llamo Kevin Monterroso, soy estudiante universitario de Ingeniería en Ciencias de la Computación 
            en la Universidad UMG, originario de Guatemala.
          </p>
          <br/>
          <b className="mb-1 underline decoration-wavy decoration-amber-300 italic text-xl font-semibold text-body">
            Mini blog
          </b>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            A pesar de no tener mucha experiencia en el desarrollo web, busco la manera de 
            aprender algo nuevo cada día y mejorar para adaptarme a los tiempos modernos, donde la competencia 
            en trabajos de desarrollo web para juniors ha elevado el estándar.
          </p>
          <br/>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Trabajar en este portafolio me ha ayudado mucho a entender cómo usar las diferentes tecnologías, 
            pero no solo a saber usarlas, sino a entender que para aprender debo practicar y no solo sentarme a 
            ver tutoriales y videos en YouTube (que por supuesto me han ayudado). Por eso mi perspectiva
            sobre cómo trabajar en entornos reales ha cambiado: entiendo que no todo puede ser perfecto, pero aún 
            así hay que intentarlo. Si aún me encontrara sentado viendo tutoriales para <b>"dominar"</b> cada tecnología,
            probablemente no estaría aquí con este portafolio, pensando si debería empezar a trabajar en él o 
            aprender un poco más.
          </p>
          <br/>
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Gran parte de mi trabajo al realizar este portafolio ha sido inspirado en otros en internet, y uno al 
            que recurrí varias veces fue al portafolio de <a href="https://mxb.dev/" className="font-bold hover:underline decoration-wavy decoration-amber-300">Max Böck</a>. 
            Aún me falta mucho recorrido para llegar a ser un desarrollador front-end como él, pero eso no me desanima; 
            por el contrario, me llena de emoción llegar a poder realizar trabajos como los que él hace.
          </p>
        
      </div>
    </section>
  );
}

export default About;
