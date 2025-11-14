
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-6 w-6 text-blue-hh-lighter"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const WhatsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" className="mr-3 h-6 w-6 text-blue-hh-lighter"><path fill="currentColor" d="M8 0a8 8 0 1 1-4.075 14.886L.658 15.974a.5.5 0 0 1-.632-.632l1.089-3.266A8 8 0 0 1 8 0m0 1a7 7 0 0 0-5.915 10.745a.5.5 0 0 1 .052.426l-.846 2.539l2.54-.846a.5.5 0 0 1 .425.052A7 7 0 1 0 8 1M5.214 4.004c.131 0 .262 0 .376.005c.12.008.282-.05.443.363c.164.425.558 1.472.607 1.577c.05.105.082.23.018.371c-.066.142-.1.231-.198.353c-.098.125-.206.277-.296.371c-.098.107-.201.22-.085.433c.113.211.51.908 1.094 1.469c.753.724 1.386.949 1.584 1.054c.196.106.312.086.425-.053c.116-.14.491-.619.623-.832c.131-.211.263-.178.443-.105c.18.07 1.149.582 1.345.687c.198.108.33.162.378.25c.05.09.05.514-.113 1.008c-.165.496-.95.949-1.329 1.01c-.34.053-.77.075-1.241-.086a11 11 0 0 1-1.121-.447c-1.975-.92-3.265-3.06-3.363-3.2C4.705 8.092 4 7.082 4 6.038c0-1.042.508-1.556.688-1.767a.7.7 0 0 1 .526-.266z"/></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-6 w-6 text-blue-hh-lighter"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-6 w-6 text-blue-hh-lighter"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const WazeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-3 h-6 w-6 text-blue-hh-lighter"><g fill="none" stroke="currentColor" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 9v.01m-7-.01v.01"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 13s1 2 3.5 2s3.5-2 3.5-2"/><path strokeWidth="1.5" d="M11 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><path strokeLinejoin="round" strokeWidth="1.5" d="M11 19.945c.684.042 1.357.055 2 .055a9 9 0 1 0-9-9c0 1.039 0 3-2 4c1.058 2.38 2.974 3.64 5.126 4.3"/><path strokeWidth="1.5" d="M17 22a2 2 0 0 0 1.163-3.627c-.935.656-2 1.139-3.15 1.401A2 2 0 0 0 17 22Z"/></g></svg>
);

const whatsppNumber = "50689166060";
  const messageTemplate = `Buenas H&H Auto Sales, me gustaría conversar con ustedes.`;
  const encodedMessage = encodeURIComponent(messageTemplate);
  const whatsappLink = `https://wa.me/${whatsppNumber}?text=${encodedMessage}`; 

export const Contacto = () => (
    <section id="contacto" className="py-20 bg-sky-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-950">Contáctenos</h2>
        <p className="text-slate-800 mt-2">Estamos listos para atenderle. ¡Hablemos de su próximo bus!</p>
      </div>
      <div className="max-w-4xl mx-auto bg-blue-hh p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-6">
                <a href="tel:+50622223333" className="flex items-center text-slate-200 hover:text-blue-hh-lighter transition-colors">
                    <PhoneIcon />
                    <span>(+506) 2222-3333</span>
                </a>
                <a href={whatsappLink} className="flex items-center text-slate-200 hover:text-blue-hh-lighter transition-colors">
                    <WhatsIcon />
                    <span>(+506) 8916-6060</span>
                </a>
                <a href="mailto:ventasbuseshh@gmail.com" className="flex items-center text-slate-200 hover:text-blue-hh-lighter transition-colors">
                    <MailIcon />
                    <span>ventasbuseshh@gmail.com</span>
                </a>
                <a href="https://maps.app.goo.gl/XVmRq9GmyrKL9w4x9" target="_blank" className="flex items-center text-slate-200 hover:text-blue-hh-lighter transition-colors">
                    <MapPinIcon />
                    <span>San José, San Rafael Abajo, Costa Rica</span>
                </a>
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4">Nuestras redes sociales</h3>
                <div className="flex space-x-4">
                    <a href="https://www.instagram.com/hhbuses.cr/" target="_blank" className="text-slate-400 hover:text-blue-hh-lighter transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="https://www.facebook.com/people/HH-Auto-Sales/61578041074652" target="_blank" className="text-slate-400 hover:text-blue-hh-lighter transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="https://ul.waze.com/ul?place=ChIJC9XfDZjjoI8RVvKANsIgTLs&ll=9.89606300%2C-84.08070110&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" className="text-slate-400 hover:text-blue-hh-lighter transition-colors">
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.218 0C9.915 0 6.835 1.49 4.723 4.148c-1.515 1.913-2.31 4.272-2.31 6.706v1.739c0 .894-.62 1.738-1.862 1.813c-.298.025-.547.224-.547.522c-.05.82.82 2.31 2.012 3.502c.82.844 1.788 1.515 2.832 2.036a3 3 0 0 0 2.955 3.528a2.966 2.966 0 0 0 2.931-2.385h2.509c.323 1.689 2.086 2.856 3.974 2.21c1.64-.546 2.36-2.409 1.763-3.924a13 13 0 0 0 1.838-1.465a10.73 10.73 0 0 0 3.18-7.65c0-2.882-1.118-5.589-3.155-7.625A10.9 10.9 0 0 0 13.218 0m0 1.217c2.558 0 4.967.994 6.78 2.807a9.53 9.53 0 0 1 2.807 6.78A9.53 9.53 0 0 1 20 17.585a9.65 9.65 0 0 1-6.78 2.807h-2.46a3.01 3.01 0 0 0-2.93-2.41a3.03 3.03 0 0 0-2.534 1.367v.024a9 9 0 0 1-2.41-1.788c-.844-.844-1.316-1.614-1.515-2.11a2.86 2.86 0 0 0 1.441-.846a2.96 2.96 0 0 0 .795-2.036v-1.789c0-2.11.696-4.197 2.012-5.861c1.863-2.385 4.62-3.726 7.6-3.726zm-2.41 5.986a1.19 1.19 0 0 0-1.191 1.192a1.19 1.19 0 0 0 1.192 1.193A1.19 1.19 0 0 0 12 8.395a1.19 1.19 0 0 0-1.192-1.192m7.204 0a1.19 1.19 0 0 0-1.192 1.192a1.19 1.19 0 0 0 1.192 1.193a1.19 1.19 0 0 0 1.192-1.193a1.19 1.19 0 0 0-1.192-1.192m-7.377 4.769a.596.596 0 0 0-.546.845a4.81 4.81 0 0 0 4.346 2.757a4.77 4.77 0 0 0 4.347-2.757a.596.596 0 0 0-.547-.845h-.025a.56.56 0 0 0-.521.348a3.59 3.59 0 0 1-3.254 2.061a3.59 3.59 0 0 1-3.254-2.061a.64.64 0 0 0-.546-.348"/></svg>
                    </a>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);



