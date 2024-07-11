import Foto1 from '../assets/equipo1.jpg'
import Foto2 from '../assets/equipo2.jpg'
import Foto3 from '../assets/equipo3.jpg'

export const Equipo: React.FC = () => {
  return (
    <div className="w-full md:py-24 px-4 py-40">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="md:text-3xl sm:text-2xl text-xl font-bold py-2">Sumate a la familia BAGUÉS</h2>
        <p className="mt-4 text-lg text-gray-600">Haciendo realidad tus sueños. Sé tu propio jefe, manejá tus horarios, y ganá libertad económica con nuestros productos de alta demanda y formación constante.</p>
        <p className="mt-4 text-lg text-gray-600">No hace falta experiencia previa, solo necesitas ser mayor de 18 años y tener ganas de trabajar con un gran equipo. Ofrecemos ganancias del 30% al 35% con mínima inversión.</p>
        <a href="https://mireb.bagues.com.ar/external/shared?join=101646" target="_blank" className="bg-[#B29A82] text-[#68270C] font-bold px-4 py-2 rounded mt-4 inline-block">Unirse al equipo</a>
      </div>

      <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-16 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
        <div className="overflow-hidden bg-white rounded-md shadow">
          <div className="px-8 py-12">
            <div className="relative w-24 h-24 mx-auto">
              <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src={Foto3} alt="Carla Fernández" />
              <div className="absolute top-0 right-0 flex items-center justify-center bg-[#68270C] rounded-full w-7 h-7">
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <blockquote className="mt-7">
              <p className="text-lg text-black">"Con Bagués vivo bien y puedo cumplir mis sueños y ayudar a otros. No hay nada más hermoso que ver a la gente empoderarse y vivir felices con lo que hacen. Estoy muy agradecida por eso."</p>
            </blockquote>
            <p className="text-base font-semibold text-black mt-9">Victoria Vargas</p>
            <p className="mt-1 text-base text-gray-600">Emprendedora en Córdoba</p>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-md shadow">
          <div className="px-8 py-12">
            <div className="relative w-24 h-24 mx-auto">
              <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src={Foto2} alt="Martín López" />
              <div className="absolute top-0 right-0 flex items-center justify-center bg-[#68270C] rounded-full w-7 h-7">
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <blockquote className="mt-7">
              <p className="text-lg text-black">"En el momento justo, conocí Bagués: sus productos, calidad y precio fueron determinantes para elegirlos como opción laboral y de crecimiento. Además, contar con nuestra directora, que nos guía y alienta constantemente, ha sido un verdadero privilegio. ¡Gracias, Bagués!"
              </p>
            </blockquote>
            <p className="text-base font-semibold text-black mt-9">Karina Carballo</p>
            <p className="mt-1 text-base text-gray-600">Emprendedora en Córdoba</p>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-md shadow">
          <div className="px-8 py-12">
            <div className="relative w-24 h-24 mx-auto">
              <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src={Foto1} alt="Lucía Gómez" />
              <div className="absolute top-0 right-0 flex items-center justify-center bg-[#68270C] rounded-full w-7 h-7">
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <blockquote className="mt-7">
              <p className="text-lg text-black">“Hace más de 10 años que vendo fragancias de Bagués y 5 años que estoy con el equipo Amanecer. Hemos crecido muchísimo. Amanecer es la manera en que Dios nos dice que empecemos de nuevo, y así, todos los días emprendemos en esta hermosa familia que es Bagués.”</p>
            </blockquote>
            <p className="text-base font-semibold text-black mt-9">Carla Pero</p>
            <p className="mt-1 text-base text-gray-600">Emprendedora en Córdoba</p>
          </div>
        </div>
      </div>
    </div>
  );
};
