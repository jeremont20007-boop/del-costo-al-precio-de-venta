/* ============ CONFIGURACIÓN ÚNICA DEL SITIO ============
   Lo único que hay que tocar para cambiar precio, enlaces, contacto, píxeles o testimonios.
   Después de editar: commit + push, y en un minuto está en línea. */
window.CONFIG = {
  // Oferta
  precio: "10",                 // USD
  precioTachado: "24",          // USD
  precioPesos: "17.489",              // precio final en pesos que muestra el checkout (ej. "14.900"); vacío = texto genérico
  diasGarantia: "7",
  // Checkouts
  hotmartUrl: "https://pay.hotmart.com/P106495888C",
  shopifyUrl: "https://xr5bbp-zn.myshopify.com/products/de-la-inversion-a-la-ganancia-ebook-digital",
  // Captación y contacto
  leadWhatsApp: "5492995285513",   // WhatsApp del estudio (el publicado en myaestudio.com); vacío = oculta los botones
  leadMensaje: "Hola, vengo de la calculadora de precios. Quiero el cartel de la caja gratis.",
  contactoEmail: "",               // mail público para consultas y revocaciones; vacío = solo WhatsApp y web
  communityWhatsAppUrl: "",        // enlace de invitación a la comunidad; vacío = no muestra botón
  // Medición (vacío = no carga nada)
  metaPixelId: "",
  tiktokPixelId: "",
  // Testimonios: solo reales
  showTestimonials: false,
  testimonials: []                 // [{nombre:"", rubro:"", ciudad:"", frase:""}]
};

/* Píxeles: se cargan solo si hay ID. track() es seguro de llamar siempre. */
(function(){
  var C = window.CONFIG;
  window.track = function(ev, data){
    try {
      var base = {content_name: 'Del Costo al Precio de Venta', value: Number(C.precio), currency: 'USD'};
      if (window.fbq) fbq('track', ev, Object.assign(base, data || {}));
      if (window.ttq) ttq.track(ev === 'Lead' ? 'SubmitForm' : ev, base);
    } catch (e) {}
  };
  if (C.metaPixelId) { !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', C.metaPixelId); fbq('track','PageView'); }
  if (C.tiktokPixelId) { !function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.load=function(e){var n="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=n;var o=d.createElement("script");o.type="text/javascript";o.async=!0;o.src=n+"?sdkid="+e+"&lib="+t;var a=d.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};ttq.load(C.tiktokPixelId);ttq.page();}(window,document,'ttq'); }
})();
