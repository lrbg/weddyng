'use client'
import { useState, useEffect } from 'react';
import { ChevronDown, Church, PartyPopper, Users, Car, Music, Camera, Info, Building } from 'lucide-react';





export default function Page() {
 const [countdown, setCountdown] = useState({
   days: 0,
   hours: 0,
   minutes: 0,
   seconds: 0
 });
 const [formData, setFormData] = useState({
   nombre: '',
   invitados: '',
   restricciones: '',
   mensaje: '',
   phone: ""
 });


 


 useEffect(() => {
   const targetDate = new Date('2025-04-27T16:00:00');
   const updateCountdown = () => {
     const now = new Date();
     const difference = targetDate.getTime() - now.getTime();
     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
     const minutes = Math.floor((difference / 1000 / 60) % 60);
     const seconds = Math.floor((difference / 1000) % 60);
     setCountdown({ days, hours, minutes, seconds });
   };
   const timer = setInterval(updateCountdown, 1000);
   updateCountdown();
   return () => clearInterval(timer);
 }, []);

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
   const { id, value } = e.target;
   setFormData(prev => ({
     ...prev,
     [id]: value
   }));
 };

 



 const handleSubmit = (confirmed: boolean) => {
  console.log("Confirmación:", confirmed);
  // Aquí tu lógica para manejar la confirmación
};











 const scrollToDetails = () => {
   document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
 };

 return (
   <main className="min-h-screen">
     <div className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{ backgroundColor: "white" }}>
       <div className="relative z-10 bg-white/95 p-10 rounded-lg shadow-sm max-w-2xl mx-auto text-center" style={{backgroundImage: "url('/slide-10.jpg')",backgroundSize: 'cover',backgroundPosition: 'center'}}>
         <h1 className="text-[#1d3557] text-3xl md:text-4xl font-serif mb-4">
           <span className="block mb-2">Stefhanny Posadas Márquez</span>
           <span className="block text-2xl md:text-3xl">&</span>
           <span className="block mt-2">Luis Rogelio Batres Guarneros</span>
         </h1>
         <p className="text-[#457b9d] mb-6 text-xl font-serif italic text-shadow">"Las montañas fueron testigo de nuestro primer latido juntos, y hoy celebran nuestra eternidad."</p>
         
         <div className="space-y-3">
           <p className="text-gray-600 ">Domingo 27 de Abril, 2025</p>
           <p className="text-gray-600">14:00 hrs</p>
           <div className="grid grid-cols-4 gap-4 mb-8 bg-white/50 p-6 rounded-lg">
           <div className="text-center">
             <div className="text-3xl md:text-4xl font-light text-[#1d3557]">{countdown.days}</div>
             <div className="text-xs uppercase tracking-wider text-gray-500">Días</div>
           </div>
           <div className="text-center">
             <div className="text-3xl md:text-4xl font-light text-[#1d3557]">{countdown.hours}</div>
             <div className="text-xs uppercase tracking-wider text-gray-500">Horas</div>
           </div>
           <div className="text-center">
             <div className="text-3xl md:text-4xl font-light text-[#1d3557]">{countdown.minutes}</div>
             <div className="text-xs uppercase tracking-wider text-gray-500">Minutos</div>
           </div>
           <div className="text-center">
             <div className="text-3xl md:text-4xl font-light text-[#1d3557]">{countdown.seconds}</div>
             <div className="text-xs uppercase tracking-wider text-gray-500">Segundos</div>
           </div>
         </div>
           
           <p className="text-gray-500 text-sm mt-4">Lugar: Jardín de los Secretos del Ex Convento del Desierto de los Leones</p>
           <p className="text-gray-500 text-sm">Carretera Toluca - México s/n, Cuajimalpa de Morelos</p>
           <button onClick={() => window.open('https://maps.google.com/?q=Jardín+de+los+Secretos+del+ex+convento+del+Desierto+de+los+Leones+Carretera+Toluca+Mexico+Cuajimalpa+de+Morelos')} className="w-full px-8 py-4 bg-[#1d3557] text-white rounded-full hover:bg-[#457b9d] transition-colors text-lg font-medium">Ver Ubicación</button>
         </div>

       </div>
       <button onClick={scrollToDetails} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
         <ChevronDown className="w-8 h-8 text-[#457b9d]" />
       </button>
     </div>

     <section id="details" className="py-20 bg-white/95 flex justify-center" style={{backgroundImage: "url('/slide-10.jpg')",backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="relative flex flex-col items-center space-y-12">
          
          <div className="relative flex flex-col items-center w-full" >
            <div className="w-1 bg-[#1d3557] absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>
            <div className="timeline-icon">
            <Building className="w-8 h-8 mx-auto text-[#1d3557]" />
            </div>
            <div className="timeline-content">
              <h3 className="font-serif text-2xl text-[#1d3557]">Recepción</h3>
              <p className="text-gray-600">13:30 hrs</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center w-full">
            <div className="w-1 bg-[#1d3557] absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0"></div>
            <div className="timeline-icon">
              <Church className="w-8 h-8 text-[#1d3557]" />
            </div>
            <div className="timeline-content">
              <h3 className="font-serif text-2xl text-[#1d3557]">Ceremonia Religiosa</h3>
              <p className="text-gray-600">14:00 hrs</p>
              <p className="text-gray-600">"El evento inicia a tiempo, tu puntualidad es importante."</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center w-full">
            <div className="timeline-icon">
              <PartyPopper className="w-8 h-8 text-[#1d3557]" />
            </div>
            <div className="timeline-content">
              <h3 className="font-serif text-2xl text-[#1d3557]">Celebración</h3>
              <p className="text-gray-600">15:00 hrs</p>
              <p className="text-gray-600">Lugar: Jardín de los Secretos del Ex Convento del Desierto de los Leones.</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center w-full">
            <div className="timeline-icon">
              <Users className="w-8 h-8 text-[#1d3557]" />
            </div>
            <div className="timeline-content">
              <h3 className="font-serif text-2xl text-[#1d3557]">Código de Vestimenta</h3>
              <p className="text-gray-600">Etiqueta y si eres mujer recuerda, NO es cortes acudir de blanco.</p>
            </div>
          </div>

          <div className="relative flex flex-col items-center w-full">
            <div className="timeline-icon">
            <Music className="w-8 h-8 mx-auto text-[#1d3557]" />
            </div>

            <div className="timeline-content">
              <h3 className="font-serif text-2xl text-[#1d3557]"></h3>
              <p className="text-gray-600">Si tienes oportunidad, ensaya esta canción</p>
              <iframe src="https://open.spotify.com/embed/track/7pS7rgdPqFzdJfpgUG8hNc" width="220"height="80"allow="encrypted-media"className="rounded-lg shadow-lg"></iframe>
            </div>
          </div>
          <div className="flex justify-center mt-6"></div>
        </div>
      </div>
    </section>

     <section className="py-20 bg-white/95" style={{backgroundImage: "url('/slide-10.jpg')",backgroundSize: 'cover',backgroundPosition: 'center'}}>
       <div className="container mx-auto px-6 max-w-4xl" >
         <h2 className="text-3xl font-serif text-center text-[#1d3557] mb-12">Información Adicional</h2>
         <div className="space-y-8">
           <div className="bg-white/80 p-6 rounded-lg shadow-sm">
             <div className="flex items-center gap-4 mb-3">
               <Car className="w-6 h-6 text-[#1d3557]" />
               <h3 className="font-serif text-xl text-[#1d3557]">Estacionamiento</h3>
             </div>
             <p className="text-gray-600 ml-10">Se cuenta con valet parking con un costo de $150 pesos por vehículo. ** Pago en efectivo </p>
           </div>
           <div className="bg-white/80 p-6 rounded-lg shadow-sm">
             <div className="flex items-center gap-4 mb-3">
               <Camera className="w-6 h-6 text-[#1d3557]" />
               <h3 className="font-serif text-xl text-[#1d3557]">Comparte tus fotos</h3>
             </div>
             <p className="text-gray-600 ml-10">No olvides utilizar nuestro hashtag para compartir todos los momentos especiales:
               <span className="block mt-2 text-[#457b9d] text-lg font-medium">#StefhannyYLuis2025</span>
             </p>
           </div>
           <div className="bg-white/80 p-6 rounded-lg shadow-sm">
             <div className="flex items-center gap-4 mb-3">
               <Info className="w-6 h-6 text-[#1d3557]" />
               <h3 className="font-serif text-xl text-[#1d3557]">Recomendaciones</h3>
             </div>
             <ul className="ml-10 space-y-2 text-gray-600 text-justify">
               <li>• La ceremonia iniciará puntualmente a las 14:00 hrs, por favor se puntal.</li>
               <li>• A la entrada del EX CONVENTO DESIERTO DE LOS LEONES hay una caseta de cobro de acceso, tu ingreso ya esta cubierto por nuestro evento, solo indica que asistes a nuestra boda, seguido de nuestros nombres.</li>
               <li>• Se recomienda llevar calzado de tacón ancho por el tipo de suelo del lugar donde será el evento.</li>
               <li>• El EX CONVENTO DESIERTO DE LOS LEONES se encuentra en medio del bosque, en el parque nacional del mismo nombre, por lo que normalmente es un lugar frío, te recomendamos ir abrigado(a).</li>
               <li>• Es importante que sepas que en el lugar, no se cuenta con señal de celular ni Wifi.</li>
               <li>• Debido a la falta de señal de celular y WiFi en el lugar, sugerimos planificar tu regreso con anticipación y coordinar tu transporte antes de llegar al evento.</li>
               <li>• Deja que el fotógrafo y camarógrafo hagan su magia sin distracciones, por favor evita cruzarte en sus tomas.</li>
               <li>• El personal de recepción del evento te conducirá a tu mesa, por favor respeta tu lugar asignado.</li>
               <li>• No se permiten mascotas.</li>
               <li>• Tu presencia es nuestro mejor regalo. Por logística del evento no contamos con mesa de regalos. Si deseas darnos un presente, puedes hacerlo con una contribución voluntaria en efectivo ó vía transferencia al número de cuenta CLABE 072180006470430686 - BANORTE, a nombre de: Stefhanny Posadas Márquez. </li>
               <li>• Evita llevar invitados adicionales, nuestra boda es un evento íntimo con cupo limitado, por lo que solo podremos asignar asientos a quienes se encuentran en nuestra lista de invitados. Agradecemos tu comprensión y respeto.</li>
               <li>• El EX CONVENTO DESIERTO DE LOS LEONES se encuentra en medio del bosque, en el parque nacional del mismo nombre, por lo que te pedimos no dañar el ecosistema, cuidemos juntos el lugar.</li>
             </ul>
           </div>
         </div>
       </div>
     </section>
     <section className="py-20 bg-gray-50">
       <div className="container mx-auto px-6 max-w-2xl">
         <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
           <h2 className="text-3xl font-serif text-center text-[#1d3557] mb-2">Confirma tu Asistencia</h2>
           <p className="text-center text-gray-600 mb-8">Por favor, confírmanos tu asistencia antes del 27 de marzo de 2025, para agregarte a la lista de asistentes.</p>
           <div className="space-y-8">
             <div className="space-y-2">
               <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre completo</label>
               <input type="text" id="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Ingresa tu nombre completo" className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457b9d]/20"/>
             </div>
             <div className="space-y-2">
               <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
               <input type="text" id="telefono" value={formData.phone} onChange={handleInputChange} placeholder="Ingresa tu número de teléfono" className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457b9d]/20"/>
             </div>
             <div className="space-y-2">
               <label htmlFor="restricciones" className="block text-sm font-medium text-gray-700">¿Tienes alguna restricción alimentaria?</label>
               <textarea id="restricciones" value={formData.restricciones} onChange={handleInputChange} placeholder="Ej: Vegetariano, vegano, alergias..." className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457b9d]/20 h-24"></textarea>
             </div>
             <div className="space-y-2">
               <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje para los novios (opcional)</label>
               <textarea id="mensaje" value={formData.mensaje} onChange={handleInputChange} placeholder="Escribe un mensaje especial..." className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457b9d]/20 h-24"></textarea>
             </div>
             <div className="space-y-4">
               <button onClick={() => handleSubmit(true)} className="w-full px-8 py-4 bg-[#1d3557] text-white rounded-full hover:bg-[#457b9d] transition-colors text-lg font-medium">Confirmar Asistencia</button>
               <button onClick={() => handleSubmit(false)} className="w-full px-8 py-4 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors text-lg font-medium">Lamentablemente, no podré asistir</button>
             </div>
             <p className="text-center text-sm text-gray-500 mt-6">Si tienes alguna pregunta adicional, no dudes en contactarnos </p>
           </div>
         </div>
       </div>
     </section>
   </main>
 );
}